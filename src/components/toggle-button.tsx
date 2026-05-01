"use client";

import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({
  toggle = false,
  setToggle = () => {},
}: {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}) => {
  return (
    <motion.div
      onClick={() => setToggle(!toggle)}
      className="rounded-full w-12 h-6 flex items-center px-[3px] cursor-pointer shrink-0"
      style={{
        background: toggle ? "#22d3ee" : "rgba(255, 255, 255, 0.10)",
        boxShadow:
          "0px 1px 0px rgba(255, 255, 255, 0.25), inset 0px 1px 2px rgba(0, 0, 0, 0.15)",
      }}
    >
      <motion.div
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        animate={{ x: toggle ? "22px" : "0px" }}
        className="h-[18px] w-[18px] rounded-full border border-white/20 bg-slate-100"
        style={{
          boxShadow:
            "0 0 16px rgba(34,211,238,0.28), inset 0 1px 0 rgba(255,255,255,0.65)",
        }}
      />
    </motion.div>
  );
};

export default ToggleButton;
