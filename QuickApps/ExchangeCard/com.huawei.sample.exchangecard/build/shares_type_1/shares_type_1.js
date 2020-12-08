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
                        "value": function () {return (this.$item.last)}
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
                            "value": function () {return (this.$item.last)}
                          },
                          "classList": function () {return ['stock_item_value', (this.$item.color)]}
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return (this.$item.change)}
                          },
                          "classList": function () {return ['stock_item_deltas', (this.$item.color)]}
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return (this.$item.changeP)}
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
    buttonArray: []
  },
  buttonClick: function buttonClick(index) {
    if (index === 0) {
      this.deeplink_jump("https://broker.vtb.ru/login/vtbinvest/");
    }
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
      "last": "74.11",
      "change": "-0.24",
      "changeP": "-0.32%",
      "deltas_text": "-0.24 -0.32%",
      "color": "shares_color_red"
    }, {
      "name": "EUR / RUB",
      "last": "90.03",
      "change": "-0.27",
      "changeP": "-0.30%",
      "deltas_text": "-0.27 -0.30%",
      "color": "shares_color_red"
    }],
    row2: [{
      "name": "Alibaba",
      "last": "271.00",
      "change": "4.18",
      "changeP": "1.57%",
      "color": "shares_color_green"
    }, {
      "name": "Walt Disney",
      "last": "153.84",
      "change": "-0.29",
      "changeP": "-0.19%",
      "color": "shares_color_red"
    }, {
      "name": "Tesla",
      "last": "590.29",
      "change": "3.94",
      "changeP": "0.67%",
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
            'last': inst[i].marketData.last.toFixed(2),
            'change': inst[i].marketData.change.toFixed(2),
            'changeP': inst[i].marketData.changeP.toFixed(2) + '%',
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
            'last': inst[i].marketData.last.toFixed(2),
            'change': inst[i].marketData.change.toFixed(2),
            'changeP': inst[i].marketData.changeP.toFixed(2) + '%',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXHNoYXJlc190eXBlXzFcXHNoYXJlc190eXBlXzEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9pMThuL2VuLmpzIiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL2kxOG4vemguanMiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9zaGFyZXNfdHlwZV8xLnV4P2M4ZjQiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9jb21tb24vY29tcG9uZW50L2NhcmRfYm90dG9tXzMvY2FyZF9ib3R0b21fMy51eD8wMTAxIiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvY29tbW9uL2NvbXBvbmVudC9jYXJkX3RpdGxlL2NhcmRfdGl0bGUudXg/NzczYyIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL3NoYXJlc190eXBlXzEudXg/NTFlZiIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL3NoYXJlc190eXBlXzEudXg/Zjk0OSIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3R0b21fMy9jYXJkX2JvdHRvbV8zLnV4Pzc0MjkiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9jb21tb24vY29tcG9uZW50L2NhcmRfdGl0bGUvY2FyZF90aXRsZS51eD85M2M4Iiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvY29tbW9uL2NvbXBvbmVudC9jYXJkX2JvdHRvbV8zL2NhcmRfYm90dG9tXzMudXgiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9jb21tb24vY29tcG9uZW50L2NhcmRfdGl0bGUvY2FyZF90aXRsZS51eCIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9FeGNoYW5nZUNhcmQvY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkL3NyYy9zaGFyZXNfdHlwZV8xL3NoYXJlc190eXBlXzEudXgiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvRXhjaGFuZ2VDYXJkL2NvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZC9zcmMvc2hhcmVzX3R5cGVfMS9jb21tb24vY29tcG9uZW50L2NhcmRfYm90dG9tXzMvY2FyZF9ib3R0b21fMy51eD9jZWMzIiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvY29tbW9uL2NvbXBvbmVudC9jYXJkX3RpdGxlL2NhcmRfdGl0bGUudXg/M2U0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi8uLi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0V4Y2hhbmdlQ2FyZC9jb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmQvc3JjL3NoYXJlc190eXBlXzEvc2hhcmVzX3R5cGVfMS51eFwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tZXNzYWdlID0gdm9pZCAwO1xudmFyIG1lc3NhZ2UgPSB7XG4gIHRpdGxlOiAnVlRCIEludmVzdG1lbnRzJyxcbiAgYnV0dG9uQXJyYXk6IFsnTW9yZS4uLiddXG59O1xuZXhwb3J0cy5tZXNzYWdlID0gbWVzc2FnZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWVzc2FnZSA9IHZvaWQgMDtcbnZhciBtZXNzYWdlID0ge1xuICB0aXRsZTogJ1ZUQiDQmNC90LLQtdGB0YLQuNGG0LjQuCcsXG4gIGJ1dHRvbkFycmF5OiBbJ9Cf0L7Qu9C90YvQuSDRgdC/0LjRgdC+0LouLi4nXVxufTtcbmV4cG9ydHMubWVzc2FnZSA9IG1lc3NhZ2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1lc3NhZ2UgPSB2b2lkIDA7XG52YXIgbWVzc2FnZSA9IHtcbiAgdGl0bGU6ICfogqHnpagnLFxuICBidXR0b25BcnJheTogWyfmn6XnnIvoh6rpgIknXVxufTtcbmV4cG9ydHMubWVzc2FnZSA9IG1lc3NhZ2U7IiwicmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbW1vbi9jb21wb25lbnQvY2FyZF90aXRsZS9jYXJkX3RpdGxlLnV4P25hbWU9Y2FyZF90aXRsZVwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbW1vbi9jb21wb25lbnQvY2FyZF9ib3R0b21fMy9jYXJkX2JvdHRvbV8zLnV4P25hbWU9Y2FyZF9ib3R0b21fM1wiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS10ZW1wbGF0ZS1sb2FkZXIuanM/ZGVwZW5kcz1jYXJkX3RpdGxlLGNhcmRfYm90dG9tXzMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vc2hhcmVzX3R5cGVfMS51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZDpcXFxcV29ya3NwYWNlXFxcXGtpcmlsbC1rb3N0cm92XFxcXFF1aWNrQXBwc1xcXFxFeGNoYW5nZUNhcmRcXFxcY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkXFxcXHNyY1xcXFxzaGFyZXNfdHlwZV8xXFxcXHNoYXJlc190eXBlXzEudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZDpcXFxcV29ya3NwYWNlXFxcXGtpcmlsbC1rb3N0cm92XFxcXFF1aWNrQXBwc1xcXFxFeGNoYW5nZUNhcmRcXFxcY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkXFxcXHNyY1xcXFxzaGFyZXNfdHlwZV8xXFxcXHNoYXJlc190eXBlXzEudXghLi9zaGFyZXNfdHlwZV8xLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vc2hhcmVzX3R5cGVfMS51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3NoYXJlc190eXBlXzEnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L3NoYXJlc190eXBlXzEnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi42LjItU3RhYmxlLjMwMid9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jYXJkYm90dG9tM19ib3hcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLmNhcmRib3R0b20zX2J1dHRvblwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdERkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjkuMTY2NjdweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiXG4gIH0sXG4gIFwiLmNhcmRib3R0b20zX2J1dHRvbk1hcmdpblwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY2FyZHRpdGxlX2JveFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4My4zMzMzM3B4XCJcbiAgfSxcbiAgXCIuY2FyZHRpdGxlX3RpdGxlX2ltZ1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMy4zMzMzM3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE2LjY2NjY3cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE2LjY2NjY3cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOC4zMzMzM3B4XCJcbiAgfSxcbiAgXCIuY2FyZHRpdGxlX3RpdGxlXCI6IHtcbiAgICBcImxpbmVzXCI6IDEsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuZXhjaGFuZ2VfY2FyZF9ib3hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzMuMzMzMzNweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMy4zMzMzM3B4XCJcbiAgfSxcbiAgXCIubWFpbl9jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jdXJyZW5jeV9jb250ZW50X2JveFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCJcbiAgfSxcbiAgXCIuY3VycmVuY3lfaXRlbV9ib3hcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjguMzMzMzNweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiOC4zMzMzM3B4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjMzMzMzcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMi4wODMzM3B4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMi4wODMzM3B4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjIuMDgzMzNweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMi4wODMzM3B4XCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiM5ODk4OThcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjOTg5ODk4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiM5ODk4OThcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiM5ODk4OThcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNi42NjY2N3B4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTYuNjY2NjdweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNi42NjY2N3B4XCJcbiAgfSxcbiAgXCIuY3VycmVuY3lfbmFtZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI5LjE2NjY3cHhcIixcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjkpXCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCIuY3VycmVuY3lfdmFsdWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMy4zMzMzM3B4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCIsXG4gICAgXCJmbGV4XCI6IDIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwiLmN1cnJlbmN5X2RlbHRhc1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIi5zdG9ja3NfaXRlbV9ib3hcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjguMzMzMzNweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiOC4zMzMzM3B4XCJcbiAgfSxcbiAgXCIuc3RvY2tfaXRlbV9uYW1lX2JveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMzLjMlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuc3RvY2tfaXRlbV9kYXRhX2JveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY2LjclXCJcbiAgfSxcbiAgXCIuc3RvY2tfaXRlbV9uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjkuMTY2NjdweFwiLFxuICAgIFwiY29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuOSlcIixcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIi5zdG9ja19pdGVtX3ZhbHVlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjkuMTY2NjdweFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcIndpZHRoXCI6IFwiMzMuMyVcIlxuICB9LFxuICBcIi5zdG9ja19pdGVtX2RlbHRhc1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI5LjE2NjY3cHhcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMzLjMlXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTYuNjY2NjdweFwiXG4gIH0sXG4gIFwiLnNoYXJlc19jb2xvcl9ncmVlblwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0MUJBNDFcIlxuICB9LFxuICBcIi5zaGFyZXNfY29sb3JfcmVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZBMkEyRFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7XG4gICAgXCJ3aWRnZXRpZFwiOiBcIjk1NjBjMjI2LTEyMzEtNGJkMS05MWY3LTBiMzdmMjNhY2VjYlwiXG4gIH0sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImV4Y2hhbmdlX2NhcmRfYm94XCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FyZF90aXRsZVwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLnRpdGxlJykpfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibWFpbl9jb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImN1cnJlbmN5X2NvbnRlbnRfYm94XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMucm93MSl9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW5jeV9pdGVtX2JveFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCI1MCVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbmN5X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhcIjogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJGl0ZW0uZGVsdGFzX3RleHQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydjdXJyZW5jeV9kZWx0YXMnLCAodGhpcy4kaXRlbS5jb2xvcildfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiRpdGVtLmxhc3QpfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2N1cnJlbmN5X3ZhbHVlJywgKHRoaXMuJGl0ZW0uY29sb3IpXX1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnJvdzIpfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3RvY2tzX2l0ZW1fYm94XCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b2NrX2l0ZW1fbmFtZV9ib3hcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b2NrX2l0ZW1fbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9ja19pdGVtX2RhdGFfYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiRpdGVtLmxhc3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnc3RvY2tfaXRlbV92YWx1ZScsICh0aGlzLiRpdGVtLmNvbG9yKV19XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiRpdGVtLmNoYW5nZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydzdG9ja19pdGVtX2RlbHRhcycsICh0aGlzLiRpdGVtLmNvbG9yKV19XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiRpdGVtLmNoYW5nZVApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnc3RvY2tfaXRlbV9kZWx0YXMnLCAodGhpcy4kaXRlbS5jb2xvcildfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY2FyZF9ib3R0b21fM1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJidXR0b25BcnJheVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiR0KCdtZXNzYWdlLmJ1dHRvbkFycmF5JykpfVxuICAgICAgfVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjYXJkYm90dG9tM19ib3hcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5idXR0b25BcnJheSl9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5idXR0b25BcnJheVt0aGlzLiRpZHhdKX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kaWR4PT09MCl9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2FyZGJvdHRvbTNfYnV0dG9uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmJ1dHRvbkNsaWNrKHRoaXMuJGlkeCxldnQpfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLmJ1dHRvbkFycmF5W3RoaXMuJGlkeF0pfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICghKHRoaXMuJGlkeD09PTApKX0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjYXJkYm90dG9tM19idXR0b25cIixcbiAgICAgICAgICAgIFwiY2FyZGJvdHRvbTNfYnV0dG9uTWFyZ2luXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmJ1dHRvbkNsaWNrKHRoaXMuJGlkeCxldnQpfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjYXJkdGl0bGVfYm94XCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMubG9nb1VybCl9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNhcmR0aXRsZV90aXRsZV9pbWdcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnRpdGxlKX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY2FyZHRpdGxlX3RpdGxlXCJcbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZGJvdHRvbTNfYm94XCI+XHJcbiAgICAgICAgPGJsb2NrIGZvcj1cImJ1dHRvbkFycmF5XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGlmPVwiJGlkeCA9PT0gMFwiIGNsYXNzPVwiY2FyZGJvdHRvbTNfYnV0dG9uXCIgb25jbGljaz1cImJ1dHRvbkNsaWNrKCRpZHgpXCI+e3tidXR0b25BcnJheVskaWR4XX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBlbHNlIGNsYXNzPVwiY2FyZGJvdHRvbTNfYnV0dG9uIGNhcmRib3R0b20zX2J1dHRvbk1hcmdpblwiIG9uY2xpY2s9XCJidXR0b25DbGljaygkaWR4KVwiPnt7YnV0dG9uQXJyYXlbJGlkeF19fTwvdGV4dD5cclxuICAgICAgICA8L2Jsb2NrPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZSBsYW5nPVwic2Fzc1wiPlxyXG4gICAgQGltcG9ydCBcIi4uLy4uL2Nzcy9iYXNpYy5zY3NzXCI7XHJcblxyXG4gICAgLmNhcmRib3R0b20zX2JveHtcclxuICAgICAgICBoZWlnaHQ6IGRwQ29udmVydCg0OCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRib3R0b20zX2J1dHRvbntcclxuICAgICAgICBjb2xvcjogJGNvbG9yQWNjZW50O1xyXG4gICAgICAgIEBpbmNsdWRlIHRleHRTaXplQ2FyZEJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZGJvdHRvbTNfYnV0dG9uTWFyZ2lue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBkcENvbnZlcnQoMjQpO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIjsgLy9vciB2YXIgcm91dGVyID0gcmVxdWlyZShcIkBzeXN0ZW0ucm91dGVyXCIpXHJcbiAgICBpbXBvcnQgcGtnIGZyb20gXCJAc3lzdGVtLnBhY2thZ2VcIjsgLy9vciB2YXIgcGtnID0gcmVxdWlyZShcIkBzeXN0ZW0ucGFja2FnZVwiKVxyXG4gICAgaW1wb3J0IGFwcCBmcm9tIFwiQHN5c3RlbS5hcHBcIjsgLy9vciB2YXIgYXBwID0gcmVxdWlyZShcIkBzeXN0ZW0uYXBwXCIpXHJcbiAgICBjb25zdCBtYWluQXBwUGFja2FnZU5hbWUgPSBcImNvbS52dGIuaW52ZXN0bWVudHNcIjtcclxuXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICAnYnV0dG9uQXJyYXknXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkFycmF5OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVlcGxpbmtfanVtcChcImh0dHBzOi8vYnJva2VyLnZ0Yi5ydS9sb2dpbi92dGJpbnZlc3QvXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZXBsaW5rX2p1bXA6IGZ1bmN0aW9uIChkZWVwbGlua191cmkpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBhcHAgb2YgYSBjb3JyZWN0IHZlcnNpb24gaGFzIGJlZW4gaW5zdGFsbGVkLiBPdGhlcndpc2UsIHRoZSBzeXN0ZW0gZ3VpZGVzIHRoZSB1c2VyIHRvIHRoZSBhcHAgZGV0YWlscyBwYWdlIG9uIEhVQVdFSSBBcHBHYWxsZXJ5LlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXBwLmdldFBhY2thZ2VJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICBwYWNrYWdlTmFtZTogbWFpbkFwcFBhY2thZ2VOYW1lLCAvLyBUYXJnZXQgYXBwIHBhY2thZ2UgbmFtZS5cclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYXBwIGhhcyBiZWVuIGluc3RhbGxlZCwgYnV0IHRoZSB2ZXJzaW9uIGlzIGluY29ycmVjdC4gVGhlIHN5c3RlbSBndWlkZXMgdGhlIHVzZXIgdG8gSFVBV0VJIEFwcEdhbGxlcnkgZm9yIGluc3RhbGxhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudmVyc2lvbkNvZGUgPCBzZWxmLmRlZXBsaW5rRW5hYmxlVmVyc2lvbkNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiBcImFwcG1hcmtldDovL2RldGFpbHM/XCIgKyBtYWluQXBwUGFja2FnZU5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlYxLiBUaGUgYXBwIGhhcyBiZWVuIGluc3RhbGxlZCwgYnV0IHRoZSB2ZXJzaW9uIGlzIGluY29ycmVjdC4gRm9yd2FyZGluZyB1c2VyIHRvIEhVQVdFSSBBcHBHYWxsZXJ5IGZvciBpbnN0YWxsYXRpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6IGRlZXBsaW5rX3VyaSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVjEuIFRoZSBhcHAgaGFzIGJlZW4gaW5zdGFsbGVkLCB2ZXJzaW9uIGlzIGNvcnJlY3QuIEV4ZWN1dGVkIGRlZXBsaW5rXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyb3Jtc2csIGVycm9yY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogXCJhcHBtYXJrZXQ6Ly9kZXRhaWxzP1wiICsgbWFpbkFwcFBhY2thZ2VOYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlYxLiBUaGUgYXBwIGhhcyBub3QgYmVlbiBpbnN0YWxsZWQuIEZvcndhcmRpbmcgdXNlciB0byBIVUFXRUkgQXBwR2FsbGVyeSBmb3IgaW5zdGFsbGF0aW9uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgZm9sbG93aW5nIGxvZ2ljIHdoZW4gdGhlIGVuZ2luZSB2ZXJzaW9uIGlzIGVhcmxpZXIgdGhhbiAxMDYwLlxyXG4gICAgICAgICAgICAgICAgcGtnLmhhc0luc3RhbGxlZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFja2FnZTogbWFpbkFwcFBhY2thZ2VOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiBkZWVwbGlua191cmkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVjEuIFRoZSBhcHAgaGFzIGJlZW4gaW5zdGFsbGVkLCB2ZXJzaW9uIGlzIGNvcnJlY3QuIEV4ZWN1dGVkIGRlZXBsaW5rXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIHN1Y2Nlc3M6IFwiICsgZGF0YS5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGRhdGEsIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6IFwiYXBwbWFya2V0Oi8vZGV0YWlscz9pZD1cIiArIG1haW5BcHBQYWNrYWdlTmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWMS4gVGhlIGFwcCBoYXMgbm90IGJlZW4gaW5zdGFsbGVkLiBGb3J3YXJkaW5nIHVzZXIgdG8gSFVBV0VJIEFwcEdhbGxlcnkgZm9yIGluc3RhbGxhdGlvbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmR0aXRsZV9ib3hcIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJjYXJkdGl0bGVfdGl0bGVfaW1nXCIgc3JjPSd7e2xvZ29Vcmx9fSc+PC9pbWFnZT5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmR0aXRsZV90aXRsZVwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgbGFuZz1cInNhc3NcIj5cclxuICAgIEBpbXBvcnQgXCIuLi8uLi9jc3MvYmFzaWMuc2Nzc1wiO1xyXG5cclxuICAgIC5jYXJkdGl0bGVfYm94e1xyXG4gICAgICAgIGhlaWdodDogZHBDb252ZXJ0KDQwKTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHRpdGxlX3RpdGxlX2ltZ3tcclxuICAgICAgICBtYXJnaW46IGRwQ29udmVydCgxNikgZHBDb252ZXJ0KCRlbGVtZW50c01hcmdpbkhvcml6b250YWxNKSBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luVmVydGljYWxMKSBkcENvbnZlcnQoMCk7XHJcbiAgICAgICAgQGluY2x1ZGUgaWNvbkNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmR0aXRsZV90aXRsZXtcclxuICAgICAgICBsaW5lczogMTtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBjb2xvcjogJHRleHRDb2xvclByaW1hcnk7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dFNpemVDYXJkVGl0bGU7XHJcbiAgICAgICAgbWFyZ2luOiBkcENvbnZlcnQoMTYpIGRwQ29udmVydCg0OCkgZHBDb252ZXJ0KCRlbGVtZW50c01hcmdpblZlcnRpY2FsTCkgZHBDb252ZXJ0KDApOyBcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICAgJ3RpdGxlJywnbG9nb1VybCdcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUSVRMRScsXHJcbiAgICAgICAgICAgIGxvZ29Vcmw6ICdkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSb0kxQUFCWFJVSlFWbEE0VEhVMUFBQXZzOEFzQUFtSGJkdElFalRldlUvWi9nditrdXNnb3Y4VFVNeVdRMnZLZitrUUp3RWJLa3NMeFVhQm5yWW5LR3RkTFJ1bGhWWURRSkh6ZzI2citNNW9MdGF6aE51N1k0T0VWdGlTOE5CVEJVam9KS2VtSGdtREpvd2FocHhhd0cwa3laRVV6d2VEeHFDRjQzVDh0K3NOZVBIMW5TWG5nZU5JdGxXbHYzLzhvSEdRZnhTRXdKS2x1eFRzU0xaVksvMkFBUFluZnRZOTkrR2FmelR1N2w3Vi93bkFVb0dGRGhZdDUydXJWK2J4emc0UXgzT2VnR1FKVHhJS2VYd0NrTWZIRUVoTCt5ZFRBRHVib0pwRFVBQWV2WXNuam5EeGRLbGZZQ1dOQjJPem9SZjlxcFhxM3pRUXdCOUFYN3dDNkt0WElQU3cyOHJlQUNDKzAzYzJtaFdBSitZSkFRQkNHYlltdjlzeGhIZ1dTTCszdEpVT20wMVFBSklFMC8vazlCd083MFpEZ2laaE93eVZCQkFZR3EvaVpPNXlqMGd0TmFUcWhEUU5FRmlyaHlFbEFJaVJBUHExSGZSME1oRlkrVmt2bmd3SFBaa0FLWXY2Y1JxRzB6TUZqQk1BQ1JBV1FrTmxaMXFrZ25IQ0Z5Z0tLSExTcStGa3FOcE8zMzFYaTZJbUZBVlFBQkNXK3JQckY2RnZKMTIvakpWRjFYK3lEOWRZbjBKS0VrSUlCVUlJTlNRZ2hKQVFtNFJnSllWcGtRSTJUZEJaMGhrSjJPTkxIUXphTnBMazhJZDkrOTRkZ0lpWWdQNmVjcVFSbFRJYUc1WWxnNTZzTkRCeEpOb1VPVkRwTUk0NEErMFMyalZ1YUliUUxwMUVKOUdaM28yMy8vL1ZrdlBjTzd3N3M3dXp1MTRlN1lxWkdSNm1sWVZtWm1abSsyRm1abVptWmdZeExXaTFKRnlRbG5kNDV0N3plbm52SGUxMDhFazNkVGVxd0xUcFAvekhwNFYvYXJWZ2JNSHBkUTFzbi9URS8xRHBObUEzZ0gyYzlEcFVLb1UzblJha1BnempCakFkaFUrNnFkaytMVGhXNmlxY0tqVERLRlFvaFk1UEhjWUdPSFhJTUU5Nnd4T2JLcmlaTzNBTmJHOE5tMnJNZnZnNURSbFVnK01IS3JpcGJndlQwRlBGcEE3MWNqaG1LN1ZrVzVzaXlkSDMvV1p1SHBqTW1VZk16TklHV0ROdGdGbERiVUJha0VZOVl1NGVNWGN4SkVkVU1McTcyZjliMnJidG1DVHB1dS92QzZiZEd0djJENWlWYmR0VzI3MGEyOXA1TmI5aWRyYVpxTTVBUmtaOEVkOTdCd1Eza2hSSnVYem9PTVlQYU0yQTJiVnQyZG5yZEQ5NTc3MzNMZ05GSkt3Y1BQVW1GbjJDb3BaNzc3MWI2L3Z1bW5PdWRkYmUrK0tmTmhWVkpKMUQwNEtGWndvVjE2QVBMemhwNFpYQ3lhVHptSFRTUncrZHRHTzRtZXdZOUlsdDJ2VFFwcFdITW5rcDNFY0hIYkFWdzhoREtWZzhVN2lQTGxoVWl1RkdvVGg4QW92MnBROE9LcVdnbUY0S2c5NkdvcDNicGhkZVBHbFR1YlZ0cTlxeTl2bmQzZjNITmRZT3RCY0doWkJSQkgyUUVUcFU0TzY4cytUV3R1MWF6VnJuNFUwRXJaTFNBQzE2cEVpNU4yY0ZSRW1TRkN1RGU5WnljSUo4d0IrOC92SFB4djl0Rk8rM043dndoYi84MWIydmYyM2h5OFpqQXdCMkFJV3BOUWhxMmtWb2NEcGw3d05JN0xJLzlldjlLNDlOajI3aGpqWnhKeHZhb04ybCtVNFFiMnZrbGU2QzZjN3VkRlB0ZEJQaUpnM1lwWGw1dnRrYWVkNFRadU0xOHFtUXNZbDhhRVhUdk1PNy9MOHpBKzR3dmdvMlkwZVF5U0RLQWphWllCQk5NNUt3SGlZOGFxVEJCM3NGcVlMdE9WY3NDZ2RBZDlFMGJhUkJnTVRLVWJzSUxkbUprTmNXOHFFVmJaaXRLWkRIaEJuOWhLdzcwTkNyMkFRVHRmR01HUXprRnNHbUxzTEprQnR0SUI5YVVmcktGV1Q5aklSSk5NSkRBY0NpUms2NENRQzFVRUJkaEtic05FZ3FvQWJ5b1JXcGdObEhDWElickd6TUNZV3BoR0pQVG9VOGxGQVdkVWdvUVJpMkJtOFFiblFhSkxsUUliblJneXQ2c3lMdHV1RXpRTk1tUTBsMzRUazVhVm9sV0kzYWs4SldTalhPWjRMdUNYcmVPT25SSStPOGFjeDh5eGFHMEl1UmczeTQ3UWtBZ0QzaHRvRUdSMjZDbHV6eEkyM0hibWw1SGpZNEFvQk5BZ0FOQXM4QTRBUWdkUkZNQVFDUEhxbFhTQXFVb0NWVzJuc1NWRXc5Wk8yZlRGSElRLzk4Zms2S3ZlejhIdUY5QUtuRXFkOVNBY0J1bXFlNDJwUkR0UTBtdGRuVVdBMXFjOWpGUFVIU2VKbGlBZkQwcUpFM08wZUVhZU1DQW9hd01Fd2hMVUtlRGhEQUFoYkdvMGZTblV0TUpBYkZzZ1pUWE5UVUF0WUYyaURvc2k0K1h0UUFYZGJRanhkOUgwQUtJZVhsZ2pmSURrM1BhVFdBOW9RNVZnTUFxR2w4eVdnWlJyNEFvRWVOdkx6SmhqQ01MRnlJQlU0TWdRY0lsd0FCYmlUZ0VnUXM3QU5ZV1BBK2dId0trVytHaXVBd21vcEJRUTRqdlVuRFVCTEdOb0hUOE5Ja1BHNms5d2JieWczazZvUU00RVpPRldRQzNDQ3NCd2pJYW52aytNaVJJYVJabndIQUFBWHdPZ1JZay9BK2dMd1dPdDlzYlczR0ZsWnJtMEl4YlhBQWhzMmhzTmhUUWNMOCtKRzNoV1BNTlpXd0J0ak1XWmU3c2tGUVNmTjdoQmxzS2x3b2xhY1NESHZaNDBkR2lpRjhHZjVWWkxEbUZ6Sm9neUMzQmdHWlZjQ0dTc2lzeUpQQngwZU92T3RDWXNuVnlVMWpCV0lGcUtjS0lOYm1mWmhHb01acUdsMFI5WDBBQ2NCZ01Tb2N4QVhrRFFLQzdPRWo0Q0E0WUtSdEFoNDlFcG5pRTVqY1diQ3NvVEN1ZFUrb29NTFhDaUMrU0NoTUJTenhMcnRoOW9TTFBuWmtZT2VkcStVSk81aHZOdnFpS0dUcXN0UTlJU29LRnJXcFNXQWIrNkNGSGpzU2FzdmJyREVxd3lEVFJXRWp1Sk1BRSswVklEQU1NM3JGNDBkdXpTQktVTDhvWUZBQzNLRFVZd1NBSGtwdW96YzRDcGlpUVhqVXlJdk93YkRNb1ZDWXdaQTBoNExVSUpnR0ZCYUFrYm14RDBHWDdKRWp5Y0ppVzRLd2tvdHBBZ1JUaXlBc0U2RjBFVnpBaGtlUFhKRFlKbVdRcE5XQ3E5QU5RMXF4d0VlNWdTN1FPUFZqWVZCSkc3U25YaVdVc0VjKzljY2hHNXhPWkVmUlEwS2U1elRvc0d2VUZIT0F3R01sVXcrNGpDNEM0V1h4SXhDS3VBTTNDR29BV0RPUTlhRG5RNGc2K1YxckNyQVA4S2ltVGFSZk5TdjhpQ0tuNDVCUjdUVElqYktlbCtSYldyY0JrOEFVc0tkaWt3Q20wb0NUSWRxVGhkUUFFQlVVelRuSU1GeUw4cmZxeHl2RW0zck9qV1B0aGpjL05RbFpXZUthRHhWMXlnNFRaRm50Sk1pS0hIcUxHb1RGRWRYakJPSEdXdDhNTTkyS0JtZ1YwQy9HRU5HOFE1N3FDSWtpMXRzVkVBQnVvMGRNVGNKUUtVODRxdWlLNlRCeVIwTWxPeUZTQWsyRUwzL01VSmc2aU1VVU1HUURLNFNpTXF0YjhnSE5XeGlxOGE1SnVXcytoR0h5OTVDbXBrblVCMGFlVEUzVUNYeE1rUjZGVENkRXZwZ3kzYllFeFYwV0FBREQ2QTA3NEdFSFVhaWNHaHFqbTdsc0RhaFRmVEZhYlRaaFB3QnNkRFFBRFR0d1JKRmhQQTVwcDBKV3pCRzc5aGtBT0t0aDVOSWdRTk16Z1FqY1lhSitpU2hwNXJ3Rnl0SXJhdG9nbkx6bGJSQ1FSTzBaTnptdTZEaGtPaWx5NWdVTlJWVEJMZk5NOFBUTWNzdGtCVDFyR2MyOTdQbm9lV1ZiSks0c3RVY0ZmSm5UakI3OERDZXdvSmNHSVIxUnBIUU04bnc2NU13aCt0Zm5aRlZRN0tud3ZGakY5U1ZQVkJLQk9MVy9xQ0tXUmhIRWYxekZZUUxrZzVrZ24rS2NYd2pCbzZ1d0lKU3dMbzI5Qjc1OGw0bGZpYmxLT0Z4MExISjVGUmM3RmZJTjhyQWxIWWNQc1N0RzJTWEF4OUk4azBMV29PMnVrMUk5QWNqMGpBMGlpSU5Nazg4Z09Nakx1b0ZhbW9kd0dhWEgrTzJQOWw1L1J0SlBuZ3VoOXc3VjZlUnNSVWdMbjl5aHptcTZTUHV4QTltUEhRbHkvZ2ZMMUtvZ29PL0t6em1xRTZjRGVkWlBtb1JORi9BOGc2WEFiaW9BQVBDVmZXNEFGS1FkQ29BY2lBY0laRUVFU0xsODhneklCY0xDZ0FDTStTenVTQlZERDRTVjY0d2hOR1VOUWlmU1RLRkZuRXdOaDJTQkUyTlB6NmxvYXlYSXNtRWJZRURKVmJlMFFlQkdnTGltQVRKSUIxNldzQ2pHR3IveVJnR3F0aWNZQU5PNmJaNGpBbXhRUHZjWjl2YWZxcHFqVXF5NTV0cm5iUnZ6eWM4WFdwYmxBUk9DaUZUTG9wUm5heHRSZTZvZVNYdU5iV1NzOFJmemhhQjlXWlRXZHF4UjBaQlZxekExbklUdDU1bnlLVWQ2Vkp0ZDAzVlQ3T3hWM0pLaVdHV1F2Tm5nZ0c5K2RNRjBZWlRSbERNbUV4bWl6eGhHRnhvQW5Kd0F0QWxPTFFMa2pqQ1dwZVRYOEdUNCszLzVUV3QzUHl2blcyUHB1SmFBdjkvK2plNnYrbjlXWGc1dU1oYlZTRmt0VllLb3FiOHMzNGpqTXNaVWdLYUxEeExnUExUTm5oaHNodmx1QytYREFEUWQ2SktGVFhVKzkzaDRQQzN3aStVcEt6aFB2YkRQcHVEL0hMbG41VjFTL25nVEFMNWpHRlk1ajc0bnlDSjR6VXJOZmNvOTFjd2s1anlaZVhKTThyOS9WbDMrdkZ3ZVZrV0UrYUZNYWk5dWROUXNMYmVpN2M1Q1VtSDBBYzNUejNPWnlmcUNVbXBrMmNtSEZ0ZFU2ZHMzK01rblJ4S0oxc2swQzlBckVGODB3UXd3c0xCVnE2MVYySnBDTkVJajZmSkVjMWRnVFBUVVducWduNzh6WXRjdTRNTXNCUTg2T3IvL0RtVmFsb3FvYUFteU9aUERRN3ZIYkgxRXUrbnFrb3RyZXRqOVYrNTVPQzgzekFvQVdKZU9WWWxKVEFRQVlLamthR3BRQ1VHTnNpVVVvV2pteEVGTW9SaklIMnlVTGc3d1VhMDhkbjk2cDkyMkhFVTNGeTlQcVh0NGErRTJ3L1FPUC8xSU9vK0tJOFRPVmJrU0dMQVp1elFURndCcFJWTEJza2FNZnM2akloRnhNL2ZzV1k0WmlCTVc0MDZDZnFZakI5VERqOFozMmNxQTBDU2F1NXVubzh0a1oxWHc0cE9PYU04LzZNZWJ5Z3pNTmMxQW1wSFd0SjVwUmFxYUxDNkVYVmZ1bXNLeER2dTNMQ3dzMS9tZndpK3Jma3g3QXlEdFJUaGtFS0QvMi9HdUhiNWJoaXRML0hScm5SNmdLZDlPNXI1aDlZOStDZ1hING1rS2dqLzZ1RjkzbyszQUZVZG9BQUQ3LzdseFR3cWJMU2ZJYmJqSnNnWW53SWtXME1SblFHODdLUm9jTUNpR3ZOTGx2LzQ4L1VJTWNBQWdKd2NkSnF6L0NQNmgxQjRWWDdaMXVzc3F0V3JIL0lQQ0RGQ0Zwc0hzbEVGeEx4VnB2M2srdlRabTdrSzI4NldZY1l0cStxNTJDeklCNEMwMGZYU3FPZDh6N3U5OTRFL2FuZlE1V3VnNlM3WFMwK1Q4K29JSi8wNVJ2VGkvQ0F3S3hES1JOd2kzcmY4dDNxNHlxSk5ORUkrVnJBNTVBc1QvenorTjBVSHd4dnBRSndHT3hxdSt3dThwNzV6OEEwT2U5TTVFT3JhN2pWNjRjNWNuRjB1eVhtTmlhaGpzMkxwNHk3eS9zUTNpSUJYUTBNQjA4S2EvdmJHcXNBUGcydll6TUpuNC8zZXYrZmlPQkZRMWRMTWhENzU1MzM3ajBwREFmdFhOang4OUo0YjJnLzExdkszNzR2Wi9Xai9IQWRBaUZXZXM4ZTcvaTJ0QnBkVVUySkUyVmlWcWc4K1JQNU1JMzEvZGdwNEh3UG10WTBBLzk3UHo0QWhySXB2aG9TREl6VlRnUEZ4ZTN0YitMWFk5emxjSGFiVFdYR2JISTU4Ym1ad1pWbVhyakNPSG5WczhkNWVLWFY4dzNPa296VHFieVVtY0hLanNrZitqSUhQY3UrQkF6MXE3WnpVYlhHZmptZTM2WGU5NG9vaCtqYnNNYlRWdTJHUU1OVUN5WjUzVTdscTJITTdQRG5LRStmd2VBVTU1SytEc25vUjdDSk9yR0FzTHVieXlMMlRnUEhEclMwZHVld0p1MUNBQUFMNzB6NkI2WnNsOWMwdHVUY1NJSXJyVkVFc2xYMW1DeEVFSzRXSklSeHhLQ3Q5UnJ1eUpSb2c3bU0vVlFnN0lsSHZwZXJNSTZYS1BMZC95d3hEblBTRTBrU3dNUW94UDlCbXZuR3ZJVUVSWDBGMUo4bTkvOXE5K0dtNEJyM2Z6QmZ6VHhkK1JkZGQ2QmIyYk12U3BQYUZreHcxeUhiN1VsY0FEQUJJSko2ekZFTlBCK2I0dFFrb1RINTZ4OHlUWFNzWFV0V09XQzh2dXlnOEpTWTgyQVd2c2ZpWFdVR3gwenZPWVlGdVNLUWxDUWREdnFLbUFDdjVKL1BVZitpTGNKV0VBRURCd21KQTMrUC8rZ1E0ZjFGeGxsL21zSU9DRDloaXFkTTRRVkt0Q2Yzb3RwV0xXSUtsem5Pa0dKSnlvbCszYWdkbkVSeVpUa1Y1NEtFbDZ5UjFqbWJSMzVPdnpBeGJoOGlRSWVtRXFTU1lCQlNQRzRCa2QzNDhBREk0UGZ0TC9mNy9naTNqZG5jTGZoSCtrcitMZzJERVlMc0FGMUhFMlptcmhnMGhVbVhzeE1tYnpvY1BVQlJMREdkSUlINCt6bTRKbkhHZzBmbHd6ZDJ5cWxwZHI1OGNWMGVFQUdrWCtIV05iUm9aNEtKUVVrbFNjL003NUZ6OXZoSi9tc2MyKzVxU09kQzM5dHdZeStKQVVuN1luWE5HUkNLVGxoOGswMWR2TjFsOUx0aVdBZXFyTmZ1Zjk3ei83UkIrVHRZcmVXWHMrVkI3WTFHWVdmKzdhb3p0NW1rRGtuRTRsaFhKV0pEdStjOFdLRlhtU1habzdrUEJKMUlLY2hZR2VxaVJoWVFDRHZ3cS9VdjhsWG5QYy9jSDNlRnk0NmIxdDRsSzRQVlZ3QXdndXNEcGZPVnYxaHFnSGRQWUxXRWxBTlpDM1B2M0E5MHp3YWtTcVlvMmlkWnZHMXFSZFRLUmxLV0JobUxTbWtUeHo5WERyeVhIbTdHd3VUQlc0RkxJVWt4TGZGb2hPTkRVK2hqZ25ET0V1SkdoTnNNOERITmpwalh3T2dBTnYrK3RQcUg0Rng3OSszYWRuUzVsaXdwY2J5T0ZNUHUvWUR0QWErL1IzRlcyNXo2NVFqWjV0MWJnaHNaY1B0dkdkaHZ5TVE3dUtkdTY3dmpYS29TZWZtVkFZUzJ6TmF1cUg3MXovTmJUbW5PT3JoUVhDckN6UFl2K3gySis5VUtOR211ZVlLNDlEWVZBWGtucEtnYTZEQWZwVUNBQU1lR0ZzNDA4YjRVZGpEOEMwL1hxQWFRZkI2K1pyampKRlREckFBT1dQU3RSdmZkZ2FlYzhIN3NMR2lSRUFpc2R5Y3V1UkJvWkMzRkgwbFRZUFczazNjSWtLVTRQTzFFSy9DclVWYWVxMVVVL2RZdXNEYTY4eGQyNURiWjI3L0xrQUZGMUlqR1UyYUZwaGZab1JITFFpdytyTFAvOVNOVzMwVFRBVmxnWkJHQklDUEdSM0FiSE9vSmIzQnZTSEQyUlFvR3FSQjNGeTkwNDFyRjE4V0x2SXZ2TUJ0YVphMzBUU2V1M2YrR0Uwb0lwRUYyL3RiZDN1NTN2Y2xaMmRvckVmdllXTURzQXN2WkczWEo3R3pLTDltTVNWUCthaWw1RStvUnJFb0xDeDU3VkZVRThHdHN6RUlMY21QbzZSeTJpZkhuYzRPSTNMSy9ZK2NzUmxyMkpqdGZUQ0oreVJsejJTL2x0N05RZ2h3MGVER3E4MEhIa0prbUpxVkJoMGVRWnRMWGNsMVU1a1FMWkFYdzBzZDcwek45OE1ZT0VDQWlBTmNhSG02VmVhT3dodVZnYVdxNUFSTER6aFB3RkhIdWVxRDMwVUp2ZWJrdytLSGNTRldzalN3UXVCT2pLT3ZRTWtEWlo4cHZ2bmpzaC9tWkN5T1JlL1RDWUErYlR6MkZSNWs4WC9kd0FURllBYm5CY3FzS2RlQUFwTHNWcTZ2WC8xWXBIWGVwbVFuWG9jZWN1UmFDN2YrWmdSOVNPbXZVNGR5STVydXdadkZ6SGFUeS9PbDhwTUxSZU5xdVdIOHk5VFNqRDd3Q01jSFFlT2pvWUJEbXB4QUtjdUdSMUFmZ0JFajRkekpZQ1UvMzI3dzd2THM0dktKSEY4SnUybGRYUnNZVGZRc1l6eERUcUszcmJOVldDZXNoUlFCYUJNcTE1cVpPeDJ1ck14d25KU3o3SG5meWtEcWd5WFVNQ0NOS0x3NE9CaGY4bXJzSVRTU1VBb1REZ0txUjEzVHkrUGkxbWJrQ3FseTZVempQMjRKL2VMNytYZjJkZmxKTWRKT25aaVJOSG5qbkh0S0pvNjFCTml1Znl0Vnc3ZlNudUloajZTRVdDZHN0NTF1STJNWVpkVjFUWURWME5samtTUVBMWjhSVHFmVjZUMWsyL3RLbExEakRTZm44K2tCcXpMbXViSU5lNEpXTlB6bVdyRWltVlA2RURPWjdvWnRYTmZmZkx0eTZDWXl2R3lEVXJmblBkZDIxZkUxRmFBblZwYlZSRk1UN29VcExscm4zNDV0NHZTM1BIZHptOFVmN0xoc0U3cjBBM1E3MjB1NVgwdjl3cWhXTXJGVHpZbno3dWI3TFdCbWVvTWRCUDVuOUE1d1hqTEFvcENESGdqdWlBQWpxYmhBS0VsT3dLWjJsTnhXdmNPdUw1QStCSFZ4SDVucWtQRlNuYk1qaWFlMld4M2w3bW1BbC92T0o3RTEwTnNGMzMvOTNkb3dnNmZrSWhXblpMSHhQb2RLbzhlYndFZ2g4K3F4dUN6TkZIbTJQSU4vUVp5QldDS1Ezc3Y4bGdCQUxHU213S3g3Z2xXRzVSdTVDWUMxQjY3cDkzWERsQWQ5VWdiZm5GczdTZHM5NkIrSkpWS3BTd0ZOSGJNTE8yaUVhVnZUN0luQ2lkam11dWcxY0g3ZDNjVkFPcXlXTXhBZTE0c3RKMXZxdlprb0I1Z0NGZ0FkQkhVd0pySjBTQ0FNVFFKaDVDcFFlRFdtSjZMbzBHZU1EN3V6aU54RjVkckRSY1U4anpYd3dEcjRKSFoxQ3JxWWR5ZWpDZmRtQXg3ekdYL01lL2ZROHp5akxYbWVSeEttVVFqSFVQY1ZINHk3cm5mVmhEWTh5YzhjR0ZBN2t5MEQ2aVpJYU5WQzdKSm1TRzZ6UDEwYlJBUTVyNExXWHREbFBhNHNpWEcyelo1K0loYUtJNVNnazU5RW1iRzFReFliT3UyeVJBN2lxanJpTS96N0RPbEpRUDdHZFhhSHEvZkdVZFpHaVZtVGxrNSs4eDJ2czA5ZW55NXlvWkZWczZLcFAwejI4eENIanh1SWtOWVlxV0VQUUY4clpTcU1LNlZyMjNrQzR0NmFIK0taTGJkSkNWUmJ1L2FlUjRVdHlJNGFpVXBrdlp4Mmo5L2IyZ3RxZXJMNSsyaSthdDNXVUpidlJKZnR0aVl1cXFxN3ZER3ArSWtuNXVIeUxEeGhVM24xOXZVaHpnTU52WnFRUVhtU200SUt2eXhhOVlNUEFueW5tQnFUeEJZUFlpTVFlWEQyUEVaTWpTZTMyYTJtVzMxcHZYWCthSzRmV2crbFc1VldGa3BVMXVuVjdTTG9uWWRjR3orTjR4WjVGbGFaRWhjWlJrdC9RYUpqRm1VbWxpMDN6UHBjQ0EvcTBVeTY5OWdTK1Z0dFZBQUlCUkNYUm9FY2xDTkRRSUFxZ2EwWk4zSXNoVDBIV042QUlUTk01YnNzdEpGcXBqTnRWVlJzSTZLUXpSZ1c0Uk4yVjZWOTNxOW84aHl4OGJ4Znk5ZlVzTTVKOFBRK1hYd1R1Tk5BRkFSOHVDQmYrUGRQbWprZjlET2YxdU5aWHdxUE90VUVHem13b09IQW81cmtOdmdMRUJjQXdyaEprQW9BUTNaQVdRTjN2SE5NNElJQVJod2ZXTE01ZkNOSDcrK2VMb1RUM2xvUDJWMVlTY1dJV2RGMTgzVVVlUXFyY2wvLy8zOGs0RlluRVFqUGJkUTFVQzNmdk1EeUZqS05KdjNINngwR3BRRmExZStScmI0bWVJekFET1FvSVdTMmd5WXZVSXVVYk1LRERPWHBibnpBclFzM2NnUGJRWSthODlZektiOS9kTHdFY0VaeFY2YmJyRnpjMzhqSHNSZHFrck5oR00yZVREdEtmQVdoVzJ0dFFLR3NiUG9zOUNhNytINERhZjdTUk1NUVQxbmtPa1NHRzVaMjBDcTJEMHluYXgybE8zQXpHWFhkaUdqV3NTU3pnRDU4ZWViZHBoMEpMTGp5TnV3bXlHVzBFVHRFK040dFlNc2lhZFVvallxbGE2aWN4dnpHK3IyZDYwOUhVU3JvMnorck1WbEwwOS9SSDRDeG8wNkVYb29UQUVuY2xPUU53bklDclFJcGpDMWVoeVM3SWpUaGJqYXVWZzlicmJzbmRteTBURkl2ZnRMeDNLTGRoVGhXMzQ4T2tvZUVZOHJTNldhelVObi9wZ0FmQ2JhODdOTlpWa2p6ejAvQTA0bUxOV2VnWnZFTlVvMWZyWVhXZGJsS0dTOEd4aVB2Z3k4N0RaeGZQaEUvV280T2htaTNUQnRQSC9TZVhuSnhvNmliWWhIbzNrU2ptLzN2MFdmSUlNMDg4YzJNdk96eFdpeGg2ak5TQkJOd0l3MHM0bkNtaHdUYU90dnJaYTdpUEVNMGRTSjNLYVpEV2JIMXY3VWczbmU2MkpuclMyNkRERlJWMkZJcFg4WTI1RTJzWFk4aHM0aUhIMG5ub3FUeXg5L2RyMkhpVG9GdUVEa08xMzUxZ05NUENJQUYwV2NIUTBDZEprZDhqbWhtSWFzTGh3YUJHdkxGRXVMOEczVGQ3TUJmTXlQUkx5amJYbXoyZW1CSXdhRTdMUlY1SkRvTVNMeFN4d1gwdEpSSkw5bThSNGV0eHE1eWVRL3oraHJRQTI1V1BtUmdNU0dBaVBOTmFsQnhZSmFtUXpBYkhqQ1JmZWNHUmEwaTlDRkpPM0xYYm9iNlh0cWpzaXROWDNqb1dreFBqVlh2LzI4elZlV1JWbmx0SXMwZmk0S0ZZbFJBRVhVZWRhRlhVV3EwS25RK2RoWHFXMGxsajg4cHByZjZyU3RxTFc5TTl3Z3FZL0lIeEV0ZjhNSnpvMElLZ09jaDJvQUVNUkIxVmhBTEE0QUxBaWxqV3dSTHJYSGYvbEpDMy8rMEpkdlAyN0VUOEdZallVQllmdDNYRm1vMGpLMlE2K0d5Z082eVNLQlArTHgxWjFtNHpKaEdVcjJSQ3lUQ2dvQ3VxdW91TUdCZDNPRFg1M2xFVmVCQVFHTEUyVWlrb2duV3JJZ1VxVk1IcWd3TDE4ZXB0Q0xsMy9KemsvVG5RSXNQWjdCZnVjQWdDY2QyQWNBWFBZRWVFTjI3aUwwR05HVXdVM2Y4bytvL3RRWC9oa3pnUzlRQW54Z3VhM29DZFA1QkpvczZnQkttTEZUUlExYjRLTUtKZm5HaXE2aWZHVCtSSHRkd1hPQUU0Unh3VkhPaWRsVVB2Q0ZieTV1UGcyVUpBSHIxemNNb3ZaejY0eGxRZDJCUmxSQUtLMXBYb0JxTTIzcFZYeVAwRVF1MmpjSWFaNTNzRXUxLytKb3VZM3Nad1BxWlJhL2xXY3kyOXltaWt6b01Rc0ZERUJXMng0cm15NzZwS0lNMFpVSFRDTlFUWEdkbkVvc1FxWmlrSWZ6enpNbzJ0WVZ4Z2dBOEFIUzhjMzVTSUpUSjZHRDg1MWprVUVNc3Fzb3lqU0Y3R29TdVF3Z2lod29hbWIrVzdzOVA4TUpNRzA3WVpNNEhTQUFIYkREeUg0U0g0NUFYbHJJb0Vsa0craTRvcmJGUkRvQk9XdzBRZENMbmE4Y2t5K29FaXVpVkpCVjdGUTk1THFvVmJxTXpuRVRsM1dCbGxpeGJQQTh0NUNMVklRR3NsQ3Uxb1cwMWFBbFY5eTJYSnRMU3E0VnNZWE0yRUVpRG5saFp4RSticXJYaUJlNXZ1QXFtNFMyeWRoK3dxRGppZzRpUWR0TzRKZ2thV2FhclJyUENWVENub0FwczJaK3RwcWtTYUNIaHR3NDkxSDA1ZzB4dnd3M1lXRUlDOHV5c29BYmpwMnNRSXR3clFDYXRnZUgvS0Y3S1ByZWlXTWt1MDVZWkRMMTY1UmZJcVNHL0hLZGNsMkF0VWtBMTlnZ3NHQ0NQUkFrNVpjZnVvOGlXNm1IWktOdndBbTRQVnVOYUJCNHRtb0VCd0hhSU1BSkFLb1JIZ3B5dUxlaXR4OGdNZlJGUUE0V2dLbUFiZ0tXNE1OTndBMUMyVk5DYVJEQUR3cEpaYmlQb21xZ1lGRFlHZ3d6RzN6RTVja3dzeVFvTGsrd21kR1d5WVFIaEJ3TjkxUFVJekNsTFJIZ0k0QWVBTUZKMjRUQ0kyQitnUEJ3a0twNEEyQzRoNktkZXdiTEJnR2dHS0FBeUlFR2dad2NpTjVCZ0RVSUFJQUhnTXcybHZsYmIvM0gzM2sxd285YjVjY3VjY1Z3K3FMU0MxMHBxckJRUVJEakZVQW9JSGdveThxREExVElyeXNQY0lSQzV6MHl2QVl5bE9DeGlhUXlISWZVZ1ZSbW8vcnA1ZTRPMlpYZEc2UCs1a1l5d2ZUKzdvN0xYUG5Mb0hhVEZJbVE0dGoyZDlJcWV2MzhPd2RPQ1laTUY4YUlIb3I4WklYbjRLYVM1bkJwRURDek5HUk5RamdCTW5RaGp5blNyU0dhaFFzMlhGL2RjL1dMSVhRQmZ2UVJMSGNwTm8xSzZTaThiRm03UG5YWnpCSk9sWitRaUFNbWZ1dHBxSFFqNUJya2RsVVBUcm55Y012UFRqNWt2UTIzUFBwZVZuaDREZVRZSU9pdDRSMXV3ekhJUENzWEpxZGViZDcxOFc5dVhRMlJDb0RKa3ZlYnZzWkl5blpuVjJKblcwV255SGUyUVhZOWlsMnI0S3lBS1dDYVJBRlRVOU9rWW1yQUhqRmxxRUZoOTR6VXpDdjhPZzgxbys3MjRmUXFacks1bjJnWVVrTEJOT1lKMzIrZWJUM1hFV2x4eXFJaG1Ia1BBekM2b1lXTDFSb3NBRlJoYllLNkFYcnZTQ0txd1MzZWdGMm9RZTVTTE41cmV1T28yK2ZqbnpsNjdmTS92bWR6dkkxWnFuZnZ0VWY4cG5PaVFSc3d2ajVoVVk0OUV3aTVVc0d5RWhpNWhvSkZoVXZJazhDamxuZmZSd0lQeGY3Ylhmbmh1N0NYSFk5Y3RMd25heUkvK3I3M3ZFY2hxeXJ0dWwrQWE4Vm0xSzFleGZwbFNDVHIxT1BHT3c5NjVuUHJtSG4zemxyeE9rYWlPeXpvMXV6ckYzWGxleGp3cVdKRTMzZ3F6UUQ2RVdYUkJzRUpKV3B6RS9IaFpxUHhETHdXY3VsRVBoK0pqREo1bW8xY0Y1NlM1Z1czK3E4OStyY2dNQzljMEt3ZnNmazkrNDEvczc3VmQ2a2JDQ2ZyaVViUmFmTGZoWmpTV1dFejJDQ1ROUW5SWmJKT0RiUzVyeFJXdTM5a0tpUWFBc0ZVWlkyR0l3dGtEdVdlZXVPREg0eWdML0hEK2thZnVhWm5iYnJhUEdIUkxwc1l3ek01RUt2Zk5UMVZrQ042SllPQ25IcFVvbjUwY3ZMNEEwU2ZmT1QzaUxSOE1uN1cwcTZQV0phWEVDMjJFRXBFSmJ6TnQvdXYvZ1dWUFQwMzVZUlZtZE1WZlZlR0lXTFpSQUErMmd1Vk5BT3cwVzRqTG5zYVMvUW5YTUs2SjFBL1VXa2c3ZDZRdWsydmJHMmJaOElmNFVva1ZqaWVMOE1wVmExNnFOVzgwWWQ3Ri84Z3RST0UwSzN5ZEVYMUhaSXVsNjF3Q1ZwQ01iV0FncWNHWVVFQm5ncGd1aFNFRWxhRUM1NHVkRzlJUVlBVGlNRHduajBZalBlQ1MyZ0czemVkMHgzMkRhM3RSMXkxLzJUdkZrOTg1Zzk0MHk5MkJ0MlhobEthOVBGUjZIUkYxZ2ZlRWo4RndPTUdleVl0eEhCNzlrU28wdUNzRm1RcW5ZVDdRMW9TWDRmTlB1TzZlMi8yK0Y4dmxVQVdrUnZYZm5ZdFc3dHY3MzRqKzVOcXJZc095blVlLzh4bHpGSzl6cWU5U1gvb0p2K05SRWhMK25SRnU5NWdSaEtMS1dUeVBIcXNCbzJUWnpVbE56VU5MclRucU9sU1d3VEUrMEZxN0V6MmF3OCsxbnMvK3BmWDUrbzhpUnhJWGFueDh5bGtndkhwbTdJTWhWUDgxRngwb2trQmlXeFduYTVvRFV5STJOcjhGdXBrVU5na2h0cE5nRlV5bmcyS051R2VrRHFwdEYxWlVkektCeno0N0swY1NCU1VnbzFnQU9Zdzc3UjRaV01wNzJ2VmM5T25lcWNyaXZtS3hEWkRPWTl1TlBVekMrY1JQV21QU1dDa0h0VnRFaURxTFk4NHo4RDlJWms5MUtqN2RhWGhlMGZtMnhMVUdHZ3Y2RFZJUHdhQWZTVzN6WHB6dWozSEppMlNhWEhDSWtJQ1FoVzJJQytJVGxVWWNXVVlRT3Vlc05RV3dUQzhHRFZrUnZlRVRNL29aYWVuMTk3Ly9wY2dVZVlqdEg3dksyK3BxRThhZ25kYVBkbEdHRUQvMU9Gbzc4M05tY051V2JiNlF5bFhtczlObXU3cGltN0d1RVNEQW1qWUlpb1FhNnpvSnBCVklGWkFHckpUSStVRlpwU1FrRjFkSHoxTHZIVzJIU0dBcWdlM2lDZDMvL3V6VnIydjhwOWJXZktYbi9aWDhVZkN6MXJ3cDUzM0MyUGlIb3JDNXd0UVpqU01sUnhvRWx4RGFSRlEyd1NqQnVIMFNLVVVsa3FkVVpNWVhLYkNCakgvNFhDa05qZXlzMmZkWXRncUFIQzk0bDZLOGxWaUlKdko2YUlPem1GMjhsaEQ0VXphSUN3ckRFK0ZQQ29YR01KS1RuWmFKQ0pBcXNObkdmMUFkNUQwa1NpT3d1emQvL2ZCOHJXcU5FY0VJdkJxWEpIdnBXaFU0a3MvdklFT1hPSWthVTd3alpxYU1nQ0RDbDlHYm5EcXdJVmFoQk1qaGFtWDZLaVZjUzg4WkppdmU3RUR3R3pmMUZWZTVjQUZUb21ZSDI3ejEwWVdtKzMwUllzWmdNOG53VjEyNktmaHJGUkNZYnBNa2pDalFXQWR6ak54WVdRMFpDN2cweUw5aEovOHZrdGQrZFBHUmIrWEdXQWhsL2Vhamh0Q0NoeFN0NUVJMFZKOGpYWG83NldvVDUrYmtRamhtdzVUT01FSjZDS1lkaEJpQmVBZ0o5Q0prU3U4bXBnMWQzcTlVQ09CMldoS2ZCbmNpRzBSQ0FLQjFueGZSZU00TE1qMDVwbExybU1TZ0lYRnRDNVp3Vm10MHA1Z2FnMUNOTFd2YjJtRFhPSkprYmtJT0tWaXllbzZBSlNjYXJNOVNvcnI4b1RaNGlCYkhKMmlHbmVNWnMybkw0cUE4bDM2TnpNRFR4ZE1tV205czR1R1BRRXNUNWZtRGh0TXEwM0RMU3Z2WlF3SnAwU3FaOCtGMWtPL3hCVHpweGdUY1ZIYnIwczg1cjhienNrV3BGcGhTT1VJejVydnFlaU5iWWxJUTk1Z2NBQlVHRFlITndVVkRoY2w5SXFkcnFZWkdncGdDc0NhU0NkbG8xUEpxT0szdGk1M1dsY2ttc2pZZ1JTSkRpY2hFclhSWTU1Z1UzL2d4dnpPNHpmZmUveGpqL2pwNTRjOUh5aUs2NDdVdW90T2swOVQwR3dSV1B4YXliUWg5cWdlRlUzRDlZV3lYc1lHWnkvck93aVlDcksvT256TkN4TWlTbHd6eXJpNmliUVdNcDFOUkVYbXlTWXpKNzMzTy90emZ4dWtKSENBL3YvcDkxWS9lOE1mUFFmOHFuN3RMREx0anlnNlFmN1cwaEpOeEFITVBWVVFIQUQxR0wzakdoaFZnUHdRZ1hxcVFVb0ZtZkZubmRkNk9XKy9kLytxTXArancxU2dlb0tEU0U4RllWTncrajR2SDFZSUpSQ2dtSTlGeVIzeVJUOWlTZ0IwT1VIUkNmSTNaYzZKUHFRUDg0eitHZWZuNW1ucmVSUmYxbVZPb251R3pUWWJacVFaYVU0ejI0enpIbWs0MmJVVk5Ublg1cnUzc1FjU1lXWUhGd3RwMFM3YW04alVRcnFwa09KMjFDYnZlUE9mbThDbE1NQWN1OXpYVHFzYm5DZkladlJkUmUyTWRMRG9CUG1malFya0h1aHhYWkUwaDVXQnVJSk5RZ1ZNNlM3QzVsZ0JnQXJTYkJQUWtDWGZtdFdsNHBEclRHNE9ZU2hoejNodjVFeGhUNjdMNzJ3aVV3Y3lPSG1oMWtid29DUWs4TmRUWm91aW1ySy9kYzdLd1BWUVVacVhJNHBPa0kvK0RFYTRnT3AwSVdYQWpTcVYyRVd3alRDQUMwWWZlcG9BOUtCS0Y5S0lNYVBnMVovcnZzL2V3NUNnZU9CeVhMWmVFbUVyM2VaQnBENjl2dXVMdHlaRHJBWVVNekVkczJ3RzFTVi9ydlU0ejN2WjlYQlJmN0RvQlBsSWhDc05Id21RSndqNmtiT2lmd0lFZ0NrQWJoSm13Rm95QVd4YS8rN0hmd3VIdXZYcVI5ZDFWeUVCbUdHekNSMUtuSlQxM0VOSVRnbGxHVktvM0F4UXgweUlvejEyOVRldVpiV2N6UjhyTHNjVXBZTkZKOGlQVHhRQkt3QkNBYUJMRnlGNm1za0JoUFhxTnBPVGc2VWxrNy80OHRjdnVISjVFOXlLQktVVThNenFTa1BQWVM4ZGRSeEMxazk1eGorOVh1b0FZTzBGYjM5ZElVZExMb2V2anl5S25ycUtUcFdQUy85NU5FU0FoUVZnbFI0QUdNSXpyTUdCQUZQdUlMUnFyYytzdHlwVXNWTVlyUVdRS0E3RTJTN0huM3JTZlI4RHhRRytNMkRqVW1qdHVaNnJsMmpkb1hOdEMyZjE2OG0vMTVVS0NVeE04NzFRbGRiMHIwNVhOT1ZUNVNlNk1BdGo5TTgzREpLcm5ERTZpeVRYMXI5U21PbXNrRFRDMTIzQ3RHVUlsaktjT0tYeHNGMDdscGlRQ0hOZi92bmF2ZFBTdVRhNDM2dER3SFRveXZsVFMrdXJ6bFk3U2NxUlNSejVDMDk3K3VyVmxDSVRvRGdzTGVydlZ2a2hqdmNiQmp0NDNTS2JLVlYra3pCNk9rRSt6d2kzdUhYdjRwUmt1SkVEVmkvVDRBRU94SHA5R1R3NEFESjVHWHl4U0NZMHZ6V25IR3hobzgwZ0pLaFpuTDl0NTlZalR4aHlRQjQwcWVkWHRSa1Nwa2cyL3NmL2NxYUhnUmdTYVpxZkxHdFJiWGY2M3kwOHBhd0FGbHFaeEdWOXFYem5uQ3RvRk9VVEZGbVpTSEE0MzQ1QTdySTdGcEdlL1p1QUFkcERIYVk5V0xSWFIxUURpMXFEb0lHd29iRy9mYThuNzdON2Jab1BBTVhqOEsvcngzOUVobFd2SUVFVVZOdy8yaFFCOVJXUHJRYUQxK1ppZWVhNTZlZWVuYkdxRmxXWnRpT3RSZ0lMckIwekoxOUxQbVZaQWhkQUw1MUZkcmpJQUtpaGdrNlNiN2dPWjdnSG9GUWdyVUJTRkRRSVRFNzlESVIrVGpPVEt4Q2RiZjdzY1hZNS8vM3FtaUlBVUVmZG5yKy93Ny9IZ3c5VTZCQUVWSldkTlRoYmhRTHE0U3UzbjNCK2Q3WW5LN3RGdlduampYa2ZFNkNZYnF0cEkvWGZWb0NVc2dDd0V4U2RaNVlBRkp3a0h4UnBrWDVqa1lGcWdQU1ROQWhPeUR3em9BWmg2VWVKN2JIOG9YdjFyZlY1UXdFU21FcWVWRzVPdWtuRm9WQzVWaVU1Sk94Zklsejhvb1M5alVONlNydXVKbUtaaStyM2g3RUdlT0VNV1QxaWM2ZDNRQmhBdDBSZDdUWXljbGRSUEtxb1JnQ1Eva2xPa2o5emo0VS8veW8rbHdSNTc1Y0VBS0Nic093SjdBQ1VKMU1ObFI1MXFFZW0xNDkyRHdJVTA3M21MSHJsVzRzK0dUcFdacDYwZG5hNmhSWGdSN2ZmN3MyWkJ0ZU5KRTE4cERQWTFnQW9CUHNyNi85N2tpK2NKY1VGWHlndmdOanJGMFdXRjdRNXpVZmFsalVrQ0d4MEZtNUlxbFVXcEpXdnFMR0NKYzE4cmJBTklOdU9PTXZtei9rYXZINndEQ1d3QU55MTJIcnF6Z05LczJWT29yU3RiVW1xS25aWGE4d0dpMEE5L0w0N2pGbytxbWZXT1crTXkwMzlQaEtZSnUzbGNlZWdyTW1oZktWVWkzV2FJbUZod1pINStURHlSVHdRTFVJV0FZRG5KQVJ2RUFSb0VucGMxZTFhZHE3bGhQMWVmZGpXeGFLVUFSUUhMWTZ2ZmZzclUyN1dnN2JLa2lhUlBXTW5YT1hnUlc5WWU1VGtvWnMvdXZ6cThVTU9IekpyWjIzRHFpa2hNYkFEbHFlWE5rcGE4VEpPMENUa2VJMGlKNENIQnVIRVNETGJCVW1RU1NKak5VMFFSUVJlOG1RQzVTdEVXTklpdzNDbnpETXRYTmFYSFB4dVM1ZFNBdENJY3EvdTd6N0Fmcnh1VThWQlhsTklEK3dwOStwN1BmYVdqZnloM0JhSjhKNFAzUDNWSUtRdkFhaXo5c2hxZXRqeElPd2tTV09USk0ydldZU1h6TFB4ekJKUGpJeEFZQVVqS1V3NUt3QUFwbXh6RTZDdEpOcHVlNEwwZHNCa3VBa0pUQU8zNnZ6eTN2L0srcHZGTjIzTUxxUnAxMWFzczh1MTVKTmwwajNqcmFMZTBOb1l4ZEU2TzRMVFBLT1FRYTdzaGlrTFlHckhGNW1pTFRzcE1sVU9nVDRGMnlzd05RZ0FOb1VhSU1Ca3dncTBVdDMxVWZ1aGQ1L3hCOHNCb0RpR0hGaHR6TDJvQjZ6UzlSMm1iVGFGTktIbnNFN243Wjk2enRzM0h5dUxHQ1NLQmNqNFVUc3dZTFduTzlxWE56SmVzOGhhaE1uMHhFZ3k2M3NBWDhMeE56YXlaMXFIOVo3a1ljdFB4QmdXUUh0bmZ2akdJL28yU3I3RFhDeGNIdld3emRFaDhYb2xBZk5ncHdldFA2eHZLK2ZrT2svT25aekRBNzdwd2ZRRUFXNkNzRDhmQ1FJUEJlVExuR1l1ZTRLaGVrSVlYbkZWbzhjUFJLTDR3M0ZsZjYwci95eVFtSFlzVXJTUklzRHkzVWowc0pibVFRcXFvZWxTVlJ5ZkYwb1JqdFBtdERrMmx0a1hmYzJpWlYwVXdzTGx4RWd5MmttY2plZFA1d1RkSWJkUHROU0U1eVFzNks1Y1VIQ1loMSsrTzRSdHBLS0JUSFRjWk9OUkkvT3BhK21VS1JmOWMxZFR5RS9HTmxYMjBHNTEyMkRGZk9qMlYrNDc5R0xxNm94blpWeXZQYzJBTkw1YTAvRkYzQ0FZQTNKYTVEc0t1TjIyTEJ5RE02Rk1FUTVJZzJEa2dOQmg1OVVsNzhzSDVBOUNvbFF0dEtmV1E4OW54VG1kcHdXbmVmaUV6TDYwT3BBeEJEUFBGTWIxQjBBelhVb2ZXZlRkYmM3c05GeFdHbEtXdnZTbEwvM2tsMkxzWjQ2dlV6UTAvcU14WW9Od1d1UTJuUzNSZHlzQW13YUhmMXJKY1drUXJMYVFLcXc2dDZPeG9uaVRkZkw1S3dERmthby84dkQ1Ris2Y2Yvak5nYTdESVdTTEVKVzIzVC81dmR2cWl6WGZNNkdZbXNiYWtQVnFkQ3l5SVdQY0cvTHBIWWc2L2xLU3hVRnRnaGQ0SGd0SytzS1g5ZmVKK1djOGEzL3FvTTREZnR6bGsySVVDVWJISWVIa2tWNEZBd0J2eXdBL0hna0F1RGZrRmFFM3MrbUNzSWtXQ2tEVHJnWkJhcjZKMURKQ0ZpeFphNzAzeU5hUndOSFFGTGd1cnd0Y3NlUjk2cm1uYnVSbGo0dzNtYTdUSmF5eFJpNVREalhyenZheUtUOVFaRzhoM1BVcS9odDZwWDVFcW5HbGJ5dVZnSitUZFpIOHhLV3lhMGJLTnFBNERIeVFmR0wxL3VpTTVScEdEZStldnF5UWJtVGZRTExIbGF3T3VCSE9ZeUg0d0h2WmcwVHF1M2VBRjBDTjJNZUxHa1pIWnRldnFRSFh6eGp3U05iQ0xnQWZNazY5MXJWUm45VTVPZDkyN1BrRi9hYThIRVJHZHMxN1FxOFdYSysxZ3pEMGFnOFRpUnRiaklERGF1c3J4RUd1R2RkNVZUYTNyVTE0TlJLWURXN3lqNVBTR1V0L0t4T2xkYjdtTFh5NmxTYVNEaUFqbkJvRVZOdi9xZ2pnYmNLRFJPWWFqV21TSUxnTnVKbUVOVUJ1QS93ZmZ1c1AwNjc1ZlNXZzJOdisxL3V4ZTh1M3B0bXdxdFVKSjg2ZGFLeFR3TXN4U082cEtKUGNoSENMWlovQnBVbDRtTWgzRkFpVytqbFJ0UmtKd015NTRpKzg0VmRkbWQveTVLR0FGVUMxcmNiSytleGo4bDBnWStyT0lLV2JyVFVtNEFBeWFqOER5L21WYzU3VDJNL2tpNU0zWk0rKytJTkVMdFhScDQxSEFBcHI1NnhQUGxlUmlFSTZFMG5WQWM5cjU4YnBRQXFKWXBKTm5qQ2VGOFQ4SklKVGFjamtNQUVCQlFEZHNPZTRzRHdPNUhmU0dXV2NBWWh3VWlybE9DbUh1cklYZ2l2TWZSZ0Fwc2xzM2lYOTFuSEU2RjEvNXVUOTJDdUFudFJObXhwQ0J3eldpVlR2dFFQWkg0ZlVBOGl4SDA5VTlHeEVGNEtKSTZRNk8zeGhtd25EZkZUYWZxZjBpODFoSkREWG1sc1B6L1o0ZEwyM2wzWjhtSWM1aVlPMC8raVRKaUdzL2RoVHRWQVFuaHV5RXNUeDBRSGsrRWxZMjhoUHFQWjc1TnlGYkJRMVpWVDdzVjAwMndtS3ZLZWNzMkRLU25wT1FsZ1JaZkxEcXkwU3hReWdtR0xqa0pTdC9uMTU0bkl6Q2p6cWI1dldrMkN5bWJQVFpJSVhXemw3VUlNb1g1UjZmdTVaeHB2TkI1RXZuY2krZ2F6VTg5eXo2TTFXNm0vUG50b3ltcXpwM1dtemFIeU5vb2hlV2NHaXJwTVVkcy9zZTR2eSs3eGQxaXo2WHBJLzNTZDFIcG12bGE1SGhGaXdwYWtzSGR2RkxTc0FGcGplcmhWb243TE1iVUluVW0rNUtlc213R3BhT3dpZHlGTVdhV0pHZktVRzVXdlc5NUxweCt5ZFhEVSs1VjNtejBNQ2g2a25TTjFuUXBIams5T3VURWdKVTFPRHdoUjVNalZVeE9yNUpkWUkxRGk2UWMzZnVWS3ZCNUF2Vmx2SUpnSFYxQTExajZ6VVYxaHR5cXdpdnpTOVVmM2FMRkk3dW1pRTBlV05BSEJQNXluVlJidlg5dXhoOXBKeS8wQkFNUVBzTWJ0bTFkNWNQOWVnVzA0L3Z1WDAwejFJKzZob1QrQUdrdUFFRnFjR0lVaWI4a2lRUFM2dUFvRDl0cW1UaTR2ZGYzaS82bFVnWWE1cEgranBLd2Y5MmxOczI3RnRKMmtuMmxzRmNINXVFN2dYRGFWSmtEU3pBRTFDSjNJK0ZybDJJZGRPNUVtTEV2VXJJZ0t1NjFvaUd1dEpqelJyV1ZzT0kxRk0xZW5WRm45OVFsZnI1R2tSUHRTQW1XVi9NdldEQ3pDbkdWdjNWYVpKV0ZhazUzUlhCa0N2TDVJZUNETDlZR00zZVJLa0JoMXhjVTJ2eTUvVFk2ZnlyOXRJK2xNQVgvRm8vZTl1Y3ZkRjcvYUs4MmdXdlIzNGNBUEJRUWNKdUlFYUJEUTQvdmlRUHd4NVdwdHRoeElUSHhxc2xucHJ1U0NCYXJCMzZ0eDRycTBYalpzTEc4UWRxTmVqQ0lnVm5iS0hoYlNUSUlsMWxCR2lwdFFhOCttNmZqQ2M2NEJpYXRMajA5cXF0M3VEZG9xZnNjWEtqSE1lODRTTDB1MnFhUk1qNjEyMEVhWlc5NFNvT0Evd3B6ejV0ZTVsRHdMWlY5c1RUb0NrdTRhaUYzSG9XY3RxY0tndTRmZnpJSUFUOW1mNzlOcjl5emZQY3ByV2pDK0Z1czBHNENuN2RPVXExaUtnd1ptdVBrWGh0VUY0U01nZW1QSUprRzk2NXg4clcyelcxRUQwa2NBTVk1TFJiK1I4YVVVckNZTjI4Qk1CaFc5ckVEaENJZlFqV0p5NEVBQVB1Wkx6bmNOd2hLd1BESGs1QmZLRmx0cGhpb3RzejcxaEhBTEttNHJWTmR3ajF6eFJXSXFiVGp2YWFYR2tCbXBxMmo5emN5ZUNGZ0dBQXRJbW1HWmxleGpJL21USUhUMEhLbitPTldRTmdBYTBZOEd3ODdwc2ZXd0dPamdaaEEvQzZkVUE4bEFJUHZZQStkT0Z1SXc5MEtDRk5WWnJJZldCSUQ4NUZUSVpMaDhlaVVSeGpNM2VUbjc0YStCbm5mVnVKQ0ZRUDRNaHpoS0dYVklCQzI0TlFxRW1RV3hxRVFoMGZwVElKNEY5bXdMMjFIOXZORm9PYk9wN1p1VXIxb0RzOG5TWnJyd0dtR08wS2t1RFFHb1ZjV1V5dUlTVkkvYWNSNG5NS3dIRkFsc2N5TlA1bzQ0UitHUXFzT2FlQklyaFRBNlFVNldTQVBKREJCOEwwdU5GTG40Tm1HQ25qeHBOUzJmNVJFc1paR3dRZ1FROGV3dWNNS05Kb0hPRGdJYnNNU1B2MnY1VExqVFA1dlNZdnZvMjdVTkh5YVBuc0Y0clFnR29meXJMQ3VvVm9mQ1ZWNERjbmdvV3FVQW9OcnFGTlQ1S0pPYUMxLy8vRncrL3J5ckowTzZTMy9xdHAzTDFvRjhiay9oRXVBUzFOZVRiSEhBaFRDWGttenlWNkxRbmNOa1RnbDRlS3pKZVIzbUZYRWtnTzhJcGlkTFlod0ZSdWZCVm13U24yN1hTVFRvSVhHQWp1SVRMWTBZR21DODFuWldkZ1o0K1ZzYkhrM0RXSk1ySTAvVWxhMUpoU0pJcHEwMzV5U1hOYkxOTldSbjVrU0l2Z05FM3ZsVmhhTjFNWFFUb2NRVHFST29qUlg0alVmOVVHZEFnTU9YQ3lCb2dhV1lYRmg2NExIVzRDVU1RQ3QwYWhLeEJrT2FUSWFmN0s2SkR5Slc4aGVRKzJGSW1ocjBnWStEQ21rTkY1bmx4YUdZb1RLODNxS0ZKNERMWnZGVFk2WkFhNzYySUdzalloZHdUREQyRGhtL05NeEtlZ2NsbVU2U0duZ1dZR3dTNk5Ra0E2Q1hQYVViRG9HbkRwUGxVeUdiUmZPOUYzb0Y4SmdBPScgXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiPGltcG9ydCBuYW1lPVwiY2FyZF90aXRsZVwiIHNyYz1cIi4vY29tbW9uL2NvbXBvbmVudC9jYXJkX3RpdGxlL2NhcmRfdGl0bGUudXhcIj48L2ltcG9ydD5cclxuPGltcG9ydCBuYW1lPVwiY2FyZF9ib3R0b21fM1wiIHNyYz1cIi4vY29tbW9uL2NvbXBvbmVudC9jYXJkX2JvdHRvbV8zL2NhcmRfYm90dG9tXzMudXhcIj48L2ltcG9ydD5cclxuPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImV4Y2hhbmdlX2NhcmRfYm94XCIgd2lkZ2V0aWQ9XCI5NTYwYzIyNi0xMjMxLTRiZDEtOTFmNy0wYjM3ZjIzYWNlY2JcIj5cclxuICAgICAgICA8Y2FyZF90aXRsZSB0aXRsZT1cInt7JHQoJ21lc3NhZ2UudGl0bGUnKX19XCI+PC9jYXJkX3RpdGxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW5jeV9jb250ZW50X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgPGJsb2NrIGZvcj1cInt7cm93MX19XCI+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW5jeV9pdGVtX2JveFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHdpZHRoOiA1MCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY3VycmVuY3lfbmFtZVwiPnt7JGl0ZW0ubmFtZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZsZXg6IDE7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjdXJyZW5jeV9kZWx0YXMge3skaXRlbS5jb2xvcn19XCI+e3skaXRlbS5kZWx0YXNfdGV4dH19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImN1cnJlbmN5X3ZhbHVlIHt7JGl0ZW0uY29sb3J9fVwiPnt7JGl0ZW0ubGFzdH19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9ibG9jaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cclxuICAgICAgICAgICAgICAgIDxibG9jayBmb3I9XCJ7e3JvdzJ9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdG9ja3NfaXRlbV9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0b2NrX2l0ZW1fbmFtZV9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic3RvY2tfaXRlbV9uYW1lXCI+e3skaXRlbS5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RvY2tfaXRlbV9kYXRhX2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzdG9ja19pdGVtX3ZhbHVlIHt7JGl0ZW0uY29sb3J9fVwiPnt7JGl0ZW0ubGFzdH19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzdG9ja19pdGVtX2RlbHRhcyB7eyRpdGVtLmNvbG9yfX1cIj57eyRpdGVtLmNoYW5nZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzdG9ja19pdGVtX2RlbHRhcyB7eyRpdGVtLmNvbG9yfX1cIj57eyRpdGVtLmNoYW5nZVB9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Jsb2NrPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Y2FyZF9ib3R0b21fMyBidXR0b24tYXJyYXk9XCJ7eyR0KCdtZXNzYWdlLmJ1dHRvbkFycmF5Jyl9fVwiPjwvY2FyZF9ib3R0b21fMz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgbGFuZz1cInNhc3NcIj5cclxuXHRAaW1wb3J0IFwiLi4vY29tbW9uL2Nzcy9iYXNpYy5zY3NzXCI7XHJcbiAgICBAaW1wb3J0IFwiLi9jb21tb24vY3NzL2Jhc2ljLnNjc3NcIjtcclxuXHJcbiAgICAuZXhjaGFuZ2VfY2FyZF9ib3gge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogZHBDb252ZXJ0KDApIGRwQ29udmVydCgkZWxlbWVudHNNYXJnaW5Ib3Jpem9udGFsTCkgZHBDb252ZXJ0KDApIGRwQ29udmVydCgkZWxlbWVudHNNYXJnaW5Ib3Jpem9udGFsTCk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5fY29udGVudCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH0gXHJcblxyXG4gICAgLmN1cnJlbmN5X2NvbnRlbnRfYm94IHtcclxuICAgICAgICBwYWRkaW5nOiBkcENvbnZlcnQoJGVsZW1lbnRzTWFyZ2luVmVydGljYWxMKSBkcENvbnZlcnQoMCkgZHBDb252ZXJ0KCRlbGVtZW50c01hcmdpblZlcnRpY2FsTCkgZHBDb252ZXJ0KDApO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuY3VycmVuY3lfaXRlbV9ib3gge1xyXG4gICAgICAgIG1hcmdpbjogZHBDb252ZXJ0KDApIGRwQ29udmVydCgkZWxlbWVudHNNYXJnaW5Ib3Jpem9udGFsUykgZHBDb252ZXJ0KDApIGRwQ29udmVydCgkZWxlbWVudHNNYXJnaW5Ib3Jpem9udGFsUyk7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM5ODk4OTg7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogZHBDb252ZXJ0KDQpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogZHBDb252ZXJ0KDEpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzk4OTg5ODtcclxuICAgICAgICBwYWRkaW5nOiBkcENvbnZlcnQoOCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmN1cnJlbmN5X25hbWUge1xyXG4gICAgICAgIEBpbmNsdWRlIHRleHRTaXplQ2FyZEJvZHkzO1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dENvbG9yUHJpbWFyeTtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJyZW5jeV92YWx1ZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dFNpemVDYXJkQm9keTI7XHJcbiAgICAgICAgZmxleDogMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuY3VycmVuY3lfZGVsdGFzIHtcclxuICAgICAgICBAaW5jbHVkZSB0ZXh0U2l6ZUNhcmRCcmFuZDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9ja3NfaXRlbV9ib3gge1xyXG4gICAgICAgIG1hcmdpbjogZHBDb252ZXJ0KDApIGRwQ29udmVydCgkZWxlbWVudHNNYXJnaW5Ib3Jpem9udGFsUykgZHBDb252ZXJ0KDApIGRwQ29udmVydCgkZWxlbWVudHNNYXJnaW5Ib3Jpem9udGFsUyk7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrX2l0ZW1fbmFtZV9ib3gge1xyXG4gICAgICAgIHdpZHRoOiAzMy4zJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9ja19pdGVtX2RhdGFfYm94IHtcclxuICAgICAgICB3aWR0aDogNjYuNyU7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrX2l0ZW1fbmFtZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dFNpemVDYXJkQm9keTM7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0Q29sb3JQcmltYXJ5O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0b2NrX2l0ZW1fdmFsdWUge1xyXG4gICAgICAgIEBpbmNsdWRlIHRleHRTaXplQ2FyZEJvZHkzO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdG9ja19pdGVtX2RlbHRhcyB7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dFNpemVDYXJkQm9keTM7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGRwQ29udmVydCgkZWxlbWVudHNNYXJnaW5Ib3Jpem9udGFsTSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNoYXJlc19jb2xvcl9ncmVlbiB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNoYXJlc19jb2xvcl9yZWQge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3I3O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJ1xyXG4gICAgaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSAnQHN5c3RlbS5jb25maWd1cmF0aW9uJ1xyXG4gICAgXHJcbiAgICBjb25zdCBsb2NhbGVzID0ge1xyXG4gICAgICAgIHpoOiByZXF1aXJlKCcuL2kxOG4vemguanMnKSxcclxuICAgICAgICBlbjogcmVxdWlyZSgnLi9pMThuL2VuLmpzJyksXHJcbiAgICAgICAgcnU6IHJlcXVpcmUoJy4vaTE4bi9ydS5qcycpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9jYWxlT2JqZWN0ID0gY29uZmlndXJhdGlvbi5nZXRMb2NhbGUoKTtcclxuICAgIGxldCBsb2NhbCA9IGxvY2FsZU9iamVjdC5sYW5ndWFnZTsgXHJcblxyXG4gICAgY29uc3QgJGkxOG4gPSBuZXcgSTE4bih7IGxvY2FsZTogbG9jYWwsIG1lc3NhZ2VzOiBsb2NhbGVzLCBmYWxsYmFja0xvY2FsZTogJ3J1JyB9KTtcclxuXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVlRCIEludmVzdG1lbnRzJyxcclxuICAgICAgICAgICAgYnV0dG9uQXJyYXk6IFsnTW9yZS4uLiddLFxyXG4gICAgICAgICAgICBpMThuOiAkaTE4bixcclxuICAgICAgICAgICAgLy9yb3cxOiBbe1wibmFtZVwiOlwiVVNEIC8gUlVCXCIsXCJsYXN0XCI6XCI3NC4xMVwiLFwiY2hhbmdlXCI6XCItMC4yNFwiLFwiY2hhbmdlUFwiOlwiLTAuMzIlXCIsXCJjb2xvclwiOlwic2hhcmVzX2NvbG9yX3JlZFwifSx7XCJuYW1lXCI6XCJFVVIgLyBSVUJcIixcImxhc3RcIjpcIjkwLjAzXCIsXCJjaGFuZ2VcIjpcIi0wLjI3XCIsXCJjaGFuZ2VQXCI6XCItMC4zMCVcIixcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfcmVkXCJ9LHtcIm5hbWVcIjpcIkFtYXpvblwiLFwibGFzdFwiOlwiMzE5NC4wMlwiLFwiY2hhbmdlXCI6XCItMTEuMDZcIixcImNoYW5nZVBcIjpcIi0wLjM1JVwiLFwiY29sb3JcIjpcInNoYXJlc19jb2xvcl9yZWRcIn1dLFxyXG4gICAgICAgICAgICByb3cxOiBbe1wibmFtZVwiOlwiVVNEIC8gUlVCXCIsXCJsYXN0XCI6XCI3NC4xMVwiLFwiY2hhbmdlXCI6XCItMC4yNFwiLFwiY2hhbmdlUFwiOlwiLTAuMzIlXCIsIFwiZGVsdGFzX3RleHRcIjogXCItMC4yNCAtMC4zMiVcIiwgXCJjb2xvclwiOlwic2hhcmVzX2NvbG9yX3JlZFwifSx7XCJuYW1lXCI6XCJFVVIgLyBSVUJcIixcImxhc3RcIjpcIjkwLjAzXCIsXCJjaGFuZ2VcIjpcIi0wLjI3XCIsXCJjaGFuZ2VQXCI6XCItMC4zMCVcIiwgXCJkZWx0YXNfdGV4dFwiOiBcIi0wLjI3IC0wLjMwJVwiLCBcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfcmVkXCJ9XSxcclxuICAgICAgICAgICAgcm93MjogW3tcIm5hbWVcIjpcIkFsaWJhYmFcIixcImxhc3RcIjpcIjI3MS4wMFwiLFwiY2hhbmdlXCI6XCI0LjE4XCIsXCJjaGFuZ2VQXCI6XCIxLjU3JVwiLFwiY29sb3JcIjpcInNoYXJlc19jb2xvcl9ncmVlblwifSx7XCJuYW1lXCI6XCJXYWx0IERpc25leVwiLFwibGFzdFwiOlwiMTUzLjg0XCIsXCJjaGFuZ2VcIjpcIi0wLjI5XCIsXCJjaGFuZ2VQXCI6XCItMC4xOSVcIixcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfcmVkXCJ9LHtcIm5hbWVcIjpcIlRlc2xhXCIsXCJsYXN0XCI6XCI1OTAuMjlcIixcImNoYW5nZVwiOlwiMy45NFwiLFwiY2hhbmdlUFwiOlwiMC42NyVcIixcImNvbG9yXCI6XCJzaGFyZXNfY29sb3JfZ3JlZW5cIn1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQubXNnTGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZmV0Y2guZmV0Y2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vbW9iaWxlLmJyb2tlci52dGIucnUvbW9iL0FuZHJvaWQvUGFydG5lci9hcGkvaHViLmF4ZC9WVEIvVlRCQnJva2VyL01hcmtldFNlcnZpY2UvSW5zdHJ1bWVudC9MaXN0P2luc3RydW1lbnRzPUVVUlJVQl8xJUUyJTgyJUFDQEVFU19DRVRTJmluc3RydW1lbnRzPVVTRFJVQl8xJEBFRVNfQ0VUUyZpbnN0cnVtZW50cz1BQVBMX1NQQkBTUEJYTSZpbnN0cnVtZW50cz1CQUJBX1NQQkBTUEJYTSZpbnN0cnVtZW50cz1ESVNfU1BCQFNQQlhNJmluc3RydW1lbnRzPUFNWk5fU1BCQFNQQlhNXCIsICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmFzaWMgYUhWaGQyVnBPbkJ1TmpsTmEwNWhhWFZRUzFaTVFtRT1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJVc2VyLUFnZW50XCI6IFwiTW96aWxsYS81LjAgKExpbnV4OyBVOyBBbmRyb2lkIDcuMDsgemgtY247IFNURi1BTDAwIEJ1aWxkL0hVQVdFSVNURi1BTDAwKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKVZlcnNpb24vNC4wIENocm9tZS8zNy4wLjAuMCBNUVFCcm93c2VyLzcuOSBNb2JpbGUgU2FmYXJpLzUzNy4zNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdC1MYW5ndWFnZVwiOiBcInpoLUNOLGVuLVVTO3E9MC44LGVuO3E9MC42XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkgIHsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5zdCA9IHJlc3VsdC5kYXRhLmluc3RydW1lbnRzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yb3cxID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBpbnN0W2ldLm1hcmtldERhdGEuY2hhbmdlID49IDAgPyAnc2hhcmVzX2NvbG9yX2dyZWVuJyA6ICdzaGFyZXNfY29sb3JfcmVkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBpbnN0W2ldLm5hbWUuc2hvcnQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYXN0JzogaW5zdFtpXS5tYXJrZXREYXRhLmxhc3QudG9GaXhlZCgyKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZSc6IGluc3RbaV0ubWFya2V0RGF0YS5jaGFuZ2UudG9GaXhlZCgyKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZVAnOiBpbnN0W2ldLm1hcmtldERhdGEuY2hhbmdlUC50b0ZpeGVkKDIpICsgJyUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVsdGFzX3RleHQnOiBpbnN0W2ldLm1hcmtldERhdGEuY2hhbmdlLnRvRml4ZWQoMikgKyAnICcgKyBpbnN0W2ldLm1hcmtldERhdGEuY2hhbmdlUC50b0ZpeGVkKDIpICsgJyUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiBjb2xvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnJvdzEucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnJvdzIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMzsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gaW5zdFtpXS5tYXJrZXREYXRhLmNoYW5nZSA+PSAwID8gJ3NoYXJlc19jb2xvcl9ncmVlbicgOiAnc2hhcmVzX2NvbG9yX3JlZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogaW5zdFtpXS5uYW1lLnNob3J0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFzdCc6IGluc3RbaV0ubWFya2V0RGF0YS5sYXN0LnRvRml4ZWQoMiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2UnOiBpbnN0W2ldLm1hcmtldERhdGEuY2hhbmdlLnRvRml4ZWQoMiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2VQJzogaW5zdFtpXS5tYXJrZXREYXRhLmNoYW5nZVAudG9GaXhlZCgyKSArICclJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RlbHRhc190ZXh0JzogaW5zdFtpXS5tYXJrZXREYXRhLmNoYW5nZS50b0ZpeGVkKDIpICsgJyAnICsgaW5zdFtpXS5tYXJrZXREYXRhLmNoYW5nZVAudG9GaXhlZCgyKSArICclJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogY29sb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yb3cyLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oZGF0YSwgY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGZhaWwsIGNvZGU9XCIgKyBjb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50JmRlcGVuZHM9IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NhcmRfYm90dG9tXzMudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWQ6XFxcXFdvcmtzcGFjZVxcXFxraXJpbGwta29zdHJvdlxcXFxRdWlja0FwcHNcXFxcRXhjaGFuZ2VDYXJkXFxcXGNvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZFxcXFxzcmNcXFxcc2hhcmVzX3R5cGVfMVxcXFxjb21tb25cXFxcY29tcG9uZW50XFxcXGNhcmRfYm90dG9tXzNcXFxcY2FyZF9ib3R0b21fMy51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1kOlxcXFxXb3Jrc3BhY2VcXFxca2lyaWxsLWtvc3Ryb3ZcXFxcUXVpY2tBcHBzXFxcXEV4Y2hhbmdlQ2FyZFxcXFxjb20uaHVhd2VpLnNhbXBsZS5leGNoYW5nZWNhcmRcXFxcc3JjXFxcXHNoYXJlc190eXBlXzFcXFxcY29tbW9uXFxcXGNvbXBvbmVudFxcXFxjYXJkX2JvdHRvbV8zXFxcXGNhcmRfYm90dG9tXzMudXghLi9jYXJkX2JvdHRvbV8zLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY2FyZF9ib3R0b21fMy51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2NhcmRfYm90dG9tXzMnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS10ZW1wbGF0ZS1sb2FkZXIuanM/dHlwZT1jb21wb25lbnQmZGVwZW5kcz0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY2FyZF90aXRsZS51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9ZDpcXFxcV29ya3NwYWNlXFxcXGtpcmlsbC1rb3N0cm92XFxcXFF1aWNrQXBwc1xcXFxFeGNoYW5nZUNhcmRcXFxcY29tLmh1YXdlaS5zYW1wbGUuZXhjaGFuZ2VjYXJkXFxcXHNyY1xcXFxzaGFyZXNfdHlwZV8xXFxcXGNvbW1vblxcXFxjb21wb25lbnRcXFxcY2FyZF90aXRsZVxcXFxjYXJkX3RpdGxlLnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWQ6XFxcXFdvcmtzcGFjZVxcXFxraXJpbGwta29zdHJvdlxcXFxRdWlja0FwcHNcXFxcRXhjaGFuZ2VDYXJkXFxcXGNvbS5odWF3ZWkuc2FtcGxlLmV4Y2hhbmdlY2FyZFxcXFxzcmNcXFxcc2hhcmVzX3R5cGVfMVxcXFxjb21tb25cXFxcY29tcG9uZW50XFxcXGNhcmRfdGl0bGVcXFxcY2FyZF90aXRsZS51eCEuL2NhcmRfdGl0bGUudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtY29tcGlsZXJcXFxcanN4LWxvYWRlci5qcyZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tcHJvcG9zYWwtb2JqZWN0LXJlc3Qtc3ByZWFkJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jYXJkX3RpdGxlLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvY2FyZF90aXRsZScsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFoQkE7QUFrQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBakRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUdBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpEQTtBQW1EQTtBQWxFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==