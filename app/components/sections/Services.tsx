import { GlassCard } from "../ui/GlassCard";

export function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-6 w-full">
      <h2 className="mb-4 text-2xl">What I ship</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <GlassCard
          title="UI Engineering"
          desc="Design-to-code handoff, component libraries, motion."
        />
        <GlassCard
          title="SPA / PWA"
          desc="Offline, installable, fast. App Router, RSC, caching."
        />
        <GlassCard
          title="E-commerce"
          desc="Stripe flows, product filters, secure checkout. Secure Admin Dashboards"
        />
      </div>
    </section>
  );
}
