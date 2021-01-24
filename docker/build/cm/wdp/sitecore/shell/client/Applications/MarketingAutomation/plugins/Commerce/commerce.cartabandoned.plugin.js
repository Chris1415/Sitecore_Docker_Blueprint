(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@sitecore/ma-core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@sitecore/ma-core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["commerceActivities"] = factory(require("@angular/core"), require("@sitecore/ma-core"), require("@angular/common"));
	else
		root["commerceActivities"] = factory(root["@angular/core"], root["@sitecore/ma-core"], root["@angular/common"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ma_core_1 = __webpack_require__(1);
var CartAbandonedEditorComponent = (function (_super) {
    __extends(CartAbandonedEditorComponent, _super);
    function CartAbandonedEditorComponent(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    CartAbandonedEditorComponent.prototype.ngOnInit = function () {
    };
    CartAbandonedEditorComponent.prototype.serialize = function () {
        return {};
    };
    CartAbandonedEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'cart-abandoned-readonly-editor',
                    templateUrl: './cart-abandoned-editor.component.html',
                    styleUrls: ['./cart-abandoned-editor.component.css']
                },] },
    ];
    CartAbandonedEditorComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    return CartAbandonedEditorComponent;
}(ma_core_1.EditorBase));
exports.CartAbandonedEditorComponent = CartAbandonedEditorComponent;
//# sourceMappingURL=cart-abandoned-editor.component.js.map

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ma_core_1 = __webpack_require__(1);
var cart_abandoned_activity_1 = __webpack_require__(7);
var cart_abandoned_module_ngfactory_1 = __webpack_require__(8);
var cart_abandoned_editor_component_1 = __webpack_require__(4);
var CartAbandonedPlugin = (function () {
    function CartAbandonedPlugin() {
    }
    CartAbandonedPlugin = __decorate([
        ma_core_1.Plugin({
            activityDefinitions: [
                {
                    id: '7AE9476D-816E-44BF-B9B5-A2CA339E5DB5',
                    activity: cart_abandoned_activity_1.CartAbandonedActivity,
                    editorComponenet: cart_abandoned_editor_component_1.CartAbandonedEditorComponent,
                    editorModuleFactory: cart_abandoned_module_ngfactory_1.CartAbandonedModuleNgFactory
                }
            ]
        })
    ], CartAbandonedPlugin);
    return CartAbandonedPlugin;
}());
exports.default = CartAbandonedPlugin;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ma_core_1 = __webpack_require__(1);
var CartAbandonedActivity = (function (_super) {
    __extends(CartAbandonedActivity, _super);
    function CartAbandonedActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartAbandonedActivity.prototype.getVisual = function () {
        return "\n            <div class=\"viewport-readonly-editor marketing-action " + (this.isDefined ? '' : 'undefined') + "\">\n                <span class=\"icon\">\n                    <img src=\"/~/icon/OfficeWhite/32x32/target.png\" />\n                </span>\n                <p class=\"text with-subtitle\" title=\"Raise abandoned cart event\">\n                    Raise abandoned cart event\n                    <small class=\"subtitle\" title=\"" + this.subTitle + "\">" + this.subTitle + "</small>\n                </p>\n            </div>\n        ";
    };
    Object.defineProperty(CartAbandonedActivity.prototype, "isDefined", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartAbandonedActivity.prototype, "subTitle", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    return CartAbandonedActivity;
}(ma_core_1.SingleItem));
exports.CartAbandonedActivity = CartAbandonedActivity;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(0);
var i1 = __webpack_require__(9);
var i2 = __webpack_require__(10);
var i3 = __webpack_require__(2);
var CartAbandonedModuleNgFactory = i0.ɵcmf(i1.CartAbandonedModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.CartAbandonedEditorComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵa]]), i0.ɵmpd(512, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(512, i1.CartAbandonedModule, i1.CartAbandonedModule, [])]); });
exports.CartAbandonedModuleNgFactory = CartAbandonedModuleNgFactory;
//# sourceMappingURL=cart-abandoned.module.ngfactory.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
var cart_abandoned_editor_component_1 = __webpack_require__(4);
var CartAbandonedModule = (function () {
    function CartAbandonedModule() {
    }
    CartAbandonedModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [cart_abandoned_editor_component_1.CartAbandonedEditorComponent],
                    entryComponents: [cart_abandoned_editor_component_1.CartAbandonedEditorComponent],
                },] },
    ];
    return CartAbandonedModule;
}());
exports.CartAbandonedModule = CartAbandonedModule;
//# sourceMappingURL=cart-abandoned.module.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(11);
var i1 = __webpack_require__(0);
var i2 = __webpack_require__(4);
var styles_CartAbandonedEditorComponent = [i0.styles];
var RenderType_CartAbandonedEditorComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_CartAbandonedEditorComponent, data: {} });
exports.RenderType_CartAbandonedEditorComponent = RenderType_CartAbandonedEditorComponent;
function View_CartAbandonedEditorComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 15, "section", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(2, 0, null, null, 12, "section", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵeld(4, 0, null, null, 9, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n            "])), (_l()(), i1.ɵeld(6, 0, null, null, 6, "div", [["class", "row cart-abandoned-readonly-editor"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵeld(8, 0, null, null, 0, "label", [["class", "col-6 title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n                "])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "div", [["class", "col-6"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n               "])), (_l()(), i1.ɵted(-1, null, ["\n            "])), (_l()(), i1.ɵted(-1, null, ["\n        "])), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n"]))], null, null); }
exports.View_CartAbandonedEditorComponent_0 = View_CartAbandonedEditorComponent_0;
function View_CartAbandonedEditorComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "cart-abandoned-readonly-editor", [], null, null, null, View_CartAbandonedEditorComponent_0, RenderType_CartAbandonedEditorComponent)), i1.ɵdid(1, 114688, null, 0, i2.CartAbandonedEditorComponent, [i1.Injector], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_CartAbandonedEditorComponent_Host_0 = View_CartAbandonedEditorComponent_Host_0;
var CartAbandonedEditorComponentNgFactory = i1.ɵccf("cart-abandoned-readonly-editor", i2.CartAbandonedEditorComponent, View_CartAbandonedEditorComponent_Host_0, { model: "model" }, {}, []);
exports.CartAbandonedEditorComponentNgFactory = CartAbandonedEditorComponentNgFactory;
//# sourceMappingURL=cart-abandoned-editor.component.ngfactory.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;
//# sourceMappingURL=cart-abandoned-editor.component.css.shim.ngstyle.js.map

/***/ })
/******/ ]);
});