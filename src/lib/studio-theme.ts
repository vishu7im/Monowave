/**
 * Shared UI tokens for `/studio` — aligned with the hero mini-dashboard
 * ([`studio-ui-preview`](../components/studio-ui-preview.tsx)) and landing.
 * Each token includes both light and dark variants.
 */
export const STUDIO_SLIDER_CLASS =
  "w-full **:data-[slot=slider-track]:h-[2px] **:data-[slot=slider-track]:rounded-full **:data-[slot=slider-track]:bg-white/10 **:data-[slot=slider-range]:bg-cyan-300 **:data-[slot=slider-thumb]:h-3 **:data-[slot=slider-thumb]:w-3 **:data-[slot=slider-thumb]:rounded-full **:data-[slot=slider-thumb]:border **:data-[slot=slider-thumb]:border-cyan-200 **:data-[slot=slider-thumb]:bg-slate-950 **:data-[slot=slider-thumb]:shadow-[0_0_18px_rgba(34,211,238,0.55)]";

export const STUDIO_TEXT_BODY = "text-slate-100";
export const STUDIO_TEXT_LABEL = "text-slate-400";
export const STUDIO_TEXT_META = "text-slate-500";

/** Mini-dashboard outline pill button treatment. */
export const STUDIO_OUTLINE_TERTIARY =
  "h-7 border border-white/10 bg-white/[0.06] text-slate-200 hover:border-cyan-300/35 hover:bg-cyan-300/[0.10] text-[10px] backdrop-blur-xl";

/** Studio switch treatment for neutral card controls. */
export const STUDIO_SWITCH_CLASS =
  "h-6 w-11 rounded-full border border-white/10 bg-white/[0.06] p-0.5 data-checked:border-cyan-300/50 data-checked:bg-cyan-300/30 data-unchecked:bg-white/[0.06] [&_[data-slot=switch-thumb]]:!ml-0 [&_[data-slot=switch-thumb]]:size-5 [&_[data-slot=switch-thumb]]:rounded-full [&_[data-slot=switch-thumb]]:bg-slate-100 [&_[data-slot=switch-thumb]]:shadow-[0_0_18px_rgba(34,211,238,0.28)] [&_[data-slot=switch-thumb]]:transition-transform [&_[data-slot=switch-thumb]]:duration-200 [&_[data-slot=switch-thumb]]:ease-out [&_[data-slot=switch-thumb]]:!translate-x-0 data-checked:[&_[data-slot=switch-thumb]]:!translate-x-5";

/**
 * Text fields / selects on `/studio` — same tokens as `PREVIEW.field` in
 * studio-ui-preview (glass border, translucent bg, cyan focus ring).
 */
export const STUDIO_FIELD_CLASS =
  "h-8 w-full rounded-lg border border-white/10 bg-white/[0.06] text-xs text-slate-100 shadow-none backdrop-blur-xl placeholder:text-slate-500 focus-visible:border-cyan-300/60 focus-visible:ring-2 focus-visible:ring-cyan-300/20";

export const STUDIO_FIELD_MONO_CLASS =
  "h-8 w-full rounded-lg border border-white/10 bg-white/[0.06] font-mono text-xs tabular-nums text-slate-100 shadow-none backdrop-blur-xl placeholder:text-slate-500 focus-visible:border-cyan-300/60 focus-visible:ring-2 focus-visible:ring-cyan-300/20";

export const STUDIO_FIELD_READONLY_MUTED =
  "h-8 w-full rounded-lg border border-white/5 bg-white/[0.04] font-mono text-xs tabular-nums text-slate-500";

export const STUDIO_SELECT_CONTENT =
  "max-h-[180px] rounded-xl border border-white/10 bg-slate-950/95 text-slate-100 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl";

export const STUDIO_SELECT_ITEM =
  "rounded-md text-xs text-slate-200 focus:bg-cyan-300/10 focus:text-cyan-100";

/** Card / panel border aligned with `PREVIEW.card` */
export const STUDIO_CARD_OUTLINE = "border border-white/10";

/**
 * Dashed "upload" surface — matches hero Source Media dropzone in
 * studio-ui-preview.
 */
export const STUDIO_DROPZONE =
  "rounded-2xl border border-dashed border-cyan-300/35 bg-white/[0.045] text-xs text-slate-400 transition-colors backdrop-blur-xl hover:border-cyan-200/60 hover:bg-cyan-300/[0.08]";
