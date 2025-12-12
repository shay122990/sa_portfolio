"use client";

import { motion } from "framer-motion";

export function Orb() {
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
