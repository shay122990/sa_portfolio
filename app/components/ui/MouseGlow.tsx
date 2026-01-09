"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const raf = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      if (raf.current) return;
      raf.current = window.requestAnimationFrame(() => {
        const { x, y } = target.current;
        document.documentElement.style.setProperty("--mx", `${x}px`);
        document.documentElement.style.setProperty("--my", `${y}px`);
        raf.current = null;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return null;
}
