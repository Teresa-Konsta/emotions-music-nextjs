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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicNotesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/pulse-slice */ \"./src/store/pulse-slice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/PulseInput.module.css */ \"./src/components/layout/PulseInput.module.css\");\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nconst colorNotePair = {\n    grey: \"G, bass clef\",\n    black: \"D, bass clef\",\n    brown: \"B, bass clef\",\n    blue: \"F, bass clef\",\n    green: \"G, treble clef\",\n    orange: \"B, treble clef\",\n    yellow: \"F, treble clef\",\n    violet: \"E, treble clef\"\n};\n//I use 2 functions instead of 1 for separate color and note calculation for better UX output\nfunction specifyMusicNote(pulseResult) {\n    if (pulseResult == 0 || pulseResult == 1) return colorNotePair.grey;\n    else if (pulseResult < 1) return colorNotePair.black;\n    else if (pulseResult < 3 && pulseResult > 2) return colorNotePair.brown;\n    else if (pulseResult <= 2 && pulseResult > 1) return colorNotePair.blue;\n    else if (pulseResult < 7 && pulseResult >= 5) return colorNotePair.green;\n    else if (pulseResult < 10 && pulseResult >= 7) return colorNotePair.yellow;\n    else if (pulseResult < 5 && pulseResult >= 3) return colorNotePair.violet;\n    else return colorNotePair.orange;\n}\nfunction setAudioSrc(mnote) {\n    switch(mnote){\n        case mnote == colorNotePair.grey:\n            return \"audio/g3grey.mp3\";\n        case mnote == colorNotePair.black:\n            return \"audio/d3black.mp3\";\n        case mnote == colorNotePair.brown:\n            return \"audio/b3brown.mp3\";\n        case mnote == colorNotePair.blue:\n            return \"audio/f3blue.mp3\";\n        case mnote == colorNotePair.green:\n            return \"audio/g5green.mp3\";\n        case mnote == colorNotePair.yellow:\n            return \"audio/f-5yellow.mp3\";\n        case mnote == colorNotePair.violet:\n            return \"audio/e5violet.mp3\";\n        default:\n            return \"audio/b5orange.mp3\";\n    }\n}\nfunction MusicNotesPage() {\n    _s();\n    const pulse1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput1);\n    const pulse2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput2);\n    const pulse3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput3);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    let pulseResult1 = pulse1 - pulse2;\n    let pulseResult2 = pulse2 - pulse3;\n    let pulseResult3 = pulse3 - pulse1;\n    if (pulseResult1 < 0) {\n        pulseResult1 *= -1;\n    }\n    ;\n    if (pulseResult2 < 0) {\n        pulseResult2 *= -1;\n    }\n    ;\n    if (pulseResult3 < 0) {\n        pulseResult3 *= -1;\n    }\n    ;\n    console.log(pulseResult1);\n    console.log(pulseResult2);\n    console.log(pulseResult3);\n    const note1 = specifyMusicNote(pulseResult1);\n    const note2 = specifyMusicNote(pulseResult2);\n    const note3 = specifyMusicNote(pulseResult3);\n    console.log(note1);\n    console.log(note2);\n    console.log(note3);\n    const audiosrc1 = setAudioSrc(note1);\n    const audiosrc2 = setAudioSrc(note2);\n    const audiosrc3 = setAudioSrc(note3);\n    console.log(audiosrc1);\n    console.log(audiosrc2);\n    console.log(audiosrc3);\n    const goHomeHandler = (event)=>{\n        event.preventDefault();\n        dispatch(_store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__.pulseActions.setDefault());\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Here are music notes for your mood:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note2\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note3\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 94,\n                columnNumber: 31\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                autoPlay: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc1,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 97,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc2,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 100,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc3,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 103,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goHomeHandler,\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicNotesPage, \"OP7NtAuzJ5YEVAWcVCBTqJDvwjA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MusicNotesPage;\nvar _c;\n$RefreshReg$(_c, \"MusicNotesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUNLO0lBQ1pOLFFBQVFDLEdBQUcsQ0FBQ007SUFFWixNQUFNQyxnQkFBZ0IsQ0FBQ0MsUUFBVTtRQUM3QkEsTUFBTUMsY0FBYztRQUNwQmYsU0FBU3pCLHVFQUF1QjtRQUNoQzBCLE9BQU9nQixJQUFJLENBQUM7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDRDswQkFBS1g7Ozs7OzswQkFDTiw4REFBQ1c7MEJBQUtWOzs7Ozs7MEJBQ04sOERBQUNVOzBCQUFLVDs7Ozs7OzBCQUFZLDhEQUFDVzs7Ozs7MEJBQ25CLDhEQUFDQztnQkFBTUMsVUFBUztnQkFBV0MsVUFBVSxJQUFJOzBCQUNyQyw0RUFBQ0M7b0JBQU9DLEtBQUtmO29CQUFXZ0IsTUFBSzs7Ozs7Ozs7Ozs7MEJBQ3pCLDhEQUFDTjs7Ozs7MEJBQ1QsOERBQUNDO2dCQUFNQyxVQUFTOzBCQUNaLDRFQUFDRTtvQkFBT0MsS0FBS2Q7b0JBQVdlLE1BQUs7Ozs7Ozs7Ozs7OzBCQUN6Qiw4REFBQ047Ozs7OzBCQUNULDhEQUFDQztnQkFBTUMsVUFBUzswQkFDWiw0RUFBQ0U7b0JBQU9DLEtBQUtiO29CQUFXYyxNQUFLOzs7Ozs7Ozs7OzswQkFDekIsOERBQUNOOzs7OzswQkFDVCw4REFBQ0Y7Z0JBQUlTLFdBQVdsRCx5RkFBYzswQkFDMUIsNEVBQUNvRDtvQkFBT0MsU0FBU2pCOzhCQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloRCxDQUFDO0dBekR1QnRCOztRQUNMbEIsb0RBQVdBO1FBQ1hBLG9EQUFXQTtRQUNYQSxvREFBV0E7UUFDVEMsb0RBQVdBO1FBQ2JFLGtEQUFTQTs7O0tBTEplIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tdXNpYy1ub3Rlcy5qcz8zYmJjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHB1bHNlQWN0aW9ucyB9IGZyb20gJ0Avc3RvcmUvcHVsc2Utc2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1B1bHNlSW5wdXQubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBjb2xvck5vdGVQYWlyID0ge1xyXG4gICAgICAgIGdyZXk6IFwiRywgYmFzcyBjbGVmXCIsXHJcbiAgICAgICAgYmxhY2s6IFwiRCwgYmFzcyBjbGVmXCIsXHJcbiAgICAgICAgYnJvd246IFwiQiwgYmFzcyBjbGVmXCIsXHJcbiAgICAgICAgYmx1ZTogXCJGLCBiYXNzIGNsZWZcIixcclxuICAgICAgICBncmVlbjogXCJHLCB0cmVibGUgY2xlZlwiLFxyXG4gICAgICAgIG9yYW5nZTogXCJCLCB0cmVibGUgY2xlZlwiLFxyXG4gICAgICAgIHllbGxvdzogXCJGLCB0cmVibGUgY2xlZlwiLFxyXG4gICAgICAgIHZpb2xldDogXCJFLCB0cmVibGUgY2xlZlwiXHJcbn07XHJcblxyXG4vL0kgdXNlIDIgZnVuY3Rpb25zIGluc3RlYWQgb2YgMSBmb3Igc2VwYXJhdGUgY29sb3IgYW5kIG5vdGUgY2FsY3VsYXRpb24gZm9yIGJldHRlciBVWCBvdXRwdXRcclxuZnVuY3Rpb24gc3BlY2lmeU11c2ljTm90ZShwdWxzZVJlc3VsdCkge1xyXG4gICAgaWYocHVsc2VSZXN1bHQgPT0gMCB8fCBwdWxzZVJlc3VsdCA9PSAxKSByZXR1cm4gY29sb3JOb3RlUGFpci5ncmV5O1xyXG4gICAgZWxzZSBpZihwdWxzZVJlc3VsdCA8IDEpIHJldHVybiBjb2xvck5vdGVQYWlyLmJsYWNrO1xyXG4gICAgZWxzZSBpZihwdWxzZVJlc3VsdCA8IDMgJiYgcHVsc2VSZXN1bHQgPiAyKSByZXR1cm4gY29sb3JOb3RlUGFpci5icm93bjtcclxuICAgIGVsc2UgaWYocHVsc2VSZXN1bHQgPD0gMiAmJiBwdWxzZVJlc3VsdCA+IDEpIHJldHVybiBjb2xvck5vdGVQYWlyLmJsdWU7XHJcbiAgICBlbHNlIGlmKHB1bHNlUmVzdWx0IDwgNyAmJiBwdWxzZVJlc3VsdCA+PSA1KSByZXR1cm4gY29sb3JOb3RlUGFpci5ncmVlbjtcclxuICAgIGVsc2UgaWYocHVsc2VSZXN1bHQgPCAxMCAmJiBwdWxzZVJlc3VsdCA+PSA3KSByZXR1cm4gY29sb3JOb3RlUGFpci55ZWxsb3c7XHJcbiAgICBlbHNlIGlmKHB1bHNlUmVzdWx0IDwgNSAmJiBwdWxzZVJlc3VsdCA+PSAzKSByZXR1cm4gY29sb3JOb3RlUGFpci52aW9sZXQ7XHJcbiAgICBlbHNlIHJldHVybiBjb2xvck5vdGVQYWlyLm9yYW5nZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QXVkaW9TcmMgKG1ub3RlKSB7XHJcbiAgICBzd2l0Y2gobW5vdGUpIHtcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBjb2xvck5vdGVQYWlyLmdyZXkpOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJhdWRpby9nM2dyZXkubXAzXCI7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPT0gY29sb3JOb3RlUGFpci5ibGFjayk6XHJcbiAgICAgICAgICAgIHJldHVybiBcImF1ZGlvL2QzYmxhY2subXAzXCI7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPT0gY29sb3JOb3RlUGFpci5icm93bik6XHJcbiAgICAgICAgICAgIHJldHVybiBcImF1ZGlvL2IzYnJvd24ubXAzXCI7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPT0gY29sb3JOb3RlUGFpci5ibHVlKTpcclxuICAgICAgICAgICAgcmV0dXJuIFwiYXVkaW8vZjNibHVlLm1wM1wiO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID09IGNvbG9yTm90ZVBhaXIuZ3JlZW4pOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJhdWRpby9nNWdyZWVuLm1wM1wiO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID09IGNvbG9yTm90ZVBhaXIueWVsbG93KTpcclxuICAgICAgICAgICAgcmV0dXJuIFwiYXVkaW8vZi01eWVsbG93Lm1wM1wiO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID09IGNvbG9yTm90ZVBhaXIudmlvbGV0KTpcclxuICAgICAgICAgICAgcmV0dXJuIFwiYXVkaW8vZTV2aW9sZXQubXAzXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiYXVkaW8vYjVvcmFuZ2UubXAzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE11c2ljTm90ZXNQYWdlKCkge1xyXG4gICAgY29uc3QgcHVsc2UxID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHVsc2UucHVsc2VJbnB1dDEpO1xyXG4gICAgY29uc3QgcHVsc2UyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHVsc2UucHVsc2VJbnB1dDIpO1xyXG4gICAgY29uc3QgcHVsc2UzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHVsc2UucHVsc2VJbnB1dDMpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgbGV0IHB1bHNlUmVzdWx0MSA9IChwdWxzZTEgLSBwdWxzZTIpO1xyXG4gICAgbGV0IHB1bHNlUmVzdWx0MiA9IChwdWxzZTIgLSBwdWxzZTMpO1xyXG4gICAgbGV0IHB1bHNlUmVzdWx0MyA9IChwdWxzZTMgLSBwdWxzZTEpO1xyXG4gICAgaWYgKHB1bHNlUmVzdWx0MSA8IDApIHsgcHVsc2VSZXN1bHQxICo9IC0xOyB9O1xyXG4gICAgaWYgKHB1bHNlUmVzdWx0MiA8IDApIHsgcHVsc2VSZXN1bHQyICo9IC0xOyB9O1xyXG4gICAgaWYgKHB1bHNlUmVzdWx0MyA8IDApIHsgcHVsc2VSZXN1bHQzICo9IC0xOyB9O1xyXG4gICAgY29uc29sZS5sb2cocHVsc2VSZXN1bHQxKTtcclxuICAgIGNvbnNvbGUubG9nKHB1bHNlUmVzdWx0Mik7XHJcbiAgICBjb25zb2xlLmxvZyhwdWxzZVJlc3VsdDMpO1xyXG5cclxuICAgIGNvbnN0IG5vdGUxID0gc3BlY2lmeU11c2ljTm90ZShwdWxzZVJlc3VsdDEpO1xyXG4gICAgY29uc3Qgbm90ZTIgPSBzcGVjaWZ5TXVzaWNOb3RlKHB1bHNlUmVzdWx0Mik7XHJcbiAgICBjb25zdCBub3RlMyA9IHNwZWNpZnlNdXNpY05vdGUocHVsc2VSZXN1bHQzKTtcclxuICAgIGNvbnNvbGUubG9nKG5vdGUxKTtcclxuICAgIGNvbnNvbGUubG9nKG5vdGUyKTtcclxuICAgIGNvbnNvbGUubG9nKG5vdGUzKTtcclxuXHJcbiAgICBjb25zdCBhdWRpb3NyYzEgPSBzZXRBdWRpb1NyYyhub3RlMSk7XHJcbiAgICBjb25zdCBhdWRpb3NyYzIgPSBzZXRBdWRpb1NyYyhub3RlMik7XHJcbiAgICBjb25zdCBhdWRpb3NyYzMgPSBzZXRBdWRpb1NyYyhub3RlMyk7XHJcbiAgICBjb25zb2xlLmxvZyhhdWRpb3NyYzEpO1xyXG4gICAgY29uc29sZS5sb2coYXVkaW9zcmMyKTtcclxuICAgIGNvbnNvbGUubG9nKGF1ZGlvc3JjMyk7XHJcblxyXG4gICAgY29uc3QgZ29Ib21lSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVsc2VBY3Rpb25zLnNldERlZmF1bHQoKSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD5IZXJlIGFyZSBtdXNpYyBub3RlcyBmb3IgeW91ciBtb29kOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXY+e25vdGUxfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntub3RlMn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57bm90ZTN9PC9kaXY+PGJyLz5cclxuICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzPVwiY29udHJvbHNcIiBhdXRvUGxheT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YXVkaW9zcmMxfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvYXVkaW8+PGJyLz5cclxuICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzPVwiY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXthdWRpb3NyYzJ9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cclxuICAgICAgICAgICAgPC9hdWRpbz48YnIvPlxyXG4gICAgICAgICAgICA8YXVkaW8gY29udHJvbHM9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2F1ZGlvc3JjM30gdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxyXG4gICAgICAgICAgICA8L2F1ZGlvPjxici8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvSG9tZUhhbmRsZXJ9PkhvbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJwdWxzZUFjdGlvbnMiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJjb2xvck5vdGVQYWlyIiwiZ3JleSIsImJsYWNrIiwiYnJvd24iLCJibHVlIiwiZ3JlZW4iLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJ2aW9sZXQiLCJzcGVjaWZ5TXVzaWNOb3RlIiwicHVsc2VSZXN1bHQiLCJzZXRBdWRpb1NyYyIsIm1ub3RlIiwiTXVzaWNOb3Rlc1BhZ2UiLCJwdWxzZTEiLCJzdGF0ZSIsInB1bHNlIiwicHVsc2VJbnB1dDEiLCJwdWxzZTIiLCJwdWxzZUlucHV0MiIsInB1bHNlMyIsInB1bHNlSW5wdXQzIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJwdWxzZVJlc3VsdDEiLCJwdWxzZVJlc3VsdDIiLCJwdWxzZVJlc3VsdDMiLCJjb25zb2xlIiwibG9nIiwibm90ZTEiLCJub3RlMiIsIm5vdGUzIiwiYXVkaW9zcmMxIiwiYXVkaW9zcmMyIiwiYXVkaW9zcmMzIiwiZ29Ib21lSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXREZWZhdWx0IiwicHVzaCIsImRpdiIsImxhYmVsIiwiYnIiLCJhdWRpbyIsImNvbnRyb2xzIiwiYXV0b1BsYXkiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiY29udHJvbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/music-notes.js\n"));

/***/ })

});