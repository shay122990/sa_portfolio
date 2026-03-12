"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "../../types/project";
import { TiltCard } from "../ui/TiltCard";
import { IoIosArrowForward } from "react-icons/io";

type Props = { projects: Project[] };

export function Projects({ projects }: Props) {
  return (
    <section id="work" className="relative z-10 px-6 py-6 w-full">
      <h2 className="mb-6 text-2xl">Selected work</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
        {projects.map((p) => (
          <TiltCard key={p.id}>
            <article
              className="
                group relative isolate overflow-hidden rounded-3xl
                border border-white/10 bg-white/5 p-5 backdrop-blur-2xl
                flex h-full flex-col
                min-h-[640px]
              "
            >
              <div className="relative h-96 w-full overflow-hidden rounded-2xl shrink-0">
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority={p.id === "audion"}
                />

                <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_0%_0%,rgba(209,116,210,.30),transparent_60%),radial-gradient(80%_120%_at_100%_0%,rgba(224,86,63,.25),transparent_65%),radial-gradient(110%_120%_at_50%_120%,rgba(65,38,83,.55),transparent_60%)]" />

                <div
                  className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,.10), rgba(255,255,255,.03))",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl wrap-break-words line-clamp-2">
                    {p.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/80 wrap-break-words line-clamp-2">
                    {p.blurb}
                  </p>

                  <div className="mt-2">
                    <div className="flex flex-wrap gap-2 max-h-[52px] overflow-hidden">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="truncate rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80"
                          title={t}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-auto pt-4 flex items-center justify-between">
                <div className="flex gap-3">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-sm underline underline-offset-4 hover:no-underline"
                  >
                    Case Study
                  </Link>

                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm underline underline-offset-4 hover:no-underline"
                    >
                      Code
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm underline underline-offset-4 hover:no-underline"
                    >
                      Live
                    </a>
                  )}
                </div>
                <Link
                  href={`/projects/${p.slug}`}
                  className="rounded-xl border border-white/15 bg-white/10 p-2 text-white/90 backdrop-blur-xl transition hover:scale-105"
                  aria-label="Open case study"
                >
                  <IoIosArrowForward size={18} />
                </Link>
              </div>
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition group-hover:opacity-100"
                style={{
                  boxShadow:
                    "0 0 70px 10px rgba(209,116,210,0.22), 0 0 70px 10px rgba(224,86,63,0.16), 0 0 80px 16px rgba(65,38,83,0.25)",
                }}
              />
            </article>
          </TiltCard>
        ))}
      </div>
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
