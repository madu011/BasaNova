const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store"
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders });
    if (url.pathname !== "/speak" || request.method !== "POST") {
      return Response.json({ error: "Not found" }, { status: 404, headers: corsHeaders });
    }
    if (!env.GOOGLE_TTS_API_KEY) {
      return Response.json({ error: "Voice service is not configured" }, { status: 503, headers: corsHeaders });
    }

    const clientIp = request.headers.get("CF-Connecting-IP") || "unknown";
    if (env.VOICE_LIMITER) {
      const limit = await env.VOICE_LIMITER.limit({ key: clientIp });
      if (!limit.success) {
        return Response.json({ error: "Voice request limit reached. Please try again later." }, { status: 429, headers: corsHeaders });
      }
    }

    let body;
    try { body = await request.json(); }
    catch { return Response.json({ error: "Invalid JSON body" }, { status: 400, headers: corsHeaders }); }

    const text = typeof body.text === "string" ? body.text.trim() : "";
    const language = body.language;
    if (!text || text.length > 5000 || !["sr-RS", "en-US"].includes(language)) {
      return Response.json({ error: "Provide text (1–5000 characters) and language sr-RS or en-US" }, { status: 400, headers: corsHeaders });
    }

    const googleResponse = await fetch(
      "https://texttospeech.googleapis.com/v1/text:synthesize?key=" + encodeURIComponent(env.GOOGLE_TTS_API_KEY),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: language, ssmlGender: "NEUTRAL" },
          audioConfig: { audioEncoding: "MP3", speakingRate: 0.82 }
        })
      }
    );
    if (!googleResponse.ok) {
      const details = await googleResponse.text();
      return Response.json({ error: "Google Text-to-Speech request failed", details: details.slice(0, 500) }, { status: 502, headers: corsHeaders });
    }
    const result = await googleResponse.json();
    if (!result.audioContent) {
      return Response.json({ error: "Google returned no audio" }, { status: 502, headers: corsHeaders });
    }
    return Response.json({ audioContent: result.audioContent, language }, { headers: corsHeaders });
  }
};
