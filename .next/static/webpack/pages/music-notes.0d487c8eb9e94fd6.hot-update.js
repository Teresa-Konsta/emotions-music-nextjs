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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicNotesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/pulse-slice */ \"./src/store/pulse-slice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/PulseInput.module.css */ \"./src/components/layout/PulseInput.module.css\");\n/* harmony import */ var _components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction specifyColor(pulseResult) {\n    let color;\n    switch(pulseResult){\n        case pulseResult == 0 || pulseResult == 1:\n            return color = \"grey\";\n        case pulseResult < 1:\n            return color = \"black\";\n        case pulseResult < 3 && pulseResult > 2:\n            return color = \"brown\";\n        case pulseResult <= 2 && pulseResult >= 1:\n            return color = \"blue\";\n        case pulseResult < 7 && pulseResult >= 5:\n            return color = \"green\";\n        case pulseResult < 10 && pulseResult >= 7:\n            return color = \"yellow\";\n        case pulseResult < 5 && pulseResult >= 3:\n            return color = \"violet\";\n        case pulseResult >= 10:\n            return color = \"orange\";\n        default:\n            return color = \"orange\";\n    }\n}\nfunction specifyMusicNote(color) {\n    let mnote;\n    switch(color){\n        case color = \"grey\":\n            return mnote = \"G, bass clef\";\n        case color = \"black\":\n            return mnote = \"D, bass clef\";\n        case color = \"brown\":\n            return mnote = \"B, bass clef\";\n        case color = \"blue\":\n            return mnote = \"F, bass clef\";\n        case color = \"green\":\n            return mnote = \"G, treble clef\";\n        case color = \"orange\":\n            return mnote = \"B, treble clef\";\n        case color = \"yellow\":\n            return mnote = \"F, treble clef\";\n        case color = \"violet\":\n            return mnote = \"E, treble clef\";\n        default:\n            return mnote = \"B, treble clef\";\n    }\n}\nfunction setAudioSrc(mnote) {\n    let audiosrc;\n    switch(mnote){\n        case mnote = \"G, bass clef\":\n            return audiosrc = \"audio/g3grey.mp3\";\n        case mnote = \"D, bass clef\":\n            return audiosrc = \"audio/d3black.mp3\";\n        case mnote = \"B, bass clef\":\n            return audiosrc = \"audio/b3brown.mp3\";\n        case mnote = \"F, bass clef\":\n            return audiosrc = \"audio/f3blue.mp3\";\n        case mnote = \"G, treble clef\":\n            return audiosrc = \"audio/g5green.mp3\";\n        case mnote = \"B, treble clef\":\n            return audiosrc = \"audio/b5orange.mp3\";\n        case mnote = \"F, treble clef\":\n            return audiosrc = \"audio/f-5yellow.mp3\";\n        case mnote = \"E, treble clef\":\n            return audiosrc = \"audio/e5violet.mp3\";\n        default:\n            return audiosrc = \"audio/b5orange.mp3\";\n    }\n}\nfunction MusicNotesPage() {\n    _s();\n    const pulse1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput1);\n    const pulse2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput2);\n    const pulse3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.pulse.pulseInput3);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    let pulseResult1 = pulse1 - pulse2;\n    let pulseResult2 = pulse2 - pulse3;\n    let pulseResult3 = pulse3 - pulse1;\n    if (pulseResult1 < 0) {\n        pulseResult1 *= -1;\n    }\n    ;\n    if (pulseResult2 < 0) {\n        pulseResult2 *= -1;\n    }\n    ;\n    if (pulseResult3 < 0) {\n        pulseResult3 *= -1;\n    }\n    ;\n    console.log(pulseResult1);\n    console.log(pulseResult2);\n    console.log(pulseResult3);\n    const color1 = specifyColor(pulseResult1);\n    const color2 = specifyColor(pulseResult2);\n    const color3 = specifyColor(pulseResult3);\n    console.log(color1);\n    const note1 = specifyMusicNote(color1);\n    const note2 = specifyMusicNote(color2);\n    const note3 = specifyMusicNote(color3);\n    const audiosrc1 = setAudioSrc(note1);\n    const audiosrc2 = setAudioSrc(note2);\n    const audiosrc3 = setAudioSrc(note3);\n    const goHomeHandler = (event)=>{\n        event.preventDefault();\n        dispatch(_store_pulse_slice__WEBPACK_IMPORTED_MODULE_2__.pulseActions.setDefault());\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Here are music notes for your mood:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note2\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: note3\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 121,\n                columnNumber: 31\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                autoPlay: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc1,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 123,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 122,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 124,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc2,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 126,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 127,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: \"controls\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: audiosrc3,\n                    type: \"audio/mpeg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 129,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 128,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 130,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_layout_PulseInput_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goHomeHandler,\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                    lineNumber: 132,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n                lineNumber: 131,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tess_\\\\OneDrive\\\\Рабочий стол\\\\GitHub repos\\\\emotions-music-nextjs\\\\src\\\\pages\\\\music-notes.js\",\n        lineNumber: 117,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicNotesPage, \"OP7NtAuzJ5YEVAWcVCBTqJDvwjA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MusicNotesPage;\nvar _c;\n$RefreshReg$(_c, \"MusicNotesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbXVzaWMtbm90ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDQTtBQUNTO0FBQ1g7QUFFd0I7QUFFaEUsU0FBU0ssYUFBYUMsV0FBVyxFQUFFO0lBQy9CLElBQUlDO0lBQ0osT0FBT0Q7UUFDSCxLQUFNQSxlQUFlLEtBQUtBLGVBQWU7WUFDckMsT0FBT0MsUUFBUTtRQUNuQixLQUFNRCxjQUFjO1lBQ2hCLE9BQU9DLFFBQVE7UUFDbkIsS0FBTUQsY0FBYyxLQUFLQSxjQUFjO1lBQ25DLE9BQU9DLFFBQVE7UUFDbkIsS0FBTUQsZUFBZSxLQUFLQSxlQUFlO1lBQ3JDLE9BQU9DLFFBQVE7UUFDbkIsS0FBTUQsY0FBYyxLQUFLQSxlQUFlO1lBQ3BDLE9BQU9DLFFBQVE7UUFDbkIsS0FBTUQsY0FBYyxNQUFNQSxlQUFlO1lBQ3JDLE9BQU9DLFFBQVE7UUFDbkIsS0FBTUQsY0FBYyxLQUFLQSxlQUFlO1lBQ3BDLE9BQU9DLFFBQVE7UUFDbkIsS0FBTUQsZUFBZTtZQUNqQixPQUFPQyxRQUFRO1FBQ25CO1lBQ0ksT0FBT0EsUUFBUTtJQUN2QjtBQUNKO0FBRUEsU0FBU0MsaUJBQWlCRCxLQUFLLEVBQUU7SUFDN0IsSUFBSUU7SUFDSixPQUFPRjtRQUNILEtBQU1BLFFBQVE7WUFDVixPQUFPRSxRQUFRO1FBQ25CLEtBQU1GLFFBQVE7WUFDVixPQUFPRSxRQUFRO1FBQ25CLEtBQU1GLFFBQVE7WUFDVixPQUFPRSxRQUFRO1FBQ25CLEtBQU1GLFFBQVE7WUFDVixPQUFPRSxRQUFRO1FBQ25CLEtBQU1GLFFBQVE7WUFDVixPQUFPRSxRQUFRO1FBQ25CLEtBQU1GLFFBQVE7WUFDVixPQUFPRSxRQUFRO1FBQ25CLEtBQU1GLFFBQVE7WUFDVixPQUFPRSxRQUFRO1FBQ25CLEtBQU1GLFFBQVE7WUFDVixPQUFPRSxRQUFRO1FBQ25CO1lBQ0ksT0FBT0EsUUFBUTtJQUN2QjtBQUNKO0FBRUEsU0FBU0MsWUFBYUQsS0FBSyxFQUFFO0lBQ3pCLElBQUlFO0lBQ0osT0FBT0Y7UUFDSCxLQUFNQSxRQUFRO1lBQ1YsT0FBT0UsV0FBVztRQUN0QixLQUFNRixRQUFRO1lBQ1YsT0FBT0UsV0FBVztRQUN0QixLQUFNRixRQUFRO1lBQ1YsT0FBT0UsV0FBVztRQUN0QixLQUFNRixRQUFRO1lBQ1YsT0FBT0UsV0FBVztRQUN0QixLQUFNRixRQUFRO1lBQ1YsT0FBT0UsV0FBVztRQUN0QixLQUFNRixRQUFRO1lBQ1YsT0FBT0UsV0FBVztRQUN0QixLQUFNRixRQUFRO1lBQ1YsT0FBT0UsV0FBVztRQUN0QixLQUFNRixRQUFRO1lBQ1YsT0FBT0UsV0FBVztRQUN0QjtZQUNJLE9BQU9BLFdBQVc7SUFDMUI7QUFDSjtBQUVlLFNBQVNDLGlCQUFpQjs7SUFDckMsTUFBTUMsU0FBU2Isd0RBQVdBLENBQUNjLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssQ0FBQ0MsV0FBVztJQUMzRCxNQUFNQyxTQUFTakIsd0RBQVdBLENBQUNjLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssQ0FBQ0csV0FBVztJQUMzRCxNQUFNQyxTQUFTbkIsd0RBQVdBLENBQUNjLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssQ0FBQ0ssV0FBVztJQUMzRCxNQUFNQyxXQUFXcEIsd0RBQVdBO0lBQzVCLE1BQU1xQixTQUFTbkIsc0RBQVNBO0lBRXhCLElBQUlvQixlQUFnQlYsU0FBU0k7SUFDN0IsSUFBSU8sZUFBZ0JQLFNBQVNFO0lBQzdCLElBQUlNLGVBQWdCTixTQUFTTjtJQUM3QixJQUFJVSxlQUFlLEdBQUc7UUFBRUEsZ0JBQWdCLENBQUM7SUFBRyxDQUFDOztJQUM3QyxJQUFJQyxlQUFlLEdBQUc7UUFBRUEsZ0JBQWdCLENBQUM7SUFBRyxDQUFDOztJQUM3QyxJQUFJQyxlQUFlLEdBQUc7UUFBRUEsZ0JBQWdCLENBQUM7SUFBRyxDQUFDOztJQUM3Q0MsUUFBUUMsR0FBRyxDQUFDSjtJQUNaRyxRQUFRQyxHQUFHLENBQUNIO0lBQ1pFLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixNQUFNRyxTQUFTdkIsYUFBYWtCO0lBQzVCLE1BQU1NLFNBQVN4QixhQUFhbUI7SUFDNUIsTUFBTU0sU0FBU3pCLGFBQWFvQjtJQUM1QkMsUUFBUUMsR0FBRyxDQUFDQztJQUVaLE1BQU1HLFFBQVF2QixpQkFBaUJvQjtJQUMvQixNQUFNSSxRQUFReEIsaUJBQWlCcUI7SUFDL0IsTUFBTUksUUFBUXpCLGlCQUFpQnNCO0lBRS9CLE1BQU1JLFlBQVl4QixZQUFZcUI7SUFDOUIsTUFBTUksWUFBWXpCLFlBQVlzQjtJQUM5QixNQUFNSSxZQUFZMUIsWUFBWXVCO0lBRTlCLE1BQU1JLGdCQUFnQixDQUFDQyxRQUFVO1FBQzdCQSxNQUFNQyxjQUFjO1FBQ3BCbEIsU0FBU25CLHVFQUF1QjtRQUNoQ29CLE9BQU9tQixJQUFJLENBQUM7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDRDswQkFBS1g7Ozs7OzswQkFDTiw4REFBQ1c7MEJBQUtWOzs7Ozs7MEJBQ04sOERBQUNVOzBCQUFLVDs7Ozs7OzBCQUFZLDhEQUFDVzs7Ozs7MEJBQ25CLDhEQUFDQztnQkFBTUMsVUFBUztnQkFBV0MsVUFBVSxJQUFJOzBCQUNyQyw0RUFBQ0M7b0JBQU9DLEtBQUtmO29CQUFXZ0IsTUFBSzs7Ozs7Ozs7Ozs7MEJBQ3pCLDhEQUFDTjs7Ozs7MEJBQ1QsOERBQUNDO2dCQUFNQyxVQUFTOzBCQUNaLDRFQUFDRTtvQkFBT0MsS0FBS2Q7b0JBQVdlLE1BQUs7Ozs7Ozs7Ozs7OzBCQUN6Qiw4REFBQ047Ozs7OzBCQUNULDhEQUFDQztnQkFBTUMsVUFBUzswQkFDWiw0RUFBQ0U7b0JBQU9DLEtBQUtiO29CQUFXYyxNQUFLOzs7Ozs7Ozs7OzswQkFDekIsOERBQUNOOzs7OzswQkFDVCw4REFBQ0Y7Z0JBQUlTLFdBQVcvQyx5RkFBYzswQkFDMUIsNEVBQUNpRDtvQkFBT0MsU0FBU2pCOzhCQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloRCxDQUFDO0dBeER1QnpCOztRQUNMWixvREFBV0E7UUFDWEEsb0RBQVdBO1FBQ1hBLG9EQUFXQTtRQUNUQyxvREFBV0E7UUFDYkUsa0RBQVNBOzs7S0FMSlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL211c2ljLW5vdGVzLmpzPzNiYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHB1bHNlQWN0aW9ucyB9IGZyb20gJ0Avc3RvcmUvcHVsc2Utc2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1B1bHNlSW5wdXQubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBzcGVjaWZ5Q29sb3IocHVsc2VSZXN1bHQpIHtcclxuICAgIGxldCBjb2xvcjtcclxuICAgIHN3aXRjaChwdWxzZVJlc3VsdCkge1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0ID09IDAgfHwgcHVsc2VSZXN1bHQgPT0gMSk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9IFwiZ3JleVwiO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgMSk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDMgJiYgcHVsc2VSZXN1bHQgPiAyKTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yID0gXCJicm93blwiO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDw9IDIgJiYgcHVsc2VSZXN1bHQgPj0gMSk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgNyAmJiBwdWxzZVJlc3VsdCA+PSA1KTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgMTAgJiYgcHVsc2VSZXN1bHQgPj0gNyk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPCA1ICYmIHB1bHNlUmVzdWx0ID49IDMpOlxyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBcInZpb2xldFwiO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0ID49IDEwKTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yID0gJ29yYW5nZSc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yID0gJ29yYW5nZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwZWNpZnlNdXNpY05vdGUoY29sb3IpIHtcclxuICAgIGxldCBtbm90ZTsgICAgICAgXHJcbiAgICBzd2l0Y2goY29sb3IpIHtcclxuICAgICAgICBjYXNlIChjb2xvciA9IFwiZ3JleVwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIG1ub3RlID0gXCJHLCBiYXNzIGNsZWZcIjtcclxuICAgICAgICBjYXNlIChjb2xvciA9IFwiYmxhY2tcIik6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiRCwgYmFzcyBjbGVmXCI7XHJcbiAgICAgICAgY2FzZSAoY29sb3IgPSBcImJyb3duXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSBcIkIsIGJhc3MgY2xlZlwiO1xyXG4gICAgICAgIGNhc2UgKGNvbG9yID0gXCJibHVlXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSBcIkYsIGJhc3MgY2xlZlwiO1xyXG4gICAgICAgIGNhc2UgKGNvbG9yID0gXCJncmVlblwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIG1ub3RlID0gXCJHLCB0cmVibGUgY2xlZlwiO1xyXG4gICAgICAgIGNhc2UgKGNvbG9yID0gXCJvcmFuZ2VcIik6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiQiwgdHJlYmxlIGNsZWZcIjtcclxuICAgICAgICBjYXNlIChjb2xvciA9IFwieWVsbG93XCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSBcIkYsIHRyZWJsZSBjbGVmXCI7XHJcbiAgICAgICAgY2FzZSAoY29sb3IgPSBcInZpb2xldFwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIG1ub3RlID0gXCJFLCB0cmVibGUgY2xlZlwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9ICdCLCB0cmVibGUgY2xlZic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEF1ZGlvU3JjIChtbm90ZSkge1xyXG4gICAgbGV0IGF1ZGlvc3JjO1xyXG4gICAgc3dpdGNoKG1ub3RlKSB7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPSBcIkcsIGJhc3MgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvc3JjID0gJ2F1ZGlvL2czZ3JleS5tcDMnO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID0gXCJELCBiYXNzIGNsZWZcIik6XHJcbiAgICAgICAgICAgIHJldHVybiBhdWRpb3NyYyA9ICdhdWRpby9kM2JsYWNrLm1wMyc7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPSBcIkIsIGJhc3MgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvc3JjID0gJ2F1ZGlvL2IzYnJvd24ubXAzJztcclxuICAgICAgICBjYXNlIChtbm90ZSA9IFwiRiwgYmFzcyBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9zcmMgPSAnYXVkaW8vZjNibHVlLm1wMyc7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPSBcIkcsIHRyZWJsZSBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9zcmMgPSAnYXVkaW8vZzVncmVlbi5tcDMnO1xyXG4gICAgICAgIGNhc2UgKG1ub3RlID0gXCJCLCB0cmVibGUgY2xlZlwiKTpcclxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvc3JjID0gJ2F1ZGlvL2I1b3JhbmdlLm1wMyc7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPSBcIkYsIHRyZWJsZSBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9zcmMgPSAnYXVkaW8vZi01eWVsbG93Lm1wMyc7XHJcbiAgICAgICAgY2FzZSAobW5vdGUgPSBcIkUsIHRyZWJsZSBjbGVmXCIpOlxyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9zcmMgPSAnYXVkaW8vZTV2aW9sZXQubXAzJztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gYXVkaW9zcmMgPSAnYXVkaW8vYjVvcmFuZ2UubXAzJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVzaWNOb3Rlc1BhZ2UoKSB7XHJcbiAgICBjb25zdCBwdWxzZTEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wdWxzZS5wdWxzZUlucHV0MSk7XHJcbiAgICBjb25zdCBwdWxzZTIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wdWxzZS5wdWxzZUlucHV0Mik7XHJcbiAgICBjb25zdCBwdWxzZTMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wdWxzZS5wdWxzZUlucHV0Myk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBsZXQgcHVsc2VSZXN1bHQxID0gKHB1bHNlMSAtIHB1bHNlMik7XHJcbiAgICBsZXQgcHVsc2VSZXN1bHQyID0gKHB1bHNlMiAtIHB1bHNlMyk7XHJcbiAgICBsZXQgcHVsc2VSZXN1bHQzID0gKHB1bHNlMyAtIHB1bHNlMSk7XHJcbiAgICBpZiAocHVsc2VSZXN1bHQxIDwgMCkgeyBwdWxzZVJlc3VsdDEgKj0gLTE7IH07XHJcbiAgICBpZiAocHVsc2VSZXN1bHQyIDwgMCkgeyBwdWxzZVJlc3VsdDIgKj0gLTE7IH07XHJcbiAgICBpZiAocHVsc2VSZXN1bHQzIDwgMCkgeyBwdWxzZVJlc3VsdDMgKj0gLTE7IH07XHJcbiAgICBjb25zb2xlLmxvZyhwdWxzZVJlc3VsdDEpO1xyXG4gICAgY29uc29sZS5sb2cocHVsc2VSZXN1bHQyKTtcclxuICAgIGNvbnNvbGUubG9nKHB1bHNlUmVzdWx0Myk7XHJcblxyXG4gICAgY29uc3QgY29sb3IxID0gc3BlY2lmeUNvbG9yKHB1bHNlUmVzdWx0MSk7XHJcbiAgICBjb25zdCBjb2xvcjIgPSBzcGVjaWZ5Q29sb3IocHVsc2VSZXN1bHQyKTtcclxuICAgIGNvbnN0IGNvbG9yMyA9IHNwZWNpZnlDb2xvcihwdWxzZVJlc3VsdDMpO1xyXG4gICAgY29uc29sZS5sb2coY29sb3IxKVxyXG5cclxuICAgIGNvbnN0IG5vdGUxID0gc3BlY2lmeU11c2ljTm90ZShjb2xvcjEpO1xyXG4gICAgY29uc3Qgbm90ZTIgPSBzcGVjaWZ5TXVzaWNOb3RlKGNvbG9yMik7XHJcbiAgICBjb25zdCBub3RlMyA9IHNwZWNpZnlNdXNpY05vdGUoY29sb3IzKTsgICAgXHJcblxyXG4gICAgY29uc3QgYXVkaW9zcmMxID0gc2V0QXVkaW9TcmMobm90ZTEpO1xyXG4gICAgY29uc3QgYXVkaW9zcmMyID0gc2V0QXVkaW9TcmMobm90ZTIpO1xyXG4gICAgY29uc3QgYXVkaW9zcmMzID0gc2V0QXVkaW9TcmMobm90ZTMpO1xyXG5cclxuICAgIGNvbnN0IGdvSG9tZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHB1bHNlQWN0aW9ucy5zZXREZWZhdWx0KCkpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+SGVyZSBhcmUgbXVzaWMgbm90ZXMgZm9yIHlvdXIgbW9vZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2Pntub3RlMX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57bm90ZTJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e25vdGUzfTwvZGl2Pjxici8+XHJcbiAgICAgICAgICAgIDxhdWRpbyBjb250cm9scz1cImNvbnRyb2xzXCIgYXV0b1BsYXk9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2F1ZGlvc3JjMX0gdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxyXG4gICAgICAgICAgICA8L2F1ZGlvPjxici8+XHJcbiAgICAgICAgICAgIDxhdWRpbyBjb250cm9scz1cImNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17YXVkaW9zcmMyfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvYXVkaW8+PGJyLz5cclxuICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzPVwiY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXthdWRpb3NyYzN9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cclxuICAgICAgICAgICAgPC9hdWRpbz48YnIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb0hvbWVIYW5kbGVyfT5Ib21lPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwicHVsc2VBY3Rpb25zIiwidXNlUm91dGVyIiwic3R5bGVzIiwic3BlY2lmeUNvbG9yIiwicHVsc2VSZXN1bHQiLCJjb2xvciIsInNwZWNpZnlNdXNpY05vdGUiLCJtbm90ZSIsInNldEF1ZGlvU3JjIiwiYXVkaW9zcmMiLCJNdXNpY05vdGVzUGFnZSIsInB1bHNlMSIsInN0YXRlIiwicHVsc2UiLCJwdWxzZUlucHV0MSIsInB1bHNlMiIsInB1bHNlSW5wdXQyIiwicHVsc2UzIiwicHVsc2VJbnB1dDMiLCJkaXNwYXRjaCIsInJvdXRlciIsInB1bHNlUmVzdWx0MSIsInB1bHNlUmVzdWx0MiIsInB1bHNlUmVzdWx0MyIsImNvbnNvbGUiLCJsb2ciLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJub3RlMSIsIm5vdGUyIiwibm90ZTMiLCJhdWRpb3NyYzEiLCJhdWRpb3NyYzIiLCJhdWRpb3NyYzMiLCJnb0hvbWVIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldERlZmF1bHQiLCJwdXNoIiwiZGl2IiwibGFiZWwiLCJiciIsImF1ZGlvIiwiY29udHJvbHMiLCJhdXRvUGxheSIsInNvdXJjZSIsInNyYyIsInR5cGUiLCJjbGFzc05hbWUiLCJjb250cm9sIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/music-notes.js\n"));

/***/ })

});