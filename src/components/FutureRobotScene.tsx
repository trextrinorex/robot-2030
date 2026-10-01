"use client";

import { useEffect, useRef, useState } from "react";

type RobotProps = { variant: "hero" | "side"; offset: number; delay: number };

function Robot({ variant, offset, delay }: RobotProps) {
  return (
    <div
      className={`future-robot future-robot--${variant}`}
      style={{ ["--robot-offset" as string]: `${offset}px`, animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <div className="robot-shadow" />
      <div className="robot-head"><span className="robot-eye" /><span className="robot-eye robot-eye-2" /></div>
      <div className="robot-neck" />
      <div className="robot-torso"><span className="robot-core" /><span className="robot-panel" /></div>
      <div className="robot-arm robot-arm-l"><span className="robot-joint" /><i /></div>
      <div className="robot-arm robot-arm-r"><span className="robot-joint" /><i /></div>
      <div className="robot-leg robot-leg-l"><span className="robot-joint" /><i /></div>
      <div className="robot-leg robot-leg-r"><span className="robot-joint" /><i /></div>
    </div>
  );
}

export function FutureRobotScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setPointer({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="future-scene"
      style={{
        ["--mouse-x" as string]: pointer.x,
        ["--mouse-y" as string]: pointer.y,
      }}
      aria-label="Interactive futuristic robot visualization"
    >
      <div className="future-scene-glow" />
      <div className="future-grid-floor" />
      <div className="future-particles" />
      <div className="scene-label scene-label-top">R30 // HUMANOID SYSTEM</div>
      <div className="scene-label scene-label-bottom">CURSOR TRACKING // ONLINE</div>

      <div className="robot-cluster">
        <Robot variant="side" offset={-34} delay={0.2} />
        <Robot variant="hero" offset={0} delay={0} />
        <Robot variant="side" offset={34} delay={0.4} />
      </div>

      <div className="scene-reticle" />
      <div className="scene-data">
        <span>MODEL // R-30</span>
        <span>STATUS // ACTIVE</span>
        <span>HORIZON // 2030</span>
      </div>
    </div>
  );
}
