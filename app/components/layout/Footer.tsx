"use client";

import { Magnetic } from "../ui/Magnetic";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl px-5 pb-14">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl md:flex-row md:text-left">
        <div>
          <b className="text-white">Let’s build something users love.</b>
          <p className="text-white/80">
            Email for contract work or junior roles.
          </p>
        </div>
        <div className="flex gap-3">
          <Magnetic>
            <a
              href="mailto:hello@yourdomain.com"
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl"
            >
              Email
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#work"
              className="rounded-2xl bg-linear-to-r from-sky-400/30 via-violet-400/30 to-emerald-400/30 px-4 py-2 ring-1 ring-white/20 backdrop-blur-xl"
            >
              See Work
            </a>
          </Magnetic>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Shay — Frontend Engineer
      </div>
    </footer>
  );
}
