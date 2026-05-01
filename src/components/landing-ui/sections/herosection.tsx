"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Layers3,
  Play,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import StudioUiPreview from "@/components/studio-ui-preview";
import { siteConfig } from "@/lib/site";

const stats = [
  ["40+", "charsets"],
  ["Local", "rendering"],
  ["PNG", "video, ZIP, TSX"],
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[92dvh] w-full items-center justify-center px-4 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-28 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100"
          >
            <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.85)]" />
            Browser-native media reactor
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease: "easeOut" }}
            className="mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
          >
            Turn motion into luminous text systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.55, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Monowave converts images, GIFs, and video into animated ASCII with a
            live creative console, export-ready components, and privacy-first
            local processing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.55, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href={siteConfig.studioPath}>
              <Button
                variant="landingBlue"
                size="landing"
                className="h-12 min-w-52 px-6"
              >
                Launch studio
                <ChevronRight className="size-4" />
              </Button>
            </Link>
            <Link href="/showcase">
              <Button
                variant="landing"
                size="landing"
                className="h-12 min-w-52 px-6"
              >
                View gallery
                <ArrowUpRight className="size-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-2">
            {stats.map(([value, label]) => (
              <div key={label} className="glass-panel rounded-2xl px-4 py-3">
                <div className="font-mono text-lg font-semibold text-cyan-100">
                  {value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
            <div className="mb-3 flex items-center justify-between px-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                <Play className="size-3.5 text-cyan-200" />
                Live render deck
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="size-3.5 text-emerald-300" />
                Local
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70">
              <StudioUiPreview />
            </div>
          </div>

          <div className="glass-panel absolute -bottom-6 left-6 hidden max-w-xs rounded-2xl p-4 md:block">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                <Layers3 className="size-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Multi-format output
                </div>
                <div className="text-xs text-slate-400">
                  Snapshot, motion, code, and frame archive.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
