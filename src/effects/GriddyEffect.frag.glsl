void mainImage(const in vec4 inputColor, const in vec2 uv,
               out vec4 outputColor) {

  vec2 st = uv;

  st *= 3.0;
  st = fract(st);

  vec3 color = vec3(st, 0.0);
  float alpha = 1.0;

  outputColor = vec4(color, alpha);
}