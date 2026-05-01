"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

interface CustomAccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

export const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full space-y-3">
      {items.map((item, idx) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          isOpen={openIndex === idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isOpen,
  onClick,
  children,
}) => {
  return (
    <div className="glass-panel overflow-hidden rounded-2xl">
      <button
        className="relative z-10 flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-slate-100 transition-colors hover:text-cyan-100"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-200">
          <motion.span
            initial={false}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Plus className="size-4" />
          </motion.span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm leading-7 text-slate-400">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
