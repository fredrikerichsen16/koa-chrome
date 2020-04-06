/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/vue-dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/static/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/static/js/index.js":
/*!*********************************!*\
  !*** ./dist/static/js/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet $user = local_storage__WEBPACK_IMPORTED_MODULE_0___default.a.get('user');\n\nif (!$user) {\n    $user = {\n        id: 1,\n        personal: {\n            name: 'Fredrik',\n            city: {\n                name: 'Stavanger, Norway',\n                timezone: 'UTC+1',\n            },\n        },\n        preferences: {\n            clockFormat: '12HR',\n            language: 'EN',\n        },\n        widgets: ['news-digest', 'todo', 'stocks'],\n        middleComponent: {\n            slide: 1\n        },\n    };\n\n    local_storage__WEBPACK_IMPORTED_MODULE_0___default.a.set('user', $user);\n}\n\n//# sourceURL=webpack:///./dist/static/js/index.js?");

/***/ }),

/***/ "./node_modules/local-storage/local-storage.js":
/*!*****************************************************!*\
  !*** ./node_modules/local-storage/local-storage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar stub = __webpack_require__(/*! ./stub */ \"./node_modules/local-storage/stub.js\");\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/local-storage/parse.js\");\nvar tracking = __webpack_require__(/*! ./tracking */ \"./node_modules/local-storage/tracking.js\");\nvar ls = 'localStorage' in global && global.localStorage ? global.localStorage : stub;\n\nfunction accessor (key, value) {\n  if (arguments.length === 1) {\n    return get(key);\n  }\n  return set(key, value);\n}\n\nfunction get (key) {\n  const raw = ls.getItem(key);\n  const parsed = parse(raw);\n  return parsed;\n}\n\nfunction set (key, value) {\n  try {\n    ls.setItem(key, JSON.stringify(value));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction remove (key) {\n  return ls.removeItem(key);\n}\n\nfunction clear () {\n  return ls.clear();\n}\n\nfunction backend (store) {\n  store && (ls = store);\n\n  return ls;\n}\n\naccessor.set = set;\naccessor.get = get;\naccessor.remove = remove;\naccessor.clear = clear;\naccessor.backend = backend;\naccessor.on = tracking.on;\naccessor.off = tracking.off;\n\nmodule.exports = accessor;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/local-storage/local-storage.js?");

/***/ }),

/***/ "./node_modules/local-storage/parse.js":
/*!*********************************************!*\
  !*** ./node_modules/local-storage/parse.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction parse (rawValue) {\n  const parsed = parseValue(rawValue);\n\n  if (parsed === undefined) {\n    return null;\n  }\n\n  return parsed;\n}\n\nfunction parseValue (rawValue) {\n  try {\n    return JSON.parse(rawValue);\n  } catch (err) {\n    return rawValue;\n  }\n}\n\nmodule.exports = parse;\n\n\n//# sourceURL=webpack:///./node_modules/local-storage/parse.js?");

/***/ }),

/***/ "./node_modules/local-storage/stub.js":
/*!********************************************!*\
  !*** ./node_modules/local-storage/stub.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ms = {};\n\nfunction getItem (key) {\n  return key in ms ? ms[key] : null;\n}\n\nfunction setItem (key, value) {\n  ms[key] = value;\n  return true;\n}\n\nfunction removeItem (key) {\n  var found = key in ms;\n  if (found) {\n    return delete ms[key];\n  }\n  return false;\n}\n\nfunction clear () {\n  ms = {};\n  return true;\n}\n\nmodule.exports = {\n  getItem: getItem,\n  setItem: setItem,\n  removeItem: removeItem,\n  clear: clear\n};\n\n\n//# sourceURL=webpack:///./node_modules/local-storage/stub.js?");

/***/ }),

/***/ "./node_modules/local-storage/tracking.js":
/*!************************************************!*\
  !*** ./node_modules/local-storage/tracking.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/local-storage/parse.js\");\nvar listeners = {};\nvar listening = false;\n\nfunction listen () {\n  if (global.addEventListener) {\n    global.addEventListener('storage', change, false);\n  } else if (global.attachEvent) {\n    global.attachEvent('onstorage', change);\n  } else {\n    global.onstorage = change;\n  }\n}\n\nfunction change (e) {\n  if (!e) {\n    e = global.event;\n  }\n  var all = listeners[e.key];\n  if (all) {\n    all.forEach(fire);\n  }\n\n  function fire (listener) {\n    listener(parse(e.newValue), parse(e.oldValue), e.url || e.uri);\n  }\n}\n\nfunction on (key, fn) {\n  if (listeners[key]) {\n    listeners[key].push(fn);\n  } else {\n    listeners[key] = [fn];\n  }\n  if (listening === false) {\n    listen();\n  }\n}\n\nfunction off (key, fn) {\n  var ns = listeners[key];\n  if (ns.length > 1) {\n    ns.splice(ns.indexOf(fn), 1);\n  } else {\n    listeners[key] = [];\n  }\n}\n\nmodule.exports = {\n  on: on,\n  off: off\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/local-storage/tracking.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ })

/******/ });