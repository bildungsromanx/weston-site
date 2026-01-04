module.exports = [
"[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from "next/image";
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
//             src={isDark ? "/logow.png" : "/logob.png"} // ← swap logos
//             alt="Logo"
//             width={80}
//             height={80}
//             className="block"
//           />
//         </Link>
//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 text-md">
//           <Link href="/drawings">Drawing</Link>
//           <Link href="/contact">Contact</Link>
//           <Link href="/about">About</Link>
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
//       {/* Full Screen Mobile Menu */}
//       {open && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-md animate-overlay z-50 flex flex-col items-center justify-center gap-15 text-5xl font-light text-white">
//           <Link href="/drawings" onClick={() => setOpen(false)} className="menu-item menu-delay-2">
//             Drawings
//           </Link>
//           <Link href="/contact" onClick={() => setOpen(false)} className="menu-item menu-delay-3">
//             Contact
//           </Link>
//           <Link href="/about" onClick={() => setOpen(false)} className="menu-item menu-delay-1">
//             About
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
}),
"[project]/src/components/layout/PageWithNavbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import Navbar from "@/components/layout/Navbar";
// export default function PageWithNavbar({
//   children,
//   variant = "dark",
// }: {
//   children: React.ReactNode;
//   variant?: "light" | "dark";
// }) {
//   return (
//     <>
//       <Navbar variant={variant} />
//       {children}
//     </>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>PageWithNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function PageWithNavbar({ children, variant = "dark" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: variant
            }, void 0, false, {
                fileName: "[project]/src/components/layout/PageWithNavbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true);
}
}),
"[project]/src/app/drawings/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DrawingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageWithNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageWithNavbar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const images = [
    "/drawing/2a.jpeg",
    "/drawing/6a.jpeg",
    "/drawing/5b.jpeg",
    "/drawing/9.jpg",
    "/drawing/5a.jpg"
];
function DrawingsPage() {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev + 1) % images.length);
        }, 6000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageWithNavbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        variant: "light",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: " relative w-full min-h-[105vh] pt-24 pb-20 bg-top md:bg-center -mt-30 overflow-hidden ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 -z-10",
                    children: images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `
                absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]
                ${i === index ? "opacity-60" : "opacity-0"}
              `,
                            style: {
                                backgroundImage: `url(${src})`
                            }
                        }, i, false, {
                            fileName: "[project]/src/app/drawings/page.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/drawings/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative min-h-[105vh] flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl mb-12 tracking-wide",
                                children: "Drawings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/drawings/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl mb-12 tracking-wide",
                                children: "Illustrations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/drawings/page.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl mb-12 tracking-wide",
                                children: "Year"
                            }, void 0, false, {
                                fileName: "[project]/src/app/drawings/page.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drawings/page.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/drawings/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/drawings/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/drawings/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=_b040c8e9._.js.map