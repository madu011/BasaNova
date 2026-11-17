# BasaNova — Low-end device performance rules

The app must remain responsive on entry-level Android phones, not only modern devices.

## Visual assets and 3D icon direction
- Use pre-rendered static 3D-style icon artwork (PNG/WebP with transparent backgrounds); do not render real-time 3D scenes.
- Prefer WebP for photographic/complex artwork where the build pipeline supports it; use small PNGs for crisp transparent icon edges when needed.
- Export icons close to their actual display dimensions. Do not ship oversized 2K/4K images for tiny navigation icons.
- Reuse one asset per icon across screens and themes where possible. Use tint/background containers for theme adaptation rather than duplicate large image sets.
- Avoid GIFs, video backgrounds, blur-heavy layers, large shadows, particle effects, and continuous decorative animations.
- Any animation must be short, optional, and must not block taps or scrolling.

## React Native implementation
- Prefer FlatList or SectionList for long lesson, vocabulary, alphabet, history, and quiz collections; use stable keys and tune virtualization after profiling.
- Keep ScrollView for short fixed content. Android clipping can help long static screens; verify clipped content and touch targets on real devices.
- Keep render functions and derived data stable; avoid rebuilding large arrays/objects inside frequently rendered components.
- Keep state local to the smallest component that needs it. Avoid re-rendering the entire app for a single lesson-card interaction.
- Do not preload all audio. Speak only on demand and stop previous speech before starting new speech.
- Load noncritical artwork lazily and show a lightweight placeholder.
- Avoid adding heavy UI, animation, icon, or 3D libraries for decorative effects.

## Verification
- Profile release builds on at least one low-end Android device and one mid-range device.
- Check cold start, tab changes, long lesson scrolling, speech playback, memory use, and touch response.
- Test both light and dark themes, including image contrast.
- Measure before and after changes. Do not claim a performance improvement without device/profile evidence.
- Keep a fallback mode with static visuals and reduced motion if later features introduce costly effects.

## Current state
- App.js enables Android scroll clipping and hides decorative scroll indicators on the two main ScrollViews.
- This is a small source-level optimization only. No device profiling, build, or frame-rate measurement has been run yet.
