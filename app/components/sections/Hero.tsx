"use client";

import { IoIosArrowForward } from "react-icons/io";
import { GlassCard } from "../ui/GlassCard";

export function Hero() {
  return (
    <section className="relative z-10 px-6 py-6 w-full">
      <div className="max-w-3xl">
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Building -{" "}
          <span className="bg-linear-to-r from-sky-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
            fast, accessible
          </span>{" "}
          web apps that scale.
        </h1>

        <p className="mt-5 text-lg text-white/75">
          I design and ship beautiful and scalable interfaces with a focus on
          performance, accessibility, and clean architecture.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/15"
          >
            View projects
            <IoIosArrowForward
              size={18}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="mailto:shay.asanova@gmail.com?subject=Project%20Inquiry"
            className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-sky-400/30 via-violet-400/30 to-emerald-400/30 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-xl transition hover:opacity-90"
          >
            Hire me
          </a>

          <a
            href="#footer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/20 hover:text-white"
          >
            Contact
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <GlassCard title="Performance" desc="Core Web Vitals focused" />
          <GlassCard title="Code quality" desc="Scalable & maintainable" />
          <GlassCard title="Availability" desc="Dubai · Remote · On site" />
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}
