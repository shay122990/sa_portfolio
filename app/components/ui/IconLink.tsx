import React from "react";

type Props = { href: string; label: string; children: React.ReactNode };

export function IconLink({ href, label, children }: Props) {
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
