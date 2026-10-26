"use client";

import { useEffect, useState, type ComponentType } from "react";
import type { LiquidMetalProps } from "@paper-design/shaders-react";

function supportsWebGL2() {
  const gl = document.createElement("canvas").getContext("webgl2");
  gl?.getExtension("WEBGL_lose_context")?.loseContext();
  return Boolean(gl);
}

// The masked mark is the server-rendered fallback. The shader loads after the
// first paint and the shader mount pauses itself while the hero is off-screen.
export function HeroBrandMark() {
  const [Shader, setShader] =
    useState<ComponentType<LiquidMetalProps> | null>(null);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (!supportsWebGL2()) return;
    let disposed = false;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setStill(motion.matches);
    syncMotion();
    motion.addEventListener("change", syncMotion);
    import("@paper-design/shaders-react")
      .then(({ LiquidMetal }) => {
        if (!disposed) setShader(() => LiquidMetal);
      })
      .catch(() => {});
    return () => {
      disposed = true;
      motion.removeEventListener("change", syncMotion);
    };
  }, []);

  return (
    <div className="hero-brand" data-shader={Shader ? "ready" : undefined}>
      <div className="hero-brand-mark" />
      {Shader && (
        <Shader
          className="hero-brand-shader"
          image="/brand/ahmed-icon.svg"
          colorBack="rgba(0, 0, 0, 0)"
          colorTint="#2760f5"
          repetition={1.5}
          softness={0.45}
          shiftRed={0.12}
          shiftBlue={0.35}
          distortion={0.05}
          contour={0.7}
          angle={70}
          scale={0.82}
          speed={still ? 0 : 0.6}
          frame={still ? 4200 : 0}
        />
      )}
    </div>
  );
}
