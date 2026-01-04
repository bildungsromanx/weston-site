(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navbar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "e68dd060099b37fcef6efbd58d06e463da8d19f02bfa7a8d2297eedf09166178") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e68dd060099b37fcef6efbd58d06e463da8d19f02bfa7a8d2297eedf09166178";
    }
    const { variant: t1 } = t0;
    const variant = t1 === undefined ? "dark" : t1;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDark = variant === "dark";
    const lineColor = isDark ? "bg-white" : "bg-black";
    const textColor = isDark ? "text-white" : "text-black";
    let t2;
    let t3;
    if ($[1] !== open) {
        t2 = ({
            "Navbar[useEffect()]": ()=>{
                document.body.style.overflow = open ? "hidden" : "auto";
            }
        })["Navbar[useEffect()]"];
        t3 = [
            open
        ];
        $[1] = open;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const t4 = `
        w-full 
        relative 
        z-50 
        overflow-x-hidden
        bg-transparent
        ${textColor}
      `;
    const t5 = isDark ? "/logow.png" : "/logow.png";
    let t6;
    if ($[4] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: t5,
                alt: "Logo",
                width: 80,
                height: 80,
                className: "block"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 51,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex gap-6 text-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/drawings",
                    children: "Portfolio"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 59,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    children: "Contact"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 59,
                    columnNumber: 95
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/about",
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 59,
                    columnNumber: 131
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] !== open) {
        t8 = ({
            "Navbar[<button>.onClick]": ()=>setOpen(!open)
        })["Navbar[<button>.onClick]"];
        $[7] = open;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    const t9 = `absolute left-0 block h-[1.5px] w-6 ${lineColor} transform transition-all duration-300 ${open ? "rotate-45 top-3" : "top-2"}`;
    let t10;
    if ($[9] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t9
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 77,
            columnNumber: 11
        }, this);
        $[9] = t9;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    const t11 = `absolute left-0 block h-[1.5px] w-6 ${lineColor} transform transition-all duration-300 ${open ? "-rotate-45 top-3" : "top-4"}`;
    let t12;
    if ($[11] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t11
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this);
        $[11] = t11;
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] !== t10 || $[14] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-6 h-6",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t12;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] !== t13 || $[17] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "md:hidden p-5 z-[999] relative",
            onClick: t8,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[16] = t13;
        $[17] = t8;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== t14 || $[20] !== t6) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full mx-auto px-10 py-4 flex items-center justify-between",
            children: [
                t6,
                t7,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t6;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== open) {
        t16 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/70 backdrop-blur-md animate-overlay z-50 flex flex-col items-center justify-center gap-15 text-5xl font-light text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/drawings",
                    onClick: {
                        "Navbar[<Link>.onClick]": ()=>setOpen(false)
                    }["Navbar[<Link>.onClick]"],
                    className: "menu-item menu-delay-2",
                    children: "Portfolio"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 121,
                    columnNumber: 180
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    onClick: {
                        "Navbar[<Link>.onClick]": ()=>setOpen(false)
                    }["Navbar[<Link>.onClick]"],
                    className: "menu-item menu-delay-3",
                    children: "Contact"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 123,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/about",
                    onClick: {
                        "Navbar[<Link>.onClick]": ()=>setOpen(false)
                    }["Navbar[<Link>.onClick]"],
                    className: "menu-item menu-delay-1",
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 125,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 121,
            columnNumber: 19
        }, this);
        $[22] = open;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== t15 || $[25] !== t16 || $[26] !== t4) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t4,
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t16;
        $[26] = t4;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    return t17;
}
_s(Navbar, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/PageWithNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function PageWithNavbar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "61edd60e44c3cbecf3a9985e19a6d46ebac095e1f8de978beaddd7078a3edf4d") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "61edd60e44c3cbecf3a9985e19a6d46ebac095e1f8de978beaddd7078a3edf4d";
    }
    const { children, variant: t1 } = t0;
    const variant = t1 === undefined ? "dark" : t1;
    let t2;
    if ($[1] !== variant) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: variant
        }, void 0, false, {
            fileName: "[project]/src/components/layout/PageWithNavbar.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = variant;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== children || $[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                children
            ]
        }, void 0, true);
        $[3] = children;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_c = PageWithNavbar;
var _c;
__turbopack_context__.k.register(_c, "PageWithNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/drawings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawings",
    ()=>drawings
]);
const drawings = [
    {
        src: "/drawing/1.jpg",
        year: 2024
    },
    {
        src: "/drawing/2.jpg",
        year: 2024
    },
    {
        src: "/drawing/3.jpg",
        year: 2024
    },
    {
        src: "/drawing/4.jpg",
        year: 2025
    },
    {
        src: "/drawing/5.jpg",
        year: 2025
    },
    {
        src: "/drawing/6.jpg",
        year: 2024
    },
    {
        src: "/drawing/7.jpg",
        year: 2024
    },
    {
        src: "/drawing/8.jpg",
        year: 2024
    },
    {
        src: "/drawing/9.jpg",
        year: 2025
    },
    {
        src: "/drawing/10.jpg",
        year: 2025
    },
    {
        src: "/drawing/11.jpg",
        year: 2025
    },
    {
        src: "/drawing/12.jpg",
        year: 2024
    },
    {
        src: "/drawing/13.jpg",
        year: 2024
    },
    {
        src: "/drawing/14.jpg",
        year: 2025
    },
    {
        src: "/drawing/15.jpg",
        year: 2025
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/gallery/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import PageWithNavbar from "@/components/layout/PageWithNavbar";
// import { drawings } from "@/data/drawings";
// import Image from "next/image";
// export default function GalleryPage() {
//   return (
//     <PageWithNavbar variant="light">
//       <main className="pt-32 pb-20 max-w-6xl mx-auto px-6">
//         <h1 className="text-4xl mb-12 tracking-wide text-center">
//           Hidden Waters 2024-2025
//         </h1>
//          <p className="text-center max-w-2xl mx-auto mt-6 mb-12 text-lg leading-relaxed">
//           These monochromatic drawings is a continuous meditative series that largely uses techniques used in automatic drawing. With motifs seen in medieval tapestries, through a kaleidoscope lens of visual storytelling- Hidden Waters is a series that is veiled in layers of graphite with imagery viewed as fragments of lost dreams.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {drawings.map((item, i) => (
//             <div key={i} className="group overflow-hidden rounded-md">
//               <Image
//                 src={item.src}
//                 alt=""
//                 width={600}
//                 height={800}
//                 className="
//                   w-full h-auto object-cover
//                   transition-all duration-300
//                   group-hover:scale-[1.03] group-hover:opacity-90
//                 "
//               />
//             </div>
//           ))}
//         </div>
//       </main>
//     </PageWithNavbar>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>GalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageWithNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageWithNavbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$drawings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/drawings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function GalleryPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "2c73ea7d133ae984e989cecc44e1c1226f2af790a41f1dc4393ab856e447b651") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c73ea7d133ae984e989cecc44e1c1226f2af790a41f1dc4393ab856e447b651";
    }
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "GalleryPage[prev_0]": ()=>{
                setIndex(_GalleryPagePrev_0SetIndex);
            }
        })["GalleryPage[prev_0]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const prev_0 = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "GalleryPage[next]": ()=>{
                setIndex(_GalleryPageNextSetIndex);
            }
        })["GalleryPage[next]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const next = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl tracking-wide text-center",
            children: "Hidden Waters 2024–2025"
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center max-w-2xl mx-auto mt-6 mb-12 text-lg leading-relaxed",
            children: "These monochromatic drawings is a continuous meditative series that largely uses techniques used in automatic drawing. With motifs seen in medieval tapestries, through a kaleidoscope lens of visual storytelling- Hidden Waters is a series that is veiled in layers of graphite with imagery viewed as fragments of lost dreams"
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    const t4 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$drawings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawings"][index];
    const t5 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$drawings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawings"][index];
    let t6;
    if ($[5] !== t4.src || $[6] !== t5.src) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: t5.src,
            alt: "",
            fill: true,
            className: "object-contain transition-opacity duration-500"
        }, t4.src, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[5] = t4.src;
        $[6] = t5.src;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: prev_0,
            className: "\n              absolute left-4 top-1/2 -translate-y-1/2\n              bg-white/60 hover:bg-white/80\n              text-black px-3 py-1 rounded-full\n              transition\n            ",
            children: "←"
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: next,
            className: "\n              absolute right-4 top-1/2 -translate-y-1/2\n              bg-white/60 hover:bg-white/80\n              text-black px-3 py-1 rounded-full\n              transition\n            ",
            children: "→"
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full aspect-[4/3] overflow-hidden rounded-md bg-[#faf6f1]",
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== index) {
        t10 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$drawings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawings"].map({
            "GalleryPage[drawings.map()]": (item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "GalleryPage[drawings.map() > <button>.onClick]": ()=>setIndex(i)
                    }["GalleryPage[drawings.map() > <button>.onClick]"],
                    className: "shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
                  relative w-24 h-24 rounded-md overflow-hidden
                  transition-opacity duration-300
                  ${i === index ? "opacity-100" : "opacity-40 hover:opacity-70"}
                `,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: item.src,
                            alt: "",
                            fill: true,
                            className: "object-contain bg-[#f0ebe4]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 130,
                            columnNumber: 20
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/gallery/page.tsx",
                        lineNumber: 126,
                        columnNumber: 81
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 124,
                    columnNumber: 51
                }, this)
        }["GalleryPage[drawings.map()]"]);
        $[12] = index;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex gap-4 overflow-x-auto pb-2",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t11 || $[17] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageWithNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "light",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-2 pb-20 max-w-4xl mx-auto px-6",
                children: [
                    t2,
                    t3,
                    t9,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gallery/page.tsx",
                lineNumber: 147,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t9;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    return t12;
}
_s(GalleryPage, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");
_c = GalleryPage;
function _GalleryPageNextSetIndex(prev_1) {
    return (prev_1 + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$drawings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawings"].length;
}
function _GalleryPagePrev_0SetIndex(prev) {
    return prev === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$drawings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawings"].length - 1 : prev - 1;
}
var _c;
__turbopack_context__.k.register(_c, "GalleryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_76df7cbd._.js.map