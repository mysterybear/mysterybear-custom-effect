// uniform float BarrelPower;
#define BARREL_POWER 2.0

vec2 distort(vec2 p) {
  float theta = atan(p.y, p.x);
  float radius = length(p);
  radius = pow(radius, BARREL_POWER);
  p.x = radius * cos(theta);
  p.y = radius * sin(theta);
  return 0.5 * (p + 1.0);
}
void mainImage(const in vec4 inputColor, const in vec2 uv,
               out vec4 outputColor) {
  vec2 center = vec2(0.5);
  float theta = atan(uv.y, uv.x);
  float radius = distance(center, uv);
  outputColor = vec4(theta, 0.0, radius, 1.0);
}

// vec2 vUv = uv;
// vUv += 0.5;
// vUv = distort(vUv);
// vUv -= 0.5;
// outputColor = texture2D(inputBuffer, vUv);
// float fill = 1.0 - step(0.5, distance(center, uv));