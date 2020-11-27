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
    "paddingLeft": "10px",
    "backgroundColor": "#ffffff"
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
    "paddingRight": "40px",
    "color": "#333333"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXEhlbGxvXFxoZWxsby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9Kb2tlcy9jb20ua2tvc3Ryb3Yuam9rZXMucXVpY2thcHAvc3JjL0hlbGxvL2hlbGxvLnV4PzM0MTkiLCJ3ZWJwYWNrOi8vL2Q6L1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvSm9rZXMvY29tLmtrb3N0cm92Lmpva2VzLnF1aWNrYXBwL3NyYy9IZWxsby9oZWxsby51eD81Yzk4Iiwid2VicGFjazovLy9kOi9Xb3Jrc3BhY2Uva2lyaWxsLWtvc3Ryb3YvUXVpY2tBcHBzL0pva2VzL2NvbS5ra29zdHJvdi5qb2tlcy5xdWlja2FwcC9zcmMvSGVsbG8vaGVsbG8udXg/NmFmOCIsIndlYnBhY2s6Ly8vZDovV29ya3NwYWNlL2tpcmlsbC1rb3N0cm92L1F1aWNrQXBwcy9Kb2tlcy9jb20ua2tvc3Ryb3Yuam9rZXMucXVpY2thcHAvc3JjL0hlbGxvL2hlbGxvLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uLy4uL1dvcmtzcGFjZS9raXJpbGwta29zdHJvdi9RdWlja0FwcHMvSm9rZXMvY29tLmtrb3N0cm92Lmpva2VzLnF1aWNrYXBwL3NyYy9IZWxsby9oZWxsby51eFwiKTtcbiIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzP2RlcGVuZHM9IS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2hlbGxvLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1kOlxcXFxXb3Jrc3BhY2VcXFxca2lyaWxsLWtvc3Ryb3ZcXFxcUXVpY2tBcHBzXFxcXEpva2VzXFxcXGNvbS5ra29zdHJvdi5qb2tlcy5xdWlja2FwcFxcXFxzcmNcXFxcSGVsbG9cXFxcaGVsbG8udXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1kOlxcXFxXb3Jrc3BhY2VcXFxca2lyaWxsLWtvc3Ryb3ZcXFxcUXVpY2tBcHBzXFxcXEpva2VzXFxcXGNvbS5ra29zdHJvdi5qb2tlcy5xdWlja2FwcFxcXFxzcmNcXFxcSGVsbG9cXFxcaGVsbG8udXghLi9oZWxsby51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109ZDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1jb21waWxlclxcXFxqc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzJnBsdWdpbnNbXT1kOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2hlbGxvLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaGVsbG8nLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2hlbGxvJyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuNi4yLVN0YWJsZS4zMDInfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCIuc2hhcmUtaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi50b3AtYnV0dG9uLWNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcHhcIlxuICB9LFxuICBcIi5idXR0b24tY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIudGV4dC1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiLTIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCItODBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcIi50ZXh0LWJsb2NrXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLmJpZy1mb250XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLm1lZGl1bS1mb250XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLnNtYWxsLWZvbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuYnV0dG9uXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzY2NjY2NlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTVweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI5MHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE1cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNXB4XCJcbiAgfSxcbiAgXCIuYm90dG9tLWJ1dHRvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ1JVwiXG4gIH0sXG4gIFwiLmJ1dHRvbjJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRvcC1idXR0b24tY29udGFpbmVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW1vbi9pY19qb2tlc19zaGFyZS5wbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzaGFyZS1pbWFnZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwib3BlblNoYXJlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRleHQtY29udGFpbmVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRleHQtYmxvY2tcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMudGV4dCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWyh0aGlzLmZvbnRDbGFzcyldfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYnV0dG9uLWNvbnRhaW5lclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLQkNCd0JXQmtCU0J7QolwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJib3R0b20tYnV0dG9uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmxvYWROZXcoMSxldnQpfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcItCY0KHQotCe0KDQmNCvXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImJvdHRvbS1idXR0b25cIixcbiAgICAgICAgICAgIFwiYnV0dG9uMlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5sb2FkTmV3KDIsZXZ0KX1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCI8dGVtcGxhdGU+XG4gIDwhLS0gT25seSBvbmUgcm9vdCBub2RlIGlzIGFsbG93ZWQgaW4gdGVtcGxhdGUuIC0tPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRvcC1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICA8IS0tIDxpbnB1dCBjbGFzcz1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cItCf0J7QlNCV0JvQmNCi0KzQodCvXCIgb25jbGljaz1cIm9wZW5TaGFyZSgpXCIvPiAtLT5cbiAgICAgIDxpbWFnZSBjbGFzcz1cInNoYXJlLWltYWdlXCIgc3JjPVwiLi4vQ29tbW9uL2ljX2pva2VzX3NoYXJlLnBuZ1wiIG9uY2xpY2s9XCJvcGVuU2hhcmUoKVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJsb2NrXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwie3tmb250Q2xhc3N9fVwiPlxuICAgICAgICAgIHt7dGV4dH19XG4gICAgICAgIDwvdGV4dD5cbiAgICAgIDwvZGl2PiAgICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiYnV0dG9uIGJvdHRvbS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLQkNCd0JXQmtCU0J7QolwiIG9uY2xpY2s9XCJsb2FkTmV3KDEpXCIvPlxuICAgICAgPGlucHV0IGNsYXNzPVwiYnV0dG9uIGJvdHRvbS1idXR0b24gYnV0dG9uMlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cItCY0KHQotCe0KDQmNCvXCIgb25jbGljaz1cImxvYWROZXcoMilcIi8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnNoYXJlLWltYWdlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIC50b3AtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cblxuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnRleHQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBwYWRkaW5nLXRvcDogLTgwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgXG4gIH1cblxuICAudGV4dC1ibG9jayB7XG4gICAgd2lkdGg6MTAwJTtcbiAgfVxuXG4gIC5iaWctZm9udCB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG5cbiAgLm1lZGl1bS1mb250IHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cblxuICAuc21hbGwtZm9udCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjY2NjY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBtYXJnaW46IDE1cHg7ICAgIFxuICB9XG5cbiAgLmJvdHRvbS1idXR0b24ge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cblxuICAuYnV0dG9uMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBmZXRjaCBmcm9tICdAc3lzdGVtLmZldGNoJ1xuICBpbXBvcnQgc2hhcmUgZnJvbSAnQHN5c3RlbS5zaGFyZSdcbiAgaW1wb3J0IGFkIGZyb20gJ0BzZXJ2aWNlLmFkJ1xuXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIGNvbXBvbmVudERhdGE6IHt9LFxuICAgICAgdGV4dDogJy0g0JrQsNC6INGC0L7Qu9GM0LrQviDRg9GC0YDQvtC8INC/0L4g0YLQtdC70LXQstC40LTQtdC90LjRjiDQvdCw0YfQuNC90LDQtdGC0YHRjyDQsNGN0YDQvtCx0LjQutCwLCDQvNC+0Lkg0LzRg9C2XFxu0YLRg9GCINC20LUg0LLRgdC60LDQutC40LLQsNC10YIg0YEg0LrRgNC+0LLQsNGC0LguXFxuLSDQntC9INGC0LDQuiDRg9Cy0LvQtdGH0LXQvSDQsNGN0YDQvtCx0LjQutC+0Lkg0LIg0LXQs9C+LdGC0L4g0LPQvtC00Ys/XFxuLSDQndC10YIsINGB0LDQvCDQvtC9INC10Y4g0L3QtSDQt9Cw0L3QuNC80LDQtdGC0YHRjywg0LAg0L3QsNCx0LvRjtC00LDQtdGCINCyINC+0LrQvdC+LCDQutCw0Log0LLRi9C/0L7Qu9C90Y/QtdGCINGN0YLQuCDRg9C/0YDQsNC20L3QtdC90LjRjyDQv9C+0LvRg9C+0LHQvdCw0LbQtdC90L3QsNGPINC80L7Qu9C+0LTQtdC90YzQutCw0Y8g0YHQvtGB0LXQtNC60LAuJyxcbiAgICAgIGZvbnRDbGFzczogJ2JpZy1mb250JyAgICAgIFxuICAgIH0sXG5cbiAgICBvbkluaXQoKSB7XG4gICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgdGV4dDogJ21lbnUnLFxuICAgICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzY2NjY2NicsXG4gICAgICAgIGJhY2tncm91bmRPcGFjaXR5OiAxLFxuICAgICAgICBtZW51OiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sb2FkTmV3KDEpO1xuICAgIH0sXG5cbiAgICBsb2FkTmV3KGpva2VDYXQpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZldGNoLmZldGNoKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBcImh0dHA6Ly9yemh1bmVtb2d1LnJ1L1JhbmRKU09OLmFzcHg/Q1R5cGU9XCIgKyBqb2tlQ2F0LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpICB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuZGF0YS5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJzxicj4nKSk7XG4gICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoZGF0YS5kYXRhLnJlcGxhY2UoLyg/OlxcclxcbnxcXHJ8XFxuKS9nLCAnPGJyPicpKTsgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vbGV0IGZpbmFsVGV4dCA9IHJlc3VsdC5jb250ZW50LnNwbGl0KCc8YnI+Jykuam9pbignXFxuJyk7IFxuXG4gICAgICAgICAgICAgIC8vIFRoaXMgd2VpcmQgd2F5IG9mIGdldHRpbmcgY29udGVudCB1c2VkIGJlY2F1c2UgQVBJIHJldHVybnMgbm90IHdlbGwtZm9ybWVkIGpzb24gc29tZXRpbWVzXG4gICAgICAgICAgICAgIC8vIEl0IGp1c3QgYWRkcyBwcmVmaXgge2NvbnRlbnQ6XCIgYW5kIHN1ZmZpeCBcIn0gdG8gdGhlIHRleHRcbiAgICAgICAgICAgICAgLy8gaWdub3JpbmcgaW5uZXIgY2FycmlhZ2UgcmV0dXJucywgcXVvdGVzIGFuZCBiYWNrc2xhc2gsIGNhdXNpbmcgSlNPTi5wYXJzZSB0byBmYWlsIHdpdGggZXhjZXB0aW9uXG5cbiAgICAgICAgICAgICAgbGV0IGZpbmFsVGV4dCA9IGRhdGEuZGF0YS5yZXBsYWNlKFwie1xcXCJjb250ZW50XFxcIjpcXFwiXCIsIFwiXCIpLnJlcGxhY2UoXCJcXFwifVwiLCBcIlwiKTtcblxuICAgICAgICAgICAgICBpZiAoZmluYWxUZXh0Lmxlbmd0aCA8IDI1Nikge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZm9udENsYXNzID0gJ2JpZy1mb250JztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaW5hbFRleHQubGVuZ3RoID4gNjAwKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5mb250Q2xhc3MgPSAnc21hbGwtZm9udCc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5mb250Q2xhc3MgPSAnbWVkaXVtLWZvbnQnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRleHQuZm9udENsYXNzKTtcbiAgICAgICAgICAgICAgY29udGV4dC50ZXh0ID0gZmluYWxUZXh0OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZm9udENsYXNzID0gJ2JpZy1mb250JztcbiAgICAgICAgICAgICAgICBjb250ZXh0LnRleHQgPSAn0J7RiNC40LHQutCwINC30LDQs9GA0YPQt9C60LgsINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC10YnRkSDRgNCw0LcnOyBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24oZGF0YSwgY29kZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBmYWlsLCBjb2RlPVwiICsgY29kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSAgICAgICAgICAgIFxuICAgICAgICBjb250ZXh0LmxvYWRBZCgpO1xuICAgIH0sXG5cbiAgICBsb2FkQWQoKSB7XG4gICAgICBjb25zb2xlLmxvZyhhZC5nZXRQcm92aWRlcigpKTtcbiAgICAgIGxldCBuYXRpdmVBZCA9IGFkLmNyZWF0ZU5hdGl2ZUFkKHsgYWRVbml0SWQ6ICd0ZXN0YjY1Y3pqaXZ0OScgfSk7XG5cbiAgICAgIG5hdGl2ZUFkLm9uTG9hZCgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oJ2FkIGRhdGEgbG9hZGVkOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgIHRoaXMuYWRJdGVtRGF0YSA9IGRhdGEuYWRMaXN0WzBdXG4gICAgICB9KTtcblxuICAgICAgbmF0aXZlQWQub25FcnJvcigoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdsb2FkIGFkIGVycm9yOicgKyBKU09OLnN0cmluZ2lmeShlKSk7XG4gICAgICAgIGNvbnN0IGVyckNvZGUgPSBlLmVyckNvZGVcbiAgICAgICAgY29uc3QgZXJyTXNnID0gZS5lcnJNc2dcbiAgICAgIH0pO1xuICAgICAgbmF0aXZlQWQubG9hZCgpO1xuICAgIH0sXG5cbiAgICBvcGVuU2hhcmUoKSB7XG4gICAgICBsZXQgc2hhcmV0ZXh0ID0gdGhpcy50ZXh0O1xuICAgICAgc2hhcmV0ZXh0ICs9IFwiXFxuXFxu0JDQvdC10LrQtNC+0YLRiywg0LHQsNC50LrQuCwg0YDQtdCw0LvRjNC90YvQtSDRgdC80LXRiNC90YvQtSDQuNGB0YLQvtGA0LjQuCDQuNC3INC20LjQt9C90LguXFxuXCI7XG4gICAgICBzaGFyZXRleHQgKz0gXCJodHRwczovL2FwcGdhbGxlcnkuaHVhd2VpLmNvbS8jL2FwcC9DMTAzMjcwNDg1XCI7ICAgICAgXG4gICAgICBzaGFyZS5zaGFyZSh7XG4gICAgICAgIHR5cGU6IFwidGV4dC9odG1sXCIsXG4gICAgICAgIGRhdGE6IHNoYXJldGV4dCxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgc3VjY2Vzc1wiKTtcbiAgICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbihkYXRhLCBjb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgZmFpbCwgY29kZT1cIiArIGNvZGUpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbjwvc2NyaXB0PiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0tBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQUNBO0FBZ0NBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUF6RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9