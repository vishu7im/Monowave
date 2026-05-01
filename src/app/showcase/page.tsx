"use client";

import { useState } from "react";
import { Check, Copy, Sparkles } from "lucide-react";

import ASCIIAnimation from "@/components/ascii-animation";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing-ui/navbar";
import { ThemeDockButton } from "@/components/theme-dock-button";
import {
  ASCII_SHOWCASE,
  type ASCIIShowcaseEntry,
} from "@/components/ascii-components";
import { buildASCIIAnimationReactComponentSource } from "@/lib/ascii-export";

function ShowcaseCard({ config }: { config: ASCIIShowcaseEntry }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const source = buildASCIIAnimationReactComponentSource({
      appearance: config.appearance,
      componentName: config.componentName,
      fps: config.fps,
      frames: config.frames,
      chars: config.chars,
    });
    await navigator.clipboard.writeText(source);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-[1.75rem] p-3 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative flex h-[330px] items-center justify-center overflow-hidden rounded-[1.35rem] border border-cyan-300/10 bg-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_18rem)]" />
        <ASCIIAnimation
          frames={config.frames}
          appearance={{
            ...config.appearance,
            backgroundColor: "transparent",
          }}
          fps={config.fps}
          chars={config.chars}
          isPlaying
          fitToContainer
          className="relative z-10 h-full w-full"
        />
      </div>

      <div className="flex flex-1 items-end justify-between gap-4 px-2 pb-2 pt-5">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{config.title}</p>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
            {config.description}
          </p>
        </div>
        <Button
          variant="landing"
          size="sm"
          onClick={handleCopy}
          className="h-9 shrink-0 gap-2 rounded-full px-4"
        >
          {copied ? (
            <Check className="size-3.5 text-emerald-300" />
          ) : (
            <Copy className="size-3.5" />
          )}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </article>
  );
}

export default function ShowcasePage() {
  return (
    <div className="aurora-grid min-h-dvh bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto w-[min(1120px,calc(100vw-1.5rem))] px-0 pb-16 pt-32">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-cyan-100">
              <Sparkles className="size-3.5" />
              Render gallery
            </div>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
              Exported ASCII motion studies.
            </h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Each card is a generated React animation with embedded frames, ready
            to copy and adapt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {ASCII_SHOWCASE.map((config) => (
            <ShowcaseCard key={config.id} config={config} />
          ))}
        </div>
      </main>
      <ThemeDockButton />
    </div>
  );
}
