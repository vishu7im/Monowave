"use client";

import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { DmOnXButton } from "@/components/landing-ui/dm-on-x-button";

const tiers = {
  monthly: {
    label: "Monthly",
    price: "$12",
    note: "For active creators testing commercial exports.",
    points: [
      "High-quality image and frame exports",
      "React component export",
      "Core style and effect presets",
      "Watermarked video outputs",
      "Standard support",
    ],
  },
  yearly: {
    label: "Yearly",
    price: "$96",
    note: "For teams and creators who export often.",
    points: [
      "Everything in monthly",
      "No watermark on outputs",
      "Premium style packs",
      "Priority rendering queue",
      "Early access to batch tools",
    ],
  },
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");
  const active = tiers[activeTab];

  return (
    <section id="pricing" className="flex justify-center px-4 scroll-mt-28">
      <div className="landing-content-width">
        <div className="mb-8 flex flex-col gap-4 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
            Access model
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Free studio first. Pro power when exports matter.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400">
            Keep the browser workflow open, then monetize higher output quality,
            saved presets, no-watermark exports, and premium rendering tools.
          </p>
        </div>

        <div className="mx-auto mb-8 flex w-fit rounded-2xl border border-white/10 bg-white/[0.06] p-1 backdrop-blur-xl">
          {(["monthly", "yearly"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-200"
              }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="pricing-glass-tab"
                  className="absolute inset-0 rounded-xl border border-cyan-300/25 bg-cyan-300/12 shadow-[0_0_28px_rgba(34,211,238,0.16)]"
                />
              )}
              <span className="relative z-10">{tiers[tab].label}</span>
            </button>
          ))}
        </div>

        <div className="glass-panel grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] overflow-hidden border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
              src="/pricing-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_18rem),linear-gradient(180deg,rgba(2,6,23,0.25),rgba(2,6,23,0.92))]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  <Sparkles className="size-3.5" />
                  Planned monetization layer
                </div>
                <h3 className="mt-6 max-w-sm text-4xl font-semibold tracking-[-0.03em] text-white">
                  Premium exports without blocking the first creation.
                </h3>
              </div>
              <DmOnXButton />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                    {active.label}
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-5xl font-semibold text-white">
                      {active.price}
                    </span>
                    <span className="pb-2 text-sm text-slate-500">
                      {activeTab === "monthly" ? "/mo" : "/yr"}
                    </span>
                  </div>
                </div>
                <Button
                  variant="landingBlue"
                  size="landing"
                  className="h-11 px-5"
                >
                  Join waitlist
                </Button>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                {active.note}
              </p>
              <div className="mt-7 space-y-3">
                {active.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="grid size-6 place-items-center rounded-full bg-cyan-300/10 text-cyan-200">
                      <Check className="size-3.5" />
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
