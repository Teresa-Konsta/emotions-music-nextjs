"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/music-notes",{

/***/ "./src/pages/music-notes.js":
/*!**********************************!*\
  !*** ./src/pages/music-notes.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicNotesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/pulse-slice */ \"./src/store/pulse-slice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/PulseInput.module.css */ \"./src/components/layout/PulseInput.module.css\");\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction specifyColor(pulseResult) {\n    let color;\n    switch(pulseResult){\n        case pulseResult == 0 || pulseResult == 1:\n            return color = \"grey\";\n        case pulseResult < 1:\n            return color = \"black\";\n        case pulseResult < 3 && pulseResult > 2:\n            return color = \"brown\";\n        case pulseResult <= 2 && pulseResult > 1:\n            return color = \"blue\";\n        case pulseResult < 7 && pulseResult >= 5:\n            return color = \"green\";\n        case pulseResult < 10 && pulseResult >= 7:\n            return color = \"yellow\";\n        case pulseResult < 5 && pulseResult >= 3:\n            return color = \"violet\";\n        case pulseResult >= 10:\n            return color = \"orange\";\n        default:\n            return color = \"orange\";\n    }\n}\nfunction specifyMusicNote(color) {\n    let mnote;\n    switch(color){\n        case color = \"grey\":\n            return mnote = \"G, bass clef\";\n        case color = \"black\":\n            return mnote = \"D, bass clef\";\n        case color = \"brown\":\n            return mnote = \"B, bass clef\";\n        case color = \"blue\":\n            return mnote = \"F, bass clef\";\n        case color = \"green\":\n            return mnote = \"G, treble clef\";\n        case color = \"orange\":\n            return mnote = \"B, treble clef\";\n        case color = \"yellow\":\n            return mnote = \"F, treble clef\";\n        case color = \"violet\":\n            return mnote = \"E, treble clef\";\n        default:\n            return mnote = \"B, treble clef\";\n    }\n}\nfunction setAudioSrc(mnote) {\n    let audiosrc;\n    switch(mnote){\n        case mnote = \"G, bass clef\":\n            return audiosrc = \"audio/g3grey.mp3\";\n        case mnote = \"D, bass clef\":\n            return audiosrc = \"audio/d3black.mp3\";\n        case mnote = \"B, bass clef\":\n            return audiosrc = \"audio/b3brown.mp3\";\n        case mnote = \"F, bass clef\":\n            return audiosrc = \"audio/f3blue.mp3\";\n        case mnote = \"G, treble clef\":\n            return audiosrc = \"audio/g5green.mp3\";\n        case mnote = \"B, treble clef\":\n            return audiosrc = \"audio/b5orange.mp3\";\n        case mnote = \"F, treble clef\":\n            return audiosrc = \"audio/f-5yellow.mp3\";\n        case mnote = \"E, treble clef\":\n            return audiosrc = \"audio/e5violet.mp3\";\n        default:\n            return audiosrc = \"audio/b5orange.mp3\";\n    }\n}\nfunction MusicNotesPage() {\n    _s();\n    const pulse1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput1);\n    const pulse2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput2);\n    const pulse3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput3);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    let pulseResult1 = pulse1 - pulse2;\n    let pulseResult2 = pulse2 - pulse3;\n    let pulseResult3 = pulse3 - pulse1;\n    if (pulseResult1 < 0) {\n        pulseResult1 *= -1;\n    }\n    ;\n    if (pulseResult2 < 0) {\n        pulseResult2 *= -1;\n    }\n    ;\n    if (pulseResult3 < 0) {\n        pulseResult3 *= -1;\n    }\n    ;\n    console.log(pulseResult1);\n    console.log(pulseResult2);\n    console.log(pulseResult3);\n    const color1 = specifyColor(pulseResult1);\n    const color2 = specifyColor(pulseResult2);\n    const color3 = specifyColor(pulseResult3);\n    console.log(color1);\n    const note1 = specifyMusicNote(color1);\n    const note2 = specifyMusicNote(color2);\n    const note3 = specifyMusicNote(color3);\n    const audiosrc1 = setAudioSrc(note1);\n    const audiosrc2 = setAudioSrc(note2);\n    const audiosrc3 = setAudioSrc(note3);\n    const goHomeHandler = (event)=>{\n        event.preventDefault();\n        dispatch(_store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__.pulseActions.setDefault());\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Here are music notes for your mood:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note2\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note3\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 120,\n                columnNumber: 31\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                autoPlay: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc1,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 122,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 123,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc2,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 125,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 126,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc3,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 128,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 127,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 129,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goHomeHandler,\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 131,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n        lineNumber: 116,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicNotesPage, \"OP7NtAuzJ5YEVAWcVCBTqJDvwjA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MusicNotesPage;\nvar _c;\n$RefreshReg$(_c, \"MusicNotesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXQTtRQUNYQSxvREFBV0E7UUFDVEMsb0RBQVdBO1FBQ2JFLGtEQUFTQTs7O0tBTEpTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tdXNpYy1ub3Rlcy5qcz8zYmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcHVsc2VBY3Rpb25zIH0gZnJvbSAnQC9zdG9yZS9wdWxzZS1zbGljZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvUHVsc2VJbnB1dC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIHNwZWNpZnlDb2xvcihwdWxzZVJlc3VsdCkge1xyXG4gICAgbGV0IGNvbG9yO1xyXG4gICAgc3dpdGNoKHB1bHNlUmVzdWx0KSB7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPT0gMCB8fCBwdWxzZVJlc3VsdCA9PSAxKTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yID0gXCJncmV5XCI7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPCAxKTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgMyAmJiBwdWxzZVJlc3VsdCA+IDIpOlxyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBcImJyb3duXCI7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPD0gMiAmJiBwdWxzZVJlc3VsdCA+IDEpOlxyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDcgJiYgcHVsc2VSZXN1bHQgPj0gNSk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDEwICYmIHB1bHNlUmVzdWx0ID49IDcpOlxyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgNSAmJiBwdWxzZVJlc3VsdCA+PSAzKTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yID0gXCJ2aW9sZXRcIjtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA+PSAxMCk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9ICdvcmFuZ2UnO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9ICdvcmFuZ2UnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzcGVjaWZ5TXVzaWNOb3RlKGNvbG9yKSB7XHJcbiAgICBsZXQgbW5vdGU7ICAgICAgIFxyXG4gICAgc3dpdGNoKGNvbG9yKSB7XHJcbiAgICAgICAgY2FzZSAoY29sb3IgPSBcImdyZXlcIik6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiRywgYmFzcyBjbGVmXCI7XHJcbiAgICAgICAgY2FzZSAoY29sb3IgPSBcImJsYWNrXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSBcIkQsIGJhc3MgY2xlZlwiO1xyXG4gICAgICAgIGNhc2UgKGNvbG9yID0gXCJicm93blwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIG1ub3RlID0gXCJCLCBiYXNzIGNsZWZcIjtcclxuICAgICAgICBjYXNlIChjb2xvciA9IFwiYmx1ZVwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIG1ub3RlID0gXCJGLCBiYXNzIGNsZWZcIjtcclxuICAgICAgICBjYXNlIChjb2xvciA9IFwiZ3JlZW5cIik6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiRywgdHJlYmxlIGNsZWZcIjtcclxuICAgICAgICBjYXNlIChjb2xvciA9IFwib3JhbmdlXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSBcIkIsIHRyZWJsZSBjbGVmXCI7XHJcbiAgICAgICAgY2FzZSAoY29sb3IgPSBcInllbGxvd1wiKTpcclxuICAgICAgICAgICAgcmV0dXJuIG1ub3RlID0gXCJGLCB0cmVibGUgY2xlZlwiO1xyXG4gICAgICAgIGNhc2UgKGNvbG9yID0gXCJ2aW9sZXRcIik6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiRSwgdHJlYmxlIGNsZWZcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSAnQiwgdHJlYmxlIGNsZWYnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBdWRpb1NyYyAobW5vdGUpIHtcclxuICAgIGxldCBhdWRpb3NyYztcclxuICAgIHN3aXRjaChtbm90ZSkge1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID0gXCJHLCBiYXNzIGNsZWZcIik6XHJcbiAgICAgICAgICAgIHJldHVybiBhdWRpb3NyYyA9ICdhdWRpby9nM2dyZXkubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9IFwiRCwgYmFzcyBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9zcmMgPSAnYXVkaW8vZDNibGFjay5tcDMnO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID0gXCJCLCBiYXNzIGNsZWZcIik6XHJcbiAgICAgICAgICAgIHJldHVybiBhdWRpb3NyYyA9ICdhdWRpby9iM2Jyb3duLm1wMyc7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPSBcIkYsIGJhc3MgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvc3JjID0gJ2F1ZGlvL2YzYmx1ZS5tcDMnO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID0gXCJHLCB0cmVibGUgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvc3JjID0gJ2F1ZGlvL2c1Z3JlZW4ubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9IFwiQiwgdHJlYmxlIGNsZWZcIik6XHJcbiAgICAgICAgICAgIHJldHVybiBhdWRpb3NyYyA9ICdhdWRpby9iNW9yYW5nZS5tcDMnO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID0gXCJGLCB0cmVibGUgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvc3JjID0gJ2F1ZGlvL2YtNXllbGxvdy5tcDMnO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID0gXCJFLCB0cmVibGUgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvc3JjID0gJ2F1ZGlvL2U1dmlvbGV0Lm1wMyc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvc3JjID0gJ2F1ZGlvL2I1b3JhbmdlLm1wMyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE11c2ljTm90ZXNQYWdlKCkge1xyXG4gICAgY29uc3QgcHVsc2UxID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHVsc2UucHVsc2VJbnB1dDEpO1xyXG4gICAgY29uc3QgcHVsc2UyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHVsc2UucHVsc2VJbnB1dDIpO1xyXG4gICAgY29uc3QgcHVsc2UzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHVsc2UucHVsc2VJbnB1dDMpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgbGV0IHB1bHNlUmVzdWx0MSA9IChwdWxzZTEgLSBwdWxzZTIpO1xyXG4gICAgbGV0IHB1bHNlUmVzdWx0MiA9IChwdWxzZTIgLSBwdWxzZTMpO1xyXG4gICAgbGV0IHB1bHNlUmVzdWx0MyA9IChwdWxzZTMgLSBwdWxzZTEpO1xyXG4gICAgaWYgKHB1bHNlUmVzdWx0MSA8IDApIHsgcHVsc2VSZXN1bHQxICo9IC0xOyB9O1xyXG4gICAgaWYgKHB1bHNlUmVzdWx0MiA8IDApIHsgcHVsc2VSZXN1bHQyICo9IC0xOyB9O1xyXG4gICAgaWYgKHB1bHNlUmVzdWx0MyA8IDApIHsgcHVsc2VSZXN1bHQzICo9IC0xOyB9O1xyXG4gICAgY29uc29sZS5sb2cocHVsc2VSZXN1bHQxKTtcclxuICAgIGNvbnNvbGUubG9nKHB1bHNlUmVzdWx0Mik7XHJcbiAgICBjb25zb2xlLmxvZyhwdWxzZVJlc3VsdDMpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yMSA9IHNwZWNpZnlDb2xvcihwdWxzZVJlc3VsdDEpO1xyXG4gICAgY29uc3QgY29sb3IyID0gc3BlY2lmeUNvbG9yKHB1bHNlUmVzdWx0Mik7XHJcbiAgICBjb25zdCBjb2xvcjMgPSBzcGVjaWZ5Q29sb3IocHVsc2VSZXN1bHQzKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbG9yMSlcclxuXHJcbiAgICBjb25zdCBub3RlMSA9IHNwZWNpZnlNdXNpY05vdGUoY29sb3IxKTtcclxuICAgIGNvbnN0IG5vdGUyID0gc3BlY2lmeU11c2ljTm90ZShjb2xvcjIpO1xyXG4gICAgY29uc3Qgbm90ZTMgPSBzcGVjaWZ5TXVzaWNOb3RlKGNvbG9yMyk7ICAgIFxyXG5cclxuICAgIGNvbnN0IGF1ZGlvc3JjMSA9IHNldEF1ZGlvU3JjKG5vdGUxKTtcclxuICAgIGNvbnN0IGF1ZGlvc3JjMiA9IHNldEF1ZGlvU3JjKG5vdGUyKTtcclxuICAgIGNvbnN0IGF1ZGlvc3JjMyA9IHNldEF1ZGlvU3JjKG5vdGUzKTtcclxuXHJcbiAgICBjb25zdCBnb0hvbWVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNwYXRjaChwdWxzZUFjdGlvbnMuc2V0RGVmYXVsdCgpKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsPkhlcmUgYXJlIG11c2ljIG5vdGVzIGZvciB5b3VyIG1vb2Q6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdj57bm90ZTF9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e25vdGUyfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntub3RlM308L2Rpdj48YnIvPlxyXG4gICAgICAgICAgICA8YXVkaW8gY29udHJvbHM9XCJjb250cm9sc1wiIGF1dG9QbGF5PXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXthdWRpb3NyYzF9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cclxuICAgICAgICAgICAgPC9hdWRpbz48YnIvPlxyXG4gICAgICAgICAgICA8YXVkaW8gY29udHJvbHM9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2F1ZGlvc3JjMn0gdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxyXG4gICAgICAgICAgICA8L2F1ZGlvPjxici8+XHJcbiAgICAgICAgICAgIDxhdWRpbyBjb250cm9scz1cImNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YXVkaW9zcmMzfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvYXVkaW8+PGJyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z29Ib21lSGFuZGxlcn0+SG9tZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInB1bHNlQWN0aW9ucyIsInVzZVJvdXRlciIsInN0eWxlcyIsInNwZWNpZnlDb2xvciIsInB1bHNlUmVzdWx0IiwiY29sb3IiLCJzcGVjaWZ5TXVzaWNOb3RlIiwibW5vdGUiLCJzZXRBdWRpb1NyYyIsImF1ZGlvc3JjIiwiTXVzaWNOb3Rlc1BhZ2UiLCJwdWxzZTEiLCJzdGF0ZSIsInB1bHNlIiwicHVsc2VJbnB1dDEiLCJwdWxzZTIiLCJwdWxzZUlucHV0MiIsInB1bHNlMyIsInB1bHNlSW5wdXQzIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJwdWxzZVJlc3VsdDEiLCJwdWxzZVJlc3VsdDIiLCJwdWxzZVJlc3VsdDMiLCJjb25zb2xlIiwibG9nIiwiY29sb3IxIiwiY29sb3IyIiwiY29sb3IzIiwibm90ZTEiLCJub3RlMiIsIm5vdGUzIiwiYXVkaW9zcmMxIiwiYXVkaW9zcmMyIiwiYXVkaW9zcmMzIiwiZ29Ib21lSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXREZWZhdWx0IiwicHVzaCIsImRpdiIsImxhYmVsIiwiYnIiLCJhdWRpbyIsImNvbnRyb2xzIiwiYXV0b1BsYXkiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiY29udHJvbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/music-notes.js\n"));

/***/ })

});