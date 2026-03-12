"use client";

import { GlassCard } from "../ui/GlassCard";
import steps from "@/app/lib/data/steps";
import skillGroups from "@/app/lib/data/skillGroups";

export function ProcessSkills() {
  return (
    <section
      id="process"
      className="relative z-10 px-6 py-6 w-full flex flex-col gap-5 mb-12"
    >
      <div>
        <h2 className="text-3xl font-semibold">How I Work</h2>

        <p className="mt-3 max-w-2xl text-white/60 leading-relaxed">
          I approach frontend development with a systems mindset — prioritizing
          performance, scalability, and long-term maintainability over quick
          fixes.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <GlassCard key={s.title} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />

      <div>
        <h2 className="text-3xl font-semibold">Tech Stack</h2>
        <div className="mt-5 grid gap-8 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="space-y-4 border border-[var(--bg)] rounded-xl py-3 px-3
"
            >
              <h3 className="text-lg font-medium">{g.title}</h3>

              <div className="flex flex-wrap gap-3">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
