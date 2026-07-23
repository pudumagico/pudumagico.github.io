"use client";

import { useEffect, useRef } from "react";

const FRAG = `precision mediump float;
uniform vec2 u_res; uniform float u_time; uniform float u_dark;
void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - u_res) / u_res.y;
  vec3 rd = normalize(vec3(uv.x, uv.y - 0.35, -1.0));
  vec3 fog = mix(vec3(1.0), vec3(0.0), u_dark);
  vec3 col = fog;
  if (rd.y < -0.01) {
    float d = -1.0 / rd.y;
    vec2 p = vec2(rd.x, rd.z) * d;
    p.y -= u_time * 0.4;
    float c = mod(floor(p.x) + floor(p.y), 2.0);
    vec3 a = mix(vec3(1.0), vec3(0.2), u_dark);
    vec3 b = mix(vec3(0.92), vec3(0.1), u_dark);
    col = mix(mix(a, b, c), fog, min(d / 20.0, 1.0));
  }
  gl_FragColor = vec4(col, 1.0);
}`;

export default function Checkerboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}"));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uDark = gl.getUniformLocation(program, "u_dark");
    let dark = document.documentElement.classList.contains("dark-mode") ? 1 : 0;
    let raf = 0;

    const resize = () => {
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const draw = (ms: number) => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, ms / 1000);
      gl.uniform1f(uDark, dark);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(draw);
    };
    const onTheme = () => {
      dark = document.documentElement.classList.contains("dark-mode") ? 1 : 0;
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("themeChanged", onTheme);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("themeChanged", onTheme);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full" aria-hidden />;
}
