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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicNotesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/pulse-slice */ \"./src/store/pulse-slice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/PulseInput.module.css */ \"./src/components/layout/PulseInput.module.css\");\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nconst colorNotePair = {\n    grey: \"G, bass clef\",\n    black: \"D, bass clef\",\n    brown: \"B, bass clef\",\n    blue: \"F, bass clef\",\n    green: \"G, treble clef\",\n    orange: \"B, treble clef\",\n    yellow: \"F, treble clef\",\n    violet: \"E, treble clef\"\n};\nfunction specifyMusicNote(pulseResult) {\n    if (pulseResult == 0 || pulseResult == 1) return colorNotePair.grey;\n    else if (pulseResult < 1) return colorNotePair.black;\n    else if (pulseResult < 3 && pulseResult > 2) return colorNotePair.brown;\n    else if (pulseResult <= 2 && pulseResult > 1) return colorNotePair.blue;\n    else if (pulseResult < 7 && pulseResult >= 5) return colorNotePair.green;\n    else if (pulseResult < 10 && pulseResult >= 7) return colorNotePair.yellow;\n    else if (pulseResult < 5 && pulseResult >= 3) return colorNotePair.violet;\n    else return colorNotePair.orange;\n}\nfunction setAudioSrc(mnote) {\n    switch(mnote){\n        case mnote == colorNotePair.grey:\n            return \"audio/g3grey.mp3\";\n        case mnote == colorNotePair.black:\n            return \"audio/d3black.mp3\";\n        case mnote == colorNotePair.brown:\n            return \"audio/b3brown.mp3\";\n        case mnote == colorNotePair.blue:\n            return \"audio/f3blue.mp3\";\n        case mnote == \"G, treble clef\":\n            return \"audio/g5green.mp3\";\n        case mnote == \"B, treble clef\":\n            return \"audio/b5orange.mp3\";\n        case mnote == \"F, treble clef\":\n            return \"audio/f-5yellow.mp3\";\n        case mnote == \"E, treble clef\":\n            return \"audio/e5violet.mp3\";\n        default:\n            return \"audio/b5orange.mp3\";\n    }\n}\nfunction MusicNotesPage() {\n    _s();\n    const pulse1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput1);\n    const pulse2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput2);\n    const pulse3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput3);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    let pulseResult1 = pulse1 - pulse2;\n    let pulseResult2 = pulse2 - pulse3;\n    let pulseResult3 = pulse3 - pulse1;\n    if (pulseResult1 < 0) {\n        pulseResult1 *= -1;\n    }\n    ;\n    if (pulseResult2 < 0) {\n        pulseResult2 *= -1;\n    }\n    ;\n    if (pulseResult3 < 0) {\n        pulseResult3 *= -1;\n    }\n    ;\n    console.log(pulseResult1);\n    console.log(pulseResult2);\n    console.log(pulseResult3);\n    const note1 = specifyMusicNote(pulseResult1);\n    const note2 = specifyMusicNote(pulseResult2);\n    const note3 = specifyMusicNote(pulseResult3);\n    console.log(note1);\n    console.log(note2);\n    console.log(note3);\n    const audiosrc1 = setAudioSrc(note1);\n    const audiosrc2 = setAudioSrc(note2);\n    const audiosrc3 = setAudioSrc(note3);\n    const goHomeHandler = (event)=>{\n        event.preventDefault();\n        dispatch(_store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__.pulseActions.setDefault());\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Here are music notes for your mood:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note2\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note3\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 92,\n                columnNumber: 31\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                autoPlay: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc1,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 95,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc2,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 98,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc3,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 101,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goHomeHandler,\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 103,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicNotesPage, \"OP7NtAuzJ5YEVAWcVCBTqJDvwjA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MusicNotesPage;\nvar _c;\n$RefreshReg$(_c, \"MusicNotesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qix1RUFBdUI7UUFDaEMwQixPQUFPZ0IsSUFBSSxDQUFDO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0Q7MEJBQUtYOzs7Ozs7MEJBQ04sOERBQUNXOzBCQUFLVjs7Ozs7OzBCQUNOLDhEQUFDVTswQkFBS1Q7Ozs7OzswQkFBWSw4REFBQ1c7Ozs7OzBCQUNuQiw4REFBQ0M7Z0JBQU1DLFVBQVM7Z0JBQVdDLFVBQVUsSUFBSTswQkFDckMsNEVBQUNDO29CQUFPQyxLQUFLZjtvQkFBV2dCLE1BQUs7Ozs7Ozs7Ozs7OzBCQUN6Qiw4REFBQ047Ozs7OzBCQUNULDhEQUFDQztnQkFBTUMsVUFBUzswQkFDWiw0RUFBQ0U7b0JBQU9DLEtBQUtkO29CQUFXZSxNQUFLOzs7Ozs7Ozs7OzswQkFDekIsOERBQUNOOzs7OzswQkFDVCw4REFBQ0M7Z0JBQU1DLFVBQVM7MEJBQ1osNEVBQUNFO29CQUFPQyxLQUFLYjtvQkFBV2MsTUFBSzs7Ozs7Ozs7Ozs7MEJBQ3pCLDhEQUFDTjs7Ozs7MEJBQ1QsOERBQUNGO2dCQUFJUyxXQUFXbEQseUZBQWM7MEJBQzFCLDRFQUFDb0Q7b0JBQU9DLFNBQVNqQjs4QkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEQsQ0FBQztHQXREdUJ0Qjs7UUFDTGxCLG9EQUFXQTtRQUNYQSxvREFBV0E7UUFDWEEsb0RBQVdBO1FBQ1RDLG9EQUFXQTtRQUNiRSxrREFBU0E7OztLQUxKZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbXVzaWMtbm90ZXMuanM/M2JiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBwdWxzZUFjdGlvbnMgfSBmcm9tICdAL3N0b3JlL3B1bHNlLXNsaWNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9QdWxzZUlucHV0Lm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgY29sb3JOb3RlUGFpciA9IHtcclxuICAgICAgICBncmV5OiBcIkcsIGJhc3MgY2xlZlwiLFxyXG4gICAgICAgIGJsYWNrOiBcIkQsIGJhc3MgY2xlZlwiLFxyXG4gICAgICAgIGJyb3duOiBcIkIsIGJhc3MgY2xlZlwiLFxyXG4gICAgICAgIGJsdWU6IFwiRiwgYmFzcyBjbGVmXCIsXHJcbiAgICAgICAgZ3JlZW46IFwiRywgdHJlYmxlIGNsZWZcIixcclxuICAgICAgICBvcmFuZ2U6IFwiQiwgdHJlYmxlIGNsZWZcIixcclxuICAgICAgICB5ZWxsb3c6IFwiRiwgdHJlYmxlIGNsZWZcIixcclxuICAgICAgICB2aW9sZXQ6IFwiRSwgdHJlYmxlIGNsZWZcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gc3BlY2lmeU11c2ljTm90ZShwdWxzZVJlc3VsdCkge1xyXG4gICAgaWYocHVsc2VSZXN1bHQgPT0gMCB8fCBwdWxzZVJlc3VsdCA9PSAxKSByZXR1cm4gY29sb3JOb3RlUGFpci5ncmV5O1xyXG4gICAgZWxzZSBpZihwdWxzZVJlc3VsdCA8IDEpIHJldHVybiBjb2xvck5vdGVQYWlyLmJsYWNrO1xyXG4gICAgZWxzZSBpZihwdWxzZVJlc3VsdCA8IDMgJiYgcHVsc2VSZXN1bHQgPiAyKSByZXR1cm4gY29sb3JOb3RlUGFpci5icm93bjtcclxuICAgIGVsc2UgaWYocHVsc2VSZXN1bHQgPD0gMiAmJiBwdWxzZVJlc3VsdCA+IDEpIHJldHVybiBjb2xvck5vdGVQYWlyLmJsdWU7XHJcbiAgICBlbHNlIGlmKHB1bHNlUmVzdWx0IDwgNyAmJiBwdWxzZVJlc3VsdCA+PSA1KSByZXR1cm4gY29sb3JOb3RlUGFpci5ncmVlbjtcclxuICAgIGVsc2UgaWYocHVsc2VSZXN1bHQgPCAxMCAmJiBwdWxzZVJlc3VsdCA+PSA3KSByZXR1cm4gY29sb3JOb3RlUGFpci55ZWxsb3c7XHJcbiAgICBlbHNlIGlmKHB1bHNlUmVzdWx0IDwgNSAmJiBwdWxzZVJlc3VsdCA+PSAzKSByZXR1cm4gY29sb3JOb3RlUGFpci52aW9sZXQ7XHJcbiAgICBlbHNlIHJldHVybiBjb2xvck5vdGVQYWlyLm9yYW5nZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QXVkaW9TcmMgKG1ub3RlKSB7XHJcbiAgICBzd2l0Y2gobW5vdGUpIHtcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBjb2xvck5vdGVQYWlyLmdyZXkpOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvL2czZ3JleS5tcDMnO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID09IGNvbG9yTm90ZVBhaXIuYmxhY2spOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvL2QzYmxhY2subXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBjb2xvck5vdGVQYWlyLmJyb3duKTpcclxuICAgICAgICAgICAgcmV0dXJuICdhdWRpby9iM2Jyb3duLm1wMyc7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPT0gY29sb3JOb3RlUGFpci5ibHVlKTpcclxuICAgICAgICAgICAgcmV0dXJuICdhdWRpby9mM2JsdWUubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBcIkcsIHRyZWJsZSBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvL2c1Z3JlZW4ubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBcIkIsIHRyZWJsZSBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvL2I1b3JhbmdlLm1wMyc7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPT0gXCJGLCB0cmVibGUgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuICdhdWRpby9mLTV5ZWxsb3cubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9PSBcIkUsIHRyZWJsZSBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvL2U1dmlvbGV0Lm1wMyc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdhdWRpby9iNW9yYW5nZS5tcDMnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNdXNpY05vdGVzUGFnZSgpIHtcclxuICAgIGNvbnN0IHB1bHNlMSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnB1bHNlLnB1bHNlSW5wdXQxKTtcclxuICAgIGNvbnN0IHB1bHNlMiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnB1bHNlLnB1bHNlSW5wdXQyKTtcclxuICAgIGNvbnN0IHB1bHNlMyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnB1bHNlLnB1bHNlSW5wdXQzKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGxldCBwdWxzZVJlc3VsdDEgPSAocHVsc2UxIC0gcHVsc2UyKTtcclxuICAgIGxldCBwdWxzZVJlc3VsdDIgPSAocHVsc2UyIC0gcHVsc2UzKTtcclxuICAgIGxldCBwdWxzZVJlc3VsdDMgPSAocHVsc2UzIC0gcHVsc2UxKTtcclxuICAgIGlmIChwdWxzZVJlc3VsdDEgPCAwKSB7IHB1bHNlUmVzdWx0MSAqPSAtMTsgfTtcclxuICAgIGlmIChwdWxzZVJlc3VsdDIgPCAwKSB7IHB1bHNlUmVzdWx0MiAqPSAtMTsgfTtcclxuICAgIGlmIChwdWxzZVJlc3VsdDMgPCAwKSB7IHB1bHNlUmVzdWx0MyAqPSAtMTsgfTtcclxuICAgIGNvbnNvbGUubG9nKHB1bHNlUmVzdWx0MSk7XHJcbiAgICBjb25zb2xlLmxvZyhwdWxzZVJlc3VsdDIpO1xyXG4gICAgY29uc29sZS5sb2cocHVsc2VSZXN1bHQzKTtcclxuXHJcbiAgICBjb25zdCBub3RlMSA9IHNwZWNpZnlNdXNpY05vdGUocHVsc2VSZXN1bHQxKTtcclxuICAgIGNvbnN0IG5vdGUyID0gc3BlY2lmeU11c2ljTm90ZShwdWxzZVJlc3VsdDIpO1xyXG4gICAgY29uc3Qgbm90ZTMgPSBzcGVjaWZ5TXVzaWNOb3RlKHB1bHNlUmVzdWx0Myk7XHJcbiAgICBjb25zb2xlLmxvZyhub3RlMSk7XHJcbiAgICBjb25zb2xlLmxvZyhub3RlMik7XHJcbiAgICBjb25zb2xlLmxvZyhub3RlMyk7XHJcblxyXG4gICAgY29uc3QgYXVkaW9zcmMxID0gc2V0QXVkaW9TcmMobm90ZTEpO1xyXG4gICAgY29uc3QgYXVkaW9zcmMyID0gc2V0QXVkaW9TcmMobm90ZTIpO1xyXG4gICAgY29uc3QgYXVkaW9zcmMzID0gc2V0QXVkaW9TcmMobm90ZTMpO1xyXG5cclxuICAgIGNvbnN0IGdvSG9tZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHB1bHNlQWN0aW9ucy5zZXREZWZhdWx0KCkpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+SGVyZSBhcmUgbXVzaWMgbm90ZXMgZm9yIHlvdXIgbW9vZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2Pntub3RlMX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57bm90ZTJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e25vdGUzfTwvZGl2Pjxici8+XHJcbiAgICAgICAgICAgIDxhdWRpbyBjb250cm9scz1cImNvbnRyb2xzXCIgYXV0b1BsYXk9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2F1ZGlvc3JjMX0gdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxyXG4gICAgICAgICAgICA8L2F1ZGlvPjxici8+XHJcbiAgICAgICAgICAgIDxhdWRpbyBjb250cm9scz1cImNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YXVkaW9zcmMyfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvYXVkaW8+PGJyLz5cclxuICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzPVwiY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXthdWRpb3NyYzN9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cclxuICAgICAgICAgICAgPC9hdWRpbz48YnIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb0hvbWVIYW5kbGVyfT5Ib21lPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwicHVsc2VBY3Rpb25zIiwidXNlUm91dGVyIiwic3R5bGVzIiwiY29sb3JOb3RlUGFpciIsImdyZXkiLCJibGFjayIsImJyb3duIiwiYmx1ZSIsImdyZWVuIiwib3JhbmdlIiwieWVsbG93IiwidmlvbGV0Iiwic3BlY2lmeU11c2ljTm90ZSIsInB1bHNlUmVzdWx0Iiwic2V0QXVkaW9TcmMiLCJtbm90ZSIsIk11c2ljTm90ZXNQYWdlIiwicHVsc2UxIiwic3RhdGUiLCJwdWxzZSIsInB1bHNlSW5wdXQxIiwicHVsc2UyIiwicHVsc2VJbnB1dDIiLCJwdWxzZTMiLCJwdWxzZUlucHV0MyIsImRpc3BhdGNoIiwicm91dGVyIiwicHVsc2VSZXN1bHQxIiwicHVsc2VSZXN1bHQyIiwicHVsc2VSZXN1bHQzIiwiY29uc29sZSIsImxvZyIsIm5vdGUxIiwibm90ZTIiLCJub3RlMyIsImF1ZGlvc3JjMSIsImF1ZGlvc3JjMiIsImF1ZGlvc3JjMyIsImdvSG9tZUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0RGVmYXVsdCIsInB1c2giLCJkaXYiLCJsYWJlbCIsImJyIiwiYXVkaW8iLCJjb250cm9scyIsImF1dG9QbGF5Iiwic291cmNlIiwic3JjIiwidHlwZSIsImNsYXNzTmFtZSIsImNvbnRyb2wiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/music-notes.js\n"));

/***/ })

});