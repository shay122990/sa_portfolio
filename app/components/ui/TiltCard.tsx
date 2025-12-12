"use client";

import React, { useRef } from "react";

type Props = { children: React.ReactNode };

export function TiltCard({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * 10;
    const ry = (px - 0.5) * -10;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="[transform-style:preserve-3d]"
      style={{
        transform:
          "perspective(900px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
      }}
    >
      {children}
    </div>
  );
}
