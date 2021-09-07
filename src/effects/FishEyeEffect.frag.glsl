#define SPEED 1.2
#define INTENSITY 1.0

void mainUv(inout vec2 uv) { uv = (uv - 0.5) * 2.0; }

void mainImage(const in vec4 inputColor, const in vec2 uv,
               out vec4 outputColor) {
  float t = time * SPEED;

  vec2 fishuv;
  float fishyness = (0.1 + 0.1 * cos(t)) * INTENSITY;
  fishuv.x = (1.0 - uv.y * uv.y) * fishyness * uv.x;
  fishuv.y = (1.0 - uv.x * uv.x) * fishyness * uv.y;

  // Fisheye Chromatic Aberration !
  float cr = texture(inputBuffer, uv - fishuv * 0.9).x;
  vec2 cgb = texture(inputBuffer, uv - fishuv).yz;
  vec3 c = vec3(cr, cgb);

  // Vignetting
  float uvMagSqrd = dot(uv, uv) * 4.0;
  float vignette = 1.0 - uvMagSqrd * fishyness;
  c *= vignette;

  outputColor = vec4(c, 1.0);
}

// void mainUv(inout vec2 uv) {
//   vec2 center = vec2(0.5, 0.5);
//   float radius = distance(center, uv);
//   uv += radius;
// }