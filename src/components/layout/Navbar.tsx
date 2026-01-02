"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar({ variant = "dark" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);

  // Determine colors based on variant
  const isDark = variant === "dark"; // dark = white logo/hamburger
  const lineColor = isDark ? "bg-white" : "bg-black";
  const textColor = isDark ? "text-white" : "text-black";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav
      className={`
        w-full 
        relative 
        z-50 
        overflow-x-hidden
        bg-transparent
        ${textColor}
      `}
    >
      <div className="w-full mx-auto px-10 py-4 flex items-center justify-between">

        {/* Logo → homepage button */}
        <Link href="/" className="flex items-center">
          <Image
            src={isDark ? "/logow.png" : "/logob.png"} // ← swap logos
            alt="Logo"
            width={80}
            height={80}
            className="block"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-md">
          <Link href="/drawings">Drawing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>

        {/* Mobile Hamburger / X Button */}
        <button
          className="md:hidden p-5 z-[999] relative"
          onClick={() => setOpen(!open)}
        >
          <div className="relative w-6 h-6">
            {/* Top line */}
            <span
              className={`absolute left-0 block h-[1.5px] w-6 ${lineColor} transform transition-all duration-300 ${
                open ? "rotate-45 top-3" : "top-2"
              }`}
            ></span>

            {/* Bottom line */}
            <span
              className={`absolute left-0 block h-[1.5px] w-6 ${lineColor} transform transition-all duration-300 ${
                open ? "-rotate-45 top-3" : "top-4"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md animate-overlay z-50 flex flex-col items-center justify-center gap-15 text-5xl font-light text-white">
          <Link href="/drawings" onClick={() => setOpen(false)} className="menu-item menu-delay-2">
            Drawings
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="menu-item menu-delay-3">
            Contact
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="menu-item menu-delay-1">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
