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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/i18n/en.js":
/*!**********************************************************************************************************************!*\
  !*** d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/i18n/en.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = void 0;
var message = {
  title: 'VTB Investments',
  buttonArray: ['More...']
};
exports.message = message;

/***/ }),

/***/ "../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/i18n/ru.js":
/*!**********************************************************************************************************************!*\
  !*** d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/i18n/ru.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = void 0;
var message = {
  title: 'VTB Инвестиции',
  buttonArray: ['Полный список...']
};
exports.message = message;

/***/ }),

/***/ "../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/i18n/zh.js":
/*!**********************************************************************************************************************!*\
  !*** d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/i18n/zh.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = void 0;
var message = {
  title: '股票',
  buttonArray: ['查看自选']
};
exports.message = message;

/***/ }),

/***/ "../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux":
/*!****************************************************************************************************************************!*\
  !*** d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./common/component/card_title/card_title.ux?name=card_title */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux?name=card_title")
__webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./common/component/card_bottom_3/card_bottom_3.ux?name=card_bottom_3 */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux?name=card_bottom_3")
var $app_template$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=card_title,card_bottom_3!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./shares_type_1.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=card_title,card_bottom_3!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux!./shares_type_1.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\shares_type_1.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\shares_type_1.ux!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./shares_type_1.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux")

$app_define$('@app-component/shares_type_1', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/shares_type_1',{ packagerName:'fa-toolkit', packagerVersion: '2.6.2-Stable.302'})

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\common\\component\\card_bottom_3\\card_bottom_3.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\common\\component\\card_bottom_3\\card_bottom_3.ux!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".cardbottom3_box": {
    "height": "100px",
    "width": "100%"
  },
  ".cardbottom3_button": {
    "color": "#007DFF",
    "fontSize": "29.16667px",
    "fontWeight": "500"
  },
  ".cardbottom3_buttonMargin": {
    "marginLeft": "50px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\common\\component\\card_title\\card_title.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\common\\component\\card_title\\card_title.ux!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".cardtitle_box": {
    "height": "83.33333px"
  },
  ".cardtitle_title_img": {
    "marginTop": "33.33333px",
    "marginRight": "16.66667px",
    "marginBottom": "16.66667px",
    "marginLeft": "0px",
    "width": "33.33333px",
    "height": "33.33333px",
    "borderRadius": "8.33333px"
  },
  ".cardtitle_title": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "rgba(0,0,0,0.9)",
    "fontSize": "25px",
    "marginTop": "33.33333px",
    "marginRight": "100px",
    "marginBottom": "16.66667px",
    "marginLeft": "0px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\shares_type_1.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\shares_type_1.ux!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".exchange_card_box": {
    "flexDirection": "column",
    "paddingTop": "0px",
    "paddingRight": "33.33333px",
    "paddingBottom": "0px",
    "paddingLeft": "33.33333px"
  },
  ".main_content": {
    "flexDirection": "column"
  },
  ".currency_content_box": {
    "paddingTop": "16.66667px",
    "paddingRight": "0px",
    "paddingBottom": "16.66667px",
    "paddingLeft": "0px",
    "justifyContent": "space-around"
  },
  ".currency_item_box": {
    "marginTop": "0px",
    "marginRight": "8.33333px",
    "marginBottom": "0px",
    "marginLeft": "8.33333px",
    "flex": 1,
    "flexDirection": "row",
    "borderRadius": "8.33333px",
    "borderTopWidth": "2.08333px",
    "borderRightWidth": "2.08333px",
    "borderBottomWidth": "2.08333px",
    "borderLeftWidth": "2.08333px",
    "borderTopColor": "#989898",
    "borderRightColor": "#989898",
    "borderBottomColor": "#989898",
    "borderLeftColor": "#989898",
    "paddingTop": "16.66667px",
    "paddingRight": "16.66667px",
    "paddingBottom": "16.66667px",
    "paddingLeft": "16.66667px"
  },
  ".currency_name": {
    "fontSize": "29.16667px",
    "color": "rgba(0,0,0,0.9)",
    "flex": 1
  },
  ".currency_value": {
    "fontSize": "33.33333px",
    "fontWeight": "500",
    "flex": 2,
    "textAlign": "right"
  },
  ".currency_deltas": {
    "fontSize": "25px",
    "flex": 1
  },
  ".stocks_item_box": {
    "marginTop": "0px",
    "marginRight": "8.33333px",
    "marginBottom": "0px",
    "marginLeft": "8.33333px"
  },
  ".stock_item_name_box": {
    "width": "33.3%",
    "flexDirection": "column"
  },
  ".stock_item_data_box": {
    "width": "66.7%"
  },
  ".stock_item_name": {
    "fontSize": "29.16667px",
    "color": "rgba(0,0,0,0.9)",
    "flex": 1
  },
  ".stock_item_value": {
    "fontSize": "29.16667px",
    "flex": 1,
    "textAlign": "right",
    "width": "33.3%"
  },
  ".stock_item_deltas": {
    "fontSize": "29.16667px",
    "flex": 1,
    "textAlign": "right",
    "width": "33.3%",
    "marginLeft": "16.66667px"
  },
  ".shares_color_green": {
    "color": "#41BA41"
  },
  ".shares_color_red": {
    "color": "#FA2A2D"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=card_title,card_bottom_3!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=card_title,card_bottom_3!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {
    "widgetid": "9560c226-1231-4bd1-91f7-0b37f23acecb"
  },
  "classList": [
    "exchange_card_box"
  ],
  "children": [
    {
      "type": "card_title",
      "attr": {
        "title": function () {return (this.$t('message.title'))}
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "main_content"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "currency_content_box"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return (this.row1)},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "currency_item_box"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "style": {
                        "flexDirection": "column",
                        "width": "50%"
                      },
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return (this.$item.name)}
                          },
                          "classList": [
                            "currency_name"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "style": {
                            "flex": 1
                          },
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return (this.$item.deltas_text)}
                              },
                              "classList": function () {return ['currency_deltas', (this.$item.color)]}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return (this.$item.data1)}
                      },
                      "classList": function () {return ['currency_value', (this.$item.color)]}
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "style": {
            "flexDirection": "column"
          },
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return (this.row2)},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "stocks_item_box"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "stock_item_name_box"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return (this.$item.name)}
                          },
                          "classList": [
                            "stock_item_name"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "stock_item_data_box"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return (this.$item.data1)}
                          },
                          "classList": function () {return ['stock_item_value', (this.$item.color)]}
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return (this.$item.data2)}
                          },
                          "classList": function () {return ['stock_item_deltas', (this.$item.color)]}
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return (this.$item.data3)}
                          },
                          "classList": function () {return ['stock_item_deltas', (this.$item.color)]}
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "card_bottom_3",
      "attr": {
        "buttonArray": function () {return (this.$t('message.buttonArray'))}
      }
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?type=component&depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?type=component&depends=!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "cardbottom3_box"
  ],
  "children": [
    {
      "type": "block",
      "attr": {},
      "repeat": function () {return (this.buttonArray)},
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.buttonArray[this.$idx])}
          },
          "shown": function () {return (this.$idx===0)},
          "classList": [
            "cardbottom3_button"
          ],
          "events": {
            "click": function(evt){this.buttonClick(this.$idx,evt)}
          }
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.buttonArray[this.$idx])}
          },
          "shown": function () {return (!(this.$idx===0))},
          "classList": [
            "cardbottom3_button",
            "cardbottom3_buttonMargin"
          ],
          "events": {
            "click": function(evt){this.buttonClick(this.$idx,evt)}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?type=component&depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?type=component&depends=!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "cardtitle_box"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": function () {return (this.logoUrl)}
      },
      "classList": [
        "cardtitle_title_img"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return (this.title)}
      },
      "classList": [
        "cardtitle_title"
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.package"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mainAppPackageName = "com.vtb.investments";
module.exports = {
  props: ['buttonArray'],
  data: {
    buttonArray: ['Button', 'Button', 'Button']
  },
  buttonClick: function buttonClick(index) {
    if (index === 0) {
      console.log('We;re in');
      this.deeplink_jump("https://broker.vtb.ru/login/vtbinvest/");
    }

    console.log(index);
  },
  deeplink_jump: function deeplink_jump(deeplink_uri) {
    var self = this;

    try {
      _system3["default"].getPackageInfo({
        packageName: mainAppPackageName,
        success: function success(data) {
          if (self.versionCode < self.deeplinkEnableVersionCode) {
            _system["default"].push({
              uri: "appmarket://details?" + mainAppPackageName
            });

            console.log("V1. The app has been installed, but the version is incorrect. Forwarding user to HUAWEI AppGallery for installation.");
          } else {
            _system["default"].push({
              uri: deeplink_uri
            });

            console.log("V1. The app has been installed, version is correct. Executed deeplink");
          }
        },
        fail: function fail(errormsg, errorcode) {
          _system["default"].push({
            uri: "appmarket://details?" + mainAppPackageName
          });

          console.log("V1. The app has not been installed. Forwarding user to HUAWEI AppGallery for installation.");
        }
      });
    } catch (error) {
      _system2["default"].hasInstalled({
        "package": mainAppPackageName,
        success: function success(data) {
          _system["default"].push({
            uri: deeplink_uri
          });

          console.log("V1. The app has been installed, version is correct. Executed deeplink");
          console.log("handling success: " + data.result);
        },
        fail: function fail(data, code) {
          _system["default"].push({
            uri: "appmarket://details?id=" + mainAppPackageName
          });

          console.log("V1. The app has not been installed. Forwarding user to HUAWEI AppGallery for installation.");
        }
      });
    }
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (
    moduleOwn.data &&
    accessors.some(function (acc) {
        return moduleOwn[acc];
    })
) {
    throw new Error(
        'For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.',
    );
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = typeof moduleOwn[acc];
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn(
                'For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.',
            );
        }
    });
}
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['title', 'logoUrl'],
  data: {
    title: 'TITLE',
    logoUrl: 'data:image/webp;base64,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'
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (
    moduleOwn.data &&
    accessors.some(function (acc) {
        return moduleOwn[acc];
    })
) {
    throw new Error(
        'For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.',
    );
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = typeof moduleOwn[acc];
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn(
                'For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.',
            );
        }
    });
}
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/shares_type_1.ux ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.configuration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var locales = {
  zh: __webpack_require__(/*! ./i18n/zh.js */ "../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/i18n/zh.js"),
  en: __webpack_require__(/*! ./i18n/en.js */ "../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/i18n/en.js"),
  ru: __webpack_require__(/*! ./i18n/ru.js */ "../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/i18n/ru.js")
};

var localeObject = _system2["default"].getLocale();

var local = localeObject.language;
var $i18n = new I18n({
  locale: local,
  messages: locales,
  fallbackLocale: 'ru'
});
module.exports = {
  data: {
    title: 'VTB Investments',
    buttonArray: ['More...'],
    i18n: $i18n,
    row1: [{
      "name": "USD / RUB",
      "data1": "74.11",
      "data2": "-0.24",
      "data3": "-0.32%",
      "deltas_text": "-0.24 -0.32%",
      "color": "shares_color_red"
    }, {
      "name": "EUR / RUB",
      "data1": "90.03",
      "data2": "-0.27",
      "data3": "-0.30%",
      "deltas_text": "-0.27 -0.30%",
      "color": "shares_color_red"
    }],
    row2: [{
      "name": "Alibaba",
      "data1": "271.00",
      "data2": "4.18",
      "data3": "1.57%",
      "color": "shares_color_green"
    }, {
      "name": "Walt Disney",
      "data1": "153.84",
      "data2": "-0.29",
      "data3": "-0.19%",
      "color": "shares_color_red"
    }, {
      "name": "Tesla",
      "data1": "590.29",
      "data2": "3.94",
      "data3": "0.67%",
      "color": "shares_color_green"
    }]
  },
  onInit: function onInit() {
    var context = this;
    context.msgList = [];

    _system["default"].fetch({
      url: "https://mobile.broker.vtb.ru/mob/Android/Partner/api/hub.axd/VTB/VTBBroker/MarketService/Instrument/List?instruments=EURRUB_1%E2%82%AC@EES_CETS&instruments=USDRUB_1$@EES_CETS&instruments=AAPL_SPB@SPBXM&instruments=BABA_SPB@SPBXM&instruments=DIS_SPB@SPBXM&instruments=AMZN_SPB@SPBXM",
      header: {
        "Authorization": "Basic aHVhd2VpOnBuNjlNa05haXVQS1ZMQmE=",
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 7.0; zh-cn; STF-AL00 Build/HUAWEISTF-AL00) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 Chrome/37.0.0.0 MQQBrowser/7.9 Mobile Safari/537.36",
        "Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6",
        "Accept": "application/json"
      },
      success: function success(data) {
        var result = JSON.parse(data.data);
        var inst = result.data.instruments;
        context.row1 = [];

        for (var i = 0; i < 2; i++) {
          var color = inst[i].marketData.change >= 0 ? 'shares_color_green' : 'shares_color_red';
          var item = {
            'name': inst[i].name["short"],
            'data1': inst[i].marketData.last.toFixed(2),
            'data2': inst[i].marketData.change.toFixed(2),
            'data3': inst[i].marketData.changeP.toFixed(2) + '%',
            'deltas_text': inst[i].marketData.change.toFixed(2) + ' ' + inst[i].marketData.changeP.toFixed(2) + '%',
            'color': color
          };
          context.row1.push(item);
        }

        context.row2 = [];

        for (i = 3; i < 6; i++) {
          var _color = inst[i].marketData.change >= 0 ? 'shares_color_green' : 'shares_color_red';

          var _item = {
            'name': inst[i].name["short"],
            'data1': inst[i].marketData.last.toFixed(2),
            'data2': inst[i].marketData.change.toFixed(2),
            'data3': inst[i].marketData.changeP.toFixed(2) + '%',
            'deltas_text': inst[i].marketData.change.toFixed(2) + ' ' + inst[i].marketData.changeP.toFixed(2) + '%',
            'color': _color
          };
          context.row2.push(_item);
        }
      },
      fail: function fail(data, code) {
        console.log("handling fail, code=" + code);
      }
    });
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (
    moduleOwn.data &&
    accessors.some(function (acc) {
        return moduleOwn[acc];
    })
) {
    throw new Error(
        'For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.',
    );
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = typeof moduleOwn[acc];
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn(
                'For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.',
            );
        }
    });
}
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux?name=card_bottom_3":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux?name=card_bottom_3 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?type=component&depends=!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./card_bottom_3.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?type=component&depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux!./card_bottom_3.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\common\\component\\card_bottom_3\\card_bottom_3.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\common\\component\\card_bottom_3\\card_bottom_3.ux!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./card_bottom_3.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_bottom_3/card_bottom_3.ux")

$app_define$('@app-component/card_bottom_3', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux?name=card_title":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux?name=card_title ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?type=component&depends=!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./card_title.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?type=component&depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/sass-loader!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux!./card_title.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\common\\component\\card_title\\card_title.ux!./resources/app/extensions/deveco-debug/node_modules/sass-loader/dist/cjs.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\ExchangeCard\\com.huawei.sample.exchangecard\\src\\shares_type_1\\common\\component\\card_title\\card_title.ux!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./card_title.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Workspace/kirill-kostrov/QuickApps/ExchangeCard/com.huawei.sample.exchangecard/src/shares_type_1/common/component/card_title/card_title.ux")

$app_define$('@app-component/card_title', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXHNoYXJlc190eXBlXzFcXHNoYXJlc190eXBlXzEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9pMThuL2VuLmpzIiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL2kxOG4vemguanMiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9zaGFyZXNfdHlwZV8xLnV4P2M4ZjQiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9jb21tb24vY29tcG9uZW50L2NhcmRfYm90dG9tXzMvY2FyZF9ib3R0b21fMy51eD8wMTAxIiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvY29tbW9uL2NvbXBvbmVudC9jYXJkX3RpdGxlL2NhcmRfdGl0bGUudXg/NzczYyIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL3NoYXJlc190eXBlXzEudXg/NTFlZiIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL3NoYXJlc190eXBlXzEudXg/Zjk0OSIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3R0b21fMy9jYXJkX2JvdHRvbV8zLnV4Pzc0MjkiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9jb21tb24vY29tcG9uZW50L2NhcmRfdGl0bGUvY2FyZF90aXRsZS51eD85M2M4Iiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvY29tbW9uL2NvbXBvbmVudC9jYXJkX2JvdHRvbV8zL2NhcmRfYm90dG9tXzMudXgiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9jb21tb24vY29tcG9uZW50L2NhcmRfdGl0bGUvY2FyZF90aXRsZS51eCIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL3NoYXJlc190eXBlXzEudXgiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9jb21tb24vY29tcG9uZW50L2NhcmRfYm90dG9tXzMvY2FyZF9ib3R0b21fMy51eD9jZWMzIiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvY29tbW9uL2NvbXBvbmVudC9jYXJkX3RpdGxlL2NhcmRfdGl0bGUudXg/M2U0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi8uLi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvc2hhcmVzX3R5cGVfMS51eFwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tZXNzYWdlID0gdm9pZCAwO1xudmFyIG1lc3NhZ2UgPSB7XG4gIHRpdGxlOiAnVlRCIEludmVzdG1lbnRzJyxcbiAgYnV0dG9uQXJyYXk6IFsnTW9yZS4uLiddXG59O1xuZXhwb3J0cy5tZXNzYWdlID0gbWVzc2FnZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWVzc2FnZSA9IHZvaWQgMDtcbnZhciBtZXNzYWdlID0ge1xuICB0aXRsZTogJ1ZUQiDQmNC90LLQtdGB0YLQuNGG0LjQuCcsXG4gIGJ1dHRvbkFycmF5OiBbJ9Cf0L7Qu9C90YvQuSDRgdC/0LjRgdC+0LouLi4nXVxufTtcbmV4cG9ydHMubWVzc2FnZSA9IG1lc3NhZ2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1lc3NhZ2UgPSB2b2lkIDA7XG52YXIgbWVzc2FnZSA9IHtcbiAgdGl0bGU6ICfogqHnpagnLFxuICBidXR0b25BcnJheTogWyfmn6XnnIvoh6rpgIknXVxufTtcbmV4cG9ydHMubWVzc2FnZSA9IG1lc3NhZ2U7IiwicmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbW1vbi9jb21wb25lbnQvY2FyZF90aXRsZS9jYXJkX3RpdGxlLnV4P25hbWU9Y2FyZF90aXRsZVwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3R0b21fMy9jYXJkX2JvdHRvbV8zLnV4P25hbWU9Y2FyZF9ib3R0b21fM1wiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS10ZW1wbGF0ZS1sb2FkZXIuanM/ZGVwZW5kcz1jYXJkX3RpdGxlLGNhcmRfYm90dG9tXzMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vc2hhcmVzX3R5cGVfMS51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZDpcXFxcV29ya3NwYWNlXFxcXGtpcmlsbC1rb3N0cm92XFxcXFF1aWNrQXBwc1xcXFxFeGNoYW5nZUNhcmRcXFxcY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkXFxcXHNyY1xcXFxzaGFyZXNfdHlwZV8xXFxcXHNoYXJlc190eXBlXzEudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZDpcXFxcV29ya3NwYWNlXFxcXGtpcmlsbC1rb3N0cm92XFxcXFF1aWNrQXBwc1xcXFxFeGNoYW5nZUNhcmRcXFxcY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkXFxcXHNyY1xcXFxzaGFyZXNfdHlwZV8xXFxcXHNoYXJlc190eXBlXzEudXghLi9zaGFyZXNfdHlwZV8xLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vc2hhcmVzX3R5cGVfMS51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3NoYXJlc190eXBlXzEnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L3NoYXJlc190eXBlXzEnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi42LjItU3RhYmxlLjMwMid9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jYXJkYm90dG9tM19ib3hcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLmNhcmRib3R0b20zX2J1dHRvblwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdERkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjkuMTY2NjdweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiXG4gIH0sXG4gIFwiLmNhcmRib3R0b20zX2J1dHRvbk1hcmdpblwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY2FyZHRpdGxlX2JveFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4My4zMzMzM3B4XCJcbiAgfSxcbiAgXCIuY2FyZHRpdGxlX3RpdGxlX2ltZ1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMy4zMzMzM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE2LjY2NjY3cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2LjY2NjY3cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zMzMzM3B4XCJcbiAgfSxcbiAgXCIuY2FyZHRpdGxlX3RpdGxlXCI6IHtcbiAgICBcImxpbmVzXCI6IDEsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuZXhjaGFuZ2VfY2FyZF9ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMy4zMzMzM3B4XCJcbiAgfSxcbiAgXCIubWFpbl9jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jdXJyZW5jeV9jb250ZW50X2JveFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCJcbiAgfSxcbiAgXCIuY3VycmVuY3lfaXRlbV9ib3hcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjguMzMzMzNweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiOC4zMzMzM3B4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjMzMzMzcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMi4wODMzM3B4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMi4wODMzM3B4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjIuMDgzMzNweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMi4wODMzM3B4XCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiM5ODk4OThcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjOTg5ODk4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiM5ODk4OThcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiM5ODk4OThcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNi42NjY2N3B4XCJcbiAgfSxcbiAgXCIuY3VycmVuY3lfbmFtZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI5LjE2NjY3cHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjkpXCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCIuY3VycmVuY3lfdmFsdWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMy4zMzMzM3B4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCIsXG4gICAgXCJmbGV4XCI6IDIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwiLmN1cnJlbmN5X2RlbHRhc1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIi5zdG9ja3NfaXRlbV9ib3hcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjguMzMzMzNweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiOC4zMzMzM3B4XCJcbiAgfSxcbiAgXCIuc3RvY2tfaXRlbV9uYW1lX2JveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzLjMlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuc3RvY2tfaXRlbV9kYXRhX2JveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY2LjclXCJcbiAgfSxcbiAgXCIuc3RvY2tfaXRlbV9uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjkuMTY2NjdweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIixcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIi5zdG9ja19pdGVtX3ZhbHVlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjkuMTY2NjdweFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcIndpZHRoXCI6IFwiMzMuMyVcIlxuICB9LFxuICBcIi5zdG9ja19pdGVtX2RlbHRhc1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI5LjE2NjY3cHhcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMzLjMlXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTYuNjY2NjdweFwiXG4gIH0sXG4gIFwiLnNoYXJlc19jb2xvcl9ncmVlblwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0MUJBNDFcIlxuICB9LFxuICBcIi5zaGFyZXNfY29sb3JfcmVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZBMkEyRFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7XG4gICAgXCJ3aWRnZXRpZFwiOiBcIjk1NjBjMjI2LTEyMzEtNGJkMS05MWY3LTBiMzdmMjNhY2VjYlwiXG4gIH0sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImV4Y2hhbmdlX2NhcmRfYm94XCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FyZF90aXRsZVwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLnRpdGxlJykpfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibWFpbl9jb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImN1cnJlbmN5X2NvbnRlbnRfYm94XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMucm93MSl9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeV9pdGVtX2JveFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCI1MCVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbmN5X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhcIjogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJGl0ZW0uZGVsdGFzX3RleHQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydjdXJyZW5jeV9kZWx0YXMnLCAodGhpcy4kaXRlbS5jb2xvcildfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiRpdGVtLmRhdGExKX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydjdXJyZW5jeV92YWx1ZScsICh0aGlzLiRpdGVtLmNvbG9yKV19XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5yb3cyKX0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN0b2Nrc19pdGVtX2JveFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9ja19pdGVtX25hbWVfYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiRpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9ja19pdGVtX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvY2tfaXRlbV9kYXRhX2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kaXRlbS5kYXRhMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydzdG9ja19pdGVtX3ZhbHVlJywgKHRoaXMuJGl0ZW0uY29sb3IpXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJGl0ZW0uZGF0YTIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnc3RvY2tfaXRlbV9kZWx0YXMnLCAodGhpcy4kaXRlbS5jb2xvcildfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kaXRlbS5kYXRhMyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydzdG9ja19pdGVtX2RlbHRhcycsICh0aGlzLiRpdGVtLmNvbG9yKV19XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjYXJkX2JvdHRvbV8zXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImJ1dHRvbkFycmF5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJHQoJ21lc3NhZ2UuYnV0dG9uQXJyYXknKSl9XG4gICAgICB9XG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNhcmRib3R0b20zX2JveFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLmJ1dHRvbkFycmF5KX0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLmJ1dHRvbkFycmF5W3RoaXMuJGlkeF0pfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiRpZHg9PT0wKX0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjYXJkYm90dG9tM19idXR0b25cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuYnV0dG9uQ2xpY2sodGhpcy4kaWR4LGV2dCl9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuYnV0dG9uQXJyYXlbdGhpcy4kaWR4XSl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKCEodGhpcy4kaWR4PT09MCkpfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNhcmRib3R0b20zX2J1dHRvblwiLFxuICAgICAgICAgICAgXCJjYXJkYm90dG9tM19idXR0b25NYXJnaW5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuYnV0dG9uQ2xpY2sodGhpcy4kaWR4LGV2dCl9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNhcmR0aXRsZV9ib3hcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5sb2dvVXJsKX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY2FyZHRpdGxlX3RpdGxlX2ltZ1wiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMudGl0bGUpfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjYXJkdGl0bGVfdGl0bGVcIlxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkYm90dG9tM19ib3hcIj5cclxuICAgICAgICA8YmxvY2sgZm9yPVwiYnV0dG9uQXJyYXlcIj5cclxuICAgICAgICAgICAgPHRleHQgaWY9XCIkaWR4ID09PSAwXCIgY2xhc3M9XCJjYXJkYm90dG9tM19idXR0b25cIiBvbmNsaWNrPVwiYnV0dG9uQ2xpY2soJGlkeClcIj57e2J1dHRvbkFycmF5WyRpZHhdfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGVsc2UgY2xhc3M9XCJjYXJkYm90dG9tM19idXR0b24gY2FyZGJvdHRvbTNfYnV0dG9uTWFyZ2luXCIgb25jbGljaz1cImJ1dHRvbkNsaWNrKCRpZHgpXCI+e3tidXR0b25BcnJheVskaWR4XX19PC90ZXh0PlxyXG4gICAgICAgIDwvYmxvY2s+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+XHJcbiAgICBAaW1wb3J0IFwiLi4vLi4vY3NzL2Jhc2ljLnNjc3NcIjtcclxuXHJcbiAgICAuY2FyZGJvdHRvbTNfYm94e1xyXG4gICAgICAgIGhlaWdodDogZHBDb252ZXJ0KDQ4KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZGJvdHRvbTNfYnV0dG9ue1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3JBY2NlbnQ7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dFNpemVDYXJkQnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkYm90dG9tM19idXR0b25NYXJnaW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGRwQ29udmVydCgyNCk7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiOyAvL29yIHZhciByb3V0ZXIgPSByZXF1aXJlKFwiQHN5c3RlbS5yb3V0ZXJcIilcclxuICAgIGltcG9ydCBwa2cgZnJvbSBcIkBzeXN0ZW0ucGFja2FnZVwiOyAvL29yIHZhciBwa2cgPSByZXF1aXJlKFwiQHN5c3RlbS5wYWNrYWdlXCIpXHJcbiAgICBpbXBvcnQgYXBwIGZyb20gXCJAc3lzdGVtLmFwcFwiOyAvL29yIHZhciBhcHAgPSByZXF1aXJlKFwiQHN5c3RlbS5hcHBcIilcclxuICAgIGNvbnN0IG1haW5BcHBQYWNrYWdlTmFtZSA9IFwiY29tLnZ0Yi5pbnZlc3RtZW50c1wiO1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIHByb3BzOiBbXHJcbiAgICAgICAgICAgICdidXR0b25BcnJheSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYnV0dG9uQXJyYXk6IFsnQnV0dG9uJywnQnV0dG9uJywnQnV0dG9uJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1dHRvbkNsaWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV2U7cmUgaW4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVlcGxpbmtfanVtcChcImh0dHBzOi8vYnJva2VyLnZ0Yi5ydS9sb2dpbi92dGJpbnZlc3QvXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVlcGxpbmtfanVtcDogZnVuY3Rpb24gKGRlZXBsaW5rX3VyaSkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGFwcCBvZiBhIGNvcnJlY3QgdmVyc2lvbiBoYXMgYmVlbiBpbnN0YWxsZWQuIE90aGVyd2lzZSwgdGhlIHN5c3RlbSBndWlkZXMgdGhlIHVzZXIgdG8gdGhlIGFwcCBkZXRhaWxzIHBhZ2Ugb24gSFVBV0VJIEFwcEdhbGxlcnkuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhcHAuZ2V0UGFja2FnZUluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2VOYW1lOiBtYWluQXBwUGFja2FnZU5hbWUsIC8vIFRhcmdldCBhcHAgcGFja2FnZSBuYW1lLlxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBhcHAgaGFzIGJlZW4gaW5zdGFsbGVkLCBidXQgdGhlIHZlcnNpb24gaXMgaW5jb3JyZWN0LiBUaGUgc3lzdGVtIGd1aWRlcyB0aGUgdXNlciB0byBIVUFXRUkgQXBwR2FsbGVyeSBmb3IgaW5zdGFsbGF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi52ZXJzaW9uQ29kZSA8IHNlbGYuZGVlcGxpbmtFbmFibGVWZXJzaW9uQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6IFwiYXBwbWFya2V0Oi8vZGV0YWlscz9cIiArIG1haW5BcHBQYWNrYWdlTmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVjEuIFRoZSBhcHAgaGFzIGJlZW4gaW5zdGFsbGVkLCBidXQgdGhlIHZlcnNpb24gaXMgaW5jb3JyZWN0LiBGb3J3YXJkaW5nIHVzZXIgdG8gSFVBV0VJIEFwcEdhbGxlcnkgZm9yIGluc3RhbGxhdGlvbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogZGVlcGxpbmtfdXJpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWMS4gVGhlIGFwcCBoYXMgYmVlbiBpbnN0YWxsZWQsIHZlcnNpb24gaXMgY29ycmVjdC4gRXhlY3V0ZWQgZGVlcGxpbmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChlcnJvcm1zZywgZXJyb3Jjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiBcImFwcG1hcmtldDovL2RldGFpbHM/XCIgKyBtYWluQXBwUGFja2FnZU5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVjEuIFRoZSBhcHAgaGFzIG5vdCBiZWVuIGluc3RhbGxlZC4gRm9yd2FyZGluZyB1c2VyIHRvIEhVQVdFSSBBcHBHYWxsZXJ5IGZvciBpbnN0YWxsYXRpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBmb2xsb3dpbmcgbG9naWMgd2hlbiB0aGUgZW5naW5lIHZlcnNpb24gaXMgZWFybGllciB0aGFuIDEwNjAuXHJcbiAgICAgICAgICAgICAgICBwa2cuaGFzSW5zdGFsbGVkKHtcclxuICAgICAgICAgICAgICAgICAgICBwYWNrYWdlOiBtYWluQXBwUGFja2FnZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6IGRlZXBsaW5rX3VyaSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWMS4gVGhlIGFwcCBoYXMgYmVlbiBpbnN0YWxsZWQsIHZlcnNpb24gaXMgY29ycmVjdC4gRXhlY3V0ZWQgZGVlcGxpbmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgc3VjY2VzczogXCIgKyBkYXRhLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZGF0YSwgY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogXCJhcHBtYXJrZXQ6Ly9kZXRhaWxzP2lkPVwiICsgbWFpbkFwcFBhY2thZ2VOYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlYxLiBUaGUgYXBwIGhhcyBub3QgYmVlbiBpbnN0YWxsZWQuIEZvcndhcmRpbmcgdXNlciB0byBIVUFXRUkgQXBwR2FsbGVyeSBmb3IgaW5zdGFsbGF0aW9uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZHRpdGxlX2JveFwiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImNhcmR0aXRsZV90aXRsZV9pbWdcIiBzcmM9J3t7bG9nb1VybH19Jz48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZHRpdGxlX3RpdGxlXCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZSBsYW5nPVwic2Fzc1wiPlxyXG4gICAgQGltcG9ydCBcIi4uLy4uL2Nzcy9iYXNpYy5zY3NzXCI7XHJcblxyXG4gICAgLmNhcmR0aXRsZV9ib3h7XHJcbiAgICAgICAgaGVpZ2h0OiBkcENvbnZlcnQoNDApO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkdGl0bGVfdGl0bGVfaW1ne1xyXG4gICAgICAgIG1hcmdpbjogZHBDb252ZXJ0KDE2KSBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luSG9yaXpvbnRhbE0pIGRwQ29udmVydCgkZWxlbWVudHNNYXJnaW5WZXJ0aWNhbEwpIGRwQ29udmVydCgwKTtcclxuICAgICAgICBAaW5jbHVkZSBpY29uQ2FyZDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHRpdGxlX3RpdGxle1xyXG4gICAgICAgIGxpbmVzOiAxO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dENvbG9yUHJpbWFyeTtcclxuICAgICAgICBAaW5jbHVkZSB0ZXh0U2l6ZUNhcmRUaXRsZTtcclxuICAgICAgICBtYXJnaW46IGRwQ29udmVydCgxNikgZHBDb252ZXJ0KDQ4KSBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luVmVydGljYWxMKSBkcENvbnZlcnQoMCk7IFxyXG4gICAgfVxyXG5cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICAndGl0bGUnLCdsb2dvVXJsJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RJVExFJyxcclxuICAgICAgICAgICAgbG9nb1VybDogJ2RhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JvSTFBQUJYUlVKUVZsQTRUSFUxQUFBdnM4QXNBQW1IYmR0SUVqVGV2VS9aL2d2K2t1c2dvdjhUVU15V1EydktmK2tRSndFYktrc0x4VWFCbnJZbktHdGRMUnVsaFZZRFFKSHpnMjZyK001b0x0YXpoTnU3WTRPRVZ0aVM4TkJUQlVqb0pLZW1IZ21ESm93YWhweGF3RzBreVpFVXp3ZUR4cUNGNDNUOHQrc05lUEgxblNYbmdlTkl0bFdsdjMvOG9IR1FmeFNFd0pLbHV4VHNTTFpWSy8yQUFQWW5mdFk5OStHYWZ6VHU3bDdWL3duQVVvR0ZEaFl0NTJ1clYrYnh6ZzRReDNPZWdHUUpUeElLZVh3Q2tNZkhFRWhMK3lkVEFEdWJvSnBEVUFBZXZZc25qbkR4ZEtsZllDV05CMk96b1JmOXFwWHEzelFRd0I5QVg3d0M2S3RYSVBTdzI4cmVBQ0MrMDNjMm1oV0FKK1lKQVFCQ0diWW12OXN4aEhnV1NMKzN0SlVPbTAxUUFKSUUwLy9rOUJ3TzcwWkRnaVpoT3d5VkJCQVlHcS9pWk81eWowZ3ROYVRxaERRTkVGaXJoeUVsQUlpUkFQcTFIZlIwTWhGWStWa3ZuZ3dIUFprQUtZdjZjUnFHMHpNRmpCTUFDUkFXUWtObFoxcWtnbkhDRnlnS0tITFNxK0ZrcU5wTzMzMVhpNkltRkFWUUFCQ1crclByRjZGdkoxMi9qSlZGMVgreUQ5ZFluMEpLRWtJSUJVSUlOU1FnaEpBUW00UmdKWVZwa1FJMlRkQlowaGtKMk9OTEhRemFOcExrOElkOSs5NGRnSWlZZ1A2ZWNxUVJsVElhRzVZbGc1NnNOREJ4Sk5vVU9WRHBNSTQ0QSswUzJqVnVhSWJRTHAxRUo5R1ozbzIzLy8vVmt2UGNPN3c3czd1enUxNGU3WXFaR1I2bWxZVm1abVptKzJGbVptWm1aZ1l4TFdpMUpGeVFsbmQ0NXQ3emVubnZIZTEwOEVrM2RUZXF3TFRwUC96SHA0Vi9hclZnYk1IcGRRMXNuL1RFLzFEcE5tQTNnSDJjOURwVUtvVTNuUmFrUGd6akJqQWRoVSs2cWRrK0xUaFc2aXFjS2pUREtGUW9oWTVQSGNZR09IWElNRTk2d3hPYktyaVpPM0FOYkc4Tm0yck1mdmc1RFJsVWcrTUhLcmlwYmd2VDBGUEZwQTcxY2pobUs3VmtXNXNpeWRIMy9XWnVIcGpNbVVmTXpOSUdXRE50Z0ZsRGJVQmFrRVk5WXU0ZU1YY3hKRWRVTUxxNzJmOWIycmJ0bUNUcHV1L3ZDNmJkR3R2MkQ1aVZiZHRXMjcwYTI5cDVOYjlpZHJhWnFNNUFSa1o4RWQ5N0J3UTNraFJKdVh6b09NWVBhTTJBMmJWdDJkbnJkRDk1NzczM0xnTkZKS3djUFBVbUZuMkNvcFo3NzcxYjYvdnVtbk91ZGRiZSsrS2ZOaFZWSkoxRDA0S0Zad29WMTZBUEx6aHA0WlhDeWFUem1IVFNSdytkdEdPNG1ld1k5SWx0MnZUUXBwV0hNbmtwM0VjSEhiQVZ3OGhES1ZnOFU3aVBMbGhVaXVGR29UaDhBb3YycFE4T0txV2dtRjRLZzk2R29wM2JwaGRlUEdsVHViVnRxOXF5OXZuZDNmM0hOZFlPdEJjR2haQlJCSDJRRVRwVTRPNjhzK1RXdHUxYXpWcm40VTBFclpMU0FDMTZwRWk1TjJjRlJFbVNGQ3VEZTlaeWNJSjh3Qis4L3ZIUHh2OXRGTyszTjd2d2hiLzgxYjJ2ZjIzaHk4WmpBd0IyQUlXcE5RaHEya1ZvY0RwbDd3Tkk3TEkvOWV2OUs0OU5qMjdoampaeEp4dmFvTjJsK1U0UWIydmtsZTZDNmM3dWRGUHRkQlBpSmczWXBYbDV2dGthZWQ0VFp1TTE4cW1Rc1lsOGFFWFR2TU83L0w4ekErNHd2Z28yWTBlUXlTREtBamFaWUJCTk01S3dIaVk4YXFUQkIzc0ZxWUx0T1Zjc0NnZEFkOUUwYmFSQmdNVEtVYnNJTGRtSmtOY1c4cUVWYlppdEtaREhoQm45aEt3NzBOQ3IyQVFUdGZHTUdRemtGc0dtTHNMSmtCdHRJQjlhVWZyS0ZXVDlqSVJKTk1KREFjQ2lSazY0Q1FDMVVFQmRoS2JzTkVncW9BYnlvUldwZ05sSENYSWJyR3pNQ1lXcGhHSlBUb1U4bEZBV2RVZ29RUmkyQm04UWJuUWFKTGxRSWJuUmd5dDZzeUx0dXVFelFOTW1RMGwzNFRrNWFWb2xXSTNhazhKV1NqWE9aNEx1Q1hyZU9PblJJK084YWN4OHl4YUcwSXVSZzN5NDdRa0FnRDNodG9FR1IyNkNsdXp4STIzSGJtbDVIalk0QW9CTkFnQU5BczhBNEFRZ2RSRk1BUUNQSHFsWFNBcVVvQ1ZXMm5zU1ZFdzlaTzJmVEZISVEvOThmazZLdmV6OEh1RjlBS25FcWQ5U0FjQnVtcWU0MnBSRHRRMG10ZG5VV0ExcWM5akZQVUhTZUpsaUFmRDBxSkUzTzBlRWFlTUNBb2F3TUV3aExVS2VEaERBQWhiR28wZlNuVXRNSkFiRnNnWlRYTlRVQXRZRjJpRG9zaTQrWHRRQVhkYlFqeGQ5SDBBS0llWGxnamZJRGszUGFUV0E5b1E1VmdNQXFHbDh5V2daUnI0QW9FZU52THpKaGpDTUxGeUlCVTRNZ1FjSWx3QUJiaVRnRWdRczdBTllXUEErZ0h3S2tXK0dpdUF3bW9wQlFRNGp2VW5EVUJMR05vSFQ4TklrUEc2azl3YmJ5ZzNrNm9RTTRFWk9GV1FDM0NDc0J3aklhbnZrK01pUklhUlpud0hBQUFYd09nUllrL0ErZ0x3V090OXNiVzNHRmxacm0wSXhiWEFBaHMyaHNOaFRRY0w4K0pHM2hXUE1OWld3QnRqTVdaZTdza0ZRU2ZON2hCbHNLbHdvbGFjU0RIdlo0MGRHaWlGOEdmNVZaTERtRnpKb2d5QzNCZ0daVmNDR1NzaXN5SlBCeDBlT3ZPdENZc25WeVUxakJXSUZxS2NLSU5ibWZaaEdvTVpxR2wwUjlYMEFDY0JnTVNvY3hBWGtEUUtDN09FajRDQTRZS1J0QWg0OUVwbmlFNWpjV2JDc29UQ3VkVStvb01MWENpQytTQ2hNQlN6eExydGg5b1NMUG5aa1lPZWRxK1VKTzVodk52cWlLR1Rxc3RROUlTb0tGcldwU1dBYis2Q0ZIanNTYXN2YnJERXF3eURUUldFanVKTUFFKzBWSURBTU0zckY0MGR1elNCS1VMOG9ZRkFDM0tEVVl3U0FIa3B1b3pjNENwaWlRWGpVeUl2T3diRE1vVkNZd1pBMGg0TFVJSmdHRkJhQWtibXhEMEdYN0pFanljSmlXNEt3a290cEFnUlRpeUFzRTZGMEVWekFoa2VQWEpEWUptV1FwTldDcTlBTlExcXh3RWU1Z1M3UU9QVmpZVkJKRzdTblhpV1VzRWMrOWNjaEc1eE9aRWZSUTBLZTV6VG9zR3ZVRkhPQXdHTWxVdys0akM0QzRXWHhJeENLdUFNM0NHb0FXRE9ROWFEblE0ZzYrVjFyQ3JBUDhLaW1UYVJmTlN2OGlDS240NUJSN1RUSWpiS2VsK1JiV3JjQms4QVVzS2Rpa3dDbTBvQ1RJZHFUaGRRQUVCVVV6VG5JTUZ5TDhyZnF4eXZFbTNyT2pXUHRoamMvTlFsWldlS2FEeFYxeWc0VFpGbnRKTWlLSEhxTEdvVEZFZFhqQk9IR1d0OE1NOTJLQm1nVjBDL0dFTkc4UTU3cUNJa2kxdHNWRUFCdW8wZE1UY0pRS1U4NHF1aUs2VEJ5UjBNbE95RlNBazJFTDMvTVVKZzZpTVVVTUdRREs0U2lNcXRiOGdITld4aXE4YTVKdVdzK2hHSHk5NUNtcGtuVUIwYWVURTNVQ1h4TWtSNkZUQ2RFdnBneTNiWUV4VjBXQUFERDZBMDc0R0VIVWFpY0docWptN2xzRGFoVGZURmFiVFpoUHdCc2REUUFEVHR3UkpGaFBBNXBwMEpXekJHNzloa0FPS3RoNU5JZ1FOTXpnUWpjWWFKK2lTaHA1cndGeXRJcmF0b2duTHpsYlJDUVJPMFpOem11NkRoa09pbHk1Z1VOUlZUQkxmTk04UFRNY3N0a0JUMXJHYzI5N1Bub2VXVmJKSzRzdFVjRmZKblRqQjc4RENld29KY0dJUjFScEhRTThudzY1TXdoK3RmblpGVlE3S253dkZqRjlTVlBWQktCT0xXL3FDS1dSaEhFZjF6RllRTGtnNWtnbitLY1h3akJvNnV3SUpTd0xvMjlCNzU4bDRsZmlibEtPRngwTEhKNUZSYzdGZklOOHJBbEhZY1BzU3RHMlNYQXg5SThrMExXb08ydWsxSTlBY2owakEwaWlJTk1rODhnT01qTHVvRmFtb2R3R2FYSCtPMlA5bDUvUnRKUG5ndWg5dzdWNmVSc1JVZ0xuOXloem1xNlNQdXhBOW1QSFFseS9nZkwxS29nb08vS3p6bXFFNmNEZWRaUG1vUk5GL0E4ZzZYQWJpb0FBUENWZlc0QUZLUWRDb0FjaUFjSVpFRUVTTGw4OGd6SUJjTENnQUNNK1N6dVNCVkRENFNWNjR3aE5HVU5RaWZTVEtGRm5Fd05oMlNCRTJOUHo2bG9heVhJc21FYllFREpWYmUwUWVCR2dMaW1BVEpJQjE2V3NDakdHci95UmdHcXRpY1lBTk82Ylo0akFteFFQdmNaOXZhZnFwcWpVcXk1NXRybmJSdnp5YzhYV3BibEFST0NpRlRMb3BSbmF4dFJlNm9lU1h1TmJXU3M4UmZ6aGFCOVdaVFdkcXhSMFpCVnF6QTFuSVR0NTVueUtVZDZWSnRkMDNWVDdPeFYzSktpV0dXUXZObmdnRzkrZE1GMFlaVFJsRE1tRXhtaXp4aEdGeG9Bbkp3QXRBbE9MUUxrampDV3BlVFg4R1Q0KzMvNVRXdDNQeXZuVzJQcHVKYUF2OS8ramU2dituOVdYZzV1TWhiVlNGa3RWWUtvcWI4czM0ampNc1pVZ0thTER4TGdQTFRObmhoc2h2bHVDK1hEQURRZDZKS0ZUWFUrOTNoNFBDM3dpK1VwS3poUHZiRFBwdUQvSExsbjVWMVMvbmdUQUw1akdGWTVqNzRueUNKNHpVck5mY285MWN3azVqeVplWEpNOHI5L1ZsMyt2RndlVmtXRSthRk1haTl1ZE5Rc0xiZWk3YzVDVW1IMEFjM1R6M09aeWZxQ1VtcGsyY21IRnRkVTZkczMrTWtuUnhLSjFzazBDOUFyRUY4MHdRd3dzTEJWcTYxVjJKcENORUlqNmZKRWMxZGdUUFRVV25xZ243OHpZdGN1NE1Nc0JRODZPci8vRG1WYWxvcW9hQW15T1pQRFE3dkhiSDFFdStucWtvdHJldGo5Vis1NU9DODN6QW9BV0plT1ZZbEpUQVFBWUtqa2FHcFFDVUdOc2lVVW9Xam14RUZNb1JqSUgyeVVMZzd3VWEwOGRuOTZwOTIySEVVM0Z5OVBxWHQ0YStFMncvUU9QLzFJT28rS0k4VE9WYmtTR0xBWnV6UVRGd0JwUlZMQnNrYU1mczZqSWhGeE0vZnNXWTRaaUJNVzQwNkNmcVlqQjlURGo4WjMyY3FBMENTYXU1dW5vOHRrWjFYdzRwT09hTTgvNk1lYnlnek1OYzFBbXBIV3RKNXBSYXFhTEM2RVhWZnVtc0t4RHZ1M0xDd3MxL21md2krcmZreDdBeUR0UlRoa0VLRC8yL0d1SGI1YmhpdEwvSFJyblI2Z0tkOU81cjVoOVk5K0NnWEg0bWtLZ2ovNnVGOTNvKzNBRlVkb0FBRDcvN2x4VHdxYkxTZkliYmpKc2dZbndJa1cwTVJuUUc4N0tSb2NNQ2lHdk5MbHYvNDgvVUlNY0FBZ0p3Y2RKcXovQ1A2aDFCNFZYN1oxdXNzcXRXckgvSVBDREZDRnBzSHNsRUZ4THhWcHYzayt2VFptN2tLMjg2V1ljWXRxK3E1MkN6SUI0QzAwZlhTcU9kOHo3dTk5NEUvYW5mUTVXdWc2UzdYUzArVDgrb0lKLzA1UnZUaS9DQXdLeERLUk53aTNyZjh0M3E0eXFKTk5FSStWckE1NUFzVC96eitOMFVId3h2cFFKd0dPeHF1K3d1OHA3NXo4QTBPZTlNNUVPcmE3alY2NGM1Y25GMHV5WG1OaWFoanMyTHA0eTd5L3NRM2lJQlhRME1CMDhLYS92Ykdxc0FQZzJ2WXpNSm40LzNlditmaU9CRlExZExNaEQ3NTUzMzdqMHBEQWZ0WE5qeDg5SjRiMmcvMTF2SzM3NHZaL1dqL0hBZEFpRldlczhlNy9pMnRCcGRVVTJKRTJWaVZxZzgrUlA1TUkzMS9kZ3A0SHdQbXRZMEEvOTdQejRBaHJJcHZob1NESXpWVGdQRnhlM3RiK0xYWTl6bGNIYWJUV1hHYkhJNThibVp3WlZtWHJqQ09IblZzOGQ1ZUtYVjh3M09rb3pUcWJ5VW1jSEtqc2tmK2pJSFBjdStCQXoxcTdaelViWEdmam1lMzZYZTk0b29oK2pic01iVFZ1MkdRTU5VQ3laNTNVN2xxMkhNN1BEbktFK2Z3ZUFVNTVLK0Rzbm9SN0NKT3JHQXNMdWJ5eUwyVGdQSERyUzBkdWV3SnUxQ0FBQUw3MHo2QjZac2w5YzB0dVRjU0lJcnJWRUVzbFgxbUN4RUVLNFdKSVJ4eEtDdDlScnV5SlJvZzdtTS9WUWc3SWxIdnBlck1JNlhLUExkL3l3eERuUFNFMGtTd01Rb3hQOUJtdm5HdklVRVJYMEYxSjhtOS85cTkrR200QnIzZnpCZnpUeGQrUmRkZDZCYjJiTXZTcFBhRmt4dzF5SGI3VWxjQURBQklKSjZ6RkVOUEIrYjR0UWtvVEg1Nng4eVRYU3NYVXRXT1dDOHZ1eWc4SlNZODJBV3ZzZmlYV1VHeDB6dk9ZWUZ1U0tRbENRZER2cUttQUN2NUovUFVmK2lMY0pXRUFFREJ3bUpBMytQLytnUTRmMUZ4bGwvbXNJT0NEOWhpcWRNNFFWS3RDZjNvdHBXTFdJS2x6bk9rR0pKeW9sKzNhZ2RuRVJ5WlRrVjU0S0VsNnlSMWptYlIzNU92ekF4Ymg4aVFJZW1FcVNTWUJCU1BHNEJrZDM0OEFESTRQZnRML2Y3L2dpM2pkbmNMZmhIK2tyK0xnMkRFWUxzQUYxSEUyWm1yaGcwaFVtWHN4TW1iem9jUFVCUkxER2RJSUg0K3ptNEpuSEdnMGZsd3pkMnlxbHBkcjU4Y1YwZUVBR2tYK0hXTmJSb1o0S0pRVWtsU2MvTTc1Rno5dmhKL21zYzIrNXFTT2RDMzl0d1l5K0pBVW43WW5YTkdSQ0tUbGg4azAxZHZOMWw5THRpV0FlcXJOZnVmOTd6LzdSQitUdFlyZVdYcytWQjdZMUdZV2YrN2FvenQ1bWtEa25FNGxoWEpXSkR1K2M4V0tGWG1TWFpvN2tQQkoxSUtjaFlHZXFpUmhZUUNEdndxL1V2OGxYblBjL2NIM2VGeTQ2YjF0NGxLNFBWVndBd2d1c0RwZk9WdjFocWdIZFBZTFdFbEFOWkMzUHYzQTkwendha1NxWW8yaWRadkcxcVJkVEtSbEtXQmhtTFNta1R4ejlYRHJ5WEhtN0d3dVRCVzRGTElVa3hMZkZvaE9ORFUraGpnbkRPRXVKR2hOc004REhOanBqWHdPZ0FOdisrdFBxSDRGeDc5KzNhZG5TNWxpd3BjYnlPRk1QdS9ZRHRBYSsvUjNGVzI1ejY1UWpaNXQxYmdoc1pjUHR2R2RodnlNUTd1S2R1Njd2alhLb1NlZm1WQVlTMnpOYXVxSDcxei9OYlRtbk9PcmhRWENyQ3pQWXYreDJKKzlVS05HbXVlWUs0OURZVkFYa25wS2dhNkRBZnBVQ0FBTWVHRnM0MDhiNFVkakQ4QzAvWHFBYVFmQjYrWnJqakpGVERyQUFPV1BTdFJ2ZmRnYWVjOEg3c0xHaVJFQWlzZHljdXVSQm9aQzNGSDBsVFlQVzNrM2NJa0tVNFBPMUVLL0NyVVZhZXExVVUvZFl1c0RhNjh4ZDI1RGJaMjcvTGtBRkYxSWpHVTJhRnBoZlpvUkhMUWl3K3JMUC85U05XMzBUVEFWbGdaQkdCSUNQR1IzQWJIT29KYjNCdlNIRDJSUW9HcVJCM0Z5OTA0MXJGMThXTHZJdnZNQnRhWmEzMFRTZXUzZitHRTBvSXBFRjIvdGJkM3U1M3ZjbFoyZG9yRWZ2WVdNRHNBc3ZaRzNYSjdHektMOW1NU1ZQK2FpbDVFK29SckVvTEN4NTdWRlVFOEd0c3pFSUxjbVBvNlJ5MmlmSG5jNE9JM0xLL1krY3NSbHIySmp0ZlRDSit5Umx6MlMvbHQ3TlFnaHcwZURHcTgwSEhrSmttSnFWQmgwZVFadExYY2wxVTVrUUxaQVh3MHNkNzB6Tjk4TVlPRUNBaUFOY2FIbTZWZWFPd2h1VmdhV3E1QVJMRHpoUHdGSEh1ZXFEMzBVSnZlYmt3K0tIY1NGV3NqU3dRdUJPaktPdlFNa0RaWjhwdnZuanNoL21aQ3lPUmUvVENZQStiVHoyRlI1azhYL2R3QVRGWUFibkJjcXNLZGVBQXBMc1ZxNnZYLzFZcEhYZXBtUW5Yb2NlY3VSYUM3ZitaZ1I5U09tdlU0ZHlJNXJ1d1p2RnpIYVR5L09sOHBNTFJlTnF1V0g4eTlUU2pEN3dDTWNIUWVPam9ZQkRtcHhBS2N1R1IxQWZnQkVqNGR6SllDVS8zMjd3N3ZMczR2S0pIRjhKdTJsZFhSc1lUZlFzWXp4RFRxSzNyYk5WV0Nlc2hSUUJhQk1xMTVxWk94MnVyTXh3bkpTejdIbmZ5a0RxZ3lYVU1DQ05LTHc0T0JoZjhtcnNJVFNTVUFvVERnS3FSMTNUeStQaTFtYmtDcWx5NlV6alAyNEovZUw3K1hmMmRmbEpNZEpPblppUk5IbmpuSHRLSm82MUJOaXVmeXRWdzdmU251SWhqNlNFV0Nkc3Q1MXVJMk1ZWmRWMVRZRFYwTmxqa1NRUExaOFJUcWZWNlQxazIvdEtsTERqRFNmbjgra0JxekxtdWJJTmU0SldOUHptV3JFaW1WUDZFRE9aN29adFhOZmZmTHR5NkNZeXZHeURVcmZuUGRkMjFmRTFGYUFuVnBiVlJGTVQ3b1VwTGxybjM0NXQ0dlMzUEhkem04VWY3TGhzRTdyMEEzUTcyMHU1WDB2OXdxaFdNckZUelluejd1YjdMV0JtZW9NZEJQNW45QTV3WGpMQW9wQ0RIZ2p1aUFBanFiaEFLRWxPd0taMmxOeFd2Y091TDVBK0JIVnhINW5xa1BGU25iTWppYWUyV3gzbDdtbUFsL3ZPSjdFMTBOc0YzMy85M2Rvd2c2ZmtJaFduWkxIeFBvZEtvOGVid0VnaDgrcXh1Q3pORkhtMlBJTi9RWnlCV0NLUTNzdjhsZ0JBTEdTbXdLeDdnbFdHNVJ1NUNZQzFCNjdwOTNYRGxBZDlVZ2JmbkZzN1Nkczk2QitKSlZLcFN3Rk5IYk1MTzJpRWFWdlQ3SW5DaWRqbXV1ZzFjSDdkM2NWQU9xeVdNeEFlMTRzdEoxdnF2WmtvQjVnQ0ZnQWRCSFV3SnJKMFNDQU1UUUpoNUNwUWVEV21KNkxvMEdlTUQ3dXppTnhGNWRyRFJjVThqelh3d0RyNEpIWjFDcnFZZHllakNmZG1BeDd6R1gvTWUvZlE4enlqTFhtZVJ4S21VUWpIVVBjVkg0eTdybmZWaERZOHljOGNHRkE3a3kwRDZpWklhTlZDN0pKbVNHNnpQMTBiUkFRNXI0TFdYdERsUGE0c2lYRzJ6WjUrSWhhS0k1U2drNTlFbWJHMVF4WWJPdTJ5UkE3aXFqcmlNL3o3RE9sSlFQN0dkWGFIcS9mR1VkWkdpVm1UbGs1Kzh4MnZzMDllbnk1eW9aRlZzNktwUDB6Mjh4Q0hqeHVJa05ZWXFXRVBRRjhyWlNxTUs2VnIyM2tDNHQ2YUgrS1pMYmRKQ1ZSYnUvYWVSNFV0eUk0YWlVcGt2WngyajkvYjJndHFlckw1KzJpK2F0M1dVSmJ2UkpmdHRpWXVxcXE3dkRHcCtJa241dUh5TER4aFUzbjE5dlVoemdNTnZacVFRWG1TbTRJS3Z5eGE5WU1QQW55bm1CcVR4QllQWWlNUWVYRDJQRVpNalNlMzJhMm1XMzFwdlhYK2FLNGZXZytsVzVWV0ZrcFUxdW5WN1NMb25ZZGNHeitONHhaNUZsYVpFaGNaUmt0L1FhSmpGbVVtbGkwM3pQcGNDQS9xMFV5Njk5Z1MrVnR0VkFBSUJSQ1hSb0VjbENORFFJQXFnYTBaTjNJc2hUMEhXTjZBSVROTTVic3N0SkZxcGpOdFZWUnNJNktRelJnVzRSTjJWNlY5M3E5bzhoeXg4YnhmeTlmVXNNNUo4UFErWFh3VHVOTkFGQVI4dUNCZitQZFBtamtmOURPZjF1TlpYd3FQT3RVRUd6bXdvT0hBbzVya052Z0xFQmNBd3JoSmtBb0FRM1pBV1FOM3ZITk00SUlBUmh3ZldMTTVmQ05INysrZUxvVFQzbG9QMlYxWVNjV0lXZEYxODNVVWVRcXJjbC8vLzM4azRGWW5FUWpQYmRRMVVDM2Z2TUR5RmpLTkp2M0g2eDBHcFFGYTFlK1JyYjRtZUl6QURPUW9JV1MyZ3lZdlVJdVViTUtERE9YcGJuekFyUXMzY2dQYlFZK2E4OVl6S2I5L2RMd0VjRVp4VjZiYnJGemMzOGpIc1JkcWtyTmhHTTJlVER0S2ZBV2hXMnR0UUtHc2JQb3M5Q2E3K0g0RGFmN1NSTU1RVDFua09rU0dHNVoyMENxMkQweW5heDJsTzNBekdYWGRpR2pXc1NTemdENThlZWJkcGgwSkxManlOdXdteUdXMEVUdEUrTjR0WU1zaWFkVW9qWXFsYTZpY3h2ekcrcjJkNjA5SFVTcm8yeityTVZsTDA5L1JINEN4bzA2RVhvb1RBRW5jbE9RTnduSUNyUUlwakMxZWh5UzdJalRoYmphdVZnOWJyYnNuZG15MFRGSXZmdEx4M0tMZGhUaFczNDhPa29lRVk4clM2V2F6VU5uL3BnQWZDYmE4N05OWlZranp6MC9BMDRtTE5XZWdadkVOVW8xZnJZWFdkYmxLR1M4R3hpUHZneTg3RFp4ZlBoRS9XbzRPaG1pM1RCdFBIL1NlWG5KeG82aWJZaEhvM2tTam0vM3YwV2ZJSU0wODhjMk12T3p4V2l4aDZqTlNCQk53SXcwczRuQ21od1RhT3R2clphN2lQRU0wZFNKM0thWkRXYkgxdjdVZzNuZTYySm5yUzI2RERGUlYyRklwWDhZMjVFMnNYWThoczRpSEgwbm5vcVR5eDkvZHIySGlUb0Z1RURrTzEzNTFnTk1QQ0lBRjBXY0hRMENkSmtkOGptaG1JYXNMaHdhQkd2TEZFdUw4RzNUZDdNQmZNeVBSTHlqYlhtejJlbUJJd2FFN0xSVjVKRG9NU0x4U3h3WDB0SlJKTDltOFI0ZXR4cTV5ZVEveitoclFBMjVXUG1SZ01TR0FpUE5OYWxCeFlKYW1RekFiSGpDUmZlY0dSYTBpOUNGSk8zTFhib2I2WHRxanNpdE5YM2pvV2t4UGpWWHYvMjh6VmVXUlZubHRJczBmaTRLRllsUkFFWFVlZGFGWFVXcTBLblErZGhYcVcwbGxqODhwcHJmNnJTdHFMVzlNOXdncVkvSUh4RXRmOE1Kem8wSUtnT2NoMm9BRU1SQjFWaEFMQTRBTEFpbGpXd1JMclhIZi9sSkMzLyswSmR2UDI3RVQ4R1lqWVVCWWZ0M1hGbW8waksyUTYrR3lnTzZ5U0tCUCtMeDFaMW00ekpoR1VyMlJDeVRDZ29DdXF1b3VNR0JkM09EWDUzbEVWZUJBUUdMRTJVaWtvZ25XcklnVXFWTUhxZ3dMMThlcHRDTGwzL0p6ay9UblFJc1BaN0JmdWNBZ0NjZDJBY0FYUFlFZUVOMjdpTDBHTkdVd1UzZjhvK28vdFFYL2hremdTOVFBbnhndWEzb0NkUDVCSm9zNmdCS21MRlRSUTFiNEtNS0pmbkdpcTZpZkdUK1JIdGR3WE9BRTRSeHdWSE9pZGxVUHZDRmJ5NXVQZzJVSkFIcjF6Y01vdlp6NjR4bFFkMkJSbFJBS0sxcFhvQnFNMjNwVlh5UDBFUXUyamNJYVo1M3NFdTEvK0pvdVkzc1p3UHFaUmEvbFdjeTI5eW1pa3pvTVFzRkRFQlcyeDRybXk3NnBLSU0wWlVIVENOUVRYR2RuRW9zUXFaaWtJZnp6ek1vMnRZVnhnZ0E4QUhTOGMzNVNJSlRKNkdEODUxamtVRU1zcXNveWpTRjdHb1N1UXdnaWh3b2FtYitXN3M5UDhNSk1HMDdZWk00SFNBQUhiRER5SDRTSDQ1QVhscklvRWxrRytpNG9yYkZSRG9CT1d3MFFkQ0xuYThja3krb0VpdWlWSkJWN0ZROTVMcW9WYnFNem5FVGwzV0JsbGl4YlBBOHQ1Q0xWSVFHc2xDdTFvVzAxYUFsVjl5MlhKdExTcTRWc1lYTTJFRWlEbmxoWnhFK2JxclhpQmU1dnVBcW00UzJ5ZGgrd3FEamlnNGlRZHRPNEpna2FXYWFyUnJQQ1ZUQ25vQXBzMlordHBxa1NhQ0hodHc0OTFIMDVnMHh2d3czWVdFSUM4dXlzb0FianAyc1FJdHdyUUNhdGdlSC9LRjdLUHJlaVdNa3UwNVlaREwxNjVSZklxU0cvSEtkY2wyQXRVa0ExOWdnc0dDQ1BSQWs1WmNmdW84aVc2bUhaS052d0FtNFBWdU5hQkI0dG1vRUJ3SGFJTUFKQUtvUkhncHl1TGVpdHg4Z01mUkZRQTRXZ0ttQWJnS1c0TU5Od0ExQzJWTkNhUkRBRHdwSlpiaVBvbXFnWUZEWUdnd3pHM3pFNWNrd3N5UW9Mayt3bWRHV3lZUUhoQndOOTFQVUl6Q2xMUkhnSTRBZUFNRkoyNFRDSTJCK2dQQndrS3A0QTJDNGg2S2Rld2JMQmdHZ0dLQUF5SUVHZ1p3Y2lONUJnRFVJQUlBSGdNdzJsdmxiYi8zSDMzazF3bzliNWNjdWNjVncrcUxTQzEwcHFyQlFRUkRqRlVBb0lIZ295OHFEQTFUSXJ5c1BjSVJDNXoweXZBWXlsT0N4aWFReUhJZlVnVlJtby9ycDVlNE8yWlhkRzZQKzVrWXl3ZlQrN283TFhQbkxvSGFURkltUTR0ajJkOUlxZXYzOE93ZE9DWVpNRjhhSUhvcjhaSVhuNEthUzVuQnBFREN6TkdSTlFqZ0JNblFoanluU3JTR2FoUXMyWEYvZGMvV0xJWFFCZnZRUkxIY3BObzFLNlNpOGJGbTdQblhaekJKT2xaK1FpQU1tZnV0cHFIUWo1QnJrZGxVUFRybnljTXZQVGo1a3ZRMjNQUHBlVm5oNERlVFlJT2l0NFIxdXd6SElQQ3NYSnFkZWJkNzE4Vzl1WFEyUkNvREprdmVidnNaSXluWm5WMkpuVzBXbnlIZTJRWFk5aWwycjRLeUFLV0NhUkFGVFU5T2tZbXJBSGpGbHFFRmg5NHpVekN2OE9nODFvKzcyNGZRcVpySzVuMmdZVWtMQk5PWUozMitlYlQzWEVXbHh5cUlobUhrUEF6QzZvWVdMMVJvc0FGUmhiWUs2QVhydlNDS3F3UzNlZ0Yyb1FlNVNMTjVyZXVPbzIrZmpuemw2N2ZNL3ZtZHp2STFacW5mdnRVZjhwbk9pUVJzd3ZqNWhVWTQ5RXdpNVVzR3lFaGk1aG9KRmhVdklrOENqbG5mZlJ3SVB4ZjdiWGZuaHU3Q1hIWTljdEx3bmF5SS8rcjczdkVjaHF5cnR1bCtBYThWbTFLMWV4ZnBsU0NUcjFPUEdPdzk2NW5Qcm1IbjN6bHJ4T2thaU95em8xdXpyRjNYbGV4andxV0pFMzNncXpRRDZFV1hSQnNFSkpXcHpFL0hoWnFQeERMd1djdWxFUGgrSmpESjVtbzFjRjU2UzVnVzMrcTg5K3JjZ01DOWMwS3dmc2ZrOSs0MS9zNzdWZDZrYkNDZnJpVWJSYWZMZmhaalNXV0V6MkNDVE5RblJaYkpPRGJTNXJ4Uld1MzlrS2lRYUFzRlVaWTJHSXd0a0R1V2VldU9ESDR5Z0wvSEQra2FmdWFabmJicmFQR0hSTHBzWXd6TTVFS3ZmTlQxVmtDTjZKWU9DbkhwVW9uNTBjdkw0QTBTZmZPVDNpTFI4TW43VzBxNlBXSmFYRUMyMkVFcEVKYnpOdC91di9nV1ZQVDAzNVlSVm1kTVZmVmVHSVdMWlJBQSsyZ3VWTkFPdzBXNGpMbnNhUy9RblhNSzZKMUEvVVdrZzdkNlF1azJ2YkcyYlo4SWY0VW9rVmppZUw4TXBWYTE2cU5XODBZZDdGLzhndFJPRTBLM3lkRVgxSFpJdWw2MXdDVnBDTWJXQWdxY0dZVUVCbmdwZ3VoU0VFbGFFQzU0dWRHOUlRWUFUaU1Ed25qMFlqUGVDUzJnRzN6ZWQweDMyRGEzdFIxeTEvMlR2Rms5ODVnOTQweTkyQnQyWGhsS2E5UEZSNkhSRjFnZmVFajhGd09NR2V5WXR4SEI3OWtTbzB1Q3NGbVFxbllUN1Exb1NYNGZOUHVPNmUyLzIrRjh2bFVBV2tSdlhmbll0Vzd0djczNGorNU5xcllzT3luVWUvOHhsekZLOXpxZTlTWC9vSnYrTlJFaEwrblJGdTk1Z1JoS0xLV1R5UEhxc0JvMlRaelVsTnpVTkxyVG5xT2xTV3dURSswRnE3RXoyYXc4KzFucy8rcGZYNStvOGlSeElYYW54OHlsa2d2SHBtN0lNaFZQODFGeDBva2tCaVd4V25hNW9EVXlJMk5yOEZ1cGtVTmdraHRwTmdGVXluZzJLTnVHZWtEcXB0RjFaVWR6S0J6ejQ3SzBjU0JTVWdvMWdBT1l3NzdSNFpXTXA3MnZWYzlPbmVxY3Jpdm1LeERaRE9ZOXVOUFV6QytjUlBXbVBTV0NrSHRWdEVpRHFMWTg0ejhEOUlaazkxS2o3ZGFYaGUwZm0yeExVR0dndjZEVklQd2FBZlNXM3pYcHp1ajNISmkyU2FYSENJa0lDUWhXMklDK0lUbFVZY1dVWVFPdWVzTlFXd1RDOEdEVmtSdmVFVE0vb1phZW4xOTcvL3BjZ1VlWWp0SDd2SzIrcHFFOGFnbmRhUGRsR0dFRC8xT0ZvNzgzTm1jTnVXYmI2UXlsWG1zOU5tdTdwaW03R3VFU0RBbWpZSWlvUWE2em9KcEJWSUZaQUdySlRJK1VGWnBTUWtGMWRIejFMdkhXMkhTR0FxZ2UzaUNkMy8vdXpWcjJ2OHA5YldmS1huL1pYOFVmQ3oxcndwNTMzQzJQaUhvckM1d3RRWmpTTWxSeG9FbHhEYVJGUTJ3U2pCdUgwU0tVVWxrcWRVWk1ZWEtiQ0JqSC80WENrTmpleXMyZmRZdGdxQUhDOTRsNks4bFZpSUp2SjZhSU96bUYyOGxoRDRVemFJQ3dyREUrRlBDb1hHTUpLVG5aYUpDSkFxc05uR2YxQWQ1RDBrU2lPd3V6ZC8vZkI4cldxTkVjRUl2QnFYSkh2cFdoVTRrcy92SUVPWE9Ja2FVN3dqWnFhTWdDRENsOUdibkRxd0lWYWhCTWpoYW1YNktpVmNTODhaSml2ZTdFRHdHemYxRlZlNWNBRlRvbVlIMjd6MTBZV20rMzBSWXNaZ004bndWMTI2S2ZockZSQ1licE1rakNqUVdBZHpqTnhZV1EwWkM3ZzB5TDloSi84dmt0ZCtkUEdSYitYR1dBaGwvZWFqaHRDQ2h4U3Q1RUkwVko4alhYbzc2V29UNStia1FqaG13NVRPTUVKNkNLWWRoQmlCZUFnSjlDSmtTdThtcGcxZDNxOVVDT0IyV2hLZkJuY2lHMFJDQUtCMW54ZlJlTTRMTWowNXBsTHJtTVNnSVhGdEM1WndWbXQwcDVnYWcxQ05MV3ZiMm1EWE9KSmtia0lPS1ZpeWVvNkFKU2Nhck05U29ycjhvVFo0aUJiSEoyaUduZU1aczJuTDRxQThsMzZOek1EVHhkTW1XbTlzNHVHUFFFc1Q1Zm1EaHRNcTAzRExTdnZaUXdKcDBTcVo4K0Yxa08veEJUenB4Z1RjVkhicjBzODVyOGJ6c2tXcEZwaFNPVUl6NXJ2cWVpTmJZbElROTVnY0FCVUdEWUhOd1VWRGhjbDlJcWRycVlaR2dwZ0NzQ2FTQ2RsbzFQSnFPSzN0aTUzV2xja21zallnUlNKRGljaEVyWFJZNTVnVTMvZ3h2ek80emZmZS94amovanA1NGM5SHlpSzY0N1V1b3RPazA5VDBHd1JXUHhheWJRaDlxZ2VGVTNEOVlXeVhzWUdaeS9yT3dpWUNySy9PbnpOQ3hNaVNsd3p5cmk2aWJRV01wMU5SRVhteVNZeko3MzNPL3R6Znh1a0pIQ0Evdi9wOTFZL2U4TWZQUWY4cW43dExETHRqeWc2UWY3VzBoSk54QUhNUFZVUUhBRDFHTDNqR2hoVmdQd1FnWHFxUVVvRm1mRm5uZGQ2T1crL2QvK3FNcCtqdzFTZ2VvS0RTRThGWVZOdytqNHZIMVlJSlJDZ21JOUZ5UjN5UlQ5aVNnQjBPVUhSQ2ZJM1pjNkpQcVFQODR6K0dlZm41bW5yZVJSZjFtVk9vbnVHelRZYlpxUVphVTR6MjR6ekhtazQyYlVWTlRuWDVydTNzUWNTWVdZSEZ3dHAwUzdhbThqVVFycXBrT0oyMUNidmVQT2ZtOENsTU1BY3U5elhUcXNibkNmSVp2UmRSZTJNZExEb0JQbWZqUXJrSHVoeFhaRTBoNVdCdUlKTlFnVk02UzdDNWxnQmdBclNiQlBRa0NYZm10V2w0cERyVEc0T1lTaGh6M2h2NUV4aFQ2N0w3MndpVXdjeU9IbWgxa2J3b0NRazhOZFRab3VpbXJLL2RjN0t3UFZRVVpxWEk0cE9rSS8rREVhNGdPcDBJV1hBalNxVjJFV3dqVENBQzBZZmVwb0E5S0JLRjlLSU1hUGcxWi9ydnMvZXc1Q2dlT0J5WExaZUVtRXIzZVpCcEQ2OXZ1dUx0eVpEckFZVU16RWRzMndHMVNWL3J2VTR6M3ZaOVhCUmY3RG9CUGxJaENzTkh3bVFKd2o2a2JPaWZ3SUVnQ2tBYmhKbXdGb3lBV3hhLys3SGZ3dUh1dlhxUjlkMVZ5RUJtR0d6Q1IxS25KVDEzRU5JVGdsbEdWS28zQXhReDB5SW96MTI5VGV1WmJXY3pSOHJMc2NVcFlORko4aVBUeFFCS3dCQ0FhQkxGeUY2bXNrQmhQWHFOcE9UZzZVbGs3LzQ4dGN2dUhKNUU5eUtCS1VVOE16cVNrUFBZUzhkZFJ4QzFrOTV4ais5WHVvQVlPMEZiMzlkSVVkTExvZXZqeXlLbnJxS1RwV1BTLzk1TkVTQWhRVmdsUjRBR01JenJNR0JBRlB1SUxScXJjK3N0eXBVc1ZNWXJRV1FLQTdFMlM3SG4zclNmUjhEeFFHK00yRGpVbWp0dVo2cmwyamRvWE50QzJmMTY4bS8xNVVLQ1V4TTg3MVFsZGIwcjA1WE5PVlQ1U2U2TUF0ajlNODNESktybkRFNml5VFgxcjlTbU9tc2tEVEMxMjNDdEdVSWxqS2NPS1h4c0YwN2xwaVFDSE5mL3ZuYXZkUFN1VGE0MzZ0RHdIVG95dmxUUyt1cnpsWTdTY3FSU1J6NUMwOTcrdXJWbENJVG9EZ3NMZXJ2VnZraGp2Y2JCanQ0M1NLYktWVitrekI2T2tFK3p3aTN1SFh2NHBSa3VKRURWaS9UNEFFT3hIcDlHVHc0QURKNUdYeXhTQ1kwdnpXbkhHeGhvODBnSktoWm5MOXQ1OVlqVHhoeVFCNDBxZWRYdFJrU3BrZzIvc2YvY3FhSGdSZ1NhWnFmTEd0UmJYZjYzeTA4cGF3QUZscVp4R1Y5cVh6bm5DdG9GT1VURkZtWlNIQTQzNDVBN3JJN0ZwR2UvWnVBQWRwREhhWTlXTFJYUjFRRGkxcURvSUd3b2JHL2ZhOG43N043YlpvUEFNWGo4Sy9yeDM5RWhsV3ZJRUVVVk53LzJoUUI5UldQclFhRDErWmllZWE1NmVlZW5iR3FGbFdadGlPdFJnSUxyQjB6SjE5TFBtVlpBaGRBTDUxRmRyaklBS2loZ2s2U2I3Z09aN2dIb0ZRZ3JVQlNGRFFJVEU3OURJUitUak9US3hDZGJmN3NjWFk1Ly8zcW1pSUFVRWZkbnIrL3c3L0hndzlVNkJBRVZKV2ROVGhiaFFMcTRTdTNuM0IrZDdZbks3dEZ2V25qalhrZkU2Q1licXRwSS9YZlZvQ1VzZ0N3RXhTZFo1WUFGSndrSHhScGtYNWprWUZxZ1BTVE5BaE95RHd6b0FaaDZVZUo3Ykg4b1h2MXJmVjVRd0VTbUVxZVZHNU91a25Gb1ZDNVZpVTVKT3hmSWx6OG9vUzlqVU42U3J1dUptS1ppK3IzaDdFR2VPRU1XVDFpYzZkM1FCaEF0MFJkN1RZeWNsZFJQS3FvUmdDUS9rbE9rajl6ajRVLy95bytsd1I1NzVjRUFLQ2JzT3dKN0FDVUoxTU5sUjUxcUVlbTE0OTJEd0lVMDczbUxIcmxXNHMrR1RwV1pwNjBkbmE2aFJYZ1I3ZmY3czJaQnRlTkpFMThwRFBZMWdBb0JQc3I2Lzk3a2krY0pjVUZYeWd2Z05qckYwV1dGN1E1elVmYWxqVWtDR3gwRm01SXFsVVdwSld2cUxHQ0pjMThyYkFOSU51T09Ndm16L2thdkg2d0RDV3dBTnkxMkhycXpnTktzMlZPb3JTdGJVbXFLblpYYTh3R2kwQTkvTDQ3akZvK3FtZldPVytNeTAzOVBoS1lKdTNsY2VlZ3JNbWhmS1ZVaTNXYUltRmh3Wkg1K1REeVJUd1FMVUlXQVlEbkpBUnZFQVJvRW5wYzFlMWFkcTdsaFAxZWZkald4YUtVQVJRSExZNnZmZnNyVTI3V2c3YktraWFSUFdNblhPWGdSVzlZZTVUa29acy91dnpxOFVNT0h6SnJaMjNEcWlraE1iQURscWVYTmtwYThUSk8wQ1RrZUkwaUo0Q0hCdUhFU0RMYkJVbVFTU0pqTlUwUVJRUmU4bVFDNVN0RVdOSWl3M0NuekRNdFhOYVhIUHh1UzVkU0F0Q0ljcS91N3o3QWZyeHVVOFZCWGxOSUQrd3A5K3A3UGZhV2pmeWgzQmFKOEo0UDNQM1ZJS1F2QWFpejlzaHFldGp4SU93a1NXT1RKTTJ2V1lTWHpMUHh6QkpQakl4QVlBVWpLVXc1S3dBQXBteHpFNkN0Sk5wdWU0TDBkc0JrdUFrSlRBTzM2dnp5M3YvSytwdkZOMjNNTHFScDExYXNzOHUxNUpObDBqM2pyYUxlME5vWXhkRTZPNExUUEtPUVFhN3NoaWtMWUdySEY1bWlMVHNwTWxVT2dUNEYyeXN3TlFnQU5vVWFJTUJrd2dxMFV0MzFVZnVoZDUveEI4c0JvRGlHSEZodHpMMm9CNnpTOVIybWJUYUZOS0huc0U3bjdaOTZ6dHMzSHl1TEdDU0tCY2o0VVRzd1lMV25POXFYTnpKZXM4aGFoTW4weEVneTYzc0FYOEx4TnpheVoxcUg5WjdrWWN0UHhCZ1dRSHRuZnZqR0kvbzJTcjdEWEN4Y0h2V3d6ZEVoOFhvbEFmTmdwd2V0UDZ4dksrZmtPay9Pblp6REE3N3B3ZlFFQVc2Q3NEOGZDUUlQQmVUTG5HWXVlNEtoZWtJWVhuRlZvOGNQUktMNHczRmxmNjByL3l5UW1IWXNVclNSSXNEeTNVajBzSmJtUVFxcW9lbFNWUnlmRjBvUmp0UG10RGsybHRrWGZjMmlaVjBVd3NMbHhFZ3kya21jamVkUDV3VGRJYmRQdE5TRTV5UXM2SzVjVUhDWWgxKytPNFJ0cEtLQlRIVGNaT05SSS9PcGErbVVLUmY5YzFkVHlFL0dObFgyMEc1MTIyREZmT2oyVis0NzlHTHE2b3huWlZ5dlBjMkFOTDVhMC9GRjNDQVlBM0phNURzS3VOMjJMQnlETTZGTUVRNUlnMkRrZ05CaDU5VWw3OHNINUE5Q29sUXR0S2ZXUTg5bnhUbWRwd1duZWZpRXpMNjBPcEF4QkRQUEZNYjFCMEF6WFVvZldmVGRiYzdzTkZ4V0dsS1d2dlNsTC8za2wyTHNaNDZ2VXpRMC9xTXhZb053V3VRMm5TM1JkeXNBbXdhSGYxckpjV2tRckxhUUtxdzZ0Nk94b25pVGRmTDVLd0RGa2FvLzh2RDVGKzZjZi9qTmdhN0RJV1NMRUpXMjNULzV2ZHZxaXpYZk02R1ltc2Jha1BWcWRDeXlJV1BjRy9McEhZZzYvbEtTeFVGdGdoZDRIZ3RLK3NLWDlmZUorV2M4YTMvcW9NNERmdHpsazJJVUNVYkhJZUhra1Y0RkF3QnZ5d0EvSGdrQXVEZmtGYUUzcyttQ3NJa1dDa0RUcmdaQmFyNkoxREpDRml4WmE3MDN5TmFSd05IUUZMZ3Vyd3Rjc2VSOTZybW5idVJsajR3M21hN1RKYXl4Umk1VERqWHJ6dmF5S1Q5UVpHOGgzUFVxL2h0NnBYNUVxbkdsYnl1VmdKK1RkWkg4eEtXeWEwYktOcUE0REh5UWZHTDEvdWlNNVJwR0RlK2V2cXlRYm1UZlFMTEhsYXdPdUJIT1l5SDR3SHZaZzBUcXUzZUFGMENOMk1lTEdrWkhadGV2cVFIWHp4andTTmJDTGdBZk1rNjkxclZSbjlVNU9kOTI3UGtGL2FhOEhFUkdkczE3UXE4V1hLKzFnekQwYWc4VGlSdGJqSUREYXVzcnhFR3VHZGQ1VlRhM3JVMTROUktZRFc3eWo1UFNHVXQvS3hPbGRiN21MWHk2bFNhU0RpQWpuQm9FVk52L3FnamdiY0tEUk9ZYWpXbVNJTGdOdUptRU5VQnVBL3dmZnVzUDA2NzVmU1dnMk52KzEvdXhlOHUzcHRtd3F0VUpKODZkYUt4VHdNc3hTTzZwS0pQY2hIQ0xaWi9CcFVsNG1NaDNGQWlXK2psUnRSa0p3TXk1NGkrODRWZGRtZC95NUtHQUZVQzFyY2JLK2V4ajhsMGdZK3JPSUtXYnJUVW00QUF5YWo4RHkvbVZjNTdUMk0va2k1TTNaTSsrK0lORUx0WFJwNDFIQUFwcjU2eFBQbGVSaUVJNkUwblZBYzlyNThicFFBcUpZcEpObmpDZUY4VDhKSUpUYWNqa01BRUJCUURkc09lNHNEd081SGZTR1dXY0FZaHdVaXJsT0NtSHVySVhnaXZNZlJnQXBzbHMzaVg5MW5IRTZGMS81dVQ5MkN1QW50Uk5teHBDQnd6V2lWVHZ0UVBaSDRmVUE4aXhIMDlVOUd4RUY0S0pJNlE2TzN4aG13bkRmRlRhZnFmMGk4MWhKRERYbWxzUHovWjRkTDIzbDNaOG1JYzVpWU8wLytpVEppR3MvZGhUdFZBUW5odXlFc1R4MFFIaytFbFkyOGhQcVBaNzVOeUZiQlExWlZUN3NWMDAyd21LdktlY3MyREtTbnBPUWxnUlpmTERxeTBTeFF5Z21HTGprSlN0L24xNTRuSXpDanpxYjV2V2syQ3ltYlBUWklJWFd6bDdVSU1vWDVSNmZ1NVp4cHZOQjVFdm5jaStnYXpVODl5ejZNMVc2bS9QbnRveW1xenAzV216YUh5Tm9vaGVXY0dpcnBNVWRzL3NlNHZ5Kzd4ZDFpejZYcEkvM1NkMUhwbXZsYTVIaEZpd3Bha3NIZHZGTFNzQUZwamVyaFZvbjdMTWJVSW5VbSs1S2VzbXdHcGFPd2lkeUZNV2FXSkdmS1VHNVd2Vzk1THB4K3lkWERVKzVWM216ME1DaDZrblNOMW5RcEhqazlPdVRFZ0pVMU9Ed2hSNU1qVlV4T3I1SmRZSTFEaTZRYzNmdVZLdkI1QXZWbHZJSmdIVjFBMTFqNnpVVjFodHlxd2l2elM5VWYzYUxGSTd1bWlFMGVXTkFIQlA1eW5WUmJ2WDl1eGg5cEp5LzBCQU1RUHNNYnRtMWQ1Y1A5ZWdXMDQvdnVYMDB6MUkrNmhvVCtBR2t1QUVGcWNHSVVpYjhraVFQUzZ1QW9EOXRxbVRpNHZkZjNpLzZsVWdZYTVwSCtqcEt3ZjkybE5zMjdGdEoya24ybHNGY0g1dUU3Z1hEYVZKa0RTekFFMUNKM0krRnJsMklkZE81RW1MRXZVcklnS3U2MW9pR3V0Smp6UnJXVnNPSTFGTTFlblZGbjk5UWxmcjVHa1JQdFNBbVdWL012V0RDekNuR1Z2M1ZhWkpXRmFrNTNSWEJrQ3ZMNUllQ0RMOVlHTTNlUktrQmgxeGNVMnZ5NS9UWTZmeXI5dEkrbE1BWC9Gby9lOXVjdmRGNy9hSzgyZ1d2UjM0Y0FQQlFRY0p1SUVhQkRRNC92aVFQd3g1V3B0dGh4SVRIeHFzbG5wcnVTQ0JhckIzNnR4NHJxMFhqWnNMRzhRZHFOZWpDSWdWbmJLSGhiU1RJSWwxbEJHaXB0UWE4K202ZmpDYzY0QmlhdExqMDlxcXQzdURkb3Fmc2NYS2pITWU4NFNMMHUycWFSTWo2MTIwRWFaVzk0U29PQS93cHp6NXRlNWxEd0xaVjlzVFRvQ2t1NGFpRjNIb1djdHFjS2d1NGZmeklJQVQ5bWY3OU5yOXl6ZlBjcHJXakMrRnVzMEc0Q243ZE9VcTFpS2d3Wm11UGtYaHRVRjRTTWdlbVBJSmtHOTY1eDhyVzJ6VzFFRDBrY0FNWTVMUmIrUjhhVVVyQ1lOMjhCTUJoVzlyRURoQ0lmUWpXSnk0RUFBUHVaTHpuY053aEt3UERIazVCZktGbHRwaGlvdHN6NzFoSEFMS200clZOZHdqMXp4UldJcWJUanZhYVhHa0JtcHEyajl6Y3llQ0ZnR0FBdEltbUdabGV4akkvbVRJSFQwSEtuK09OV1FOZ0FhMFk4R3c4N3BzZld3R09qZ1poQS9DNmRVQThsQUlQdllBK2RPRnVJdzkwS0NGTlZacklmV0JJRDg1RlRJWkxoOGVpVVJ4ak0zZVRuNzRhK0JubmZWdUpDRlFQNE1oemhLR1hWSUJDMjROUXFFbVFXeHFFUWgwZnBUSUo0Rjltd0wyMUg5dk5Gb09iT3A3WnVVcjFvRHM4blNacnJ3R21HTzBLa3VEUUdvVmNXVXl1SVNWSS9hY1I0bk1Ld0hGQWxzY3lOUDVvNDRSK0dRcXNPYWVCSXJoVEE2UVU2V1NBUEpEQkI4TDB1TkZMbjRObUdDbmp4cE5TMmY1UkVzWlpHd1FnUVE4ZXd1Y01LTkpvSE9EZ0lic01TUHYydjVUTGpUUDV2U1l2dm8yN1VOSHlhUG5zRjRyUWdHb2Z5ckxDdW9Wb2ZDVlY0RGNuZ29XcVVBb05ycUZOVDVLSk9hQzEvLy9GdysvcnlySjBPNlMzL3F0cDNMMW9GOGJrL2hFdUFTMU5lVGJISEFoVENYa216eVY2TFFuY05rVGdsNGVLekplUjNtRlhFa2dPOElwaWRMWWh3RlJ1ZkJWbXdTbjI3WFNUVG9JWEdBanVJVExZMFlHbUM4MW5aV2RnWjQrVnNiSGszRFdKTXJJMC9VbGExSmhTSklwcTAzNXlTWE5iTE5OV1JuNWtTSXZnTkUzdmxWaGFOMU1YUVRvY1FUcVJPb2pSWDRqVWY5VUdkQWdNT1hDeUJvZ2FXWVhGaDY0TEhXNENVTVFDdDBhaEt4QmtPYVRJYWY3SzZKRHlKVzhoZVErMkZJbWhyMGdZK0RDbWtORjVubHhhR1lvVEs4M3FLRko0RExadkZUWTZaQWE3NjJJR3NqWWhkd1RERDJEaG0vTk14S2VnY2xtVTZTR25nV1lHd1M2TlFrQTZDWFBhVWJEb0duRHBQbFV5R2JSZk85RjNvRjhKZ0E9JyBcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCI8aW1wb3J0IG5hbWU9XCJjYXJkX3RpdGxlXCIgc3JjPVwiLi9jb21tb24vY29tcG9uZW50L2NhcmRfdGl0bGUvY2FyZF90aXRsZS51eFwiPjwvaW1wb3J0PlxyXG48aW1wb3J0IG5hbWU9XCJjYXJkX2JvdHRvbV8zXCIgc3JjPVwiLi9jb21tb24vY29tcG9uZW50L2NhcmRfYm90dG9tXzMvY2FyZF9ib3R0b21fMy51eFwiPjwvaW1wb3J0PlxyXG48dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXhjaGFuZ2VfY2FyZF9ib3hcIiB3aWRnZXRpZD1cIjk1NjBjMjI2LTEyMzEtNGJkMS05MWY3LTBiMzdmMjNhY2VjYlwiPlxyXG4gICAgICAgIDxjYXJkX3RpdGxlIHRpdGxlPVwie3skdCgnbWVzc2FnZS50aXRsZScpfX1cIj48L2NhcmRfdGl0bGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbmN5X2NvbnRlbnRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8YmxvY2sgZm9yPVwie3tyb3cxfX1cIj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbmN5X2l0ZW1fYm94XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgd2lkdGg6IDUwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjdXJyZW5jeV9uYW1lXCI+e3skaXRlbS5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleDogMTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImN1cnJlbmN5X2RlbHRhcyB7eyRpdGVtLmNvbG9yfX1cIj57eyRpdGVtLmRlbHRhc190ZXh0fX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY3VycmVuY3lfdmFsdWUge3skaXRlbS5jb2xvcn19XCI+e3skaXRlbS5kYXRhMX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9ibG9jaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cclxuICAgICAgICAgICAgICAgIDxibG9jayBmb3I9XCJ7e3JvdzJ9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdG9ja3NfaXRlbV9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0b2NrX2l0ZW1fbmFtZV9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic3RvY2tfaXRlbV9uYW1lXCI+e3skaXRlbS5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RvY2tfaXRlbV9kYXRhX2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzdG9ja19pdGVtX3ZhbHVlIHt7JGl0ZW0uY29sb3J9fVwiPnt7JGl0ZW0uZGF0YTF9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic3RvY2tfaXRlbV9kZWx0YXMge3skaXRlbS5jb2xvcn19XCI+e3skaXRlbS5kYXRhMn19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzdG9ja19pdGVtX2RlbHRhcyB7eyRpdGVtLmNvbG9yfX1cIj57eyRpdGVtLmRhdGEzfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9ibG9jaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGNhcmRfYm90dG9tXzMgYnV0dG9uLWFycmF5PVwie3skdCgnbWVzc2FnZS5idXR0b25BcnJheScpfX1cIj48L2NhcmRfYm90dG9tXzM+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIGxhbmc9XCJzYXNzXCI+XHJcblx0QGltcG9ydCBcIi4uL2NvbW1vbi9jc3MvYmFzaWMuc2Nzc1wiO1xyXG4gICAgQGltcG9ydCBcIi4vY29tbW9uL2Nzcy9iYXNpYy5zY3NzXCI7XHJcblxyXG4gICAgLmV4Y2hhbmdlX2NhcmRfYm94IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmc6IGRwQ29udmVydCgwKSBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luSG9yaXpvbnRhbEwpIGRwQ29udmVydCgwKSBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luSG9yaXpvbnRhbEwpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluX2NvbnRlbnQge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9IFxyXG5cclxuICAgIC5jdXJyZW5jeV9jb250ZW50X2JveCB7XHJcbiAgICAgICAgcGFkZGluZzogZHBDb252ZXJ0KCRlbGVtZW50c01hcmdpblZlcnRpY2FsTCkgZHBDb252ZXJ0KDApIGRwQ29udmVydCgkZWxlbWVudHNNYXJnaW5WZXJ0aWNhbEwpIGRwQ29udmVydCgwKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmN1cnJlbmN5X2l0ZW1fYm94IHtcclxuICAgICAgICBtYXJnaW46IGRwQ29udmVydCgwKSBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luSG9yaXpvbnRhbFMpIGRwQ29udmVydCgwKSBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luSG9yaXpvbnRhbFMpO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ODk4OyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGRwQ29udmVydCg0KTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IGRwQ29udmVydCgxKTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM5ODk4OTg7XHJcbiAgICAgICAgcGFkZGluZzogZHBDb252ZXJ0KDgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJyZW5jeV9uYW1lIHtcclxuICAgICAgICBAaW5jbHVkZSB0ZXh0U2l6ZUNhcmRCb2R5MztcclxuICAgICAgICBjb2xvcjogJHRleHRDb2xvclByaW1hcnk7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuY3VycmVuY3lfdmFsdWUge1xyXG4gICAgICAgIEBpbmNsdWRlIHRleHRTaXplQ2FyZEJvZHkyO1xyXG4gICAgICAgIGZsZXg6IDI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1cnJlbmN5X2RlbHRhcyB7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dFNpemVDYXJkQnJhbmQ7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2tzX2l0ZW1fYm94IHtcclxuICAgICAgICBtYXJnaW46IGRwQ29udmVydCgwKSBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luSG9yaXpvbnRhbFMpIGRwQ29udmVydCgwKSBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luSG9yaXpvbnRhbFMpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9ja19pdGVtX25hbWVfYm94IHtcclxuICAgICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2tfaXRlbV9kYXRhX2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDY2LjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9ja19pdGVtX25hbWUge1xyXG4gICAgICAgIEBpbmNsdWRlIHRleHRTaXplQ2FyZEJvZHkzO1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dENvbG9yUHJpbWFyeTtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9ja19pdGVtX3ZhbHVlIHtcclxuICAgICAgICBAaW5jbHVkZSB0ZXh0U2l6ZUNhcmRCb2R5MztcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvY2tfaXRlbV9kZWx0YXMge1xyXG4gICAgICAgIEBpbmNsdWRlIHRleHRTaXplQ2FyZEJvZHkzO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luSG9yaXpvbnRhbE0pO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaGFyZXNfY29sb3JfZ3JlZW4ge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaGFyZXNfY29sb3JfcmVkIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yNztcclxuICAgIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgZmV0Y2ggZnJvbSAnQHN5c3RlbS5mZXRjaCdcclxuICAgIGltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gJ0BzeXN0ZW0uY29uZmlndXJhdGlvbidcclxuICAgIFxyXG4gICAgY29uc3QgbG9jYWxlcyA9IHtcclxuICAgICAgICB6aDogcmVxdWlyZSgnLi9pMThuL3poLmpzJyksXHJcbiAgICAgICAgZW46IHJlcXVpcmUoJy4vaTE4bi9lbi5qcycpLFxyXG4gICAgICAgIHJ1OiByZXF1aXJlKCcuL2kxOG4vcnUuanMnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvY2FsZU9iamVjdCA9IGNvbmZpZ3VyYXRpb24uZ2V0TG9jYWxlKCk7XHJcbiAgICBsZXQgbG9jYWwgPSBsb2NhbGVPYmplY3QubGFuZ3VhZ2U7IFxyXG5cclxuICAgIGNvbnN0ICRpMThuID0gbmV3IEkxOG4oeyBsb2NhbGU6IGxvY2FsLCBtZXNzYWdlczogbG9jYWxlcywgZmFsbGJhY2tMb2NhbGU6ICdydScgfSk7XHJcblxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1ZUQiBJbnZlc3RtZW50cycsXHJcbiAgICAgICAgICAgIGJ1dHRvbkFycmF5OiBbJ01vcmUuLi4nXSxcclxuICAgICAgICAgICAgaTE4bjogJGkxOG4sXHJcbiAgICAgICAgICAgIC8vcm93MTogW3tcIm5hbWVcIjpcIlVTRCAvIFJVQlwiLFwiZGF0YTFcIjpcIjc0LjExXCIsXCJkYXRhMlwiOlwiLTAuMjRcIixcImRhdGEzXCI6XCItMC4zMiVcIixcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfcmVkXCJ9LHtcIm5hbWVcIjpcIkVVUiAvIFJVQlwiLFwiZGF0YTFcIjpcIjkwLjAzXCIsXCJkYXRhMlwiOlwiLTAuMjdcIixcImRhdGEzXCI6XCItMC4zMCVcIixcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfcmVkXCJ9LHtcIm5hbWVcIjpcIkFtYXpvblwiLFwiZGF0YTFcIjpcIjMxOTQuMDJcIixcImRhdGEyXCI6XCItMTEuMDZcIixcImRhdGEzXCI6XCItMC4zNSVcIixcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfcmVkXCJ9XSxcclxuICAgICAgICAgICAgcm93MTogW3tcIm5hbWVcIjpcIlVTRCAvIFJVQlwiLFwiZGF0YTFcIjpcIjc0LjExXCIsXCJkYXRhMlwiOlwiLTAuMjRcIixcImRhdGEzXCI6XCItMC4zMiVcIiwgXCJkZWx0YXNfdGV4dFwiOiBcIi0wLjI0IC0wLjMyJVwiLCBcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfcmVkXCJ9LHtcIm5hbWVcIjpcIkVVUiAvIFJVQlwiLFwiZGF0YTFcIjpcIjkwLjAzXCIsXCJkYXRhMlwiOlwiLTAuMjdcIixcImRhdGEzXCI6XCItMC4zMCVcIiwgXCJkZWx0YXNfdGV4dFwiOiBcIi0wLjI3IC0wLjMwJVwiLCBcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfcmVkXCJ9XSxcclxuICAgICAgICAgICAgcm93MjogW3tcIm5hbWVcIjpcIkFsaWJhYmFcIixcImRhdGExXCI6XCIyNzEuMDBcIixcImRhdGEyXCI6XCI0LjE4XCIsXCJkYXRhM1wiOlwiMS41NyVcIixcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfZ3JlZW5cIn0se1wibmFtZVwiOlwiV2FsdCBEaXNuZXlcIixcImRhdGExXCI6XCIxNTMuODRcIixcImRhdGEyXCI6XCItMC4yOVwiLFwiZGF0YTNcIjpcIi0wLjE5JVwiLFwiY29sb3JcIjpcInNoYXJlc19jb2xvcl9yZWRcIn0se1wibmFtZVwiOlwiVGVzbGFcIixcImRhdGExXCI6XCI1OTAuMjlcIixcImRhdGEyXCI6XCIzLjk0XCIsXCJkYXRhM1wiOlwiMC42NyVcIixcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfZ3JlZW5cIn1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQubXNnTGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZmV0Y2guZmV0Y2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vbW9iaWxlLmJyb2tlci52dGIucnUvbW9iL0FuZHJvaWQvUGFydG5lci9hcGkvaHViLmF4ZC9WVEIvVlRCQnJva2VyL01hcmtldFNlcnZpY2UvSW5zdHJ1bWVudC9MaXN0P2luc3RydW1lbnRzPUVVUlJVQl8xJUUyJTgyJUFDQEVFU19DRVRTJmluc3RydW1lbnRzPVVTRFJVQl8xJEBFRVNfQ0VUUyZpbnN0cnVtZW50cz1BQVBMX1NQQkBTUEJYTSZpbnN0cnVtZW50cz1CQUJBX1NQQkBTUEJYTSZpbnN0cnVtZW50cz1ESVNfU1BCQFNQQlhNJmluc3RydW1lbnRzPUFNWk5fU1BCQFNQQlhNXCIsICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmFzaWMgYUhWaGQyVnBPbkJ1TmpsTmEwNWhhWFZRUzFaTVFtRT1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJVc2VyLUFnZW50XCI6IFwiTW96aWxsYS81LjAgKExpbnV4OyBVOyBBbmRyb2lkIDcuMDsgemgtY247IFNURi1BTDAwIEJ1aWxkL0hVQVdFSVNURi1BTDAwKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKVZlcnNpb24vNC4wIENocm9tZS8zNy4wLjAuMCBNUVFCcm93c2VyLzcuOSBNb2JpbGUgU2FmYXJpLzUzNy4zNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdC1MYW5ndWFnZVwiOiBcInpoLUNOLGVuLVVTO3E9MC44LGVuO3E9MC42XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkgIHsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5zdCA9IHJlc3VsdC5kYXRhLmluc3RydW1lbnRzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yb3cxID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBpbnN0W2ldLm1hcmtldERhdGEuY2hhbmdlID49IDAgPyAnc2hhcmVzX2NvbG9yX2dyZWVuJyA6ICdzaGFyZXNfY29sb3JfcmVkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBpbnN0W2ldLm5hbWUuc2hvcnQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhMSc6IGluc3RbaV0ubWFya2V0RGF0YS5sYXN0LnRvRml4ZWQoMiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhMic6IGluc3RbaV0ubWFya2V0RGF0YS5jaGFuZ2UudG9GaXhlZCgyKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEzJzogaW5zdFtpXS5tYXJrZXREYXRhLmNoYW5nZVAudG9GaXhlZCgyKSArICclJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RlbHRhc190ZXh0JzogaW5zdFtpXS5tYXJrZXREYXRhLmNoYW5nZS50b0ZpeGVkKDIpICsgJyAnICsgaW5zdFtpXS5tYXJrZXREYXRhLmNoYW5nZVAudG9GaXhlZCgyKSArICclJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogY29sb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yb3cxLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yb3cyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDM7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IGluc3RbaV0ubWFya2V0RGF0YS5jaGFuZ2UgPj0gMCA/ICdzaGFyZXNfY29sb3JfZ3JlZW4nIDogJ3NoYXJlc19jb2xvcl9yZWQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IGluc3RbaV0ubmFtZS5zaG9ydCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGExJzogaW5zdFtpXS5tYXJrZXREYXRhLmxhc3QudG9GaXhlZCgyKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEyJzogaW5zdFtpXS5tYXJrZXREYXRhLmNoYW5nZS50b0ZpeGVkKDIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YTMnOiBpbnN0W2ldLm1hcmtldERhdGEuY2hhbmdlUC50b0ZpeGVkKDIpICsgJyUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVsdGFzX3RleHQnOiBpbnN0W2ldLm1hcmtldERhdGEuY2hhbmdlLnRvRml4ZWQoMikgKyAnICcgKyBpbnN0W2ldLm1hcmtldERhdGEuY2hhbmdlUC50b0ZpeGVkKDIpICsgJyUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiBjb2xvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnJvdzIucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihkYXRhLCBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgZmFpbCwgY29kZT1cIiArIGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuPC9zY3JpcHQ+IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS10ZW1wbGF0ZS1sb2FkZXIuanM/dHlwZT1jb21wb25lbnQmZGVwZW5kcz0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY2FyZF9ib3R0b21fMy51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZDpcXFxcV29ya3NwYWNlXFxcXGtpcmlsbC1rb3N0cm92XFxcXFF1aWNrQXBwc1xcXFxFeGNoYW5nZUNhcmRcXFxcY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkXFxcXHNyY1xcXFxzaGFyZXNfdHlwZV8xXFxcXGNvbW1vblxcXFxjb21wb25lbnRcXFxcY2FyZF9ib3R0b21fM1xcXFxjYXJkX2JvdHRvbV8zLnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWQ6XFxcXFdvcmtzcGFjZVxcXFxraXJpbGwta29zdHJvdlxcXFxRdWlja0FwcHNcXFxcRXhjaGFuZ2VDYXJkXFxcXGNvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZFxcXFxzcmNcXFxcc2hhcmVzX3R5cGVfMVxcXFxjb21tb25cXFxcY29tcG9uZW50XFxcXGNhcmRfYm90dG9tXzNcXFxcY2FyZF9ib3R0b21fMy51eCEuL2NhcmRfYm90dG9tXzMudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtY29tcGlsZXJcXFxcanN4LWxvYWRlci5qcyZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtb2JqZWN0LXJlc3Qtc3ByZWFkJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jYXJkX2JvdHRvbV8zLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvY2FyZF9ib3R0b21fMycsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXRlbXBsYXRlLWxvYWRlci5qcz90eXBlPWNvbXBvbmVudCZkZXBlbmRzPSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jYXJkX3RpdGxlLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1kOlxcXFxXb3Jrc3BhY2VcXFxca2lyaWxsLWtvc3Ryb3ZcXFxcUXVpY2tBcHBzXFxcXEV4Y2hhbmdlQ2FyZFxcXFxjb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmRcXFxcc3JjXFxcXHNoYXJlc190eXBlXzFcXFxcY29tbW9uXFxcXGNvbXBvbmVudFxcXFxjYXJkX3RpdGxlXFxcXGNhcmRfdGl0bGUudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZDpcXFxcV29ya3NwYWNlXFxcXGtpcmlsbC1rb3N0cm92XFxcXFF1aWNrQXBwc1xcXFxFeGNoYW5nZUNhcmRcXFxcY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkXFxcXHNyY1xcXFxzaGFyZXNfdHlwZV8xXFxcXGNvbW1vblxcXFxjb21wb25lbnRcXFxcY2FyZF90aXRsZVxcXFxjYXJkX3RpdGxlLnV4IS4vY2FyZF90aXRsZS51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1jb21waWxlclxcXFxqc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NhcmRfdGl0bGUudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9jYXJkX3RpdGxlJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQWhCQTtBQWtCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFuREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxR0E7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakRBO0FBbURBO0FBbEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9