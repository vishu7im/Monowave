"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface TopBarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function TopBar({ sidebarOpen, onToggleSidebar }: TopBarProps) {
  return (
    <header
      suppressHydrationWarning
      className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-slate-950/70 px-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-400 transition-colors hover:bg-cyan-300/10 hover:text-cyan-100 md:hidden"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Menu className={cn("size-4", sidebarOpen && "hidden")} />
          <X className={cn("size-4", !sidebarOpen && "hidden")} />
        </button>

        <Link
          href="/"
          aria-label="Monowave home"
          className="group flex shrink-0 items-center gap-2 transition-all duration-300 hover:opacity-80 md:gap-3"
        >
          <img
            src={siteConfig.logoPath}
            alt="Logo"
            className="h-8 w-8 rounded-xl border border-white/10 bg-white/[0.06] object-contain p-1 md:h-9 md:w-9"
            width={36}
            height={36}
          />
          <div className="flex min-w-0 items-baseline gap-1.5 sm:gap-2">
            <span className="[font-family:var(--font-ascii-brand)] text-base font-medium tracking-wide whitespace-nowrap text-white md:text-lg">
              {siteConfig.productName}
            </span>
            <span className="hidden rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-cyan-100 sm:inline">
              Studio
            </span>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-500">
        <span className="hidden md:inline">Browser-Native</span>
      </div>
    </header>
  );
}
