"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { IconLink } from "../ui/IconLink";

export function Header() {
  return (
    <header className="relative z-20 mx-auto max-w-7xl px-5 pt-6">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-sky-400/60 via-violet-400/60 to-emerald-400/60 ring-1 ring-white/20 shadow-[0_0_40px_2px_rgba(56,189,248,.25)]" />
          <b className="font-extrabold tracking-tight">SHAY</b>
          <span className="hidden text-white/50 md:inline">
            ・Frontend Engineer
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IconLink href="mailto:hello@yourdomain.com" label="Email">
            <Mail size={18} />
          </IconLink>
          <IconLink href="https://github.com/your" label="GitHub">
            <Github size={18} />
          </IconLink>
          <IconLink href="https://linkedin.com/in/your" label="LinkedIn">
            <Linkedin size={18} />
          </IconLink>
        </div>
      </nav>
    </header>
  );
}
