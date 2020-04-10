(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./dist/static/js/helpers/authorize.js":
/*!*********************************************!*\
  !*** ./dist/static/js/helpers/authorize.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction authorize(cb) {\n    var data = null;\n\n    var xhr = new XMLHttpRequest();\n    xhr.withCredentials = true;\n\n    xhr.addEventListener(\"readystatechange\", function () {\n        if (this.readyState === this.DONE) {\n            if(this.status == 200)\n            {\n                cb(undefined, JSON.parse(this.responseText));\n            }\n            else\n            {\n                cb('error', {});\n            }\n        }\n    });\n\n    xhr.open(\"GET\", \"http://localhost:3002/api/validate\");\n    xhr.send(data);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authorize);\n\n//# sourceURL=webpack:///./dist/static/js/helpers/authorize.js?");

/***/ }),

/***/ "./dist/static/js/helpers/tryToLogin.js":
/*!**********************************************!*\
  !*** ./dist/static/js/helpers/tryToLogin.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _authorize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorize.js */ \"./dist/static/js/helpers/authorize.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nObject(_authorize_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(error, user) {\n    if(error) {\n        local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.clear();\n        location.href = 'http://localhost:3002/signin';\n    }\n\n    local_storage__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', user);\n\n    console.log(user);\n});\n\n//# sourceURL=webpack:///./dist/static/js/helpers/tryToLogin.js?");

/***/ })

}]);