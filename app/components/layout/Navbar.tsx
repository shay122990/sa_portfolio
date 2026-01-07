"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Logo from "../../../public/logo-icon.ico";

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
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl
                 border border-white/10 bg-white/5
                 text-white/80 transition
                 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

export function Navbar() {
  return (
    <header className="relative z-20 mx-auto max-w-7xl px-5 py-5 w-full">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div
            className="inline-flex h-7 w-7 items-center justify-center rounded-full
                          bg-linear-to-br from-sky-400/60 via-violet-400/60 to-emerald-400/60
                          ring-1 ring-white/20
                          shadow-[0_0_40px_2px_rgba(56,189,248,.25)]
                          overflow-hidden"
          >
            <Image
              src={Logo}
              alt="Shay logo"
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <b className="font-extrabold tracking-tight">SHAY</b>
          <span className="text-white/50 md:inline">・ Frontend Developer</span>
        </div>

        <div className="flex items-center gap-2">
          <IconLink href="mailto:shay.asanova@gmail.com" label="Email">
            <FaEnvelope size={18} />
          </IconLink>
          <IconLink href="https://github.com/shay122990" label="GitHub">
            <FaGithub size={18} />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/shay-asanova90/"
            label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </IconLink>
        </div>
      </nav>
    </header>
  );
}
