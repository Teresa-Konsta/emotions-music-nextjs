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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/*function specifyColor(pulseResult) {\r\n    let color = \"\";\r\n    switch(pulseResult) {\r\n        case (pulseResult == 0 || pulseResult == 1):\r\n            color = \"grey\";\r\n            break;\r\n        case (pulseResult < 1):\r\n            color = \"black\";\r\n            break;\r\n        case (pulseResult < 3 && pulseResult > 2):\r\n            color = \"brown\";\r\n            break;\r\n        case (pulseResult <= 2 && pulseResult >= 1):\r\n            color = \"blue\";\r\n            break;\r\n        case (pulseResult < 7 && pulseResult >= 5):\r\n            color = \"green\";\r\n            break;\r\n        case (pulseResult >= 10):\r\n            color = \"orange\";\r\n            break;\r\n        case (pulseResult < 10 && pulseResult >= 7):\r\n            color = \"yellow\";\r\n            break;\r\n        case (pulseResult < 5 && pulseResult >= 3):\r\n            color = \"violet\";\r\n            break;\r\n        default:\r\n            color = '';\r\n            break;\r\n    }\r\n    return color;\r\n}\r\n\r\nfunction specifyMusicNote(color) {\r\n    let mnote = '';\r\n    switch(color) {\r\n        case \"grey\":\r\n            mnote = \"G, bass clef\";\r\n            break;\r\n        case \"black\":\r\n            mnote = \"D, bass clef\";\r\n            break;\r\n        case \"brown\":\r\n            mnote = \"B, bass clef\";\r\n            break;\r\n        case \"blue\":\r\n            mnote = \"F, bass clef\";\r\n            break;\r\n        case \"green\":\r\n            mnote = \"G, treble clef\";\r\n            break;\r\n        case \"orange\":\r\n            mnote = \"B, treble clef\";\r\n            break;\r\n        case \"yellow\":\r\n            mnote = \"F, treble clef\";\r\n            break;\r\n        case \"violet\":\r\n            mnote = \"E, treble clef\";\r\n            break;\r\n        default:\r\n            mnote = '';\r\n            break;\r\n    }\r\n    return mnote;\r\n}*/ function specifyColor(pulseResult) {\n    var color = \"\";\n    if (pulseResult == 0 || pulseResult == 1) {\n        color = \"grey\";\n    } else if (pulseResult < 1) {\n        color = \"black\";\n    } else if (pulseResult < 3 && pulseResult > 2) {\n        color = \"brown\";\n    } else if (pulseResult <= 2 && pulseResult >= 1) {\n        color = \"blue\";\n    } else if (pulseResult < 7 && pulseResult >= 5) {\n        color = \"green\";\n    } else if (pulseResult >= 10) {\n        color = \"orange\";\n    } else if (pulseResult < 10 && pulseResult >= 7) {\n        color = \"yellow\";\n    } else if (pulseResult < 5 && pulseResult >= 3) {\n        color = \"violet\";\n    } //wish for a magic relation to reality, intuitive wholeness\n    return color;\n}\nconst useSetNote = (pulse1, pulse2, pulse3)=>{\n    //calculating pulse difference and converting to positive number\n    let pulseResult1 = pulse1 - pulse2;\n    let pulseResult2 = pulse2 - pulse3;\n    let pulseResult3 = pulse3 - pulse1;\n    if (pulseResult1 < 0) {\n        pulseResult1 *= -1;\n    }\n    ;\n    if (pulseResult2 < 0) {\n        pulseResult2 *= -1;\n    }\n    ;\n    if (pulseResult3 < 0) {\n        pulseResult3 *= -1;\n    }\n    ;\n    //get the color\n    const color1 = specifyColor(pulseResult1);\n    const color2 = specifyColor(pulseResult2);\n    const color3 = specifyColor(pulseResult3);\n    //get the note based on the color\n    const note1 = specifyMusicNote(color1);\n    const note2 = specifyMusicNote(color2);\n    const note3 = specifyMusicNote(color3);\n    return [\n        note1,\n        note2,\n        note3\n    ];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSetNote);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlLXNldC1ub3RlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0VDLEdBRUQsU0FBU0EsYUFBYUMsV0FBVyxFQUFFO0lBQy9CLElBQUlDLFFBQVE7SUFDWixJQUFJRCxlQUFlLEtBQUtBLGVBQWUsR0FBRztRQUFFQyxRQUFRO0lBQVEsT0FDdkQsSUFBSUQsY0FBYyxHQUFHO1FBQUVDLFFBQVE7SUFBUyxPQUN4QyxJQUFJRCxjQUFjLEtBQUtBLGNBQWMsR0FBRztRQUFFQyxRQUFRO0lBQVMsT0FDM0QsSUFBSUQsZUFBZSxLQUFLQSxlQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFRLE9BQzVELElBQUlELGNBQWMsS0FBS0EsZUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBUyxPQUM1RCxJQUFJRCxlQUFlLElBQUk7UUFBRUMsUUFBUTtJQUFVLE9BQzNDLElBQUlELGNBQWMsTUFBTUEsZUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBVSxPQUM5RCxJQUFJRCxjQUFjLEtBQUtBLGVBQWUsR0FBRztRQUFFQyxRQUFRO0lBQVUsQ0FBQyxDQUFDLDJEQUEyRDtJQUMvSCxPQUFPQTtBQUNYO0FBRUEsTUFBTUMsYUFBYSxDQUFDQyxRQUFRQyxRQUFRQyxTQUFXO0lBQzNDLGdFQUFnRTtJQUNoRSxJQUFJQyxlQUFnQkgsU0FBU0M7SUFDN0IsSUFBSUcsZUFBZ0JILFNBQVNDO0lBQzdCLElBQUlHLGVBQWdCSCxTQUFTRjtJQUM3QixJQUFJRyxlQUFlLEdBQUc7UUFBRUEsZ0JBQWdCLENBQUM7SUFBRyxDQUFDOztJQUM3QyxJQUFJQyxlQUFlLEdBQUc7UUFBRUEsZ0JBQWdCLENBQUM7SUFBRyxDQUFDOztJQUM3QyxJQUFJQyxlQUFlLEdBQUc7UUFBRUEsZ0JBQWdCLENBQUM7SUFBRyxDQUFDOztJQUU3QyxlQUFlO0lBQ2YsTUFBTUMsU0FBU1YsYUFBYU87SUFDNUIsTUFBTUksU0FBU1gsYUFBYVE7SUFDNUIsTUFBTUksU0FBU1osYUFBYVM7SUFFNUIsaUNBQWlDO0lBQ2pDLE1BQU1JLFFBQVFDLGlCQUFpQko7SUFDL0IsTUFBTUssUUFBUUQsaUJBQWlCSDtJQUMvQixNQUFNSyxRQUFRRixpQkFBaUJGO0lBRS9CLE9BQU87UUFDSEM7UUFDQUU7UUFDQUM7S0FDSDtBQUNMO0FBRUEsK0RBQWViLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZS1zZXQtbm90ZS5qcz82MjU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qZnVuY3Rpb24gc3BlY2lmeUNvbG9yKHB1bHNlUmVzdWx0KSB7XHJcbiAgICBsZXQgY29sb3IgPSBcIlwiO1xyXG4gICAgc3dpdGNoKHB1bHNlUmVzdWx0KSB7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPT0gMCB8fCBwdWxzZVJlc3VsdCA9PSAxKTpcclxuICAgICAgICAgICAgY29sb3IgPSBcImdyZXlcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPCAxKTpcclxuICAgICAgICAgICAgY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgMyAmJiBwdWxzZVJlc3VsdCA+IDIpOlxyXG4gICAgICAgICAgICBjb2xvciA9IFwiYnJvd25cIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPD0gMiAmJiBwdWxzZVJlc3VsdCA+PSAxKTpcclxuICAgICAgICAgICAgY29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPCA3ICYmIHB1bHNlUmVzdWx0ID49IDUpOlxyXG4gICAgICAgICAgICBjb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPj0gMTApOlxyXG4gICAgICAgICAgICBjb2xvciA9IFwib3JhbmdlXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKHB1bHNlUmVzdWx0IDwgMTAgJiYgcHVsc2VSZXN1bHQgPj0gNyk6XHJcbiAgICAgICAgICAgIGNvbG9yID0gXCJ5ZWxsb3dcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAocHVsc2VSZXN1bHQgPCA1ICYmIHB1bHNlUmVzdWx0ID49IDMpOlxyXG4gICAgICAgICAgICBjb2xvciA9IFwidmlvbGV0XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGVjaWZ5TXVzaWNOb3RlKGNvbG9yKSB7XHJcbiAgICBsZXQgbW5vdGUgPSAnJztcclxuICAgIHN3aXRjaChjb2xvcikge1xyXG4gICAgICAgIGNhc2UgXCJncmV5XCI6XHJcbiAgICAgICAgICAgIG1ub3RlID0gXCJHLCBiYXNzIGNsZWZcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJsYWNrXCI6XHJcbiAgICAgICAgICAgIG1ub3RlID0gXCJELCBiYXNzIGNsZWZcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJyb3duXCI6XHJcbiAgICAgICAgICAgIG1ub3RlID0gXCJCLCBiYXNzIGNsZWZcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJsdWVcIjpcclxuICAgICAgICAgICAgbW5vdGUgPSBcIkYsIGJhc3MgY2xlZlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcclxuICAgICAgICAgICAgbW5vdGUgPSBcIkcsIHRyZWJsZSBjbGVmXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcclxuICAgICAgICAgICAgbW5vdGUgPSBcIkIsIHRyZWJsZSBjbGVmXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcclxuICAgICAgICAgICAgbW5vdGUgPSBcIkYsIHRyZWJsZSBjbGVmXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ2aW9sZXRcIjpcclxuICAgICAgICAgICAgbW5vdGUgPSBcIkUsIHRyZWJsZSBjbGVmXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIG1ub3RlID0gJyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1ub3RlO1xyXG59Ki9cclxuXHJcbmZ1bmN0aW9uIHNwZWNpZnlDb2xvcihwdWxzZVJlc3VsdCkge1xyXG4gICAgdmFyIGNvbG9yID0gXCJcIjtcclxuICAgIGlmIChwdWxzZVJlc3VsdCA9PSAwIHx8IHB1bHNlUmVzdWx0ID09IDEpIHsgY29sb3IgPSBcImdyZXlcIjsgfSAvL2Vtb3Rpb25hbCBjb29sbmVzcywgaW5kaWZmZXJlbmNlXHJcbiAgICBlbHNlIGlmIChwdWxzZVJlc3VsdCA8IDEpIHsgY29sb3IgPSBcImJsYWNrXCI7IH0vL3N0cm9uZ2VzdCBcImRvd25cIiAvL2ZpbmFsLCBob3BlbGVzc25lc3MsIGEgcHJvdGVzdCBhZ2FpbnN0IGxpZmUgYW5kIGZhdGVcclxuICAgIGVsc2UgaWYgKHB1bHNlUmVzdWx0IDwgMyAmJiBwdWxzZVJlc3VsdCA+IDIpIHsgY29sb3IgPSBcImJyb3duXCI7IH0gLy9waHlzaWNhbCBkaXNjb21mb3J0IG9yIGlsbG5lc3NcclxuICAgIGVsc2UgaWYgKHB1bHNlUmVzdWx0IDw9IDIgJiYgcHVsc2VSZXN1bHQgPj0gMSkgeyBjb2xvciA9IFwiYmx1ZVwiOyB9IC8vdG90YWwgcGVhY2VcclxuICAgIGVsc2UgaWYgKHB1bHNlUmVzdWx0IDwgNyAmJiBwdWxzZVJlc3VsdCA+PSA1KSB7IGNvbG9yID0gXCJncmVlblwiOyB9IC8vY29uc3RhbnQgc2VsZi1jb25zY2lvdXNuZXNzLCByZXNpc3RhbmNlIHRvIGNoYW5nZVxyXG4gICAgZWxzZSBpZiAocHVsc2VSZXN1bHQgPj0gMTApIHsgY29sb3IgPSBcIm9yYW5nZVwiOyB9Ly9zdHJvbmdlc3QgXCJ1cFwiIC8vc3Ryb25nIGVtb3Rpb25zLCB2aXRhbCBmb3JjZSwgaXQgaW5jcmVhc2VzIGhlYXJ0IHJhdGUsIGJsb29kIHByZXNzdXJlIGFuZCBicmVhdGhpbmdcclxuICAgIGVsc2UgaWYgKHB1bHNlUmVzdWx0IDwgMTAgJiYgcHVsc2VSZXN1bHQgPj0gNykgeyBjb2xvciA9IFwieWVsbG93XCI7IH0gLy9zcG9udGFuZWl0eSBhbmQgY29uY2VybiBmb3Igb3RoZXJzXHJcbiAgICBlbHNlIGlmIChwdWxzZVJlc3VsdCA8IDUgJiYgcHVsc2VSZXN1bHQgPj0gMykgeyBjb2xvciA9IFwidmlvbGV0XCI7IH0gLy93aXNoIGZvciBhIG1hZ2ljIHJlbGF0aW9uIHRvIHJlYWxpdHksIGludHVpdGl2ZSB3aG9sZW5lc3NcclxuICAgIHJldHVybiBjb2xvcjtcclxufVxyXG5cclxuY29uc3QgdXNlU2V0Tm90ZSA9IChwdWxzZTEsIHB1bHNlMiwgcHVsc2UzKSA9PiB7XHJcbiAgICAvL2NhbGN1bGF0aW5nIHB1bHNlIGRpZmZlcmVuY2UgYW5kIGNvbnZlcnRpbmcgdG8gcG9zaXRpdmUgbnVtYmVyXHJcbiAgICBsZXQgcHVsc2VSZXN1bHQxID0gKHB1bHNlMSAtIHB1bHNlMik7XHJcbiAgICBsZXQgcHVsc2VSZXN1bHQyID0gKHB1bHNlMiAtIHB1bHNlMyk7XHJcbiAgICBsZXQgcHVsc2VSZXN1bHQzID0gKHB1bHNlMyAtIHB1bHNlMSk7XHJcbiAgICBpZiAocHVsc2VSZXN1bHQxIDwgMCkgeyBwdWxzZVJlc3VsdDEgKj0gLTE7IH07XHJcbiAgICBpZiAocHVsc2VSZXN1bHQyIDwgMCkgeyBwdWxzZVJlc3VsdDIgKj0gLTE7IH07XHJcbiAgICBpZiAocHVsc2VSZXN1bHQzIDwgMCkgeyBwdWxzZVJlc3VsdDMgKj0gLTE7IH07XHJcblxyXG4gICAgLy9nZXQgdGhlIGNvbG9yXHJcbiAgICBjb25zdCBjb2xvcjEgPSBzcGVjaWZ5Q29sb3IocHVsc2VSZXN1bHQxKTtcclxuICAgIGNvbnN0IGNvbG9yMiA9IHNwZWNpZnlDb2xvcihwdWxzZVJlc3VsdDIpO1xyXG4gICAgY29uc3QgY29sb3IzID0gc3BlY2lmeUNvbG9yKHB1bHNlUmVzdWx0Myk7XHJcblxyXG4gICAgLy9nZXQgdGhlIG5vdGUgYmFzZWQgb24gdGhlIGNvbG9yXHJcbiAgICBjb25zdCBub3RlMSA9IHNwZWNpZnlNdXNpY05vdGUoY29sb3IxKTtcclxuICAgIGNvbnN0IG5vdGUyID0gc3BlY2lmeU11c2ljTm90ZShjb2xvcjIpO1xyXG4gICAgY29uc3Qgbm90ZTMgPSBzcGVjaWZ5TXVzaWNOb3RlKGNvbG9yMyk7XHJcblxyXG4gICAgcmV0dXJuKFtcclxuICAgICAgICBub3RlMSxcclxuICAgICAgICBub3RlMixcclxuICAgICAgICBub3RlM1xyXG4gICAgXSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTZXROb3RlOyJdLCJuYW1lcyI6WyJzcGVjaWZ5Q29sb3IiLCJwdWxzZVJlc3VsdCIsImNvbG9yIiwidXNlU2V0Tm90ZSIsInB1bHNlMSIsInB1bHNlMiIsInB1bHNlMyIsInB1bHNlUmVzdWx0MSIsInB1bHNlUmVzdWx0MiIsInB1bHNlUmVzdWx0MyIsImNvbG9yMSIsImNvbG9yMiIsImNvbG9yMyIsIm5vdGUxIiwic3BlY2lmeU11c2ljTm90ZSIsIm5vdGUyIiwibm90ZTMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/use-set-note.js\n"));

/***/ })

});