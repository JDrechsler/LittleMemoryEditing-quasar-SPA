webpackJsonp([6],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(11)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(14),
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
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(15);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
function load(compName) {
    return () => __webpack_require__(17)(`./${compName}.vue`).then(m => m.default);
}
var routes = [];
["App.vue","Chat.vue","Error404.vue","Feed.vue","Forum.vue","Grouptest.vue","Home.vue"].forEach(element => {
    var compName = element.replace('.vue', '');
    var compDomainName = `/${compName.toLocaleLowerCase()}`;
    console.log(`Created route ${compDomainName}`);
    routes.push({ path: compDomainName, component: load(compName) });
});
routes.push({ path: '/', component: load('Home') });
routes.push({ path: '*', component: load('Error404') });
const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes,
    mode: 'history'
});
/* harmony export (immutable) */ __webpack_exports__["a"] = router;



/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].extend({
    data() {
        return {
            msg: 'Test'
        };
    },
    mounted() {
        console.log('App mounted');
    }
}));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_App_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quasar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quasar_extras_material_icons__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quasar_extras_material_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_quasar_extras_material_icons__);






if (true) {
    __webpack_require__(5);
}
__webpack_require__(3);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_quasar__["default"], {
    components: __WEBPACK_IMPORTED_MODULE_2_quasar__,
    directives: __WEBPACK_IMPORTED_MODULE_2_quasar__
});
__WEBPACK_IMPORTED_MODULE_2_quasar__["default"].start(() => {
    new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
        el: '#app',
        router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* router */],
        render: h => h(__WEBPACK_IMPORTED_MODULE_1__components_App_vue___default.a)
    });
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('q-layout', {
    ref: "layout",
    attrs: {
      "view": "hHh LpR fFf",
      "right-breakpoint": 1100
    }
  }, [_c('q-toolbar', {
    slot: "header"
  }, [_c('q-btn', {
    attrs: {
      "flat": ""
    },
    on: {
      "click": function($event) {
        _vm.$refs.layout.toggleLeft()
      }
    }
  }, [_c('q-icon', {
    attrs: {
      "name": "menu"
    }
  })], 1), _vm._v(" "), _c('q-toolbar-title', [_vm._v("\n\t\t\t\tLayout Header\n\t\t\t\t"), _c('span', {
    slot: "subtitle"
  }, [_vm._v("Optional subtitle")])])], 1), _vm._v(" "), _c('div', {
    slot: "left"
  }, [_c('q-list', {
    attrs: {
      "no-border": "",
      "link": ""
    }
  }, [_c('q-list-header', [_vm._v("Essential Links")]), _vm._v(" "), _c('q-side-link', {
    attrs: {
      "item": "",
      "to": "/home"
    }
  }, [_c('q-item-side', {
    attrs: {
      "icon": "home"
    }
  }), _vm._v(" "), _c('q-item-main', {
    attrs: {
      "label": "Home"
    }
  })], 1), _vm._v(" "), _c('q-side-link', {
    attrs: {
      "item": "",
      "to": "/inventory"
    }
  }, [_c('q-item-side', {
    attrs: {
      "icon": "local_grocery_store"
    }
  }), _vm._v(" "), _c('q-item-main', {
    attrs: {
      "label": "Inventory"
    }
  })], 1), _vm._v(" "), _c('q-side-link', {
    attrs: {
      "item": "",
      "to": "/chat"
    }
  }, [_c('q-item-side', {
    attrs: {
      "icon": "chat"
    }
  }), _vm._v(" "), _c('q-item-main', {
    attrs: {
      "label": "Gitter Channel"
    }
  })], 1), _vm._v(" "), _c('q-side-link', {
    attrs: {
      "item": "",
      "to": "/Feed"
    }
  }, [_c('q-item-side', {
    attrs: {
      "icon": "rss feed"
    }
  }), _vm._v(" "), _c('q-item-main', {
    attrs: {
      "label": "Feed",
      "sublabel": "@quasarframework"
    }
  })], 1), _vm._v(" "), _c('q-side-link', {
    attrs: {
      "item": "",
      "to": "/Grouptest"
    }
  }, [_c('q-item-side', {
    attrs: {
      "icon": "warning"
    }
  }), _vm._v(" "), _c('q-item-main', {
    attrs: {
      "label": "GroupTest"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('q-toolbar', {
    slot: "footer"
  }, [_c('q-toolbar-title', [_vm._v("\n\t\t\t\tLayout Footer\n\t\t\t")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.vue": [
		1
	],
	"./Chat.vue": [
		20,
		0
	],
	"./Error404.vue": [
		21,
		5
	],
	"./Feed.vue": [
		22,
		4
	],
	"./Forum.vue": [
		23,
		1
	],
	"./Grouptest.vue": [
		24,
		3
	],
	"./Home.vue": [
		25,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 17;

/***/ })
],[13]);