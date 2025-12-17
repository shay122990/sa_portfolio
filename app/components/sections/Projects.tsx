"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "../../types/project";
import { TiltCard } from "../ui/TiltCard";
import { ArrowUpRight } from "lucide-react";

type Props = { projects: Project[] };

export function Projects({ projects }: Props) {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-5 py-10">
      <h2 className="mb-6 text-2xl">Selected work</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <TiltCard key={p.id}>
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
              <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority={p.id === "audion"}
                />

                <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_0%_0%,rgba(56,189,248,.25),transparent_60%),radial-gradient(80%_120%_at_100%_0%,rgba(167,139,250,.25),transparent_60%),radial-gradient(100%_120%_at_50%_120%,rgba(52,211,153,.25),transparent_60%)]" />

                <div
                  className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,.10), rgba(255,255,255,.03))",
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

                <Link
                  href={`/projects/${p.slug}`}
                  className="shrink-0 rounded-xl border border-white/15 bg-white/10 p-2 text-white/90 backdrop-blur-xl transition hover:scale-105"
                  aria-label="Open case study"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-3 flex gap-3">
                <Link
                  href={`/projects/${p.slug}`}
                  className="text-sm underline underline-offset-4 hover:no-underline"
                >
                  Case Study
                </Link>

                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
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
  );
}
