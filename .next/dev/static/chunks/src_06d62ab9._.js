(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/PageWithNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
    if ($[0] !== "c484d066960c0247b8e0b90c56715ce30a3db33af3c32a0231f01cbb2d2a329d") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c484d066960c0247b8e0b90c56715ce30a3db33af3c32a0231f01cbb2d2a329d";
    }
    const { children, variant: t1 } = t0;
    const variant = t1 === undefined ? "dark" : t1;
    let t2;
    if ($[1] !== variant) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: variant
        }, void 0, false, {
            fileName: "[project]/src/components/layout/PageWithNavbar.tsx",
            lineNumber: 20,
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
"[project]/src/app/drawings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useState } from "react";
// import PageWithNavbar from "@/components/layout/PageWithNavbar";
// const images = [
//   "/drawing/2a.jpeg",
//   "/drawing/6a.jpeg",
//   "/drawing/5b.jpeg",
//   "/drawing/9.jpg",
//   "/drawing/5a.jpg",
// ];
// export default function DrawingsPage() {
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <PageWithNavbar variant="light">
//     <main
//       className="
//         relative
//         w-full
//         min-h-[105vh]
//         pt-24
//         pb-20
//         bg-top md:bg-center
//         -mt-30
//         overflow-hidden
//       "
//     >
//       {/* Background slideshow (non-fixed) */}
//       <div className="absolute inset-0 -z-10">
//         {images.map((src, i) => (
//           <div
//             key={i}
//             className={`
//               absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]
//               ${i === index ? "opacity-60" : "opacity-0"}
//             `}
//             style={{ backgroundImage: `url(${src})` }}
//           />
//         ))}
//       </div>
//       {/* Page content */}
//       <div className="relative min-h-[105vh] -mt-30 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl mb-12 tracking-wide">Drawings</h1>
//           <h1 className="text-4xl mb-12 tracking-wide">Illustrations</h1>
//           <h1 className="text-4xl mb-12 tracking-wide">Year</h1>
//         </div>
//       </div>
//     </main>
//     </PageWithNavbar>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>DrawingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageWithNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageWithNavbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "380bf3cccbd7b6b2244d917121c141b6452410587057bbf7c92595759f9d38a2") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "380bf3cccbd7b6b2244d917121c141b6452410587057bbf7c92595759f9d38a2";
    }
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "DrawingsPage[useEffect()]": ()=>{
                const interval = setInterval({
                    "DrawingsPage[useEffect() > setInterval()]": ()=>{
                        setIndex(_DrawingsPageUseEffectSetIntervalSetIndex);
                    }
                }["DrawingsPage[useEffect() > setInterval()]"], 6000);
                return ()=>clearInterval(interval);
            }
        })["DrawingsPage[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== index) {
        t2 = images.map({
            "DrawingsPage[images.map()]": (src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
                absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]
                ${i === index ? "opacity-60" : "opacity-0"}
              `,
                    style: {
                        backgroundImage: `url(${src})`
                    }
                }, i, false, {
                    fileName: "[project]/src/app/drawings/page.tsx",
                    lineNumber: 104,
                    columnNumber: 49
                }, this)
        }["DrawingsPage[images.map()]"]);
        $[3] = index;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 -z-10",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/drawings/page.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-[105vh] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl mb-12 tracking-wide",
                        children: "Drawings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/drawings/page.tsx",
                        lineNumber: 126,
                        columnNumber: 112
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl mb-12 tracking-wide",
                        children: "Illustrations"
                    }, void 0, false, {
                        fileName: "[project]/src/app/drawings/page.tsx",
                        lineNumber: 126,
                        columnNumber: 170
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl mb-12 tracking-wide",
                        children: "Year"
                    }, void 0, false, {
                        fileName: "[project]/src/app/drawings/page.tsx",
                        lineNumber: 126,
                        columnNumber: 233
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/drawings/page.tsx",
                lineNumber: 126,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/drawings/page.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageWithNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "light",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "\n          relative\n          w-full\n          min-h-[105vh]\n          pt-24\n          pb-20\n          bg-top md:bg-center\n          -mt-30\n          overflow-hidden\n        ",
                children: [
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/drawings/page.tsx",
                lineNumber: 133,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/drawings/page.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(DrawingsPage, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = DrawingsPage;
function _DrawingsPageUseEffectSetIntervalSetIndex(prev) {
    return (prev + 1) % images.length;
}
var _c;
__turbopack_context__.k.register(_c, "DrawingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_06d62ab9._.js.map