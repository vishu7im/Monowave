"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeDockButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-medium text-slate-200 shadow-[0_10px_34px_rgba(2,6,23,0.35)] backdrop-blur-xl transition-all duration-200 hover:scale-[1.02] hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
    >
      {isDark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
      <span>Theme</span>
    </button>
  );
}
