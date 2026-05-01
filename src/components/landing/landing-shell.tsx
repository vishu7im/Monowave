"use client";

import { useTheme } from "@/components/theme-provider";
import Navbar from "@/components/landing-ui/navbar";
import Bento from "@/components/landing-ui/sections/bento";
import Faq from "@/components/landing-ui/sections/faq";
import Footer from "@/components/landing-ui/sections/footer";
import HeroSection from "@/components/landing-ui/sections/herosection";
import Pricing from "@/components/landing-ui/sections/pricing";
import { ThemeDockButton } from "@/components/theme-dock-button";

export function LandingShell() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={isDark ? "dark aurora-grid" : "aurora-grid"}
      style={
        isDark
          ? {
              background: "#050814",
              color: "#E8F7FF",
              ["--background" as string]: "#050814",
              ["--foreground" as string]: "oklch(0.92 0.004 264)",
              ["--card" as string]: "rgba(15,23,42,0.72)",
              ["--card-foreground" as string]: "oklch(0.92 0.004 264)",
              ["--muted" as string]: "rgba(148,163,184,0.12)",
              ["--muted-foreground" as string]: "#94A3B8",
              ["--border" as string]: "rgba(255,255,255,0.12)",
              ["--primary" as string]: "#67E8F9",
              ["--primary-foreground" as string]: "#020617",
              ["--secondary" as string]: "rgba(255,255,255,0.08)",
              ["--secondary-foreground" as string]: "oklch(0.92 0.004 264)",
              ["--accent" as string]: "rgba(34,211,238,0.12)",
              ["--accent-foreground" as string]: "oklch(0.92 0.004 264)",
              ["--popover" as string]: "rgba(15,23,42,0.96)",
              ["--popover-foreground" as string]: "oklch(0.92 0.004 264)",
            }
          : {
              background: "#08111F",
              color: "#E8F7FF",
              ["--background" as string]: "#08111F",
              ["--foreground" as string]: "#E8F7FF",
              ["--card" as string]: "rgba(15,23,42,0.72)",
              ["--card-foreground" as string]: "#E8F7FF",
              ["--muted" as string]: "rgba(148,163,184,0.12)",
              ["--muted-foreground" as string]: "#94A3B8",
              ["--border" as string]: "rgba(255,255,255,0.12)",
              ["--primary" as string]: "#67E8F9",
              ["--primary-foreground" as string]: "#020617",
              ["--secondary" as string]: "rgba(255,255,255,0.08)",
              ["--secondary-foreground" as string]: "#E8F7FF",
              ["--accent" as string]: "rgba(34,211,238,0.12)",
              ["--accent-foreground" as string]: "#E8F7FF",
              ["--popover" as string]: "rgba(15,23,42,0.96)",
              ["--popover-foreground" as string]: "#E8F7FF",
            }
      }
    >
      <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden font-satoshi">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_32rem)]" />
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(2,6,23,0.72)_52%,#020617_100%)]" />
        <Navbar />
        <div className="landing-sections-stack relative z-10">
          <div className="w-full relative">
            <HeroSection />
          </div>
          <Bento />
          <Pricing />
          <Faq />
          <Footer />
        </div>
        <ThemeDockButton />
      </div>
    </div>
  );
}
