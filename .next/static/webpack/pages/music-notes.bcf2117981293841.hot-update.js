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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/*function specifyColor(pulseResult) {\r\n    let color = \"\";\r\n    switch(pulseResult) {\r\n        case (pulseResult == 0 || pulseResult == 1):\r\n            color = \"grey\";\r\n            break;\r\n        case (pulseResult < 1):\r\n            color = \"black\";\r\n            break;\r\n        case (pulseResult < 3 && pulseResult > 2):\r\n            color = \"brown\";\r\n            break;\r\n        case (pulseResult <= 2 && pulseResult >= 1):\r\n            color = \"blue\";\r\n            break;\r\n        case (pulseResult < 7 && pulseResult >= 5):\r\n            color = \"green\";\r\n            break;\r\n        case (pulseResult >= 10):\r\n            color = \"orange\";\r\n            break;\r\n        case (pulseResult < 10 && pulseResult >= 7):\r\n            color = \"yellow\";\r\n            break;\r\n        case (pulseResult < 5 && pulseResult >= 3):\r\n            color = \"violet\";\r\n            break;\r\n        default:\r\n            color = '';\r\n            break;\r\n    }\r\n    return color;\r\n}\r\n\r\nfunction specifyMusicNote(color) {\r\n    let mnote = '';\r\n    switch(color) {\r\n        case \"grey\":\r\n            mnote = \"G, bass clef\";\r\n            break;\r\n        case \"black\":\r\n            mnote = \"D, bass clef\";\r\n            break;\r\n        case \"brown\":\r\n            mnote = \"B, bass clef\";\r\n            break;\r\n        case \"blue\":\r\n            mnote = \"F, bass clef\";\r\n            break;\r\n        case \"green\":\r\n            mnote = \"G, treble clef\";\r\n            break;\r\n        case \"orange\":\r\n            mnote = \"B, treble clef\";\r\n            break;\r\n        case \"yellow\":\r\n            mnote = \"F, treble clef\";\r\n            break;\r\n        case \"violet\":\r\n            mnote = \"E, treble clef\";\r\n            break;\r\n        default:\r\n            mnote = '';\r\n            break;\r\n    }\r\n    return mnote;\r\n}*/ function specifyColor(pulseResult) {\n    var color = \"\";\n    if (pulseResult == 0 || pulseResult == 1) {\n        color = \"grey\";\n    } else if (pulseResult < 1) {\n        color = \"black\";\n    } else if (pulseResult < 3 && pulseResult > 2) {\n        color = \"brown\";\n    } else if (pulseResult <= 2 && pulseResult >= 1) {\n        color = \"blue\";\n    } else if (pulseResult < 7 && pulseResult >= 5) {\n        color = \"green\";\n    } else if (pulseResult >= 10) {\n        color = \"orange\";\n    } else if (pulseResult < 10 && pulseResult >= 7) {\n        color = \"yellow\";\n    } else if (pulseResult < 5 && pulseResult >= 3) {\n        color = \"violet\";\n    } //wish for a magic relation to reality, intuitive wholeness\n    return color;\n}\nfunction specifyMusicNote(color) {\n    var mnote = \"\";\n    if (color == \"grey\") {\n        mnote = \"G, bass clef\";\n    } else if (color == \"black\") {\n        mnote = \"D, bass clef\";\n    } else if (color == \"brown\") {\n        mnote = \"B, bass clef\";\n    } else if (color == \"blue\") {\n        mnote = \"F, bass clef\";\n    } else if (color == \"green\") {\n        mnote = \"G, treble clef\";\n    } else if (color == \"orange\") {\n        mnote = \"B, treble clef\";\n    } else if (color == \"yellow\") {\n        mnote = \"F, treble clef\";\n    } else if (color == \"violet\") {\n        mnote = \"E, treble clef\";\n    }\n    return mnote;\n}\nconst useSetNote = (pulse1, pulse2, pulse3)=>{\n    //calculating pulse difference and converting to positive number\n    let pulseResult1 = pulse1 - pulse2;\n    let pulseResult2 = pulse2 - pulse3;\n    let pulseResult3 = pulse3 - pulse1;\n    if (pulseResult1 < 0) {\n        pulseResult1 *= -1;\n    }\n    ;\n    if (pulseResult2 < 0) {\n        pulseResult2 *= -1;\n    }\n    ;\n    if (pulseResult3 < 0) {\n        pulseResult3 *= -1;\n    }\n    ;\n    //get the color\n    const color1 = specifyColor(pulseResult1);\n    const color2 = specifyColor(pulseResult2);\n    const color3 = specifyColor(pulseResult3);\n    //get the note based on the color\n    const note1 = specifyMusicNote(color1);\n    const note2 = specifyMusicNote(color2);\n    const note3 = specifyMusicNote(color3);\n    return [\n        note1,\n        note2,\n        note3\n    ];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSetNote);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlLXNldC1ub3RlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0VDLEdBRUQsU0FBU0EsYUFBYUMsV0FBVyxFQUFFO0lBQy9CLElBQUlDLFFBQVE7SUFDWixJQUFJRCxlQUFlLEtBQUtBLGVBQWUsR0FBRztRQUFFQyxRQUFRO0lBQVEsT0FDdkQsSUFBSUQsY0FBYyxHQUFHO1FBQUVDLFFBQVE7SUFBUyxPQUN4QyxJQUFJRCxjQUFjLEtBQUtBLGNBQWMsR0FBRztRQUFFQyxRQUFRO0lBQVMsT0FDM0QsSUFBSUQsZUFBZSxLQUFLQSxlQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFRLE9BQzVELElBQUlELGNBQWMsS0FBS0EsZUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBUyxPQUM1RCxJQUFJRCxlQUFlLElBQUk7UUFBRUMsUUFBUTtJQUFVLE9BQzNDLElBQUlELGNBQWMsTUFBTUEsZUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBVSxPQUM5RCxJQUFJRCxjQUFjLEtBQUtBLGVBQWUsR0FBRztRQUFFQyxRQUFRO0lBQVUsQ0FBQyxDQUFDLDJEQUEyRDtJQUMvSCxPQUFPQTtBQUNYO0FBRUEsU0FBU0MsaUJBQWlCRCxLQUFLLEVBQUU7SUFFN0IsSUFBSUUsUUFBUTtJQUNaLElBQUlGLFNBQVMsUUFBUTtRQUFFRSxRQUFRO0lBQWdCLE9BQzFDLElBQUlGLFNBQVMsU0FBUztRQUFFRSxRQUFRO0lBQWdCLE9BQ2hELElBQUlGLFNBQVMsU0FBUztRQUFFRSxRQUFRO0lBQWdCLE9BQ2hELElBQUlGLFNBQVMsUUFBUTtRQUFFRSxRQUFRO0lBQWdCLE9BQy9DLElBQUlGLFNBQVMsU0FBUztRQUFFRSxRQUFRO0lBQWtCLE9BQ2xELElBQUlGLFNBQVMsVUFBVTtRQUFFRSxRQUFRO0lBQWtCLE9BQ25ELElBQUlGLFNBQVMsVUFBVTtRQUFFRSxRQUFRO0lBQWtCLE9BQ25ELElBQUlGLFNBQVMsVUFBVTtRQUFFRSxRQUFRO0lBQWtCLENBQUM7SUFDekQsT0FBT0E7QUFDWDtBQUVBLE1BQU1DLGFBQWEsQ0FBQ0MsUUFBUUMsUUFBUUMsU0FBVztJQUMzQyxnRUFBZ0U7SUFDaEUsSUFBSUMsZUFBZ0JILFNBQVNDO0lBQzdCLElBQUlHLGVBQWdCSCxTQUFTQztJQUM3QixJQUFJRyxlQUFnQkgsU0FBU0Y7SUFDN0IsSUFBSUcsZUFBZSxHQUFHO1FBQUVBLGdCQUFnQixDQUFDO0lBQUcsQ0FBQzs7SUFDN0MsSUFBSUMsZUFBZSxHQUFHO1FBQUVBLGdCQUFnQixDQUFDO0lBQUcsQ0FBQzs7SUFDN0MsSUFBSUMsZUFBZSxHQUFHO1FBQUVBLGdCQUFnQixDQUFDO0lBQUcsQ0FBQzs7SUFFN0MsZUFBZTtJQUNmLE1BQU1DLFNBQVNaLGFBQWFTO0lBQzVCLE1BQU1JLFNBQVNiLGFBQWFVO0lBQzVCLE1BQU1JLFNBQVNkLGFBQWFXO0lBRTVCLGlDQUFpQztJQUNqQyxNQUFNSSxRQUFRWixpQkFBaUJTO0lBQy9CLE1BQU1JLFFBQVFiLGlCQUFpQlU7SUFDL0IsTUFBTUksUUFBUWQsaUJBQWlCVztJQUUvQixPQUFPO1FBQ0hDO1FBQ0FDO1FBQ0FDO0tBQ0g7QUFDTDtBQUVBLCtEQUFlWixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2Utc2V0LW5vdGUuanM/NjI1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmZ1bmN0aW9uIHNwZWNpZnlDb2xvcihwdWxzZVJlc3VsdCkge1xyXG4gICAgbGV0IGNvbG9yID0gXCJcIjtcclxuICAgIHN3aXRjaChwdWxzZVJlc3VsdCkge1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0ID09IDAgfHwgcHVsc2VSZXN1bHQgPT0gMSk6XHJcbiAgICAgICAgICAgIGNvbG9yID0gXCJncmV5XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgMSk6XHJcbiAgICAgICAgICAgIGNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDMgJiYgcHVsc2VSZXN1bHQgPiAyKTpcclxuICAgICAgICAgICAgY29sb3IgPSBcImJyb3duXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDw9IDIgJiYgcHVsc2VSZXN1bHQgPj0gMSk6XHJcbiAgICAgICAgICAgIGNvbG9yID0gXCJibHVlXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgNyAmJiBwdWxzZVJlc3VsdCA+PSA1KTpcclxuICAgICAgICAgICAgY29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0ID49IDEwKTpcclxuICAgICAgICAgICAgY29sb3IgPSBcIm9yYW5nZVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIChwdWxzZVJlc3VsdCA8IDEwICYmIHB1bHNlUmVzdWx0ID49IDcpOlxyXG4gICAgICAgICAgICBjb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgNSAmJiBwdWxzZVJlc3VsdCA+PSAzKTpcclxuICAgICAgICAgICAgY29sb3IgPSBcInZpb2xldFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb2xvciA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BlY2lmeU11c2ljTm90ZShjb2xvcikge1xyXG4gICAgbGV0IG1ub3RlID0gJyc7XHJcbiAgICBzd2l0Y2goY29sb3IpIHtcclxuICAgICAgICBjYXNlIFwiZ3JleVwiOlxyXG4gICAgICAgICAgICBtbm90ZSA9IFwiRywgYmFzcyBjbGVmXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJibGFja1wiOlxyXG4gICAgICAgICAgICBtbm90ZSA9IFwiRCwgYmFzcyBjbGVmXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJicm93blwiOlxyXG4gICAgICAgICAgICBtbm90ZSA9IFwiQiwgYmFzcyBjbGVmXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJibHVlXCI6XHJcbiAgICAgICAgICAgIG1ub3RlID0gXCJGLCBiYXNzIGNsZWZcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImdyZWVuXCI6XHJcbiAgICAgICAgICAgIG1ub3RlID0gXCJHLCB0cmVibGUgY2xlZlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwib3JhbmdlXCI6XHJcbiAgICAgICAgICAgIG1ub3RlID0gXCJCLCB0cmVibGUgY2xlZlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwieWVsbG93XCI6XHJcbiAgICAgICAgICAgIG1ub3RlID0gXCJGLCB0cmVibGUgY2xlZlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmlvbGV0XCI6XHJcbiAgICAgICAgICAgIG1ub3RlID0gXCJFLCB0cmVibGUgY2xlZlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBtbm90ZSA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBtbm90ZTtcclxufSovXHJcblxyXG5mdW5jdGlvbiBzcGVjaWZ5Q29sb3IocHVsc2VSZXN1bHQpIHtcclxuICAgIHZhciBjb2xvciA9IFwiXCI7XHJcbiAgICBpZiAocHVsc2VSZXN1bHQgPT0gMCB8fCBwdWxzZVJlc3VsdCA9PSAxKSB7IGNvbG9yID0gXCJncmV5XCI7IH0gLy9lbW90aW9uYWwgY29vbG5lc3MsIGluZGlmZmVyZW5jZVxyXG4gICAgZWxzZSBpZiAocHVsc2VSZXN1bHQgPCAxKSB7IGNvbG9yID0gXCJibGFja1wiOyB9Ly9zdHJvbmdlc3QgXCJkb3duXCIgLy9maW5hbCwgaG9wZWxlc3NuZXNzLCBhIHByb3Rlc3QgYWdhaW5zdCBsaWZlIGFuZCBmYXRlXHJcbiAgICBlbHNlIGlmIChwdWxzZVJlc3VsdCA8IDMgJiYgcHVsc2VSZXN1bHQgPiAyKSB7IGNvbG9yID0gXCJicm93blwiOyB9IC8vcGh5c2ljYWwgZGlzY29tZm9ydCBvciBpbGxuZXNzXHJcbiAgICBlbHNlIGlmIChwdWxzZVJlc3VsdCA8PSAyICYmIHB1bHNlUmVzdWx0ID49IDEpIHsgY29sb3IgPSBcImJsdWVcIjsgfSAvL3RvdGFsIHBlYWNlXHJcbiAgICBlbHNlIGlmIChwdWxzZVJlc3VsdCA8IDcgJiYgcHVsc2VSZXN1bHQgPj0gNSkgeyBjb2xvciA9IFwiZ3JlZW5cIjsgfSAvL2NvbnN0YW50IHNlbGYtY29uc2Npb3VzbmVzcywgcmVzaXN0YW5jZSB0byBjaGFuZ2VcclxuICAgIGVsc2UgaWYgKHB1bHNlUmVzdWx0ID49IDEwKSB7IGNvbG9yID0gXCJvcmFuZ2VcIjsgfS8vc3Ryb25nZXN0IFwidXBcIiAvL3N0cm9uZyBlbW90aW9ucywgdml0YWwgZm9yY2UsIGl0IGluY3JlYXNlcyBoZWFydCByYXRlLCBibG9vZCBwcmVzc3VyZSBhbmQgYnJlYXRoaW5nXHJcbiAgICBlbHNlIGlmIChwdWxzZVJlc3VsdCA8IDEwICYmIHB1bHNlUmVzdWx0ID49IDcpIHsgY29sb3IgPSBcInllbGxvd1wiOyB9IC8vc3BvbnRhbmVpdHkgYW5kIGNvbmNlcm4gZm9yIG90aGVyc1xyXG4gICAgZWxzZSBpZiAocHVsc2VSZXN1bHQgPCA1ICYmIHB1bHNlUmVzdWx0ID49IDMpIHsgY29sb3IgPSBcInZpb2xldFwiOyB9IC8vd2lzaCBmb3IgYSBtYWdpYyByZWxhdGlvbiB0byByZWFsaXR5LCBpbnR1aXRpdmUgd2hvbGVuZXNzXHJcbiAgICByZXR1cm4gY29sb3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwZWNpZnlNdXNpY05vdGUoY29sb3IpIHtcclxuICAgIFxyXG4gICAgdmFyIG1ub3RlID0gXCJcIjtcclxuICAgIGlmIChjb2xvciA9PSBcImdyZXlcIikgeyBtbm90ZSA9IFwiRywgYmFzcyBjbGVmXCI7IH1cclxuICAgIGVsc2UgaWYgKGNvbG9yID09IFwiYmxhY2tcIikgeyBtbm90ZSA9IFwiRCwgYmFzcyBjbGVmXCI7IH1cclxuICAgIGVsc2UgaWYgKGNvbG9yID09IFwiYnJvd25cIikgeyBtbm90ZSA9IFwiQiwgYmFzcyBjbGVmXCI7IH1cclxuICAgIGVsc2UgaWYgKGNvbG9yID09IFwiYmx1ZVwiKSB7IG1ub3RlID0gXCJGLCBiYXNzIGNsZWZcIjsgfVxyXG4gICAgZWxzZSBpZiAoY29sb3IgPT0gXCJncmVlblwiKSB7IG1ub3RlID0gXCJHLCB0cmVibGUgY2xlZlwiOyB9XHJcbiAgICBlbHNlIGlmIChjb2xvciA9PSBcIm9yYW5nZVwiKSB7IG1ub3RlID0gXCJCLCB0cmVibGUgY2xlZlwiOyB9XHJcbiAgICBlbHNlIGlmIChjb2xvciA9PSBcInllbGxvd1wiKSB7IG1ub3RlID0gXCJGLCB0cmVibGUgY2xlZlwiOyB9XHJcbiAgICBlbHNlIGlmIChjb2xvciA9PSBcInZpb2xldFwiKSB7IG1ub3RlID0gXCJFLCB0cmVibGUgY2xlZlwiOyB9XHJcbiAgICByZXR1cm4gbW5vdGU7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVNldE5vdGUgPSAocHVsc2UxLCBwdWxzZTIsIHB1bHNlMykgPT4ge1xyXG4gICAgLy9jYWxjdWxhdGluZyBwdWxzZSBkaWZmZXJlbmNlIGFuZCBjb252ZXJ0aW5nIHRvIHBvc2l0aXZlIG51bWJlclxyXG4gICAgbGV0IHB1bHNlUmVzdWx0MSA9IChwdWxzZTEgLSBwdWxzZTIpO1xyXG4gICAgbGV0IHB1bHNlUmVzdWx0MiA9IChwdWxzZTIgLSBwdWxzZTMpO1xyXG4gICAgbGV0IHB1bHNlUmVzdWx0MyA9IChwdWxzZTMgLSBwdWxzZTEpO1xyXG4gICAgaWYgKHB1bHNlUmVzdWx0MSA8IDApIHsgcHVsc2VSZXN1bHQxICo9IC0xOyB9O1xyXG4gICAgaWYgKHB1bHNlUmVzdWx0MiA8IDApIHsgcHVsc2VSZXN1bHQyICo9IC0xOyB9O1xyXG4gICAgaWYgKHB1bHNlUmVzdWx0MyA8IDApIHsgcHVsc2VSZXN1bHQzICo9IC0xOyB9O1xyXG5cclxuICAgIC8vZ2V0IHRoZSBjb2xvclxyXG4gICAgY29uc3QgY29sb3IxID0gc3BlY2lmeUNvbG9yKHB1bHNlUmVzdWx0MSk7XHJcbiAgICBjb25zdCBjb2xvcjIgPSBzcGVjaWZ5Q29sb3IocHVsc2VSZXN1bHQyKTtcclxuICAgIGNvbnN0IGNvbG9yMyA9IHNwZWNpZnlDb2xvcihwdWxzZVJlc3VsdDMpO1xyXG5cclxuICAgIC8vZ2V0IHRoZSBub3RlIGJhc2VkIG9uIHRoZSBjb2xvclxyXG4gICAgY29uc3Qgbm90ZTEgPSBzcGVjaWZ5TXVzaWNOb3RlKGNvbG9yMSk7XHJcbiAgICBjb25zdCBub3RlMiA9IHNwZWNpZnlNdXNpY05vdGUoY29sb3IyKTtcclxuICAgIGNvbnN0IG5vdGUzID0gc3BlY2lmeU11c2ljTm90ZShjb2xvcjMpO1xyXG5cclxuICAgIHJldHVybihbXHJcbiAgICAgICAgbm90ZTEsXHJcbiAgICAgICAgbm90ZTIsXHJcbiAgICAgICAgbm90ZTNcclxuICAgIF0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU2V0Tm90ZTsiXSwibmFtZXMiOlsic3BlY2lmeUNvbG9yIiwicHVsc2VSZXN1bHQiLCJjb2xvciIsInNwZWNpZnlNdXNpY05vdGUiLCJtbm90ZSIsInVzZVNldE5vdGUiLCJwdWxzZTEiLCJwdWxzZTIiLCJwdWxzZTMiLCJwdWxzZVJlc3VsdDEiLCJwdWxzZVJlc3VsdDIiLCJwdWxzZVJlc3VsdDMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJub3RlMSIsIm5vdGUyIiwibm90ZTMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/use-set-note.js\n"));

/***/ })

});