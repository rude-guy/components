/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/image/index.js":
/*!****************************!*\
  !*** ./src/image/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/image/template.html");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/image/style.scss");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proxy */ "./src/proxy/index.js");



(0,_proxy__WEBPACK_IMPORTED_MODULE_2__.componentProxy)('ui-image', {
  template: _template_html__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    src: {
      type: String,
      "default": ''
    }
  }
});

/***/ }),

/***/ "./src/proxy/index.js":
/*!****************************!*\
  !*** ./src/proxy/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   componentProxy: () => (/* binding */ componentProxy)
/* harmony export */ });
function componentProxy(name, opts) {
  opts.mixins = [{
    created: function created() {
      var _this = this;
      var _loop = function _loop() {
          if (!/^bind/.test(attr)) {
            return 0; // continue
          }
          if (!_this.$attrs[attr]) {
            return 0; // continue
          }
          var eventName = attr.replace(/^bind(.+)/, '$1');
          var methodName = _this.$attrs[attr];
          var bridgeInfo = _this.$vnode.context._bridgeInfo;
          _this.$on(eventName, function () {
            window.JSBridge.onReceiveUIMessage({
              type: 'triggerEvent',
              body: {
                methodName: methodName,
                id: bridgeInfo.id
              }
            });
          });
        },
        _ret;
      for (var attr in this.$attrs) {
        _ret = _loop();
        if (_ret === 0) continue;
      }
    }
  }];
  Vue.component(name, opts);
}

/***/ }),

/***/ "./src/text/index.js":
/*!***************************!*\
  !*** ./src/text/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/text/template.html");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/text/style.scss");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proxy */ "./src/proxy/index.js");



(0,_proxy__WEBPACK_IMPORTED_MODULE_2__.componentProxy)('ui-text', {
  template: _template_html__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    userSelect: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/view/template.html");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/view/style.scss");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proxy */ "./src/proxy/index.js");



(0,_proxy__WEBPACK_IMPORTED_MODULE_2__.componentProxy)('ui-view', {
  template: _template_html__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    clicked: function clicked() {
      this.$emit('tap');
    }
  }
});

/***/ }),

/***/ "./src/image/template.html":
/*!*********************************!*\
  !*** ./src/image/template.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"ui-image\">\n  <img :src=\"src\" alt=\"\" />\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/text/template.html":
/*!********************************!*\
  !*** ./src/text/template.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<span class=\"ui-text\" :class=\"{'ui-text__can-select': userSelect}\">\n  <slot></slot>\n</span>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/view/template.html":
/*!********************************!*\
  !*** ./src/view/template.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"ui-view\" @click=\"clicked\">\n  <slot></slot>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/image/style.scss":
/*!******************************!*\
  !*** ./src/image/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/text/style.scss":
/*!*****************************!*\
  !*** ./src/text/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/style.scss":
/*!*****************************!*\
  !*** ./src/view/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/index */ "./src/view/index.js");
/* harmony import */ var _text_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/text/index */ "./src/text/index.js");
/* harmony import */ var _image_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/image/index */ "./src/image/index.js");



})();

/******/ })()
;
//# sourceMappingURL=index.js.map