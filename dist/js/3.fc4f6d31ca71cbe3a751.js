webpackJsonp([3],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(40),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].extend({
    data() {
        return {
            test: 'easier with English keyboard layout :)',
            stars: 3,
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            config: {
                title: 'Data Table',
                refresh: true,
                noHeader: false,
                columnPicker: true,
                leftStickyColumns: 0,
                rightStickyColumns: 2,
                bodyStyle: {
                    maxHeight: '500px'
                },
                rowHeight: '50px',
                responsive: true,
                pagination: {
                    rowsPerPage: 15,
                    options: [5, 10, 15, 30, 50, 500]
                },
                selection: 'multiple'
            },
            misc: [],
            separator: 'none',
            stripe: 'none',
            type: 'none',
            gutter: 'none'
        };
    }
}));


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "layout-padding"
  }, [_vm._v("\n\t\tGroupTest\n\t\t"), _c('p', [_vm._v(_vm._s(_vm.test))]), _vm._v(" "), _vm._l((4), function(n) {
    return _c('q-card', {
      staticClass: "bigger",
      attrs: {
        "inline": ""
      }
    }, [_c('q-card-media'), _vm._v(" "), _c('q-card-title', [_vm._v("\n\t\t\t\tCafe Basilico\n\t\t\t\t"), _c('q-rating', {
      attrs: {
        "max": 5
      },
      slot: "subtitle",
      model: {
        value: (_vm.stars),
        callback: function($$v) {
          _vm.stars = $$v
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "row items-center",
      slot: "right"
    }, [_c('q-icon', {
      attrs: {
        "name": "place"
      }
    }), _vm._v(" 250 ft\n\t\t\t\t")], 1)], 1), _vm._v(" "), _c('q-card-main', [_c('p', [_vm._v("$・Italian, Cafe")]), _vm._v(" "), _c('p', {
      staticClass: "text-faded"
    }, [_vm._v("Small plates, salads & sandwiches in an intimate setting.")])]), _vm._v(" "), _c('q-card-separator'), _vm._v(" "), _c('q-card-actions', [_c('q-btn', {
      attrs: {
        "flat": "",
        "round": "",
        "small": ""
      }
    }, [_c('q-icon', {
      attrs: {
        "name": "event"
      }
    })], 1), _vm._v(" "), _c('q-btn', {
      attrs: {
        "flat": ""
      }
    }, [_vm._v("5:30PM")]), _vm._v(" "), _c('q-btn', {
      attrs: {
        "flat": ""
      }
    }, [_vm._v("7:30PM")]), _vm._v(" "), _c('q-btn', {
      attrs: {
        "flat": ""
      }
    }, [_vm._v("9:00PM")]), _vm._v(" "), _c('q-btn', {
      attrs: {
        "flat": "",
        "color": "primary"
      }
    }, [_vm._v("Reserve")])], 1)], 1)
  }), _vm._v(" "), _c('q-collapsible', {
    staticClass: "shadow-2",
    staticStyle: {
      "max-width": "600px",
      "margin-bottom": "25px"
    },
    attrs: {
      "label": "Showcasing some of the options",
      "sublabel": "Change them to see it in action"
    }
  }, [_c('q-field', {
    attrs: {
      "icon": "title",
      "label": "Data Table Title",
      "label-width": 4
    }
  }, [_c('q-input', {
    model: {
      value: (_vm.config.title),
      callback: function($$v) {
        _vm.config.title = $$v
      }
    }
  })], 1), _vm._v(" "), _c('q-field', {
    attrs: {
      "icon": "widgets",
      "label": "Some Features",
      "label-width": 4
    }
  }, [_c('div', {
    staticClass: "column group",
    staticStyle: {
      "margin": "-5px -7px"
    }
  }, [_c('q-checkbox', {
    attrs: {
      "label": "Refresh"
    },
    model: {
      value: (_vm.config.refresh),
      callback: function($$v) {
        _vm.config.refresh = $$v
      }
    }
  }), _vm._v(" "), _c('q-checkbox', {
    attrs: {
      "label": "Column Picker"
    },
    model: {
      value: (_vm.config.columnPicker),
      callback: function($$v) {
        _vm.config.columnPicker = $$v
      }
    }
  }), _vm._v(" "), _c('q-checkbox', {
    attrs: {
      "label": "Pagination"
    },
    model: {
      value: (_vm.config.pagination),
      callback: function($$v) {
        _vm.config.pagination = $$v
      }
    }
  }), _vm._v(" "), _c('q-checkbox', {
    attrs: {
      "label": "Responsive"
    },
    model: {
      value: (_vm.config.responsive),
      callback: function($$v) {
        _vm.config.responsive = $$v
      }
    }
  }), _vm._v(" "), _c('q-checkbox', {
    attrs: {
      "label": "No Header"
    },
    model: {
      value: (_vm.config.noHeader),
      callback: function($$v) {
        _vm.config.noHeader = $$v
      }
    }
  })], 1)]), _vm._v(" "), _c('q-field', {
    attrs: {
      "icon": "check box",
      "label": "Selection",
      "label-width": 4
    }
  }, [_c('q-select', {
    staticClass: "col-xs-12 col-sm",
    attrs: {
      "float-label": "Selection",
      "options": [{
          label: 'None',
          value: false
        },
        {
          label: 'Single',
          value: 'single'
        },
        {
          label: 'Multiple',
          value: 'multiple'
        }
      ]
    },
    model: {
      value: (_vm.config.selection),
      callback: function($$v) {
        _vm.config.selection = $$v
      }
    }
  })], 1), _vm._v(" "), _c('q-field', {
    attrs: {
      "icon": "place",
      "label": "Sticky Columns",
      "label-width": 4
    }
  }, [_c('q-select', {
    staticClass: "col-xs-12 col-sm",
    attrs: {
      "float-label": "Left Sticky Columns",
      "options": [{
          label: 'None',
          value: 0
        },
        {
          label: '1',
          value: 1
        },
        {
          label: '2',
          value: 2
        }
      ]
    },
    model: {
      value: (_vm.config.leftStickyColumns),
      callback: function($$v) {
        _vm.config.leftStickyColumns = $$v
      }
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('q-select', {
    staticClass: "col-xs-12 col-sm",
    attrs: {
      "float-label": "Right Sticky Columns",
      "options": [{
          label: 'None',
          value: 0
        },
        {
          label: '1',
          value: 1
        },
        {
          label: '2',
          value: 2
        }
      ]
    },
    model: {
      value: (_vm.config.rightStickyColumns),
      callback: function($$v) {
        _vm.config.rightStickyColumns = $$v
      }
    }
  })], 1)], 1), _vm._v(" "), _c('q-card', [_c('q-card-title', [_vm._v("\n\t\t\t\tConfigure\n\t\t\t")]), _vm._v(" "), _c('q-card-separator'), _vm._v(" "), _c('q-card-main', [_c('q-field', {
    staticStyle: {
      "margin-top": "0"
    },
    attrs: {
      "label": "Separators",
      "label-width": 4
    }
  }, [_c('q-option-group', {
    attrs: {
      "inline": "",
      "type": "radio",
      "options": [{
          value: 'none',
          label: 'No separator'
        },
        {
          value: 'horizontal',
          label: 'Horizontal separator'
        },
        {
          value: 'vertical',
          label: 'Vertical separator'
        },
        {
          value: 'cell',
          label: 'Cell separator'
        }
      ]
    },
    model: {
      value: (_vm.separator),
      callback: function($$v) {
        _vm.separator = $$v
      }
    }
  })], 1), _vm._v(" "), _c('q-field', {
    attrs: {
      "label": "Stripes",
      "label-width": 4
    }
  }, [_c('q-option-group', {
    attrs: {
      "inline": "",
      "type": "radio",
      "options": [{
          value: 'none',
          label: 'No Stripe'
        },
        {
          value: 'odd',
          label: 'Striped Odd'
        },
        {
          value: 'even',
          label: 'Striped Even'
        }
      ]
    },
    model: {
      value: (_vm.stripe),
      callback: function($$v) {
        _vm.stripe = $$v
      }
    }
  })], 1), _vm._v(" "), _c('q-field', {
    attrs: {
      "label": "Layout Type",
      "label-width": 4
    }
  }, [_c('q-option-group', {
    attrs: {
      "inline": "",
      "type": "radio",
      "options": [{
          value: 'none',
          label: 'Standard'
        },
        {
          value: 'flipped',
          label: 'Flipped'
        },
        {
          value: 'responsive',
          label: 'Responsive'
        }
      ]
    },
    model: {
      value: (_vm.type),
      callback: function($$v) {
        _vm.type = $$v
      }
    }
  })], 1), _vm._v(" "), _c('q-field', {
    attrs: {
      "label": "Gutter",
      "label-width": 4
    }
  }, [_c('q-option-group', {
    attrs: {
      "inline": "",
      "type": "radio",
      "options": [{
          value: 'none',
          label: 'Standard'
        },
        {
          value: 'compact',
          label: 'Compact'
        },
        {
          value: 'loose',
          label: 'Loose'
        }
      ]
    },
    model: {
      value: (_vm.gutter),
      callback: function($$v) {
        _vm.gutter = $$v
      }
    }
  })], 1)], 1)], 1)], 2)])
},staticRenderFns: []}

/***/ })

});