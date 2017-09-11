webpackJsonp([2],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(30)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(41),
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

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".logo-container{width:255px;height:242px;-webkit-perspective:800px;perspective:800px;position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.logo{position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}", ""]);

// exports


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("1978a34d", content, true);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].extend({
    data() {
        return {
            loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        };
    },
    methods: {
        sayHello() {
            console.log('Hello from Home.vue');
        }
    },
    mounted() {
        this.sayHello();
    }
}));


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('q-layout', {
    ref: "layout",
    attrs: {
      "view": "lHh Lpr fff",
      "left-class": {
        'bg-grey-2': true
      }
    }
  }, [_c('div', {
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