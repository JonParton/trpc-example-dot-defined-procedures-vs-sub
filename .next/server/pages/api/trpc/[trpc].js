"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ "(api)/./src/pages/api/trpc/[trpc].ts":
/*!**************************************!*\
  !*** ./src/pages/api/trpc/[trpc].ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__, _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_server__WEBPACK_IMPORTED_MODULE_0__, _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/**\n * This is the API-handler of your app that contains all your API routes.\n * On a bigger app, you will probably want to split this file up into multiple files.\n */ \n\nconst t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.create();\nconst appRouter = t.router({\n    foo: t.router({\n        \"bar.qux\": t.procedure.query(()=>{\n            return {\n                log: \"the`foo`.`bar.qux` procedure responded (IE the one with a . in the property name)\"\n            };\n        }),\n        bar: t.router({\n            qux: t.procedure.query(()=>{\n                return {\n                    log: \"the`foo`.`bar`.`qux` procedure responded (IE the one defined as sub routers)\"\n                };\n            })\n        })\n    })\n});\n// export API handler\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__.createNextApiHandler({\n    router: appRouter,\n    createContext: ()=>({})\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Q0FHQyxHQUN1QztBQUNlO0FBR3ZELE1BQU1FLENBQUMsR0FBR0YseURBQWUsRUFBRTtBQUUzQixNQUFNSSxTQUFTLEdBQUdGLENBQUMsQ0FBQ0csTUFBTSxDQUFDO0lBQ3pCQyxHQUFHLEVBQUVKLENBQUMsQ0FBQ0csTUFBTSxDQUFDO1FBQ1osU0FBUyxFQUFFSCxDQUFDLENBQUNLLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLElBQU07WUFDakMsT0FBTztnQkFDTEMsR0FBRyxFQUNELG1GQUFtRjthQUN0RixDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBQ0ZDLEdBQUcsRUFBRVIsQ0FBQyxDQUFDRyxNQUFNLENBQUM7WUFDWk0sR0FBRyxFQUFFVCxDQUFDLENBQUNLLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLElBQU07Z0JBQzNCLE9BQU87b0JBQ0xDLEdBQUcsRUFDRCw4RUFBOEU7aUJBQ2pGLENBQUM7WUFDSixDQUFDLENBQUM7U0FDSCxDQUFDO0tBQ0gsQ0FBQztDQUNILENBQUM7QUFNRixxQkFBcUI7QUFDckIsaUVBQWVSLDRFQUE2QixDQUFDO0lBQzNDSSxNQUFNLEVBQUVELFNBQVM7SUFDakJTLGFBQWEsRUFBRSxJQUFNLENBQUMsRUFBRSxDQUFDO0NBQzFCLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlcy9uZXh0LW1pbmltYWwvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzP2NlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIHRoZSBBUEktaGFuZGxlciBvZiB5b3VyIGFwcCB0aGF0IGNvbnRhaW5zIGFsbCB5b3VyIEFQSSByb3V0ZXMuXG4gKiBPbiBhIGJpZ2dlciBhcHAsIHlvdSB3aWxsIHByb2JhYmx5IHdhbnQgdG8gc3BsaXQgdGhpcyBmaWxlIHVwIGludG8gbXVsdGlwbGUgZmlsZXMuXG4gKi9cbmltcG9ydCB7IGluaXRUUlBDIH0gZnJvbSBcIkB0cnBjL3NlcnZlclwiO1xuaW1wb3J0ICogYXMgdHJwY05leHQgZnJvbSBcIkB0cnBjL3NlcnZlci9hZGFwdGVycy9uZXh0XCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5jb25zdCB0ID0gaW5pdFRSUEMuY3JlYXRlKCk7XG5cbmNvbnN0IGFwcFJvdXRlciA9IHQucm91dGVyKHtcbiAgZm9vOiB0LnJvdXRlcih7XG4gICAgXCJiYXIucXV4XCI6IHQucHJvY2VkdXJlLnF1ZXJ5KCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvZzpcbiAgICAgICAgICBcInRoZWBmb29gLmBiYXIucXV4YCBwcm9jZWR1cmUgcmVzcG9uZGVkIChJRSB0aGUgb25lIHdpdGggYSAuIGluIHRoZSBwcm9wZXJ0eSBuYW1lKVwiXG4gICAgICB9O1xuICAgIH0pLFxuICAgIGJhcjogdC5yb3V0ZXIoe1xuICAgICAgcXV4OiB0LnByb2NlZHVyZS5xdWVyeSgoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbG9nOlxuICAgICAgICAgICAgXCJ0aGVgZm9vYC5gYmFyYC5gcXV4YCBwcm9jZWR1cmUgcmVzcG9uZGVkIChJRSB0aGUgb25lIGRlZmluZWQgYXMgc3ViIHJvdXRlcnMpXCJcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn0pO1xuXG4vLyBleHBvcnQgb25seSB0aGUgdHlwZSBkZWZpbml0aW9uIG9mIHRoZSBBUElcbi8vIE5vbmUgb2YgdGhlIGFjdHVhbCBpbXBsZW1lbnRhdGlvbiBpcyBleHBvc2VkIHRvIHRoZSBjbGllbnRcbmV4cG9ydCB0eXBlIEFwcFJvdXRlciA9IHR5cGVvZiBhcHBSb3V0ZXI7XG5cbi8vIGV4cG9ydCBBUEkgaGFuZGxlclxuZXhwb3J0IGRlZmF1bHQgdHJwY05leHQuY3JlYXRlTmV4dEFwaUhhbmRsZXIoe1xuICByb3V0ZXI6IGFwcFJvdXRlcixcbiAgY3JlYXRlQ29udGV4dDogKCkgPT4gKHt9KVxufSk7XG4iXSwibmFtZXMiOlsiaW5pdFRSUEMiLCJ0cnBjTmV4dCIsInQiLCJjcmVhdGUiLCJhcHBSb3V0ZXIiLCJyb3V0ZXIiLCJmb28iLCJwcm9jZWR1cmUiLCJxdWVyeSIsImxvZyIsImJhciIsInF1eCIsImNyZWF0ZU5leHRBcGlIYW5kbGVyIiwiY3JlYXRlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/trpc/[trpc].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/trpc/[trpc].ts"));
module.exports = __webpack_exports__;

})();