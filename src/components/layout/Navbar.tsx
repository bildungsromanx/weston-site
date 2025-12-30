"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (


<nav className="w-full bg-transparent relative z-50 overflow-x-hidden">
<div className="w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo → homepage button */} 
        <Link href="/" className="flex items-center"> 
        <Image src="/logob.png" alt="Logo" width={120} height={120} className="dark:hidden block" />
        <Image src="/logow.png" alt="Logo" width={100} height={100} className="hidden dark:block" /> 
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Hamburger / X Button */}
      <button className="md:hidden p-2 z-[999] relative"
  onClick={() => setOpen(!open)}
>
  <div className="relative w-6 h-6">
    {/* Top line */}
    <span
      className={`absolute left-0 block h-0.5 w-6 bg-white transform transition-all duration-300 ${
        open ? "rotate-45 top-3" : "top-1"
      }`}
    ></span>

    {/* Middle line */}
    <span
      className={`absolute left-0 block h-0.5 w-6 bg-white transition-all duration-300 ${
        open ? "opacity-0" : "top-3"
      }`}
    ></span>

    {/* Bottom line */}
    <span
      className={`absolute left-0 block h-0.5 w-6 bg-white transform transition-all duration-300 ${
        open ? "-rotate-45 top-3" : "top-5"
      }`}
    ></span>
  </div>
</button>

      </div>

      {/* Full Screen Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md animate-overlay z-50 flex flex-col items-center justify-center gap-10 text-2xl text-white">
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="menu-item menu-delay-1"
          >
            About
          </Link>

          <Link
            href="/drawings"
            onClick={() => setOpen(false)}
            className="menu-item menu-delay-2"
          >
            Drawings
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="menu-item menu-delay-3"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
