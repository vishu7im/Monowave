"use client";

import { useEffect, useState } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

function useDocumentDark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

const Toaster = ({ ...props }: ToasterProps) => {
  const isDark = useDocumentDark();

  return (
    <Sonner
      theme={isDark ? "dark" : "light"}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-3.5 text-emerald-400" />,
        info: <InfoIcon className="size-3.5 text-blue-400" />,
        warning: <TriangleAlertIcon className="size-3.5 text-amber-400" />,
        error: <OctagonXIcon className="size-3.5 text-red-400" />,
        loading: (
          <Loader2Icon className="size-3.5 animate-spin text-zinc-400" />
        ),
      }}
      style={
        {
          "--normal-bg": "#0f172a",
          "--normal-text": "#e2e8f0",
          "--normal-border": "rgba(255,255,255,0.12)",
          "--success-bg": "#0f172a",
          "--success-text": "#e2e8f0",
          "--success-border": "rgba(255,255,255,0.12)",
          "--error-bg": "#0f172a",
          "--error-text": "#e2e8f0",
          "--error-border": "rgba(255,255,255,0.12)",
          "--border-radius": "14px",
          "--toast-width": "340px",
          fontFamily: "var(--font-sans)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: [
            "shadow-xl border px-4 py-3.5 gap-3",
            "bg-slate-950/95 border-white/10 text-slate-100 shadow-black/50 backdrop-blur-xl",
          ].join(" "),
          title: "text-sm font-medium leading-snug",
          description: "text-xs leading-relaxed mt-0.5",
          closeButton: [
            "!border rounded-full !size-5 transition-colors",
            "!bg-white/[0.06] !border-white/10 hover:!bg-cyan-300/10 !text-slate-400",
          ].join(" "),
          actionButton:
            "!bg-cyan-300 !text-slate-950 hover:!bg-cyan-200 !border-0 !rounded-lg !text-xs !font-medium !px-3 !h-7 !shadow-[inset_0px_1px_2px_rgba(255,255,255,0.28)]",
          icon: "mt-0.5",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
