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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicNotesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/pulse-slice */ \"./src/store/pulse-slice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/PulseInput.module.css */ \"./src/components/layout/PulseInput.module.css\");\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nconst colorNotePair = {\n    grey: \"G, bass clef\",\n    black: \"D, bass clef\",\n    brown: \"B, bass clef\",\n    blue: \"F, bass clef\",\n    green: \"G, treble clef\",\n    orange: \"B, treble clef\",\n    yellow: \"F, treble clef\",\n    violet: \"E, treble clef\"\n};\nfunction specifyMusicNote(pulseResult) {\n    if (pulseResult == 0 || pulseResult == 1) return colorNotePair.grey;\n    else if (pulseResult < 1) return colorNotePair.black;\n    else if (pulseResult < 3 && pulseResult > 2) return colorNotePair.brown;\n    else if (pulseResult <= 2 && pulseResult > 1) return colorNotePair.blue;\n    else if (pulseResult < 7 && pulseResult >= 5) return colorNotePair.green;\n    else if (pulseResult < 10 && pulseResult >= 7) return colorNotePair.yellow;\n    switch(pulseResult){\n        case pulseResult == 0:\n            console.log(colorNotePair.grey);\n            return colorNotePair.grey;\n        case pulseResult == 1:\n            return colorNotePair.grey;\n        case pulseResult < 1:\n            return colorNotePair.black;\n        case pulseResult < 3 && pulseResult > 2:\n            return colorNotePair.brown;\n        case pulseResult <= 2 && pulseResult > 1:\n            return colorNotePair.blue;\n        case pulseResult < 7 && pulseResult >= 5:\n            return colorNotePair.green;\n        case pulseResult < 10 && pulseResult >= 7:\n            return colorNotePair.yellow;\n        case pulseResult < 5 && pulseResult >= 3:\n            return colorNotePair.violet;\n        case pulseResult >= 10:\n            return colorNotePair.orange;\n        default:\n            return colorNotePair.orange;\n    }\n}\nfunction setAudioSrc(mnote) {\n    switch(mnote){\n        case mnote == \"G, bass clef\":\n            return \"audio/g3grey.mp3\";\n        case mnote == \"D, bass clef\":\n            return \"audio/d3black.mp3\";\n        case mnote == \"B, bass clef\":\n            return \"audio/b3brown.mp3\";\n        case mnote == \"F, bass clef\":\n            return \"audio/f3blue.mp3\";\n        case mnote == \"G, treble clef\":\n            return \"audio/g5green.mp3\";\n        case mnote == \"B, treble clef\":\n            return \"audio/b5orange.mp3\";\n        case mnote == \"F, treble clef\":\n            return \"audio/f-5yellow.mp3\";\n        case mnote == \"E, treble clef\":\n            return \"audio/e5violet.mp3\";\n        default:\n            return \"audio/b5orange.mp3\";\n    }\n}\nfunction MusicNotesPage() {\n    _s();\n    const pulse1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput1);\n    const pulse2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput2);\n    const pulse3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput3);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    let pulseResult1 = pulse1 - pulse2;\n    let pulseResult2 = pulse2 - pulse3;\n    let pulseResult3 = pulse3 - pulse1;\n    if (pulseResult1 < 0) {\n        pulseResult1 *= -1;\n    }\n    ;\n    if (pulseResult2 < 0) {\n        pulseResult2 *= -1;\n    }\n    ;\n    if (pulseResult3 < 0) {\n        pulseResult3 *= -1;\n    }\n    ;\n    console.log(pulseResult1);\n    console.log(pulseResult2);\n    console.log(pulseResult3);\n    console.log(colorNotePair.green);\n    const note1 = specifyMusicNote(pulseResult1);\n    const note2 = specifyMusicNote(pulseResult2);\n    const note3 = specifyMusicNote(pulseResult3);\n    console.log(note1);\n    console.log(note2);\n    console.log(note3);\n    const audiosrc1 = setAudioSrc(note1);\n    const audiosrc2 = setAudioSrc(note2);\n    const audiosrc3 = setAudioSrc(note3);\n    const goHomeHandler = (event)=>{\n        event.preventDefault();\n        dispatch(_store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__.pulseActions.setDefault());\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Here are music notes for your mood:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note2\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note3\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 116,\n                columnNumber: 31\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                autoPlay: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc1,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 118,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 119,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc2,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 121,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 122,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc3,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 124,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 125,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goHomeHandler,\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 127,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n        lineNumber: 112,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicNotesPage, \"OP7NtAuzJ5YEVAWcVCBTqJDvwjA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MusicNotesPage;\nvar _c;\n$RefreshReg$(_c, \"MusicNotesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SVMsV0FBV2xELHlGQUFjOzBCQUMxQiw0RUFBQ29EO29CQUFPQyxTQUFTakI7OEJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhELENBQUM7R0F2RHVCcEI7O1FBQ0xwQixvREFBV0E7UUFDWEEsb0RBQVdBO1FBQ1hBLG9EQUFXQTtRQUNUQyxvREFBV0E7UUFDYkUsa0RBQVNBOzs7S0FMSmlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tdXNpYy1ub3Rlcy5qcz8zYmJjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHB1bHNlQWN0aW9ucyB9IGZyb20gJ0Avc3RvcmUvcHVsc2Utc2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1B1bHNlSW5wdXQubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBjb2xvck5vdGVQYWlyID0ge1xyXG4gICAgICAgIGdyZXk6IFwiRywgYmFzcyBjbGVmXCIsXHJcbiAgICAgICAgYmxhY2s6IFwiRCwgYmFzcyBjbGVmXCIsXHJcbiAgICAgICAgYnJvd246IFwiQiwgYmFzcyBjbGVmXCIsXHJcbiAgICAgICAgYmx1ZTogXCJGLCBiYXNzIGNsZWZcIixcclxuICAgICAgICBncmVlbjogXCJHLCB0cmVibGUgY2xlZlwiLFxyXG4gICAgICAgIG9yYW5nZTogXCJCLCB0cmVibGUgY2xlZlwiLFxyXG4gICAgICAgIHllbGxvdzogXCJGLCB0cmVibGUgY2xlZlwiLFxyXG4gICAgICAgIHZpb2xldDogXCJFLCB0cmVibGUgY2xlZlwiXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzcGVjaWZ5TXVzaWNOb3RlKHB1bHNlUmVzdWx0KSB7XHJcbiAgICBpZihwdWxzZVJlc3VsdCA9PSAwIHx8IHB1bHNlUmVzdWx0ID09IDEpIHJldHVybiBjb2xvck5vdGVQYWlyLmdyZXk7XHJcbiAgICBlbHNlIGlmKHB1bHNlUmVzdWx0IDwgMSkgcmV0dXJuIGNvbG9yTm90ZVBhaXIuYmxhY2s7XHJcbiAgICBlbHNlIGlmKHB1bHNlUmVzdWx0IDwgMyAmJiBwdWxzZVJlc3VsdCA+IDIpIHJldHVybiBjb2xvck5vdGVQYWlyLmJyb3duO1xyXG4gICAgZWxzZSBpZihwdWxzZVJlc3VsdCA8PSAyICYmIHB1bHNlUmVzdWx0ID4gMSkgcmV0dXJuIGNvbG9yTm90ZVBhaXIuYmx1ZTtcclxuICAgIGVsc2UgaWYocHVsc2VSZXN1bHQgPCA3ICYmIHB1bHNlUmVzdWx0ID49IDUpIHJldHVybiBjb2xvck5vdGVQYWlyLmdyZWVuO1xyXG4gICAgZWxzZSBpZihwdWxzZVJlc3VsdCA8IDEwICYmIHB1bHNlUmVzdWx0ID49IDcpIHJldHVybiBjb2xvck5vdGVQYWlyLnllbGxvdztcclxuXHJcblxyXG4gICAgc3dpdGNoKHB1bHNlUmVzdWx0KSB7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPT0gMCk6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbG9yTm90ZVBhaXIuZ3JleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvck5vdGVQYWlyLmdyZXk7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPT0gMSk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvck5vdGVQYWlyLmdyZXk7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPCAxKTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yTm90ZVBhaXIuYmxhY2s7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPCAzICYmIHB1bHNlUmVzdWx0ID4gMik6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvck5vdGVQYWlyLmJyb3duO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDw9IDIgJiYgcHVsc2VSZXN1bHQgPiAxKTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yTm90ZVBhaXIuYmx1ZTtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDcgJiYgcHVsc2VSZXN1bHQgPj0gNSk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvck5vdGVQYWlyLmdyZWVuO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgMTAgJiYgcHVsc2VSZXN1bHQgPj0gNyk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvck5vdGVQYWlyLnllbGxvdztcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDUgJiYgcHVsc2VSZXN1bHQgPj0gMyk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvck5vdGVQYWlyLnZpb2xldDtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA+PSAxMCk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvck5vdGVQYWlyLm9yYW5nZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gY29sb3JOb3RlUGFpci5vcmFuZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEF1ZGlvU3JjIChtbm90ZSkge1xyXG4gICAgc3dpdGNoKG1ub3RlKSB7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPT0gXCJHLCBiYXNzIGNsZWZcIik6XHJcbiAgICAgICAgICAgIHJldHVybiAnYXVkaW8vZzNncmV5Lm1wMyc7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPT0gXCJELCBiYXNzIGNsZWZcIik6XHJcbiAgICAgICAgICAgIHJldHVybiAnYXVkaW8vZDNibGFjay5tcDMnO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID09IFwiQiwgYmFzcyBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvL2IzYnJvd24ubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBcIkYsIGJhc3MgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuICdhdWRpby9mM2JsdWUubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBcIkcsIHRyZWJsZSBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvL2c1Z3JlZW4ubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBcIkIsIHRyZWJsZSBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvL2I1b3JhbmdlLm1wMyc7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPT0gXCJGLCB0cmVibGUgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuICdhdWRpby9mLTV5ZWxsb3cubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBcIkUsIHRyZWJsZSBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvL2U1dmlvbGV0Lm1wMyc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdhdWRpby9iNW9yYW5nZS5tcDMnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNdXNpY05vdGVzUGFnZSgpIHtcclxuICAgIGNvbnN0IHB1bHNlMSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnB1bHNlLnB1bHNlSW5wdXQxKTtcclxuICAgIGNvbnN0IHB1bHNlMiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnB1bHNlLnB1bHNlSW5wdXQyKTtcclxuICAgIGNvbnN0IHB1bHNlMyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnB1bHNlLnB1bHNlSW5wdXQzKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGxldCBwdWxzZVJlc3VsdDEgPSAocHVsc2UxIC0gcHVsc2UyKTtcclxuICAgIGxldCBwdWxzZVJlc3VsdDIgPSAocHVsc2UyIC0gcHVsc2UzKTtcclxuICAgIGxldCBwdWxzZVJlc3VsdDMgPSAocHVsc2UzIC0gcHVsc2UxKTtcclxuICAgIGlmIChwdWxzZVJlc3VsdDEgPCAwKSB7IHB1bHNlUmVzdWx0MSAqPSAtMTsgfTtcclxuICAgIGlmIChwdWxzZVJlc3VsdDIgPCAwKSB7IHB1bHNlUmVzdWx0MiAqPSAtMTsgfTtcclxuICAgIGlmIChwdWxzZVJlc3VsdDMgPCAwKSB7IHB1bHNlUmVzdWx0MyAqPSAtMTsgfTtcclxuICAgIGNvbnNvbGUubG9nKHB1bHNlUmVzdWx0MSk7XHJcbiAgICBjb25zb2xlLmxvZyhwdWxzZVJlc3VsdDIpO1xyXG4gICAgY29uc29sZS5sb2cocHVsc2VSZXN1bHQzKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbG9yTm90ZVBhaXIuZ3JlZW4pO1xyXG5cclxuICAgIGNvbnN0IG5vdGUxID0gc3BlY2lmeU11c2ljTm90ZShwdWxzZVJlc3VsdDEpO1xyXG4gICAgY29uc3Qgbm90ZTIgPSBzcGVjaWZ5TXVzaWNOb3RlKHB1bHNlUmVzdWx0Mik7XHJcbiAgICBjb25zdCBub3RlMyA9IHNwZWNpZnlNdXNpY05vdGUocHVsc2VSZXN1bHQzKTtcclxuICAgIGNvbnNvbGUubG9nKG5vdGUxKTtcclxuICAgIGNvbnNvbGUubG9nKG5vdGUyKTtcclxuICAgIGNvbnNvbGUubG9nKG5vdGUzKTtcclxuXHJcbiAgICBjb25zdCBhdWRpb3NyYzEgPSBzZXRBdWRpb1NyYyhub3RlMSk7XHJcbiAgICBjb25zdCBhdWRpb3NyYzIgPSBzZXRBdWRpb1NyYyhub3RlMik7XHJcbiAgICBjb25zdCBhdWRpb3NyYzMgPSBzZXRBdWRpb1NyYyhub3RlMyk7XHJcblxyXG4gICAgY29uc3QgZ29Ib21lSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVsc2VBY3Rpb25zLnNldERlZmF1bHQoKSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD5IZXJlIGFyZSBtdXNpYyBub3RlcyBmb3IgeW91ciBtb29kOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXY+e25vdGUxfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntub3RlMn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57bm90ZTN9PC9kaXY+PGJyLz5cclxuICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzPVwiY29udHJvbHNcIiBhdXRvUGxheT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YXVkaW9zcmMxfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvYXVkaW8+PGJyLz5cclxuICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzPVwiY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXthdWRpb3NyYzJ9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cclxuICAgICAgICAgICAgPC9hdWRpbz48YnIvPlxyXG4gICAgICAgICAgICA8YXVkaW8gY29udHJvbHM9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2F1ZGlvc3JjM30gdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxyXG4gICAgICAgICAgICA8L2F1ZGlvPjxici8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvSG9tZUhhbmRsZXJ9PkhvbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJwdWxzZUFjdGlvbnMiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJjb2xvck5vdGVQYWlyIiwiZ3JleSIsImJsYWNrIiwiYnJvd24iLCJibHVlIiwiZ3JlZW4iLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJ2aW9sZXQiLCJzcGVjaWZ5TXVzaWNOb3RlIiwicHVsc2VSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic2V0QXVkaW9TcmMiLCJtbm90ZSIsIk11c2ljTm90ZXNQYWdlIiwicHVsc2UxIiwic3RhdGUiLCJwdWxzZSIsInB1bHNlSW5wdXQxIiwicHVsc2UyIiwicHVsc2VJbnB1dDIiLCJwdWxzZTMiLCJwdWxzZUlucHV0MyIsImRpc3BhdGNoIiwicm91dGVyIiwicHVsc2VSZXN1bHQxIiwicHVsc2VSZXN1bHQyIiwicHVsc2VSZXN1bHQzIiwibm90ZTEiLCJub3RlMiIsIm5vdGUzIiwiYXVkaW9zcmMxIiwiYXVkaW9zcmMyIiwiYXVkaW9zcmMzIiwiZ29Ib21lSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXREZWZhdWx0IiwicHVzaCIsImRpdiIsImxhYmVsIiwiYnIiLCJhdWRpbyIsImNvbnRyb2xzIiwiYXV0b1BsYXkiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiY29udHJvbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/music-notes.js\n"));

/***/ })

});