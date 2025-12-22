"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Background } from "../ui/Background";
import { Magnetic } from "../ui/Magnetic";

export function Hero() {
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const rafRef = useRef<number>(0);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    cancelAnimationFrame(rafRef.current);
    const { clientX, clientY } = e;
    rafRef.current = requestAnimationFrame(() => {
      setMx(clientX);
      setMy(clientY);
    });
  }

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div onMouseMove={onMouseMove} className="relative overflow-hidden">
      <Background mx={mx} my={my} />

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/70 backdrop-blur-xl">
            Frontend Developer · React · Next.js
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Building{" "}
            <span className="bg-linear-to-r from-sky-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
              fast, accessible
            </span>{" "}
            web apps that scale.
          </h1>

          <p className="mt-5 text-lg text-white/75">
            I design and ship production-ready interfaces with a focus on
            performance, accessibility, and clean architecture.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                View projects
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-sky-400/30 via-violet-400/30 to-emerald-400/30 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-xl transition hover:opacity-90"
              >
                Hire me
              </a>
            </Magnetic>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/20 hover:text-white"
            >
              Contact
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="text-sm text-white/60">Performance</div>
              <div className="mt-1 text-white">Core Web Vitals focused</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="text-sm text-white/60">Code quality</div>
              <div className="mt-1 text-white">Scalable & maintainable</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="text-sm text-white/60">Availability</div>
              <div className="mt-1 text-white">Dubai · Remote</div>
            </div>
          </div>

          <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </section>
    </div>
  );
}
