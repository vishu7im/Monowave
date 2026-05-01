"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/#pricing", label: "Pricing" },
  { href: "/showcase", label: "Showcase" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-1/2 top-5 z-50 w-[min(1120px,calc(100vw-1.5rem))] -translate-x-1/2">
      <div
        className={`glass-panel flex items-center justify-between rounded-2xl px-3 py-2 transition-all duration-300 ${
          scrolled ? "shadow-[0_18px_70px_rgba(2,6,23,0.55)]" : ""
        }`}
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-xl px-1.5 py-1 transition-opacity hover:opacity-85"
        >
          <Image
            src={siteConfig.logoPath}
            alt="Logo"
            className="size-9 rounded-xl border border-white/10 bg-white/[0.06] object-contain p-1"
            width={36}
            height={36}
          />
          <span className="[font-family:var(--font-ascii-brand)] truncate text-base font-medium tracking-wide text-white">
            {siteConfig.productName}
          </span>
        </Link>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.045] px-2 py-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.07] hover:text-cyan-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            <Button variant="landing" size="landing" className="h-10 px-4">
              GitHub
            </Button>
          </Link>
          <Link href={siteConfig.studioPath}>
            <Button variant="landingBlue" size="landing" className="h-10 px-5">
              Open studio
              <ChevronRight className="size-4" />
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-100 lg:hidden"
          onClick={() => setMobileMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="glass-panel mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-white/[0.07]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-white/[0.07]"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.studioPath}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button
              variant="landingBlue"
              size="landing"
              className="mt-2 w-full"
            >
              Open studio
              <ChevronRight className="size-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
