// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaInstagram } from "react-icons/fa";


// export default function Navbar({ variant = "dark" }: { variant?: "light" | "dark" }) {
//   const [open, setOpen] = useState(false);

//   // Determine colors based on variant
//   const isDark = variant === "dark"; // dark = white logo/hamburger
//   const lineColor = isDark ? "bg-white" : "bg-black";
//   const textColor = isDark ? "text-white" : "text-black";

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//   }, [open]);

//   return (
//     <nav
//       className={`
//         w-full 
//         relative 
//         z-50 
//         overflow-x-hidden
//         bg-transparent
//         ${textColor}
//       `}
//     >
//       <div className="w-full mx-auto px-10 py-4 flex items-center justify-between">

//         {/* Logo → homepage button */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src={isDark ? "/logow.png" : "/logow.png"} // ← swap logos
//             alt="Logo"
//             width={80}
//             height={80}
//             className="block"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-3 text-lg">
//           <Link href="/drawings">Portfolio</Link>
//           <Link href="/about">About</Link>
//           <Link href="/">Home</Link>
// <a
//   href="https://instagram.com/throckmorton.jpg"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="opacity-80 hover:opacity-100 transition-opacity"
// >
//   <FaInstagram className="text-xl translate-y-[4px]" />
// </a>
//         </div>

//         {/* Mobile Hamburger / X Button */}
//         <button
//           className="md:hidden p-5 z-[999] relative"
//           onClick={() => setOpen(!open)}
//         >
//           <div className="relative w-6 h-6">
//             {/* Top line */}
//             <span
//               className={`absolute left-0 block h-[1.5px] w-6 ${lineColor} transform transition-all duration-300 ${
//                 open ? "rotate-45 top-3" : "top-2"
//               }`}
//             ></span>

//             {/* Bottom line */}
//             <span
//               className={`absolute left-0 block h-[1.5px] w-6 ${lineColor} transform transition-all duration-300 ${
//                 open ? "-rotate-45 top-3" : "top-4"
//               }`}
//             ></span>
//           </div>
//         </button>
//       </div>


// {open && (
//   <div className="fixed inset-0 bg-black/70 backdrop-blur-md animate-overlay z-50 
//                   flex flex-col justify-between items-center 
//                   pt-40 pb-16 text-5xl font-light text-white">

//     {/* Top section: menu links */}
//     <div className="flex flex-col items-center gap-12">
//       <Link href="/drawings" onClick={() => setOpen(false)} className="menu-item menu-delay-2">
//         Portfolio
//       </Link>
//       <Link href="/about" onClick={() => setOpen(false)} className="menu-item menu-delay-1">
//         About
//       </Link>
//       <Link href="/" onClick={() => setOpen(false)} className="menu-item menu-delay-1">
//         Home
//       </Link>
//     </div>

//     {/* Bottom section: Instagram icon */}
//     <a
//       href="https://instagram.com/throckmorton.jpg"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="opacity-80 hover:opacity-100 transition-opacity mb-10"
//     >
//       <FaInstagram className="text-4xl translate-y-[2px]" />
//     </a>
//   </div>
// )}


//     </nav>
//   );
// }





"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar({ variant = "dark" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Determine colors based on variant
  const isDark = variant === "dark";
  const lineColor = isDark ? "bg-white" : "bg-black";
  const textColor = isDark ? "text-white" : "text-black";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Base link styling for desktop menu
  const baseLink = "opacity-80 hover:opacity-100 transition-opacity";

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

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={isDark ? "/logow.png" : "/logow.png"}
            alt="Logo"
            width={80}
            height={80}
            className="block"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 text-lg items-center">
        <Link
  href="/drawings"
  className={`${baseLink} ${
    pathname.startsWith("/drawings") || pathname.startsWith("/gallery")
      ? "underline underline-offset-4"
      : ""
  }`}
>
  Portfolio
</Link>


          <Link
            href="/about"
            className={`${baseLink} ${
              pathname === "/about" ? "underline underline-offset-4" : ""
            }`}
          >
            About
          </Link>

          <Link
            href="/"
            className={`${baseLink} ${
              pathname === "/" ? "underline underline-offset-4" : ""
            }`}
          >
            Home
          </Link>

          <a
            href="https://instagram.com/throckmorton.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <FaInstagram className="text-xl translate-y-[4px]" />
          </a>
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md animate-overlay z-50 
                     flex flex-col justify-between items-center 
                     pt-40 pb-16 text-5xl font-light text-white"
        >
          {/* Top section */}
          <div className="flex flex-col items-center gap-12">
            <Link href="/drawings" onClick={() => setOpen(false)} className="menu-item menu-delay-2">
              Portfolio
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="menu-item menu-delay-1">
              About
            </Link>
            <Link href="/" onClick={() => setOpen(false)} className="menu-item menu-delay-1">
              Home
            </Link>
          </div>

          {/* Bottom Instagram */}
          <a
            href="https://instagram.com/throckmorton.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity mb-10"
          >
            <FaInstagram className="text-4xl translate-y-[2px]" />
          </a>
        </div>
      )}
    </nav>
  );
}
