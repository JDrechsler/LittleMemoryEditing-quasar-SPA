webpackJsonp([1],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(31)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(43),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".view-parallax .par-text{margin:5rem 0}", ""]);

// exports


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("3620e33b", content, true);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].extend({
    data() {
        return {
            loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        };
    }
}));


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "layout-padding"
  }, [_vm._l((4), function(n) {
    return _c('p', {
      staticClass: "par-text"
    }, [_vm._v(_vm._s(_vm.loremipsum))])
  }), _vm._v(" "), _c('q-parallax', {
    attrs: {
      "src": "http://www.itworldcanada.com/wp-content/uploads/2017/05/cp1_0111.jpg"
    }
  }, [_c('div', {
    slot: "loading"
  }, [_vm._v("Loading...")]), _vm._v(" "), _c('h4', [_vm._v("Arvato")])]), _vm._v(" "), _vm._l((7), function(n) {
    return _c('p', {
      staticClass: "par-text"
    }, [_vm._v(_vm._s(_vm.loremipsum))])
  })], 2)])
},staticRenderFns: []}

/***/ })

});