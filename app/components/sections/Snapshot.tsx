import { GlassCard } from "../ui/GlassCard";

export function Snapshot() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 pb-16">
      <h2 className="mb-4 text-2xl">Snapshot</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <GlassCard
          title="Stack"
          desc="React, Next.js (App Router), TypeScript, Tailwind, Redux, Firebase, MongoDB, Stripe"
        />
        <GlassCard
          title="Focus"
          desc="Perf, a11y, DX, delightful UI. I design in code."
        />
        <GlassCard
          title="Value"
          desc="Ship MVPs in weeks, production polish in days. Clear docs & case studies."
        />
      </div>
    </section>
  );
}
