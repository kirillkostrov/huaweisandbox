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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux":
/*!**************************************************************************************************!*\
  !*** d:/Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./hello.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux!./hello.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\Jokes\\com.kkostrov.jokes.quickapp\\src\\Hello\\hello.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\Jokes\\com.kkostrov.jokes.quickapp\\src\\Hello\\hello.ux!../../Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./hello.ux */ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux")

$app_define$('@app-component/hello', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/hello',{ packagerName:'fa-toolkit', packagerVersion: '2.6.2-Stable.302'})

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\Jokes\\com.kkostrov.jokes.quickapp\\src\\Hello\\hello.ux!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:\\Workspace\\kirill-kostrov\\QuickApps\\Jokes\\com.kkostrov.jokes.quickapp\\src\\Hello\\hello.ux!../../Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=d:/Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux!d:/Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "flex-end",
    "paddingTop": "10px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "10px"
  },
  ".share-image": {
    "width": "100px",
    "height": "100px"
  },
  ".top-button-container": {
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "flex-end",
    "width": "100%",
    "height": "120px"
  },
  ".button-container": {
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px"
  },
  ".text-container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "height": "100%",
    "width": "100%",
    "marginTop": "-20px",
    "paddingTop": "-80px",
    "paddingLeft": "40px",
    "paddingRight": "40px"
  },
  ".text-block": {
    "width": "100%"
  },
  ".big-font": {
    "fontSize": "50px"
  },
  ".medium-font": {
    "fontSize": "40px"
  },
  ".small-font": {
    "fontSize": "30px"
  },
  ".button": {
    "color": "#ffffff",
    "backgroundColor": "#666666",
    "borderRadius": "15px",
    "fontSize": "40px",
    "height": "90px",
    "marginTop": "15px",
    "marginRight": "15px",
    "marginBottom": "15px",
    "marginLeft": "15px"
  },
  ".bottom-button": {
    "width": "45%"
  },
  ".button2": {
    "marginLeft": "20px"
  }
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!../../Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!d:/Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "top-button-container"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Common/ic_jokes_share.png"
          },
          "classList": [
            "share-image"
          ],
          "events": {
            "click": "openShare"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "text-container"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "text-block"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.text)}
              },
              "classList": function () {return [(this.fontClass)]}
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "button-container"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "АНЕКДОТ"
          },
          "classList": [
            "button",
            "bottom-button"
          ],
          "events": {
            "click": function(evt){this.loadNew(1,evt)}
          }
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "ИСТОРИЯ"
          },
          "classList": [
            "button",
            "bottom-button",
            "button2"
          ],
          "events": {
            "click": function(evt){this.loadNew(2,evt)}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./resources/app/extensions/deveco-debug/node_modules/babel-loader/lib/index.js?presets[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\preset-env&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-transform-modules-commonjs&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\fa-toolkit\\lib\\fa-compiler\\jsx-loader.js&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-class-properties&plugins[]=d:\\Program Files\\Huawei QuickApp IDE\\resources\\app\\extensions\\deveco-debug\\node_modules\\@babel\\plugin-proposal-object-rest-spread&comments=false!./resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!../../Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!d:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!d:/Workspace/kirill-kostrov/QuickApps/Jokes/com.kkostrov.jokes.quickapp/src/Hello/hello.ux ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.share"));

var _service = _interopRequireDefault($app_require$("@app-module/service.ad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    componentData: {},
    text: '- Как только утром по телевидению начинается аэробика, мой муж\nтут же вскакивает с кровати.\n- Он так увлечен аэробикой в его-то годы?\n- Нет, сам он ею не занимается, а наблюдает в окно, как выполняет эти упражнения полуобнаженная молоденькая соседка.',
    fontClass: 'big-font'
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'menu',
      textColor: '#ffffff',
      backgroundColor: '#666666',
      backgroundOpacity: 1,
      menu: true
    });
    this.loadNew(1);
  },
  loadNew: function loadNew(jokeCat) {
    var context = this;

    _system["default"].fetch({
      url: "http://rzhunemogu.ru/RandJSON.aspx?CType=" + jokeCat,
      success: function success(data) {
        try {
          var finalText = data.data.replace("{\"content\":\"", "").replace("\"}", "");

          if (finalText.length < 256) {
            context.fontClass = 'big-font';
          } else if (finalText.length > 600) {
            context.fontClass = 'small-font';
          } else {
            context.fontClass = 'medium-font';
          }

          console.log(context.fontClass);
          context.text = finalText;
        } catch (error) {
          console.log(error);
          context.fontClass = 'big-font';
          context.text = 'Ошибка загрузки, попробуйте ещё раз';
        }
      },
      fail: function fail(data, code) {
        console.log("handling fail, code=" + code);
      }
    });

    context.loadAd();
  },
  loadAd: function loadAd() {
    var _this = this;

    console.log(_service["default"].getProvider());

    var nativeAd = _service["default"].createNativeAd({
      adUnitId: 'testb65czjivt9'
    });

    nativeAd.onLoad(function (data) {
      console.info('ad data loaded: ' + JSON.stringify(data));
      _this.adItemData = data.adList[0];
    });
    nativeAd.onError(function (e) {
      console.error('load ad error:' + JSON.stringify(e));
      var errCode = e.errCode;
      var errMsg = e.errMsg;
    });
    nativeAd.load();
  },
  openShare: function openShare() {
    var sharetext = this.text;
    sharetext += "\n\nАнекдоты, байки, реальные смешные истории из жизни.\n";
    sharetext += "https://appgallery.huawei.com/#/app/C103270485";

    _system2["default"].share({
      type: "text/html",
      data: sharetext,
      success: function success(data) {
        console.log("handling success");
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXEhlbGxvXFxoZWxsby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9Kb2tlcy9jb20ua2tvc3Ryb3Yuam9rZXMucXVpY2thcHAvc3JjL0hlbGxvL2hlbGxvLnV4PzM0MTkiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvSm9rZXMvY29tLmtrb3N0cm92Lmpva2VzLnF1aWNrYXBwL3NyYy9IZWxsby9oZWxsby51eD81Yzk4Iiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0pva2VzL2NvbS5ra29zdHJvdi5qb2tlcy5xdWlja2FwcC9zcmMvSGVsbG8vaGVsbG8udXg/NmFmOCIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9Kb2tlcy9jb20ua2tvc3Ryb3Yuam9rZXMucXVpY2thcHAvc3JjL0hlbGxvL2hlbGxvLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uLy4uL1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvSm9rZXMvY29tLmtrb3N0cm92Lmpva2VzLnF1aWNrYXBwL3NyYy9IZWxsby9oZWxsby51eFwiKTtcbiIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzP2RlcGVuZHM9IS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2hlbGxvLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1kOlxcXFxXb3Jrc3BhY2VcXFxca2lyaWxsLWtvc3Ryb3ZcXFxcUXVpY2tBcHBzXFxcXEpva2VzXFxcXGNvbS5ra29zdHJvdi5qb2tlcy5xdWlja2FwcFxcXFxzcmNcXFxcSGVsbG9cXFxcaGVsbG8udXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1kOlxcXFxXb3Jrc3BhY2VcXFxca2lyaWxsLWtvc3Ryb3ZcXFxcUXVpY2tBcHBzXFxcXEpva2VzXFxcXGNvbS5ra29zdHJvdi5qb2tlcy5xdWlja2FwcFxcXFxzcmNcXFxcSGVsbG9cXFxcaGVsbG8udXghLi9oZWxsby51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1jb21waWxlclxcXFxqc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2hlbGxvLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaGVsbG8nLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2hlbGxvJyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuNi4yLVN0YWJsZS4zMDInfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIuc2hhcmUtaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi50b3AtYnV0dG9uLWNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcHhcIlxuICB9LFxuICBcIi5idXR0b24tY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIudGV4dC1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiLTIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCItODBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIudGV4dC1ibG9ja1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5iaWctZm9udFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5tZWRpdW0tZm9udFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcHhcIlxuICB9LFxuICBcIi5zbWFsbC1mb250XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLmJ1dHRvblwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2NjY2NjZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE1cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiNDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTVweFwiXG4gIH0sXG4gIFwiLmJvdHRvbS1idXR0b25cIjoge1xuICAgIFwid2lkdGhcIjogXCI0NSVcIlxuICB9LFxuICBcIi5idXR0b24yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0b3AtYnV0dG9uLWNvbnRhaW5lclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24vaWNfam9rZXNfc2hhcmUucG5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2hhcmUtaW1hZ2VcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcIm9wZW5TaGFyZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0ZXh0LWNvbnRhaW5lclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0ZXh0LWJsb2NrXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnRleHQpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsodGhpcy5mb250Q2xhc3MpXX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbi1jb250YWluZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi0JDQndCV0JrQlNCe0KJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiYm90dG9tLWJ1dHRvblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5sb2FkTmV3KDEsZXZ0KX1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLQmNCh0KLQntCg0JjQr1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJib3R0b20tYnV0dG9uXCIsXG4gICAgICAgICAgICBcImJ1dHRvbjJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMubG9hZE5ldygyLGV2dCl9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwiPHRlbXBsYXRlPlxuICA8IS0tIE9ubHkgb25lIHJvb3Qgbm9kZSBpcyBhbGxvd2VkIGluIHRlbXBsYXRlLiAtLT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0b3AtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgPCEtLSA8aW5wdXQgY2xhc3M9XCJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLQn9Ce0JTQldCb0JjQotCs0KHQr1wiIG9uY2xpY2s9XCJvcGVuU2hhcmUoKVwiLz4gLS0+XG4gICAgICA8aW1hZ2UgY2xhc3M9XCJzaGFyZS1pbWFnZVwiIHNyYz1cIi4uL0NvbW1vbi9pY19qb2tlc19zaGFyZS5wbmdcIiBvbmNsaWNrPVwib3BlblNoYXJlKClcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInt7Zm9udENsYXNzfX1cIj5cbiAgICAgICAgICB7e3RleHR9fVxuICAgICAgICA8L3RleHQ+XG4gICAgICA8L2Rpdj4gICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImJ1dHRvbiBib3R0b20tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi0JDQndCV0JrQlNCe0KJcIiBvbmNsaWNrPVwibG9hZE5ldygxKVwiLz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImJ1dHRvbiBib3R0b20tYnV0dG9uIGJ1dHRvbjJcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLQmNCh0KLQntCg0JjQr1wiIG9uY2xpY2s9XCJsb2FkTmV3KDIpXCIvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDEwcHg7XG4gIH1cblxuICAuc2hhcmUtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgLnRvcC1idXR0b24tY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuXG4gIC5idXR0b24tY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAudGV4dC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIHBhZGRpbmctdG9wOiAtODBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICBcbiAgfVxuXG4gIC50ZXh0LWJsb2NrIHtcbiAgICB3aWR0aDoxMDAlO1xuICB9XG5cbiAgLmJpZy1mb250IHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cblxuICAubWVkaXVtLWZvbnQge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuXG4gIC5zbWFsbC1mb250IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2NjY2NjY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG1hcmdpbjogMTVweDsgICAgXG4gIH1cblxuICAuYm90dG9tLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuXG4gIC5idXR0b24yIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGZldGNoIGZyb20gJ0BzeXN0ZW0uZmV0Y2gnXG4gIGltcG9ydCBzaGFyZSBmcm9tICdAc3lzdGVtLnNoYXJlJ1xuICBpbXBvcnQgYWQgZnJvbSAnQHNlcnZpY2UuYWQnXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgY29tcG9uZW50RGF0YToge30sXG4gICAgICB0ZXh0OiAnLSDQmtCw0Log0YLQvtC70YzQutC+INGD0YLRgNC+0Lwg0L/QviDRgtC10LvQtdCy0LjQtNC10L3QuNGOINC90LDRh9C40L3QsNC10YLRgdGPINCw0Y3RgNC+0LHQuNC60LAsINC80L7QuSDQvNGD0LZcXG7RgtGD0YIg0LbQtSDQstGB0LrQsNC60LjQstCw0LXRgiDRgSDQutGA0L7QstCw0YLQuC5cXG4tINCe0L0g0YLQsNC6INGD0LLQu9C10YfQtdC9INCw0Y3RgNC+0LHQuNC60L7QuSDQsiDQtdCz0L4t0YLQviDQs9C+0LTRiz9cXG4tINCd0LXRgiwg0YHQsNC8INC+0L0g0LXRjiDQvdC1INC30LDQvdC40LzQsNC10YLRgdGPLCDQsCDQvdCw0LHQu9GO0LTQsNC10YIg0LIg0L7QutC90L4sINC60LDQuiDQstGL0L/QvtC70L3Rj9C10YIg0Y3RgtC4INGD0L/RgNCw0LbQvdC10L3QuNGPINC/0L7Qu9GD0L7QsdC90LDQttC10L3QvdCw0Y8g0LzQvtC70L7QtNC10L3RjNC60LDRjyDRgdC+0YHQtdC00LrQsC4nLFxuICAgICAgZm9udENsYXNzOiAnYmlnLWZvbnQnICAgICAgXG4gICAgfSxcbiAgICBvbkluaXQoKSB7XG4gICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgdGV4dDogJ21lbnUnLFxuICAgICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzY2NjY2NicsXG4gICAgICAgIGJhY2tncm91bmRPcGFjaXR5OiAxLFxuICAgICAgICBtZW51OiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sb2FkTmV3KDEpO1xuICAgIH0sXG4gICAgbG9hZE5ldyhqb2tlQ2F0KSB7XG4gICAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgICBmZXRjaC5mZXRjaChcbiAgICAgICAge1xuICAgICAgICAgIHVybDpcImh0dHA6Ly9yemh1bmVtb2d1LnJ1L1JhbmRKU09OLmFzcHg/Q1R5cGU9XCIram9rZUNhdCxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSAge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLmRhdGEucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICc8YnI+JykpO1xuICAgICAgICAgICAgICAvL2xldCByZXN1bHQgPSBKU09OLnBhcnNlKGRhdGEuZGF0YS5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJzxicj4nKSk7ICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvL2xldCBmaW5hbFRleHQgPSByZXN1bHQuY29udGVudC5zcGxpdCgnPGJyPicpLmpvaW4oJ1xcbicpOyBcblxuICAgICAgICAgICAgICAvLyBUaGlzIHdlaXJkIHdheSBvZiBnZXR0aW5nIGNvbnRlbnQgdXNlZCBiZWNhdXNlIEFQSSByZXR1cm5zIG5vdCB3ZWxsLWZvcm1lZCBqc29uIHNvbWV0aW1lc1xuICAgICAgICAgICAgICAvLyBJdCBqdXN0IGFkZHMgcHJlZml4IHtjb250ZW50OlwiIGFuZCBzdWZmaXggXCJ9IHRvIHRoZSB0ZXh0XG4gICAgICAgICAgICAgIC8vIGlnbm9yaW5nIGlubmVyIGNhcnJpYWdlIHJldHVybnMsIHF1b3RlcyBhbmQgYmFja3NsYXNoLCBjYXVzaW5nIEpTT04ucGFyc2UgdG8gZmFpbCB3aXRoIGV4Y2VwdGlvblxuXG4gICAgICAgICAgICAgIGxldCBmaW5hbFRleHQgPSBkYXRhLmRhdGEucmVwbGFjZShcIntcXFwiY29udGVudFxcXCI6XFxcIlwiLCBcIlwiKS5yZXBsYWNlKFwiXFxcIn1cIiwgXCJcIik7XG5cbiAgICAgICAgICAgICAgaWYgKGZpbmFsVGV4dC5sZW5ndGggPCAyNTYpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZvbnRDbGFzcyA9ICdiaWctZm9udCc7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmluYWxUZXh0Lmxlbmd0aCA+IDYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZm9udENsYXNzID0gJ3NtYWxsLWZvbnQnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZm9udENsYXNzID0gJ21lZGl1bS1mb250JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZXh0LmZvbnRDbGFzcyk7XG4gICAgICAgICAgICAgIGNvbnRleHQudGV4dCA9IGZpbmFsVGV4dDsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZvbnRDbGFzcyA9ICdiaWctZm9udCc7XG4gICAgICAgICAgICAgICAgY29udGV4dC50ZXh0ID0gJ9Ce0YjQuNCx0LrQsCDQt9Cw0LPRgNGD0LfQutC4LCDQv9C+0L/RgNC+0LHRg9C50YLQtSDQtdGJ0ZEg0YDQsNC3JzsgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgZmFpbCwgY29kZT1cIiArIGNvZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgICAgICAgICAgICBcbiAgICAgICAgY29udGV4dC5sb2FkQWQoKTtcbiAgICB9LFxuICAgIGxvYWRBZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGFkLmdldFByb3ZpZGVyKCkpO1xuICAgICAgbGV0IG5hdGl2ZUFkID0gYWQuY3JlYXRlTmF0aXZlQWQoeyBhZFVuaXRJZDogJ3Rlc3RiNjVjemppdnQ5JyB9KTtcbiAgICAgIG5hdGl2ZUFkLm9uTG9hZCgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oJ2FkIGRhdGEgbG9hZGVkOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgIHRoaXMuYWRJdGVtRGF0YSA9IGRhdGEuYWRMaXN0WzBdXG4gICAgICB9KTtcbiAgICAgIG5hdGl2ZUFkLm9uRXJyb3IoKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignbG9hZCBhZCBlcnJvcjonICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICBjb25zdCBlcnJDb2RlID0gZS5lcnJDb2RlXG4gICAgICAgIGNvbnN0IGVyck1zZyA9IGUuZXJyTXNnXG4gICAgICB9KTtcbiAgICAgIG5hdGl2ZUFkLmxvYWQoKTtcbiAgICB9LFxuICAgIG9wZW5TaGFyZSgpIHtcbiAgICAgIGxldCBzaGFyZXRleHQgPSB0aGlzLnRleHQ7XG4gICAgICBzaGFyZXRleHQgKz0gXCJcXG5cXG7QkNC90LXQutC00L7RgtGLLCDQsdCw0LnQutC4LCDRgNC10LDQu9GM0L3Ri9C1INGB0LzQtdGI0L3Ri9C1INC40YHRgtC+0YDQuNC4INC40Lcg0LbQuNC30L3QuC5cXG5cIjtcbiAgICAgIHNoYXJldGV4dCArPSBcImh0dHBzOi8vYXBwZ2FsbGVyeS5odWF3ZWkuY29tLyMvYXBwL0MxMDMyNzA0ODVcIjsgICAgICBcbiAgICAgIHNoYXJlLnNoYXJlKHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgZGF0YTogc2hhcmV0ZXh0LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oZGF0YSwgY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGZhaWwsIGNvZGU9XCIgKyBjb2RlKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0dBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFuRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9