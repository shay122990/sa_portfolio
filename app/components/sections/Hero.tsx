"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Background } from "../ui/Background";
import { Magnetic } from "../ui/Magnetic";
import { Orb } from "../ui/Orb";

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
    <div onMouseMove={onMouseMove} className="relative">
      <Background mx={mx} my={my} />

      <motion.div
        aria-hidden
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 24 }}
        className="pointer-events-none fixed left-1/2 top-0 z-30 h-[2px] w-[130vw] -translate-x-1/2 bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 opacity-60"
      />

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-14 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Building{" "}
              <span className="bg-gradient-to-r from-sky-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
                polished, performant
              </span>{" "}
              web apps
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">
              React / Next.js specialist focused on speed, accessibility, and
              conversion.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-white backdrop-blur-xl transition hover:scale-[1.02] hover:bg-white/15"
                >
                  View Work{" "}
                  <ArrowUpRight
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    size={18}
                  />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400/30 via-violet-400/30 to-emerald-400/30 px-4 py-2 ring-1 ring-white/20 backdrop-blur-xl transition hover:scale-[1.02]"
                >
                  Hire for a project
                </a>
              </Magnetic>
            </div>

            <ul className="mt-8 grid grid-cols-3 gap-3 text-center text-sm text-white/80">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <b className="text-white">6+</b>
                <br />
                Production-ready projects
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <b className="text-white">90+</b>
                <br />
                Lighthouse perf
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <b className="text-white">Dubai</b>
                <br />
                Remote-friendly
              </li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <Orb />
          </div>
        </div>
      </section>
    </div>
  );
}
