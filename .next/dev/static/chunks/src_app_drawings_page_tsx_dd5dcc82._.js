(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/drawings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DrawingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    if ($[0] !== "bce2f2d2cdad407ff25f6023bc821f57a0cf8acde0f4726247e3270725acef08") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bce2f2d2cdad407ff25f6023bc821f57a0cf8acde0f4726247e3270725acef08";
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
                    lineNumber: 40,
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
            lineNumber: 54,
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
                        lineNumber: 62,
                        columnNumber: 112
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl mb-12 tracking-wide",
                        children: "Illustrations"
                    }, void 0, false, {
                        fileName: "[project]/src/app/drawings/page.tsx",
                        lineNumber: 62,
                        columnNumber: 170
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl mb-12 tracking-wide",
                        children: "Year"
                    }, void 0, false, {
                        fileName: "[project]/src/app/drawings/page.tsx",
                        lineNumber: 62,
                        columnNumber: 233
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/drawings/page.tsx",
                lineNumber: 62,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/drawings/page.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "\n          relative\n          w-full\n          min-h-[105vh]\n          pt-24\n          pb-20\n          bg-top md:bg-center\n          -mt-30\n          overflow-hidden\n        ",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/drawings/page.tsx",
            lineNumber: 69,
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

//# sourceMappingURL=src_app_drawings_page_tsx_dd5dcc82._.js.map