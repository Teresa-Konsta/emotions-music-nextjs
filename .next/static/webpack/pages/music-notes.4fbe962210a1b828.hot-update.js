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

/***/ "./src/hooks/use-set-note.js":
/*!***********************************!*\
  !*** ./src/hooks/use-set-note.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction specifyColor(pulseResult) {\n    let color = \"\";\n    switch(pulseResult){\n        case pulseResult == 0 || pulseResult == 1:\n            return color = \"grey\";\n        case pulseResult < 1:\n            return color = \"black\";\n        case pulseResult < 3 && pulseResult > 2:\n            return color = \"brown\";\n        case pulseResult <= 2 && pulseResult >= 1:\n            return color = \"blue\";\n        case pulseResult < 7 && pulseResult >= 5:\n            return color = \"green\";\n        case pulseResult < 10 && pulseResult >= 7:\n            return color = \"yellow\";\n        case pulseResult < 5 && pulseResult >= 3:\n            return color = \"violet\";\n        case pulseResult >= 10:\n            return color = \"orange\";\n        default:\n            return color = \"orange\";\n    }\n}\nfunction specifyMusicNote(color) {\n    let mnote = \"\";\n    switch(color){\n        case \"grey\":\n            return mnote = \"G, bass clef\";\n        case \"black\":\n            return mnote = \"D, bass clef\";\n        case \"brown\":\n            return mnote = \"B, bass clef\";\n        case \"blue\":\n            return mnote = \"F, bass clef\";\n        case \"green\":\n            return mnote = \"G, treble clef\";\n        case \"orange\":\n            return mnote = \"B, treble clef\";\n        case \"yellow\":\n            return mnote = \"F, treble clef\";\n        case \"violet\":\n            return mnote = \"E, treble clef\";\n        default:\n            return mnote = \"B, treble clef\";\n    }\n}\nconst useSetNote = (pulse1, pulse2, pulse3)=>{\n    //calculating pulse difference and converting to positive number\n    let pulseResult1 = pulse1 - pulse2;\n    let pulseResult2 = pulse2 - pulse3;\n    let pulseResult3 = pulse3 - pulse1;\n    if (pulseResult1 < 0) {\n        pulseResult1 *= -1;\n    }\n    ;\n    if (pulseResult2 < 0) {\n        pulseResult2 *= -1;\n    }\n    ;\n    if (pulseResult3 < 0) {\n        pulseResult3 *= -1;\n    }\n    ;\n    //get the color\n    const color1 = specifyColor(pulseResult1);\n    const color2 = specifyColor(pulseResult2);\n    const color3 = specifyColor(pulseResult3);\n    //get the note based on the color\n    const note1 = specifyMusicNote(color1);\n    const note2 = specifyMusicNote(color2);\n    const note3 = specifyMusicNote(color3);\n    return [\n        note1,\n        note2,\n        note3\n    ];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSetNote);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlLXNldC1ub3RlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSxhQUFhQyxXQUFXLEVBQUU7SUFDL0IsSUFBSUMsUUFBUTtJQUNaLE9BQU9EO1FBQ0gsS0FBTUEsZUFBZSxLQUFLQSxlQUFlO1lBQ3JDLE9BQU9DLFFBQVE7UUFDbkIsS0FBTUQsY0FBYztZQUNoQixPQUFPQyxRQUFRO1FBQ25CLEtBQU1ELGNBQWMsS0FBS0EsY0FBYztZQUNuQyxPQUFPQyxRQUFRO1FBQ25CLEtBQU1ELGVBQWUsS0FBS0EsZUFBZTtZQUNyQyxPQUFPQyxRQUFRO1FBQ25CLEtBQU1ELGNBQWMsS0FBS0EsZUFBZTtZQUNwQyxPQUFPQyxRQUFRO1FBQ25CLEtBQU1ELGNBQWMsTUFBTUEsZUFBZTtZQUNyQyxPQUFPQyxRQUFRO1FBQ25CLEtBQU1ELGNBQWMsS0FBS0EsZUFBZTtZQUNwQyxPQUFPQyxRQUFRO1FBQ25CLEtBQU1ELGVBQWU7WUFDakIsT0FBT0MsUUFBUTtRQUNuQjtZQUNJLE9BQU9BLFFBQVE7SUFDdkI7QUFDSjtBQUVBLFNBQVNDLGlCQUFpQkQsS0FBSyxFQUFFO0lBQzdCLElBQUlFLFFBQVE7SUFDWixPQUFPRjtRQUNILEtBQUs7WUFDRCxPQUFPRSxRQUFRO1FBQ25CLEtBQUs7WUFDRCxPQUFPQSxRQUFRO1FBQ25CLEtBQUs7WUFDRCxPQUFPQSxRQUFRO1FBQ25CLEtBQUs7WUFDRCxPQUFPQSxRQUFRO1FBQ25CLEtBQUs7WUFDRCxPQUFPQSxRQUFRO1FBQ25CLEtBQUs7WUFDRCxPQUFPQSxRQUFRO1FBQ25CLEtBQUs7WUFDRCxPQUFPQSxRQUFRO1FBQ25CLEtBQUs7WUFDRCxPQUFPQSxRQUFRO1FBQ25CO1lBQ0ksT0FBT0EsUUFBUTtJQUN2QjtBQUNKO0FBRUEsTUFBTUMsYUFBYSxDQUFDQyxRQUFRQyxRQUFRQyxTQUFXO0lBQzNDLGdFQUFnRTtJQUNoRSxJQUFJQyxlQUFnQkgsU0FBU0M7SUFDN0IsSUFBSUcsZUFBZ0JILFNBQVNDO0lBQzdCLElBQUlHLGVBQWdCSCxTQUFTRjtJQUM3QixJQUFJRyxlQUFlLEdBQUc7UUFBRUEsZ0JBQWdCLENBQUM7SUFBRyxDQUFDOztJQUM3QyxJQUFJQyxlQUFlLEdBQUc7UUFBRUEsZ0JBQWdCLENBQUM7SUFBRyxDQUFDOztJQUM3QyxJQUFJQyxlQUFlLEdBQUc7UUFBRUEsZ0JBQWdCLENBQUM7SUFBRyxDQUFDOztJQUU3QyxlQUFlO0lBQ2YsTUFBTUMsU0FBU1osYUFBYVM7SUFDNUIsTUFBTUksU0FBU2IsYUFBYVU7SUFDNUIsTUFBTUksU0FBU2QsYUFBYVc7SUFFNUIsaUNBQWlDO0lBQ2pDLE1BQU1JLFFBQVFaLGlCQUFpQlM7SUFDL0IsTUFBTUksUUFBUWIsaUJBQWlCVTtJQUMvQixNQUFNSSxRQUFRZCxpQkFBaUJXO0lBRS9CLE9BQU87UUFDSEM7UUFDQUM7UUFDQUM7S0FDSDtBQUNMO0FBRUEsK0RBQWVaLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZS1zZXQtbm90ZS5qcz82MjU1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNwZWNpZnlDb2xvcihwdWxzZVJlc3VsdCkge1xyXG4gICAgbGV0IGNvbG9yID0gJyc7XHJcbiAgICBzd2l0Y2gocHVsc2VSZXN1bHQpIHtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA9PSAwIHx8IHB1bHNlUmVzdWx0ID09IDEpOlxyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBcImdyZXlcIjtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDEpOlxyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPCAzICYmIHB1bHNlUmVzdWx0ID4gMik6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9IFwiYnJvd25cIjtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8PSAyICYmIHB1bHNlUmVzdWx0ID49IDEpOlxyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDcgJiYgcHVsc2VSZXN1bHQgPj0gNSk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDEwICYmIHB1bHNlUmVzdWx0ID49IDcpOlxyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgNSAmJiBwdWxzZVJlc3VsdCA+PSAzKTpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yID0gXCJ2aW9sZXRcIjtcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA+PSAxMCk6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9ICdvcmFuZ2UnO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvciA9ICdvcmFuZ2UnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzcGVjaWZ5TXVzaWNOb3RlKGNvbG9yKSB7XHJcbiAgICBsZXQgbW5vdGUgPSAnJzsgICAgICAgXHJcbiAgICBzd2l0Y2goY29sb3IpIHtcclxuICAgICAgICBjYXNlIFwiZ3JleVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSBcIkcsIGJhc3MgY2xlZlwiO1xyXG4gICAgICAgIGNhc2UgXCJibGFja1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSBcIkQsIGJhc3MgY2xlZlwiO1xyXG4gICAgICAgIGNhc2UgXCJicm93blwiOlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSBcIkIsIGJhc3MgY2xlZlwiO1xyXG4gICAgICAgIGNhc2UgXCJibHVlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiRiwgYmFzcyBjbGVmXCI7XHJcbiAgICAgICAgY2FzZSBcImdyZWVuXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiRywgdHJlYmxlIGNsZWZcIjtcclxuICAgICAgICBjYXNlIFwib3JhbmdlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiQiwgdHJlYmxlIGNsZWZcIjtcclxuICAgICAgICBjYXNlIFwieWVsbG93XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiRiwgdHJlYmxlIGNsZWZcIjtcclxuICAgICAgICBjYXNlIFwidmlvbGV0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBtbm90ZSA9IFwiRSwgdHJlYmxlIGNsZWZcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gbW5vdGUgPSAnQiwgdHJlYmxlIGNsZWYnO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VTZXROb3RlID0gKHB1bHNlMSwgcHVsc2UyLCBwdWxzZTMpID0+IHtcclxuICAgIC8vY2FsY3VsYXRpbmcgcHVsc2UgZGlmZmVyZW5jZSBhbmQgY29udmVydGluZyB0byBwb3NpdGl2ZSBudW1iZXJcclxuICAgIGxldCBwdWxzZVJlc3VsdDEgPSAocHVsc2UxIC0gcHVsc2UyKTtcclxuICAgIGxldCBwdWxzZVJlc3VsdDIgPSAocHVsc2UyIC0gcHVsc2UzKTtcclxuICAgIGxldCBwdWxzZVJlc3VsdDMgPSAocHVsc2UzIC0gcHVsc2UxKTtcclxuICAgIGlmIChwdWxzZVJlc3VsdDEgPCAwKSB7IHB1bHNlUmVzdWx0MSAqPSAtMTsgfTtcclxuICAgIGlmIChwdWxzZVJlc3VsdDIgPCAwKSB7IHB1bHNlUmVzdWx0MiAqPSAtMTsgfTtcclxuICAgIGlmIChwdWxzZVJlc3VsdDMgPCAwKSB7IHB1bHNlUmVzdWx0MyAqPSAtMTsgfTtcclxuXHJcbiAgICAvL2dldCB0aGUgY29sb3JcclxuICAgIGNvbnN0IGNvbG9yMSA9IHNwZWNpZnlDb2xvcihwdWxzZVJlc3VsdDEpO1xyXG4gICAgY29uc3QgY29sb3IyID0gc3BlY2lmeUNvbG9yKHB1bHNlUmVzdWx0Mik7XHJcbiAgICBjb25zdCBjb2xvcjMgPSBzcGVjaWZ5Q29sb3IocHVsc2VSZXN1bHQzKTtcclxuXHJcbiAgICAvL2dldCB0aGUgbm90ZSBiYXNlZCBvbiB0aGUgY29sb3JcclxuICAgIGNvbnN0IG5vdGUxID0gc3BlY2lmeU11c2ljTm90ZShjb2xvcjEpO1xyXG4gICAgY29uc3Qgbm90ZTIgPSBzcGVjaWZ5TXVzaWNOb3RlKGNvbG9yMik7XHJcbiAgICBjb25zdCBub3RlMyA9IHNwZWNpZnlNdXNpY05vdGUoY29sb3IzKTtcclxuXHJcbiAgICByZXR1cm4oW1xyXG4gICAgICAgIG5vdGUxLFxyXG4gICAgICAgIG5vdGUyLFxyXG4gICAgICAgIG5vdGUzXHJcbiAgICBdKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNldE5vdGU7Il0sIm5hbWVzIjpbInNwZWNpZnlDb2xvciIsInB1bHNlUmVzdWx0IiwiY29sb3IiLCJzcGVjaWZ5TXVzaWNOb3RlIiwibW5vdGUiLCJ1c2VTZXROb3RlIiwicHVsc2UxIiwicHVsc2UyIiwicHVsc2UzIiwicHVsc2VSZXN1bHQxIiwicHVsc2VSZXN1bHQyIiwicHVsc2VSZXN1bHQzIiwiY29sb3IxIiwiY29sb3IyIiwiY29sb3IzIiwibm90ZTEiLCJub3RlMiIsIm5vdGUzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/use-set-note.js\n"));

/***/ })

});