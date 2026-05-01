"use client";

import { Monitor } from "lucide-react";
import { useIsDesktop } from "@/hooks/use-is-desktop";
import { siteConfig } from "@/lib/site";

export function DesktopOnlyGate({ children }: { children: React.ReactNode }) {
  const isDesktop = useIsDesktop();

  if (isDesktop === null) return null;

  if (!isDesktop) {
    return (
      <div className="aurora-grid flex min-h-dvh flex-col items-center justify-center gap-8 bg-slate-950 px-6 text-center font-satoshi">
        <div
          className="glass-panel flex size-16 items-center justify-center rounded-2xl"
          style={{
            boxShadow:
              "0px 4px 34px rgba(34, 211, 238, 0.24), inset 0px 1px 0 rgba(255,255,255,0.14)",
          }}
        >
          <Monitor className="size-8 text-cyan-200" />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-zinc-100">Desktop only</h1>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
            Please switch to a bigger screen and open {siteConfig.productName}{" "}
            Studio on a laptop or desktop.
          </p>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <p className="text-xs text-zinc-600">
            Open this link on your laptop or desktop
          </p>
          <code className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-300">
            {typeof window !== "undefined"
              ? window.location.href
              : `${siteConfig.studioPath}`}
          </code>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
