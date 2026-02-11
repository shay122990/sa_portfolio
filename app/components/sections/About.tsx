"use client";

import { GlassCard } from "../ui/GlassCard";
import { IconLink } from "../ui/IconLink";
import { IoMailOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-10 md:grid-cols-12 md:items-start">
        {/* LEFT: COPY */}
        <div className="md:col-span-7">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-4 text-white/75 leading-relaxed">
            I’m a frontend developer focused on building fast, accessible, and
            scalable web applications with React and Next.js.
          </p>
          <p className="mt-4 text-white/75 leading-relaxed">
            I’ve built booking and e-commerce experiences with secure Stripe
            checkout, dashboards powered by Firebase, and RESTful applications
            using MongoDB and JWT-protected admin tools.
          </p>
          <p className="mt-4 text-white/75 leading-relaxed">
            I care about clean architecture, performance, and interfaces that
            feel intentional — not just functional.
          </p>
        </div>

        {/* RIGHT: PROOF + LINKS */}
        <div className="md:col-span-5 space-y-6">
          <div className="grid gap-4">
            <GlassCard
              title="Real client delivery"
              desc="Shipped Alleyway as a production website with SEO + performance focus."
            />
            <GlassCard
              title="Payments + Auth"
              desc="Stripe checkout flows with Firebase Auth / JWT-protected admin routes."
            />
            <GlassCard
              title="Data-driven UI"
              desc="Dashboards with charts, persistent state, and clean state architecture."
            />
          </div>

          <div className="flex items-center gap-2">
            <IconLink
              href="mailto:shay.asanova@gmail.com?subject=Project%20Inquiry"
              label="Email Shay"
            >
              <IoMailOutline size={18} />
            </IconLink>

            <IconLink href="https://github.com/shay122990" label="GitHub">
              <IoLogoGithub size={18} />
            </IconLink>

            <IconLink
              href="https://www.linkedin.com/in/YOUR_LINKEDIN"
              label="LinkedIn"
            >
              <IoLogoLinkedin size={18} />
            </IconLink>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
          <div className="text-sm text-white/60">
            Based in Dubai · Available remote / on-site
          </div>
        </div>
      </div>
    </section>
  );
}
