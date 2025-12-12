"use client";

import React, { useRef } from "react";

type Props = { children: React.ReactNode };

export function Magnetic({ children }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);

  function onMove(e: React.MouseEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.06;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.06;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  }

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block will-change-transform"
    >
      {children}
    </span>
  );
}
