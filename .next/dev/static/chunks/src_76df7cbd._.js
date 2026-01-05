(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 
__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "334387584cd177e321503ee4ad6da2d083d49b0d715895a1ea7e707cee333d32") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "334387584cd177e321503ee4ad6da2d083d49b0d715895a1ea7e707cee333d32";
    }
    const { variant: t1 } = t0;
    const variant = t1 === undefined ? "dark" : t1;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
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
                lineNumber: 56,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    const t7 = `${"opacity-80 hover:opacity-100 transition-opacity"} ${pathname.startsWith("/drawings") || pathname.startsWith("/gallery") ? "underline underline-offset-4" : ""}`;
    let t8;
    if ($[6] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/drawings",
            className: t7,
            children: "Portfolio"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[6] = t7;
        $[7] = t8;
    } else {
        t8 = $[7];
    }
    const t9 = `${"opacity-80 hover:opacity-100 transition-opacity"} ${pathname === "/about" ? "underline underline-offset-4" : ""}`;
    let t10;
    if ($[8] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/about",
            className: t9,
            children: "About"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 74,
            columnNumber: 11
        }, this);
        $[8] = t9;
        $[9] = t10;
    } else {
        t10 = $[9];
    }
    const t11 = `${"opacity-80 hover:opacity-100 transition-opacity"} ${pathname === "/" ? "underline underline-offset-4" : ""}`;
    let t12;
    if ($[10] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: t11,
            children: "Home"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 83,
            columnNumber: 11
        }, this);
        $[10] = t11;
        $[11] = t12;
    } else {
        t12 = $[11];
    }
    let t13;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://instagram.com/throckmorton.jpg",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "opacity-80 hover:opacity-100 transition-opacity",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                className: "text-xl translate-y-[4px]"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 91,
                columnNumber: 162
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, this);
        $[12] = t13;
    } else {
        t13 = $[12];
    }
    let t14;
    if ($[13] !== t10 || $[14] !== t12 || $[15] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex gap-3 text-lg items-center",
            children: [
                t8,
                t10,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t12;
        $[15] = t8;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== open) {
        t15 = ({
            "Navbar[<button>.onClick]": ()=>setOpen(!open)
        })["Navbar[<button>.onClick]"];
        $[17] = open;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    const t16 = `absolute left-0 block h-[1.5px] w-6 ${lineColor} transform transition-all duration-300 ${open ? "rotate-45 top-3" : "top-2"}`;
    let t17;
    if ($[19] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t16
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[19] = t16;
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    const t18 = `absolute left-0 block h-[1.5px] w-6 ${lineColor} transform transition-all duration-300 ${open ? "-rotate-45 top-3" : "top-4"}`;
    let t19;
    if ($[21] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t18
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[21] = t18;
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    if ($[23] !== t17 || $[24] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-6 h-6",
            children: [
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[23] = t17;
        $[24] = t19;
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    let t21;
    if ($[26] !== t15 || $[27] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "md:hidden p-5 z-[999] relative",
            onClick: t15,
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t20;
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    let t22;
    if ($[29] !== t14 || $[30] !== t21 || $[31] !== t6) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full mx-auto px-4 md:px-10 py-4 flex items-center justify-between",
            children: [
                t6,
                t14,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t21;
        $[31] = t6;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== open) {
        t23 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/70 backdrop-blur-md animate-overlay z-50 \n                     flex flex-col justify-between items-center \n                     pt-40 pb-16 text-5xl font-light text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-12",
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
                            lineNumber: 164,
                            columnNumber: 285
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
                            lineNumber: 166,
                            columnNumber: 89
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: {
                                "Navbar[<Link>.onClick]": ()=>setOpen(false)
                            }["Navbar[<Link>.onClick]"],
                            className: "menu-item menu-delay-1",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 168,
                            columnNumber: 85
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 164,
                    columnNumber: 234
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://instagram.com/throckmorton.jpg",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "opacity-80 hover:opacity-100 transition-opacity mb-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                        className: "text-4xl translate-y-[2px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 170,
                        columnNumber: 247
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 170,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 164,
            columnNumber: 19
        }, this);
        $[33] = open;
        $[34] = t23;
    } else {
        t23 = $[34];
    }
    let t24;
    if ($[35] !== t22 || $[36] !== t23 || $[37] !== t4) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t4,
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[35] = t22;
        $[36] = t23;
        $[37] = t4;
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    return t24;
}
_s(Navbar, "cPPloHdmmqpvPwaD00PIccMz5O4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
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
        src: "/drawing/1.webp",
        year: 2024
    },
    {
        src: "/drawing/2.webp",
        year: 2024
    },
    {
        src: "/drawing/3.webp",
        year: 2024
    },
    {
        src: "/drawing/4.webp",
        year: 2025
    },
    {
        src: "/drawing/5.webp",
        year: 2025
    },
    {
        src: "/drawing/6.webp",
        year: 2024
    },
    {
        src: "/drawing/7.webp",
        year: 2024
    },
    {
        src: "/drawing/8.webp",
        year: 2024
    },
    {
        src: "/drawing/9.webp",
        year: 2025
    },
    {
        src: "/drawing/10.webp",
        year: 2025
    },
    {
        src: "/drawing/11.webp",
        year: 2025
    },
    {
        src: "/drawing/12.webp",
        year: 2024
    },
    {
        src: "/drawing/13.webp",
        year: 2024
    },
    {
        src: "/drawing/14.webp",
        year: 2025
    },
    {
        src: "/drawing/15.webp",
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
// import { useState } from "react";
// import PageWithNavbar from "@/components/layout/PageWithNavbar";
// import { drawings } from "@/data/drawings";
// import Image from "next/image";
// export default function GalleryPage() {
//   const [index, setIndex] = useState(0);
//   const prev = () => {
//     setIndex((prev) => (prev === 0 ? drawings.length - 1 : prev - 1));
//   };
//   const next = () => {
//     setIndex((prev) => (prev + 1) % drawings.length);
//   };
//   return (
//     <PageWithNavbar variant="light">
//       <main className="pt-2 pb-20 max-w-4xl mx-auto px-6">
//         <h1 className="text-3xl text-center">
//           Hidden Waters 2024–2025
//         </h1>
//         <p className="text-center max-w-2xl mx-auto mt-6 mb-12 text-md leading-relaxed">
// Hidden Waters is a continuous series of monochromatic drawings that started in 2024. The technique of automatism, known as automatic drawing, is used in this series. This technique allows the subconscious to produce spontaneous movements and gestures without conscious movements taking over. With motifs seen in medieval tapestries, through a kaleidoscope lens of visual storytelling- Hidden Waters is a series that is veiled in layers of graphite with imagery viewed as dream-like fragments.        </p>
//         {/* Main slideshow */}
//         <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-[#FFFFFF]">
//           <Image
//             key={drawings[index].src}
//             src={drawings[index].src}
//             alt=""
//             fill
//             className="object-contain transition-opacity duration-500"
//           />
//           {/* Left arrow */}
//           <button
//             onClick={prev}
//             className="
//               absolute left-4 top-1/2 -translate-y-1/2
//               bg-white/60 hover:bg-white/80
//               text-black px-1 py-1 
//               transition
//             "
//           >
//             ←
//           </button>
//           {/* Right arrow */}
//           <button
//             onClick={next}
//             className="
//               absolute right-4 top-1/2 -translate-y-1/2
//               bg-white/60 hover:bg-white/80
//               text-black px-1 py-1
//               transition
//             "
//           >
//             →
//           </button>
//         </div>
//         {/* Thumbnail strip */}
//         <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
//           {drawings.map((item, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className="shrink-0"
//             >
//               <div
//                 className={`
//                   relative w-24 h-24 rounded-md overflow-hidden
//                   transition-opacity duration-300
//                   ${i === index ? "opacity-100" : "opacity-40 hover:opacity-70"}
//                 `}
//               >
//                 <Image
//                   src={item.src}
//                   alt=""
//                   fill
//                   className="object-contain bg-[#FFFFFF]"
//                 />
//               </div>
//             </button>
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
    if ($[0] !== "49812dc7c30109cec0142b769c7c5ecf7730b1820e572fc9347caecd50e3f65d") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "49812dc7c30109cec0142b769c7c5ecf7730b1820e572fc9347caecd50e3f65d";
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
            className: "text-3xl text-center",
            children: "Hidden Waters 2024–2025"
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center max-w-2xl mx-auto mt-6 mb-12 text-md leading-relaxed",
            children: "Hidden Waters is a continuous series of monochromatic drawings that started in 2024. The technique of automatism, known as automatic drawing, is used in this series. This technique allows the subconscious to produce spontaneous movements and gestures without conscious movements taking over. With motifs seen in medieval tapestries, through a kaleidoscope lens of visual storytelling—Hidden Waters is a series that is veiled in layers of graphite with imagery viewed as dream-like fragments."
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 140,
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
            lineNumber: 151,
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
            className: "absolute left-1 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-black px-1 py-1 transition",
            children: "←"
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: next,
            className: "absolute right-1 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-black px-1 py-1 transition",
            children: "→"
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 162,
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
            className: "relative w-full aspect-[4/3] overflow-hidden rounded-md bg-[#FFFFFF]",
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 171,
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
                        className: `relative w-24 h-24 rounded-md overflow-hidden transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-40 hover:opacity-70"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: item.src,
                            alt: "",
                            fill: true,
                            className: "object-contain bg-[#FFFFFF]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 182,
                            columnNumber: 241
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/gallery/page.tsx",
                        lineNumber: 182,
                        columnNumber: 81
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 180,
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
            lineNumber: 191,
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
                lineNumber: 199,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 199,
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