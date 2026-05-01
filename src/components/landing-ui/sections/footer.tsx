"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 pb-10 sm:pb-20">
      <div className="landing-content-width glass-panel overflow-hidden rounded-[2rem] p-5 sm:p-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={siteConfig.logoPath}
                alt="Logo"
                className="size-10 rounded-xl border border-white/10 bg-white/[0.06] object-contain p-1"
                width={40}
                height={40}
              />
              <span className="[font-family:var(--font-ascii-brand)] text-lg tracking-wide text-white">
                {siteConfig.productName}
              </span>
            </Link>
            <h2 className="mt-8 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
              Build the next visual from text, light, and motion.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Drop in media, tune the signal, and export ASCII visuals for web,
              content, and code workflows.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <Link href={siteConfig.studioPath}>
              <Button
                variant="landingBlue"
                size="landing"
                className="h-12 min-w-52"
              >
                Launch studio
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              <Button
                variant="landing"
                size="landing"
                className="h-12 min-w-52"
              >
                GitHub
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {siteConfig.productName}</span>
          <div className="flex gap-5">
            <Link href="/#pricing" className="hover:text-cyan-100">
              Pricing
            </Link>
            <Link href="/showcase" className="hover:text-cyan-100">
              Showcase
            </Link>
            <Link
              href={siteConfig.xUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-100"
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
