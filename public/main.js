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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.css */ \"./src/components/loading/loading.css\");\n/*\n @format\n */\n\n\nconst divLoad = document.createElement('div')\nconst load = document.createElement('div')\ndivLoad.insertAdjacentElement('afterbegin', load)\ndivLoad.classList.add('divLoader')\nload.classList.add('divLoader__loader')\n\nconst Loading = (show, element) => {\n  show ? (load.style.display = 'block') : (load.style.display = 'none')\n  show ? (divLoad.style.display = 'block') : (divLoad.style.display = 'none')\n\n  element.insertAdjacentElement('afterbegin', divLoad)\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n\n//# sourceURL=webpack:///./src/components/loading/loading.js?");

/***/ }),

/***/ "./src/components/productCard/productCard.css":
/*!****************************************************!*\
  !*** ./src/components/productCard/productCard.css ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/productCard/productCard.css?");

/***/ }),

/***/ "./src/components/productCard/productCard.js":
/*!***************************************************!*\
  !*** ./src/components/productCard/productCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _productCard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productCard.css */ \"./src/components/productCard/productCard.css\");\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils.js */ \"./src/utils/utils.js\");\n/**\n * @format\n */\n\n\n\n\nfunction SetProductCard(ele) {\n  const productCard = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CreateElement\"]('div', 'section__product-card')\n  const productImg = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CreateElement\"]('img', 'section__product-img')\n  const productInfo = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CreateElement\"]('div', 'section__product-infos')\n  let productName = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CreateElement\"]('div', 'section__product-name')\n  let productoldPrice = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CreateElement\"]('div', 'section__product-old-price')\n  let producActualPrice = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CreateElement\"]('div', 'section__product-price')\n  let productSlicePrice = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CreateElement\"]('div', 'section__product-old-price')\n  let productButton = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"CreateElement\"]('button', 'section__product-button')\n\n  _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"Log\"]('LOGGG', productCard)\n\n  _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"InsertBeforeElement\"](productCard, productImg)\n  _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"InsertBeforeElement\"](productCard, productInfo)\n  _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"InsertBeforeElement\"](productInfo, productName)\n  _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"InsertBeforeElement\"](productInfo, productoldPrice)\n  _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"InsertBeforeElement\"](productInfo, producActualPrice)\n  _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"InsertBeforeElement\"](productInfo, productSlicePrice)\n  _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"InsertBeforeElement\"](productInfo, productButton)\n\n  function setInfos() {\n    productImg.setAttribute('src', ele.image)\n    productName.innerHTML = ele.name\n    productoldPrice.innerHTML = `De R$${ele.oldPrice}`\n    producActualPrice.innerHTML = `Por R$${ele.price}`\n    productSlicePrice.innerHTML = `ou ${ele.installments.count} de R$${ele.installments.value}`\n    productButton.innerHTML = 'Comprar'\n  }\n  setInfos()\n\n  return productCard\n}\n\n// productCard.classList.add('section__product-card')\n// productImg.classList.add('section__product-img')\n// productInfo.classList.add('section__product-infos')\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SetProductCard);\n\n\n//# sourceURL=webpack:///./src/components/productCard/productCard.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global.css */ \"./src/global.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/js/index.css\");\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ \"./src/utils/utils.js\");\n/* harmony import */ var _services_products_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.js */ \"./src/services/products.js\");\n/* harmony import */ var _components_loading_loading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/loading/loading.js */ \"./src/components/loading/loading.js\");\n/* eslint-disable import/extensions */\n/**\n * @format\n */\n\n\n\n\n\n\nlet data = {\n  nextPage:\"\",\n  products: []\n}\n\nlet formNewsletter = {\n  name: \"\",\n  email: \"\",\n  cpf: \"\",\n  gender: \"\",\n}\n\nlet formInvite = {\n  name: \"\",\n  email: \"\",\n}\n// Eementos da DOM\nconst divMain = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.main')\nconst main = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('#main')\nconst section = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('#section-products')\nconst btnGetProducts = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('[get-products]')\n\n// Iniciando Estado do component main com um loader para ter produtos para mostrar\nconst setPage = async () => {\n  const response =  await Object(_services_products_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(1)\n  data = {...response}\n\n  if(data.products.length === 0){\n    divMain.style.display = 'none'\n    Object(_components_loading_loading_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(true, main)\n  }else{\n    Object(_components_loading_loading_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false, main)\n    divMain.style.display ='block'\n    // let test =  data.products.map(ele => {\n    //   return setProductCard(ele)\n    // })\n    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"SetPoductsToPageAppend\"])(section, data.products)\n  }\n}\n\nsetPage()\n\n\n\nconst getProducts = async (e) => {\n  \n  e.preventDefault()\n  let nextPage = data.nextPage.split('page=')\n  const response =  await Object(_services_products_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(nextPage[1])\n\n  data = {...data, ...response}\n  data = {\n    nextPage: response.nextPage,\n    products: [...data.products, ...response.products]\n  }\n  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"SetPoductsToPageAppend\"])(section, data.products)\n\n }\n\nconst btnNewsLetter = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('[formDataNewsletter]')\nconst btnInvite = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('[formDataInvite]')\nfunction formNewsletterSubmit(e) {\n  e.preventDefault()\n  formNewsletter.name = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('#name').value\n  formNewsletter.email = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('#email').value\n  formNewsletter.cpf = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('#cpf').value\n  const gender = document.getElementsByName('gender')\n  for(let i=0; i < gender.length; i++){\n    if(gender[i].checked === true){\n      formNewsletter.gender = gender[i].value\n    }\n  }\n  \n  if(formNewsletter.name.length < 3){\n    const isValid = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-name')\n    isValid.style.display = 'block'\n  }\n\n\n  if(!Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"IsValidEmail\"])(formNewsletter.email)){\n    const isValid = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-email')\n    isValid.style.display = 'block'\n  }\n  \n  if(!Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"IsValidCPF\"])(formNewsletter.cpf)){\n    const isValid = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-cpf')\n    isValid.style.display = 'block'\n  }\n  setTimeout(() => {\n    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"HideElement\"])(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-cpf'), Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-email'), Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-name'))\n  }, 5000);\n\n}\n\nfunction formInviteSubmit(e){\n  e.preventDefault()\n  formInvite.name = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('#nameInvite').value\n  formInvite.email = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('#emailInvite').value\n Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"Log\"])('MMOMOMOMOMOMO', formInvite)\n  if(!Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"IsValidEmail\"])(formInvite.email)){\n    const isValid = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-email-invite')\n    isValid.style.display = 'block'\n  }\n   if(formInvite.name.length < 3){\n    const isValid = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-name-invite')\n    isValid.style.display = 'block'\n  }\n  setTimeout(() => {\n    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"HideElement\"])(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-email-invite'), Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"QuerySelector\"])('.form__isValid-name-invite'))\n  }, 5000)\n}\n\nbtnNewsLetter.onclick = formNewsletterSubmit\nbtnInvite.onclick = formInviteSubmit\n\nbtnGetProducts.onclick = getProducts\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ \"./src/utils/utils.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/services/api.js\");\n\n/**\n *  @format\n */\n\n\n\nasync function getProductsService(page=1) {\n\n  const resp = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}/products?page=${page}`)\n  if (resp.ok) {\n    console.log(resp)\n    const data = await resp.json()\n    console.log(data)\n    return data\n  }\n  throw new Error('Something went wrong')\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getProductsService);\n\n\n//# sourceURL=webpack:///./src/services/products.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: Log, QuerySelector, CreateElement, InsertBeforeElement, InsertAfterElement, SetPoductsToPage, SetPoductsToPageAppend, IsValidCPF, IsValidEmail, SetMaskCPF, HideElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Log\", function() { return Log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QuerySelector\", function() { return QuerySelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateElement\", function() { return CreateElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InsertBeforeElement\", function() { return InsertBeforeElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InsertAfterElement\", function() { return InsertAfterElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetPoductsToPage\", function() { return SetPoductsToPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetPoductsToPageAppend\", function() { return SetPoductsToPageAppend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsValidCPF\", function() { return IsValidCPF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsValidEmail\", function() { return IsValidEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetMaskCPF\", function() { return SetMaskCPF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HideElement\", function() { return HideElement; });\n/* harmony import */ var _components_productCard_productCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/productCard/productCard */ \"./src/components/productCard/productCard.js\");\n/**\n * @format\n */\n\n\n\nfunction Log(text = '', v) {\n  console.log(`${text}`, v)\n}\n\nfunction QuerySelector(query) {\n  const element = document.querySelector(query)\n  return element\n}\n\nfunction CreateElement(tagName = '', className = 'null') {\n  const element = document.createElement(tagName)\n  element.classList.add(className)\n  return element\n}\n\nfunction InsertBeforeElement(parent, child) {\n  parent.insertAdjacentElement('beforeend', child)\n}\n\nfunction InsertAfterElement(parent, child) {\n  parent.insertAdjacentElement('afterend', child)\n}\n\nfunction SetPoductsToPage(parent, products) {\n  products.forEach((prod) => {\n    InsertAfterElement(parent, Object(_components_productCard_productCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prod))\n  })\n}\nfunction SetPoductsToPageAppend(parent, products) {\n  Log('APEND', parent)\n  products.forEach((prod) => {\n    parent.append(Object(_components_productCard_productCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prod))\n  })\n}\nfunction IsValidCPF(cpf) {\n  const pattern = /^(\\d{3})(\\d{3})(\\d{3})(\\d{2})$/g\n  const validNumber = pattern.test(cpf)\n\n  return validNumber\n}\n\nfunction IsValidEmail(email) {\n  const pattern = /^([a-z\\d\\.-]+)@([a-z\\d-]+)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$/g\n  const valid = pattern.test(email)\n  return valid\n}\n\nfunction SetMaskCPF(cpf) {\n  const pattern = /^(\\d{3})(\\d{3})(\\d{3})(\\d{2})$/g\n  const cpfMasked = cpf.replace(pattern, '$1.$2.$3-$4')\n  return cpfMasked\n}\n\nfunction HideElement(...element) {\n  element.forEach((ele) => (ele.style.display = 'none'))\n}\n\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ })

/******/ });