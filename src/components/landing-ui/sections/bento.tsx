"use client";

import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Download,
  Eye,
  Palette,
  SlidersHorizontal,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import ImagesBadgeDemoFour from "@/components/images-badge-demo-4";
import PortalMarqueeTransform from "@/components/portal-marquee-transform";
import MagnifiedBento from "@/components/magnified-bento";
import { siteConfig } from "@/lib/site";

const features = [
  {
    icon: SlidersHorizontal,
    title: "Density controls",
    text: "Tune columns, threshold, character ramps, inversion, and responsive fit with live feedback.",
  },
  {
    icon: Palette,
    title: "Visual treatments",
    text: "Switch fonts, color modes, glow, glitch, matrix, burn, gradient, and source-color rendering.",
  },
  {
    icon: Download,
    title: "Export pipeline",
    text: "Generate PNG, video, React component source, ZIP frames, or clipboard text from the same preview.",
  },
];

const Bento = () => {
  return (
    <section className="flex w-full justify-center px-4">
      <div className="landing-content-width">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
              Studio stack
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
              A glass console for turning pixels into glyph streams.
            </h2>
          </div>
          <Link href={siteConfig.studioPath}>
            <Button variant="landing" size="landing" className="h-12 px-6">
              Open workspace
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="glass-panel min-h-[440px] overflow-hidden rounded-[2rem] p-4 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">
                  Source to ASCII scanner
                </div>
                <div className="text-xs text-slate-500">
                  Split-screen motion preview
                </div>
              </div>
              <Eye className="size-5 text-cyan-200" />
            </div>
            <div className="mt-6 h-[330px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-3">
              <PortalMarqueeTransform
                direction="ltr"
                splitBarClassName="bg-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.55)]"
                className="h-full w-full rounded-2xl border border-cyan-300/10 bg-transparent shadow-none"
              />
            </div>
          </motion.div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="glass-panel overflow-hidden rounded-[2rem] p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">
                    Glyph magnifier
                  </div>
                  <div className="text-xs text-slate-500">
                    Inspect density before export
                  </div>
                </div>
                <Zap className="size-5 text-violet-200" />
              </div>
              <div className="h-56 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50">
                <MagnifiedBento />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: 0.06, duration: 0.55, ease: "easeOut" }}
              className="glass-panel overflow-hidden rounded-[2rem] p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">
                    Export handoff
                  </div>
                  <div className="text-xs text-slate-500">
                    Design, code, and frame outputs
                  </div>
                </div>
                <Cpu className="size-5 text-emerald-200" />
              </div>
              <div className="grid h-44 place-items-center rounded-3xl border border-white/10 bg-slate-950/50">
                <ImagesBadgeDemoFour />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="glass-panel rounded-3xl p-5"
            >
              <div className="grid size-11 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bento;
