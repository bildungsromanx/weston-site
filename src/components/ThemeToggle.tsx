"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`
        fixed bottom-4 left-4 
        px-3 py-2 
        rounded-full 
        backdrop-blur-md
        border shadow-md
        transition-all duration-300
        z-[9999]
        ${dark ? "bg-black/70 text-white border-white/20" : "bg-white/70 text-black border-black/20"}
      `}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
