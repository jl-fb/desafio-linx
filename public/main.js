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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/loading/loading.css":
/*!********************************************!*\
  !*** ./src/components/loading/loading.css ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/loading/loading.css?");

/***/ }),

/***/ "./src/components/loading/loading.js":
/*!*******************************************!*\
  !*** ./src/components/loading/loading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.css */ \"./src/components/loading/loading.css\");\n/*\n @format\n */\n\n\nconst load2 = document.createElement('div')\nload2.classList.add('loader')\n\nconst loading = (show, element) => {\n  console.log('LOAD2', load2)\n  console.log('DOCUMENT', element)\n  console.log('SHOWW', show)\n  show ? (load2.style.display = 'block') : (load2.style.display = 'none')\n  console.log('LOAD', load2)\n  element.insertAdjacentElement('afterbegin', load2)\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);\n\n\n//# sourceURL=webpack:///./src/components/loading/loading.js?");

/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/global.css?");

/***/ }),

/***/ "./src/js/index.css":
/*!**************************!*\
  !*** ./src/js/index.css ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/js/index.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/products.js */ \"./src/services/products.js\");\n/* harmony import */ var _components_loading_loading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loading/loading.js */ \"./src/components/loading/loading.js\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.css */ \"./src/global.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./src/js/index.css\");\n/* eslint-disable import/extensions */\n/**\n * @format\n */\n\n\n\n\n\nconst page = 1\n\n\nlet productList = []\n\n// async function setProducts(products){\n//   console.log(\"PRODUTOS\", productList)\n//   console.log(\"PRODUTOS\", products)\n//   return [...productList, productList]\n// } \n\n\nconst getProducts = async (e) => {\n  e.preventDefault()\n  const data =  await Object(_services_products_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(page)\n  productList = [...productList, data.products]  \n}\nconst main = document.getElementById('main')\nObject(_components_loading_loading_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true, main)\nsetTimeout(() => {\n  Object(_components_loading_loading_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false, main)\n}, 3000);\nconsole.log(\"ALOOOOO\",productList)\nconst btn = document.querySelector('[get-products]')\nbtn.onclick = getProducts\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* @format */\n\nconst BASE_URL = \"https://frontend-intern-challenge-api.iurykrieger.now.sh\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BASE_URL);\n\n\n//# sourceURL=webpack:///./src/services/api.js?");

/***/ }),

/***/ "./src/services/products.js":
/*!**********************************!*\
  !*** ./src/services/products.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/services/api.js\");\n/**\n *  @format\n */\n\n\n\nasync function getProductsService(page) {\n  console.log('ALO', page)\n  const resp = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/products?page=${page}`)\n  if (resp.ok) {\n    console.log(resp)\n    const data = await resp.json()\n    console.log(data)\n    return data\n  }\n  throw new Error('Something went wrong')\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getProductsService);\n\n\n//# sourceURL=webpack:///./src/services/products.js?");

/***/ })

/******/ });