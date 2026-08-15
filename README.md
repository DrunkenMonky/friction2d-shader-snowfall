# Friction Shader: Flicker

Deutsche Beschreibung – siehe unten für die englische Version.

## Über diesen Effekt

Ein einfacher Flacker-Shader für [Friction](https://friction.graphics). Er simuliert das unregelmäßige Helligkeitsflackern alter Projektoren, Glühlampen, Filmaufnahmen oder defekter Bildschirme.

### Dateien

- `flicker.frag` – Fragment-Shader (GLSL #version 330 core)
- `flicker.gre` – Shader-Effekt-Definition für Friction

### Installation

1. Beide Dateien in das Friction-Shader-Verzeichnis kopieren:
   - Linux: `~/.config/friction/ShaderEffects/`
   - Windows: `%APPDATA%\\friction\\ShaderEffects\\`
   - macOS: `~/Library/Application Support/friction/ShaderEffects/`
2. Friction neu starten.
3. Der Effekt erscheint unter **Generate → Flicker**.

### Parameter

| Parameter (DE) | Bedeutung |
|---|---|
| Time | Zeit-Offset. Keyframe diesen Wert (z. B. 0 → 100), damit das Flackern animiert wird. |
| Speed | Geschwindigkeit des Flackerns. Höhere Werte = schnelleres Zittern. |
| Flicker Amount | Stärke der Helligkeitsschwankung. 0 = keine Änderung, 1 = sehr starkes Flackern. |
| Random Noise | Anteil zufälligen Rauschens am Flackern. 0 = nur sanfte Wellen, 1 = hartes Rauschen. |
| Min Brightness | Unterste Helligkeit, auf die abgedunkelt wird. 0.5 bedeutet: zwischen 50 % und 100 %. |

### Tipps

- `Time` muss keygeframed werden, sonst bleibt der Effekt statisch.
- Für altes Filmflackern: Speed 3–5, Amount 0.2–0.4, Random Noise 0.3–0.5, Min Brightness 0.7.
- Für defekte Leuchtstoffröhre: Speed 10–20, Amount 0.6–1.0, Random Noise 0.8, Min Brightness 0.2.
- Für Kerzenlicht: Speed 1–2, Amount 0.1–0.2, Random Noise 0.1, Min Brightness 0.85.

---

# Friction Shader: Flicker

English version.

## About this effect

A simple flicker shader for [Friction](https://friction.graphics). It simulates irregular brightness flickering of old projectors, light bulbs, film footage or faulty screens.

### Files

- `flicker.frag` – fragment shader (GLSL #version 330 core)
- `flicker.gre` – shader effect definition for Friction

### Installation

1. Copy both files into the Friction shader directory:
   - Linux: `~/.config/friction/ShaderEffects/`
   - Windows: `%APPDATA%\\friction\\ShaderEffects/`
   - macOS: `~/Library/Application Support/friction/ShaderEffects/`
2. Restart Friction.
3. The effect appears under **Generate → Flicker**.

### Parameters

| Parameter (EN) | Meaning |
|---|---|
| Time | Time offset. Keyframe this value (e.g. 0 → 100) to animate the flicker. |
| Speed | Flicker speed. Higher values = faster jitter. |
| Flicker Amount | Strength of the brightness variation. 0 = no change, 1 = very strong flicker. |
| Random Noise | Amount of random noise in the flicker. 0 = only smooth waves, 1 = harsh noise. |
| Min Brightness | Lowest brightness the effect dims down to. 0.5 means: between 50 % and 100 %. |

### Tips

- `Time` must be keyframed, otherwise the effect stays static.
- For old film flicker: Speed 3–5, Amount 0.2–0.4, Random Noise 0.3–0.5, Min Brightness 0.7.
- For faulty fluorescent tube: Speed 10–20, Amount 0.6–1.0, Random Noise 0.8, Min Brightness 0.2.
- For candlelight: Speed 1–2, Amount 0.1–0.2, Random Noise 0.1, Min Brightness 0.85.
