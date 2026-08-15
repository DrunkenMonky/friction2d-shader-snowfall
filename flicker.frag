#version 330 core

layout(location = 0) out vec4 fragColor;
layout(origin_upper_left) in vec4 gl_FragCoord;

// Friction-Inputs
uniform sampler2D tex;
in vec2 texCoord;

// UI-Properties
uniform float u_time;          // Zeit-Offset (keyframen für Animation)
uniform float u_speed;         // Flackergeschwindigkeit
uniform float u_amount;        // Helligkeitsschwankung 0..1
uniform float u_random;        // Zufälliger Anteil 0..1
uniform float u_min_brightness; // Mindesthelligkeit (0..1)

// Pseudo-Zufall
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

// Sinus-basiertes langsame Flackern
float slowFlicker(float t) {
    float f1 = sin(t * 1.7) * 0.5 + 0.5;
    float f2 = sin(t * 3.3 + 1.0) * 0.5 + 0.5;
    float f3 = sin(t * 7.1 + 2.0) * 0.5 + 0.5;
    return f1 * 0.5 + f2 * 0.3 + f3 * 0.2;
}

void main() {
    vec4 original = texture(tex, texCoord);

    float t = u_time * u_speed;

    // Langsames, organisch wirkendes Flackern
    float flicker = slowFlicker(t);

    // Zufälliges, schnelleres Rauschen-Flackern
    float noise = hash(vec2(floor(t * 20.0), floor(texCoord.y * 100.0)));
    flicker = mix(flicker, noise, u_random);

    // Skalierung: 1.0 = keine Änderung, 0.0 = voll abdunkeln
    float dim = mix(u_min_brightness, 1.0, 1.0 - flicker * u_amount);

    // Auf Helligkeit anwenden (im HSV-Raum wäre sauberer, aber RGB-Multiplikation reicht)
    vec3 outRGB = original.rgb * dim;

    fragColor = vec4(outRGB, original.a);
}
