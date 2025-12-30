
"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export default function Footer() {
  const { dark } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <footer
      className={`
        w-full 
        py-16 px-6 
        text-center
        transition-colors duration-300
        ${mounted ? (dark ? "bg-black text-white" : "bg-white text-black") : ""}
      `}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-semibold tracking-wide mb-4">
          Weston Throckmorton
        </h2>
        <p className="text-sm opacity-70 max-w-md mb-6 leading-relaxed">
          “do you want a quote here?”
        </p>
        <a
          href="mailto:westonthrockmorton@gmail.com"
          className="text-sm opacity-80 hover:opacity-100 transition-opacity"
        >
          westonthrockmorton@gmail.com
        </a>
      </div>
    </footer>
  );
}
