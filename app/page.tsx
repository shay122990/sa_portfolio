"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

type Project = {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  href: string;
  repo: string;
};

export default function App() {
  const projects = useMemo<Project[]>(
    () => [
      {
        id: "audion",
        title: "Audion — Concert Booking PWA",
        blurb:
          "Next.js + Stripe + Firebase • Multi-date events • Admin tools • PWA",
        tags: ["Next.js", "Stripe", "Firebase", "PWA"],
        href: "/projects/audion",
        repo: "https://github.com/your/audion",
      },
      {
        id: "weave",
        title: "Weave & Way — Textile E-commerce",
        blurb:
          "Filters • MongoDB • CMS • Polaroid cards • Mobile-first checkout",
        tags: ["Next.js", "MongoDB", "Redux", "Tailwind"],
        href: "/projects/weave-and-way",
        repo: "https://github.com/your/weave",
      },
      {
        id: "fitsync",
        title: "FitSync — Fitness Planner",
        blurb: "Intervals • Nutrition • Wger API • Offline PWA • Data viz",
        tags: ["React", "Redux", "PWA"],
        href: "/projects/fitsync",
        repo: "https://github.com/your/fitsync",
      },
      {
        id: "shaytree",
        title: "Shay's Tree — Plant Store",
        blurb: "Firestore products • Categories • Carousel • Bootstrap UI",
        tags: ["React", "Firebase", "Bootstrap"],
        href: "/projects/shays-tree",
        repo: "https://github.com/your/shaytree",
      },
      {
        id: "eventshell",
        title: "Event Shell — Launch Ops",
        blurb: "Animated hero • Schedule tooling • Forms • A11y",
        tags: ["Next.js", "Framer Motion", "A11y"],
        href: "/projects/event-shell",
        repo: "https://github.com/your/eventshell",
      },
      {
        id: "fabricdb",
        title: "Fabric DB — Catalog & Search",
        blurb: "Server components • Dynamic API routes • Infinite grid",
        tags: ["Next.js", "App Router", "Tailwind"],
        href: "/projects/fabricdb",
        repo: "https://github.com/your/fabricdb",
      },
    ],
    []
  );

  const [mx, setMx] = useState<number>(0);
  const [my, setMy] = useState<number>(0);
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
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      onMouseMove={onMouseMove}
      className="min-h-[100svh] bg-[#0a0b10] text-[#e6e7ea] antialiased"
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Coda:wght@400;800&display=swap"
        rel="stylesheet"
      />

      <Background mx={mx} my={my} />

      <motion.div
        aria-hidden
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 24 }}
        className="pointer-events-none fixed left-1/2 top-0 z-30 h-[2px] w-[130vw] -translate-x-1/2 bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 opacity-60"
      />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-14 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1
              className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
              style={{
                fontFamily: "Coda, ui-sans-serif, system-ui, sans-serif",
              }}
            >
              Frontend-
              <span className="bg-gradient-to-r from-sky-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
                developer
              </span>{" "}
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">
              React / Next.js specialist focused on speed, accessibility, and
              conversion. No headshot — results forward.
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

            <ul className="mt-8 grid grid-cols-3 max-sm:grid-cols-3 gap-3 text-center text-sm text-white/80">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <b className="text-white">6+</b>
                <br />
                Production-ready projects
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <b className="text-white">90+ </b>
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

      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-5 pb-6"
      >
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
            desc="Stripe flows, product filters, secure checkout."
          />
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl px-5 py-10">
        <h2 className="mb-6 text-2xl">Selected work</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <TiltCard key={p.id}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
                <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_0%_0%,rgba(56,189,248,.25),transparent_60%),radial-gradient(80%_120%_at_100%_0%,rgba(167,139,250,.25),transparent_60%),radial-gradient(100%_120%_at_50%_120%,rgba(52,211,153,.25),transparent_60%)]" />
                  <div
                    className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
                    }}
                  />
                </div>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{p.blurb}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={p.href}
                    className="shrink-0 rounded-xl border border-white/15 bg-white/10 p-2 text-white/90 backdrop-blur-xl transition hover:scale-105"
                    aria-label="Open case study"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div className="mt-3 flex gap-3">
                  <a
                    href={p.href}
                    className="text-sm underline underline-offset-4 hover:no-underline"
                  >
                    Case Study
                  </a>
                  <a
                    href={p.repo}
                    className="text-sm underline underline-offset-4 hover:no-underline"
                  >
                    Code
                  </a>
                </div>

                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "0 0 70px 10px rgba(56,189,248,0.25), 0 0 70px 10px rgba(167,139,250,0.18), 0 0 70px 10px rgba(52,211,153,0.18)",
                  }}
                />
              </article>
            </TiltCard>
          ))}
        </div>
      </section>

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

      <style jsx global>{`
        :root {
          --bg: #0a0b10;
          --fg: #e6e7ea;
          --muted: #9aa0aa;
        }
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          background: radial-gradient(
              1000px 600px at 10% -10%,
              rgba(124, 58, 237, 0.12),
              transparent 60%
            ),
            radial-gradient(
              800px 400px at 100% 10%,
              rgba(56, 189, 248, 0.1),
              transparent 60%
            ),
            radial-gradient(
              1000px 500px at 50% 120%,
              rgba(52, 211, 153, 0.1),
              transparent 60%
            ),
            #0a0b10;
          font-family: "Coda", ui-sans-serif, system-ui, sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #fff;
        }
        ::selection {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
        }
      `}</style>
    </div>
  );
}

// ===== Components =====
type IconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};
function IconLink({ href, label, children }: IconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/90 backdrop-blur-xl transition hover:scale-105"
    >
      {children}
    </a>
  );
}

type GlassCardProps = {
  title: string;
  desc: string;
};
function GlassCard({ title, desc }: GlassCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
      <h3 className="text-base">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{desc}</p>
    </div>
  );
}

type BackgroundProps = { mx: number; my: number };
function Background({ mx, my }: BackgroundProps) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(600px circle at ${mx}px ${my}px, rgba(167,139,250,.12), transparent 45%)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_0%_0%,rgba(56,189,248,.10),transparent_60%),radial-gradient(80%_120%_at_100%_0%,rgba(167,139,250,.10),transparent_60%),radial-gradient(100%_120%_at_50%_120%,rgba(52,211,153,.10),transparent_60%)]" />
    </div>
  );
}

function Orb() {
  return (
    <motion.div
      initial={{ scale: 0.9, rotate: -10 }}
      animate={{ scale: 1, rotate: 10 }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      className="relative mx-auto aspect-square w-64 max-w-full rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl md:w-80"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(56,189,248,.25),rgba(167,139,250,.25),rgba(52,211,153,.25),rgba(56,189,248,.25))]" />
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, 8, -8, 0], y: [0, -6, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -inset-8 blur-3xl"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,.35), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(255,255,255,.06),transparent_60%)]" />
      </div>
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px]"
        style={{
          boxShadow:
            "0 0 70px 6px rgba(56,189,248,.25), 0 0 70px 6px rgba(167,139,250,.18), 0 0 70px 6px rgba(52,211,153,.18)",
        }}
      />
    </motion.div>
  );
}

type TiltCardProps = { children: React.ReactNode };
function TiltCard({ children }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (py - 0.5) * 10;
    const ry = (px - 0.5) * -10;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
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

type MagneticProps = { children: React.ReactNode };
function Magnetic({ children }: MagneticProps) {
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
