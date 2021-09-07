varying vec3 vUV;    // interpolated vertex output data
varying vec2 vUVDot; // interpolated vertex output data

void mainImage(const in vec4 inputColor, const in vec2 _uv,
               out vec4 outputColor) {

  vec3 uv = dot(vUVDot, vUVDot) * vec3(-0.5, -0.5, -1.0) + vUV;
  gl_FragColor = texture2DProj(inputBuffer, uv);
}
