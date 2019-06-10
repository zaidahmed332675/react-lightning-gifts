/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js?" + "89b69a2d" + ""
/******/ 	}
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/modules/app/core.styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/modules/app/core.styles.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader!antd/dist/antd.css */ "./node_modules/css-loader/index.js!./node_modules/antd/dist/antd.css"), "");

// module
exports.push([module.i, ".scale-to-parent {\n  width: 100%; }\n\n.img-rounded {\n  border-radius: 4px; }\n\n.avenir {\n  letter-spacing: 0;\n  font-family: \"Avenir-Heavy\", 'SF UI Display', \"Helvetica Neue For Number\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\n.banner-text {\n  font-size: 68px;\n  font-weight: 600;\n  line-height: 76px; }\n\n.create-box .ant-card-head {\n  text-align: center; }\n\n.create-box .ant-card-body {\n  height: 100%; }\n\nh1 {\n  font-size: 2em;\n  margin-block-start: 0px;\n  margin-block-end: 0px;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px; }\n\nimg {\n  max-width: 100%; }\n\n#root, #app {\n  height: 100%;\n  width: 100%; }\n\n.layout {\n  height: 100%;\n  max-width: 1200px;\n  margin: 0px auto;\n  background: white; }\n\n@media only screen and (max-width: 575px) {\n  .ant-layout-content, .ant-layout-header {\n    padding: 0px 24px; }\n  .hide-mobile {\n    display: none; } }\n\n@media only screen and (min-width: 576px) {\n  .ant-layout-content, .ant-layout-header {\n    padding: 0px 40px; }\n  .hide-desktop {\n    display: none; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _app = __webpack_require__(/*! modules/app */ "./src/modules/app/index.js");

var _app2 = _interopRequireDefault(_app);

var _store = __webpack_require__(/*! ./store */ "./src/store/index.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module Dependencies
_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_app2.default, null)
), document.getElementById('root')); // NPM Dependencies

/***/ }),

/***/ "./src/lib/redux.js":
/*!**************************!*\
  !*** ./src/lib/redux.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Simple action creator
 * @param {String} type - action type
 * @returns {Function} action creator function which helps to inject payloads into an action
 */
var createActionCreator = exports.createActionCreator = function createActionCreator(type) {
    return function (payload, meta) {
        return {
            type: type,
            payload: payload,
            meta: meta
        };
    };
};

/**
 * Signal action creator
 * @example
 * // returns {
 * //   REQUEST: 'SIGNAL/ASSETS/INIT/REQUEST',
 * //   SUCCESS: 'SIGNAL/ASSETS/INIT/SUCCESS',
 * //   FAILURE: 'SIGNAL/ASSETS/INIT/FAILURE',
 * //   request: arg => { type: 'SIGNAL/ASSETS/INIT/REQUEST', data: arg },
 * //   success: arg => { type: 'SIGNAL/ASSETS/INIT/SUCCESS', data: arg },
 * //   failure: arg => { type: 'SIGNAL/ASSETS/INIT/FAILURE', data: arg }
 * // }
 * createSignalAction('ASSETS', 'INIT')
 * @param {String} moduleName - name of module
 * @param {String} actionBasename - name of action
 * @returns {Object} signal action events and creators
 */
var createSignalAction = exports.createSignalAction = function createSignalAction(moduleName, actionBasename) {
    return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce(function (prev, actionSuffix) {
        prev[actionSuffix] = 'SIGNAL/' + moduleName + '/' + actionBasename + '/' + actionSuffix;
        prev[actionSuffix.toLowerCase()] = createActionCreator(prev[actionSuffix]);

        return prev;
    }, {});
};

/**
 * Delta action creator
 * @param {String} moduleName - name of module
 * @param {String} actionBasename - name of action
 * @returns {string} a single delta action event
 */
var createDeltaAction = exports.createDeltaAction = function createDeltaAction(moduleName, actionBasename) {
    return 'DELTA/' + moduleName + '/' + actionBasename;
};

/**
 * web worker action creator
 * @param {String} type - action type
 * @returns {Function} action creator function which helps to inject payloads into an action
 */
var createWorkerActionCreator = exports.createWorkerActionCreator = function createWorkerActionCreator(type) {
    return function (payload) {
        return {
            meta: { webWorker: true },
            type: type,
            payload: payload
        };
    };
};

/**
 * Web worker action creator
 * @example
 * // returns {
 * //   REQUEST: 'WEB_WORKER/ASSETS/INIT/REQUEST',
 * //   SUCCESS: 'WEB_WORKER/ASSETS/INIT/SUCCESS',
 * //   FAILURE: 'WEB_WORKER/ASSETS/INIT/FAILURE',
 * //   request: arg => { type: 'WEB_WORKER/ASSETS/INIT/REQUEST', data: arg },
 * //   success: arg => { type: 'WEB_WORKER/ASSETS/INIT/SUCCESS', data: arg },
 * //   failure: arg => { type: 'WEB_WORKER/ASSETS/INIT/FAILURE', data: arg }
 * // }
 * createWebWorkerAction('ASSETS', 'INIT')
 * @param {String} moduleName - name of module
 * @param {String} actionBasename - name of action
 * @returns {Object} signal action events and creators
 */
var createWebWorkerAction = exports.createWebWorkerAction = function createWebWorkerAction(moduleName, actionBasename) {
    return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce(function (prev, actionSuffix) {
        prev[actionSuffix] = 'WEB_WORKER/' + moduleName + '/' + actionBasename + '/' + actionSuffix;
        prev[actionSuffix.toLowerCase()] = createWorkerActionCreator(prev[actionSuffix]);
        return prev;
    }, {});
};

/***/ }),

/***/ "./src/modules/app/actions.js":
/*!************************************!*\
  !*** ./src/modules/app/actions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateErrorState = exports.updateApplicationState = exports.UPDATE_ERROR_STATE_DELTA = exports.UPDATE_APPLICATION_STATE_DELTA = exports.initApplicationSignal = exports.UPDATE_ERROR_STATE = exports.UPDATE_APPLICATION_STATE = exports.INIT = undefined;

var _redux = __webpack_require__(/*! lib/redux */ "./src/lib/redux.js");

var MODULE_NAME = 'APP';

// Action Types
// Lib Dependencies
var INIT = exports.INIT = 'INIT';
var UPDATE_APPLICATION_STATE = exports.UPDATE_APPLICATION_STATE = 'UPDATE_APPLICATION_STATE';
var UPDATE_ERROR_STATE = exports.UPDATE_ERROR_STATE = 'UPDATE_ERROR_STATE';

// Signals
var initApplicationSignal = exports.initApplicationSignal = (0, _redux.createSignalAction)(MODULE_NAME, INIT);

// Deltas
var UPDATE_APPLICATION_STATE_DELTA = exports.UPDATE_APPLICATION_STATE_DELTA = (0, _redux.createDeltaAction)(MODULE_NAME, UPDATE_APPLICATION_STATE);
var UPDATE_ERROR_STATE_DELTA = exports.UPDATE_ERROR_STATE_DELTA = (0, _redux.createDeltaAction)(MODULE_NAME, UPDATE_ERROR_STATE);

// Action Creators
var updateApplicationState = exports.updateApplicationState = (0, _redux.createActionCreator)(UPDATE_APPLICATION_STATE_DELTA);
var updateErrorState = exports.updateErrorState = (0, _redux.createActionCreator)(UPDATE_ERROR_STATE_DELTA);

/***/ }),

/***/ "./src/modules/app/core.styles.scss":
/*!******************************************!*\
  !*** ./src/modules/app/core.styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./core.styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/modules/app/core.styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/modules/app/index.js":
/*!**********************************!*\
  !*** ./src/modules/app/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

__webpack_require__(/*! ./core.styles.scss */ "./src/modules/app/core.styles.scss");

var _router = __webpack_require__(/*! ./router */ "./src/modules/app/router.js");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Local Dependencies
// NPM Dependencies
var NODE_ENV = "prod";

// UI Dependencies

// import PropTypes from 'prop-types';

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content;


var App = function App() {
    return _react2.default.createElement(
        _antd.Layout,
        { className: 'layout' },
        _react2.default.createElement(
            Header,
            { style: { background: 'white' } },
            _react2.default.createElement(
                _antd.Row,
                null,
                _react2.default.createElement(
                    _antd.Col,
                    { span: 16 },
                    _react2.default.createElement(
                        'span',
                        null,
                        'Lightning in a box'
                    )
                ),
                _react2.default.createElement(
                    _antd.Col,
                    { span: 8, style: { textAlign: 'right' } },
                    _react2.default.createElement(
                        'span',
                        null,
                        NODE_ENV
                    )
                )
            )
        ),
        _react2.default.createElement(
            Content,
            { style: { height: '100%' } },
            _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(_router2.default, null)
            )
        )
    );
};

exports.default = (0, _reactRedux.connect)()(App);

/***/ }),

/***/ "./src/modules/app/reducer.js":
/*!************************************!*\
  !*** ./src/modules/app/reducer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialState = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = applicationReducer;

var _actions = __webpack_require__(/*! ./actions */ "./src/modules/app/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initial state for application reducer
 * @type {Object}
 */
var initialState = exports.initialState = {
    isLoading: true,
    initialised: false,
    error: null
};

/**
 * Update application state
 * @param {object} state - Application state
 * @param {object} payload - Action payload
 * @param {boolean} payload.isLoading - True if the application is loading
 * @param {boolean} payload.initialised - True if the application has been initialised
 * @returns {object} Updated application state
 */
// Local Dependencies
function updateApplicationState(state, _ref) {
    var isLoading = _ref.isLoading,
        initialised = _ref.initialised;

    return (0, _extends3.default)({}, state, {
        isLoading: isLoading,
        initialised: initialised
    });
}

/**
 * Update error state.
 * @param {object} state - Application state
 * @param {object} payload - Action payload
 * @param {object|null} payload.error - Error that occured within application
 * @returns {object} Updated application state
 */
function updateErrorState(state, _ref2) {
    var error = _ref2.error;

    return (0, _extends3.default)({}, state, {
        error: error
    });
}

/**
 * To store the application initialisation state
 * @param {object} state - initialisation state
 * @param {boolean} state.isLoading - true if the the application is in initialisation process
 * @param {boolean} state.initialised - true if the the application is initialised
 * @param {object|null} state.error - the error occurred in initialisation process
 * @param {object} action - The action type and data which has been dispatched
 * @param {string} action.type - action event type
 * @param {object} action.payload - data object carried through action
 * @returns {object} new state object returned by reducer function
 */
function applicationReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _actions.UPDATE_APPLICATION_STATE_DELTA:
            return updateApplicationState(state, action.payload);
        case _actions.UPDATE_ERROR_STATE_DELTA:
            return updateErrorState(state, action.payload);
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/modules/app/router.js":
/*!***********************************!*\
  !*** ./src/modules/app/router.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _notFound = __webpack_require__(/*! modules/error/pages/not-found */ "./src/modules/error/pages/not-found.js");

var _notFound2 = _interopRequireDefault(_notFound);

var _landingPage = __webpack_require__(/*! modules/create/pages/landing-page */ "./src/modules/create/pages/landing-page.js");

var _landingPage2 = _interopRequireDefault(_landingPage);

var _redeemPage = __webpack_require__(/*! modules/redeem/pages/redeem-page */ "./src/modules/redeem/pages/redeem-page.js");

var _redeemPage2 = _interopRequireDefault(_redeemPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RouterMap
 */
var RouterMap = function RouterMap() {
    return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _landingPage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/redeem/:id', component: _redeemPage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _notFound2.default })
    );
};

// Module Dependencies
// NPM Dependencies
exports.default = RouterMap;

/***/ }),

/***/ "./src/modules/app/sagas.js":
/*!**********************************!*\
  !*** ./src/modules/app/sagas.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.workerInitApplication = workerInitApplication;
exports.bootSaga = bootSaga;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _actions = __webpack_require__(/*! ./actions */ "./src/modules/app/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(workerInitApplication),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(bootSaga); // NPM Dependencies


// Local Dependencies


var _process$env = Object({"NODE_ENV":"prod","APP_VERSION":"0.1.1"}),
    NODE_ENV = _process$env.NODE_ENV,
    APP_VERSION = _process$env.APP_VERSION;

/**
 * To initialise the application by preparing all needed data, including
 * session data.
 * @returns {object} Generator object
 */

function workerInitApplication() {
    var error;
    return _regenerator2.default.wrap(function workerInitApplication$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return (0, _effects.put)((0, _actions.updateApplicationState)({
                        isLoading: false,
                        initialised: true
                    }));

                case 3:

                    /* eslint-disable-next-line no-console */
                    console.log('Lightning in a Box v' + APP_VERSION + ' ' + NODE_ENV + ' initialized');

                    _context.next = 6;
                    return (0, _effects.put)(_actions.initApplicationSignal.success());

                case 6:
                    _context.next = 12;
                    break;

                case 8:
                    _context.prev = 8;
                    _context.t0 = _context['catch'](0);
                    _context.next = 12;
                    return (0, _effects.put)(_actions.initApplicationSignal.failure({ error: _context.t0 }));

                case 12:
                    _context.prev = 12;
                    _context.next = 15;
                    return (0, _effects.cancelled)();

                case 15:
                    if (!_context.sent) {
                        _context.next = 19;
                        break;
                    }

                    error = new Error('Application boot up is cancelled');
                    _context.next = 19;
                    return (0, _effects.put)(_actions.initApplicationSignal.failure({ error: error }));

                case 19:
                    return _context.finish(12);

                case 20:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[0, 8, 12, 20]]);
}

/**
 * Watch for SIGNAL/app/INIT/REQUEST event and invoke the initApplication
 * generator function
 * @returns {object} Generator object
 */
function bootSaga() {
    return _regenerator2.default.wrap(function bootSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeLatest)(_actions.initApplicationSignal.REQUEST, workerInitApplication);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

exports.default = [(0, _effects.fork)(bootSaga)];

/***/ }),

/***/ "./src/modules/create/actions.js":
/*!***************************************!*\
  !*** ./src/modules/create/actions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateInvoicePaymentStatus = exports.replaceInvoiceStatus = exports.UPDATE_INVOICE_PAYMENT_STATUS_DELTA = exports.REPLACE_INVOICE_STATUS_DELTA = exports.stopRealTimeCheckInvoiceStatusSignal = exports.startRealTimeCheckInvoiceStatusSignal = exports.checkInvoiceStatusSignal = exports.createInvoiceSignal = exports.UPDATE_INVOICE_PAYMENT_STATUS = exports.STOP_RT_CHECK_INVOICE_STATUS = exports.START_RT_CHECK_INVOICE_STATUS = exports.CHECK_INVOICE_STATUS = exports.REPLACE_INVOICE_STATUS = exports.CREATE_INVOICE = exports.MODULE_NAME = undefined;

var _redux = __webpack_require__(/*! lib/redux */ "./src/lib/redux.js");

// Module Name
var MODULE_NAME = exports.MODULE_NAME = 'CREATE';

// Action Types
// Lib Dependencies
var CREATE_INVOICE = exports.CREATE_INVOICE = 'CREATE_INVOICE';
var REPLACE_INVOICE_STATUS = exports.REPLACE_INVOICE_STATUS = 'REPLACE_INVOICE_STATUS';
var CHECK_INVOICE_STATUS = exports.CHECK_INVOICE_STATUS = 'CHECK_INVOICE_STATUS';
var START_RT_CHECK_INVOICE_STATUS = exports.START_RT_CHECK_INVOICE_STATUS = 'START_RT_CHECK_INVOICE_STATUS';
var STOP_RT_CHECK_INVOICE_STATUS = exports.STOP_RT_CHECK_INVOICE_STATUS = 'STOP_RT_CHECK_INVOICE_STATUS';
var UPDATE_INVOICE_PAYMENT_STATUS = exports.UPDATE_INVOICE_PAYMENT_STATUS = 'UPDATE_INVOICE_PAYMENT_STATUS';

// Signals
var createInvoiceSignal = exports.createInvoiceSignal = (0, _redux.createSignalAction)(MODULE_NAME, CREATE_INVOICE);
var checkInvoiceStatusSignal = exports.checkInvoiceStatusSignal = (0, _redux.createSignalAction)(MODULE_NAME, CHECK_INVOICE_STATUS);
var startRealTimeCheckInvoiceStatusSignal = exports.startRealTimeCheckInvoiceStatusSignal = (0, _redux.createSignalAction)(MODULE_NAME, START_RT_CHECK_INVOICE_STATUS);
var stopRealTimeCheckInvoiceStatusSignal = exports.stopRealTimeCheckInvoiceStatusSignal = (0, _redux.createSignalAction)(MODULE_NAME, STOP_RT_CHECK_INVOICE_STATUS);

// Deltas
var REPLACE_INVOICE_STATUS_DELTA = exports.REPLACE_INVOICE_STATUS_DELTA = (0, _redux.createDeltaAction)(MODULE_NAME, REPLACE_INVOICE_STATUS);
var UPDATE_INVOICE_PAYMENT_STATUS_DELTA = exports.UPDATE_INVOICE_PAYMENT_STATUS_DELTA = (0, _redux.createDeltaAction)(MODULE_NAME, UPDATE_INVOICE_PAYMENT_STATUS);
// export const UPDATE_ERROR_STATE_DELTA = createDeltaAction(MODULE_NAME, UPDATE_ERROR_STATE);

// Action Creators
var replaceInvoiceStatus = exports.replaceInvoiceStatus = (0, _redux.createActionCreator)(REPLACE_INVOICE_STATUS_DELTA);
var updateInvoicePaymentStatus = exports.updateInvoicePaymentStatus = (0, _redux.createActionCreator)(UPDATE_INVOICE_PAYMENT_STATUS_DELTA);

/***/ }),

/***/ "./src/modules/create/components/create-box.js":
/*!*****************************************************!*\
  !*** ./src/modules/create/components/create-box.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _createForm = __webpack_require__(/*! ../forms/create-form */ "./src/modules/create/forms/create-form.js");

var _createForm2 = _interopRequireDefault(_createForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes from 'prop-types';

// UI Dependencies
var CreateBox = function (_Component) {
    (0, _inherits3.default)(CreateBox, _Component);

    function CreateBox() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CreateBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CreateBox.__proto__ || (0, _getPrototypeOf2.default)(CreateBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            activeTab: 'basic'
        }, _this.onTabChange = function (key) {
            _this.setState({ activeTab: key });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CreateBox, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var activeTab = this.state.activeTab;


            return _react2.default.createElement(
                _antd.Card,
                {
                    className: 'create-box',
                    style: { width: '100%' },
                    tabList: [{ key: 'basic', tab: 'Basic' }, { key: 'advanced', tab: 'Advanced' }],
                    activeTabKey: activeTab,
                    onTabChange: function onTabChange(key) {
                        return _this2.onTabChange(key);
                    }
                },
                _react2.default.createElement(
                    _antd.Row,
                    { type: 'flex', align: 'middle', style: { height: '100%', minHeight: 200 } },
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 24, style: { textAlign: 'center' } },
                        activeTab === 'basic' ? _react2.default.createElement(_createForm2.default, null) : _react2.default.createElement(
                            'p',
                            null,
                            'Coming soon!'
                        )
                    )
                )
            );
        }
    }]);
    return CreateBox;
}(_react.Component);

// Local Dependencies
// NPM Dependencies


exports.default = CreateBox;

/***/ }),

/***/ "./src/modules/create/forms/create-form.js":
/*!*************************************************!*\
  !*** ./src/modules/create/forms/create-form.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _qrcode = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");

var _qrcode2 = _interopRequireDefault(_qrcode);

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _emoji = __webpack_require__(/*! utils/components/emoji */ "./src/utils/components/emoji.js");

var _emoji2 = _interopRequireDefault(_emoji);

var _actions = __webpack_require__(/*! ../actions */ "./src/modules/create/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Util Dependencies
// NPM Dependencies
var CreateForm = function (_Component) {
    (0, _inherits3.default)(CreateForm, _Component);

    function CreateForm(props) {
        (0, _classCallCheck3.default)(this, CreateForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CreateForm.__proto__ || (0, _getPrototypeOf2.default)(CreateForm)).call(this, props));

        _this.componentDidUpdate = function (prevProps) {
            if (_this.props.invoiceStatus !== prevProps.invoiceStatus) {
                _this.setState({
                    loading: false
                });
            }
        };

        _this.componentWillUnmount = function () {
            var stopRealTimeCheckInvoiceStatus = _this.props.stopRealTimeCheckInvoiceStatus;


            stopRealTimeCheckInvoiceStatus();
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var _this$props = _this.props,
                form = _this$props.form,
                createInvoice = _this$props.createInvoice;


            form.validateFields(function (err, values) {
                if (!err) {
                    var amount = values.amount;


                    createInvoice({ amount: amount });

                    _this.setState({
                        loading: true
                    });
                }
            });
        };

        _this.validateAmount = function (rule, value, callback) {
            if (!_lodash2.default.isNumber(value)) {
                callback('Please enter numbers only');
            } else if (value < 1) {
                callback('Negative values not supported');
            } else if (value % 1 !== 0) {
                callback('Decimals not supported');
            } else if (value > 100000) {
                callback('Only gifts under 100,000 sats supported in beta');
            } else {
                callback();
            }
        };

        _this.state = {
            loading: false
        };
        return _this;
    }

    (0, _createClass3.default)(CreateForm, [{
        key: 'render',
        value: function render() {
            var loading = this.state.loading;
            var invoiceStatus = this.props.invoiceStatus;
            var getFieldDecorator = this.props.form.getFieldDecorator;


            if (loading) {
                return _react2.default.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    _react2.default.createElement(_antd.Spin, { tip: 'loading...', size: 'large' })
                );
            }

            if (!_lodash2.default.isEmpty(invoiceStatus)) {
                var lightningInvoice = invoiceStatus.lightning_invoice,
                    amount = invoiceStatus.amount,
                    status = invoiceStatus.status,
                    orderId = invoiceStatus.order_id;


                if (status === 'paid') {
                    return _react2.default.createElement(
                        _react.Fragment,
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(_emoji2.default, { label: 'confeti', symbol: '\uD83C\uDF8A\uFE0F' }),
                            ' ',
                            _react2.default.createElement(
                                'b',
                                null,
                                'Payment received!'
                            ),
                            ' ',
                            _react2.default.createElement(_emoji2.default, { label: 'confeti', symbol: '\uD83C\uDF8A\uFE0F' })
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: 'redeem/' + orderId },
                                'View your redeemable Bitcoin gift'
                            )
                        )
                    );
                }

                return _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Pay Bolt-11 invoice with a Lightning compatible wallet to complete your gift card ',
                        _react2.default.createElement(_emoji2.default, { label: 'point-down', symbol: '\uD83D\uDC47\uFE0F' })
                    ),
                    _react2.default.createElement(_qrcode2.default, {
                        value: lightningInvoice.payreq,
                        size: 128
                    }),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'b',
                            null,
                            amount,
                            ' sats'
                        )
                    ),
                    _react2.default.createElement(_antd.Input, { addonAfter: _react2.default.createElement(_antd.Icon, { type: 'copy' }), value: lightningInvoice.payreq })
                );
            }

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    _antd.Form,
                    { onSubmit: this.handleSubmit, layout: 'vertical', hideRequiredMark: true, style: { textAlign: 'center' } },
                    _react2.default.createElement(
                        _antd.Form.Item,
                        null,
                        getFieldDecorator('amount', {
                            rules: [{ validator: this.validateAmount }]
                        })(_react2.default.createElement(_antd.InputNumber, {
                            style: { width: '100%' },
                            placeholder: 'Gift amount (satoshi)',
                            size: 'large',
                            addonAfter: 'sats',
                            min: 1
                        }))
                    ),
                    _react2.default.createElement(
                        _antd.Form.Item,
                        { style: { marginBottom: 0 } },
                        _react2.default.createElement(
                            _antd.Button,
                            { type: 'primary', size: 'large', style: { width: '100%' }, htmlType: 'submit' },
                            'Create'
                        )
                    )
                ),
                _react2.default.createElement(
                    'small',
                    null,
                    'A Bolt-11 invoice will be generated'
                )
            );
        }
    }]);
    return CreateForm;
}(_react.Component);

// Local Dependencies


// UI Dependencies


CreateForm.propTypes = {
    form: _propTypes2.default.shape({
        getFieldDecorator: _propTypes2.default.func.isRequired,
        validateFields: _propTypes2.default.func.isRequired
    }).isRequired,
    // history: PropTypes.object.isRequired,
    invoiceStatus: _propTypes2.default.object.isRequired,
    createInvoice: _propTypes2.default.func.isRequired,
    stopRealTimeCheckInvoiceStatus: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
    return (0, _extends3.default)({}, state, {
        invoiceStatus: state.create.invoiceStatus
    });
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        createInvoice: _actions.createInvoiceSignal.request,
        stopRealTimeCheckInvoiceStatus: _actions.stopRealTimeCheckInvoiceStatusSignal.request
    }, dispatch);
};

var WrappedCreateForm = _antd.Form.create()(CreateForm);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WrappedCreateForm));

/***/ }),

/***/ "./src/modules/create/pages/landing-page.js":
/*!**************************************************!*\
  !*** ./src/modules/create/pages/landing-page.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _emoji = __webpack_require__(/*! utils/components/emoji */ "./src/utils/components/emoji.js");

var _emoji2 = _interopRequireDefault(_emoji);

var _createBox = __webpack_require__(/*! ../components/create-box */ "./src/modules/create/components/create-box.js");

var _createBox2 = _interopRequireDefault(_createBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Util Dependencies
var LandingPage = function (_Component) {
    (0, _inherits3.default)(LandingPage, _Component);

    function LandingPage() {
        (0, _classCallCheck3.default)(this, LandingPage);
        return (0, _possibleConstructorReturn3.default)(this, (LandingPage.__proto__ || (0, _getPrototypeOf2.default)(LandingPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(LandingPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _antd.Row,
                { type: 'flex', align: 'middle', style: { height: '100%' } },
                _react2.default.createElement(
                    _antd.Col,
                    { xs: 24, sm: { span: 12 } },
                    _react2.default.createElement(
                        'div',
                        { style: { marginBottom: 30 } },
                        _react2.default.createElement(
                            'h1',
                            { style: { marginBottom: 20 }, className: 'avenir banner-text' },
                            'Bitcoin gifts, minus the fees'
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: { marginBottom: 10, fontSize: 24 } },
                            'Create fee-less Bitcoin gift cards to share with friends, family and your haters.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Powered by Lightning network ',
                            _react2.default.createElement(_emoji2.default, { label: 'lighting', symbol: '\u26A1\uFE0F' })
                        )
                    )
                ),
                _react2.default.createElement(
                    _antd.Col,
                    { xs: 24, sm: { span: 8, offset: 4 } },
                    _react2.default.createElement(
                        'h2',
                        { style: { marginBottom: 20, textAlign: 'center' } },
                        'Create a Bitcoin gift in 30 seconds ',
                        _react2.default.createElement(_emoji2.default, { label: 'point-down', symbol: '\uD83D\uDC47\uFE0F' })
                    ),
                    _react2.default.createElement(_createBox2.default, null)
                )
            );
        }
    }]);
    return LandingPage;
}(_react.Component);

// Local Dependencies


// UI Dependencies
// NPM Dependencies


LandingPage.propTypes = {
    // match: PropTypes.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
    return (0, _extends3.default)({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        // createProject: createProjectSignal.request
    }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LandingPage);

/***/ }),

/***/ "./src/modules/create/reducer.js":
/*!***************************************!*\
  !*** ./src/modules/create/reducer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createReducer;

var _actions = __webpack_require__(/*! ./actions */ "./src/modules/create/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    invoiceStatus: {}
}; // Local Dependencies


function replaceInvoiceStatus(state, invoiceStatus) {
    return (0, _extends3.default)({}, state, {
        invoiceStatus: invoiceStatus
    });
}

function updateInvoicePaymentStatus(state, paymentStatus) {
    return (0, _extends3.default)({}, state, {
        invoiceStatus: (0, _extends3.default)({}, state.invoiceStatus, { status: paymentStatus.status })
    });
}

function createReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _actions.REPLACE_INVOICE_STATUS_DELTA:
            return replaceInvoiceStatus(state, action.payload);
        case _actions.UPDATE_INVOICE_PAYMENT_STATUS_DELTA:
            return updateInvoicePaymentStatus(state, action.payload);
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/modules/create/sagas.js":
/*!*************************************!*\
  !*** ./src/modules/create/sagas.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.createInvoiceOnRequest = createInvoiceOnRequest;
exports.watchCreateInvoiceSignal = watchCreateInvoiceSignal;
exports.checkInvoiceStatusOnRequest = checkInvoiceStatusOnRequest;
exports.watchCheckInvoiceStatusSignal = watchCheckInvoiceStatusSignal;
exports.startRealTimeCheckInvoiceStatusOnRequest = startRealTimeCheckInvoiceStatusOnRequest;
exports.watchStartRealTimeCheckInvoiceStatusSignal = watchStartRealTimeCheckInvoiceStatusSignal;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _reduxSaga = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");

var _services = __webpack_require__(/*! ./services */ "./src/modules/create/services.js");

var _actions = __webpack_require__(/*! ./actions */ "./src/modules/create/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(createInvoiceOnRequest),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(watchCreateInvoiceSignal),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(checkInvoiceStatusOnRequest),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(watchCheckInvoiceStatusSignal),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(startRealTimeCheckInvoiceStatusOnRequest),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(watchStartRealTimeCheckInvoiceStatusSignal); // NPM Dependencies


// Local Dependencies


function createInvoiceOnRequest(_ref) {
    var payload = _ref.payload;
    var amount, invoice;
    return _regenerator2.default.wrap(function createInvoiceOnRequest$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    amount = payload.amount;
                    _context.next = 4;
                    return (0, _effects.call)(_services.createInvoice, amount);

                case 4:
                    invoice = _context.sent;
                    _context.next = 7;
                    return (0, _effects.put)((0, _actions.replaceInvoiceStatus)(invoice));

                case 7:
                    _context.next = 9;
                    return (0, _effects.put)(_actions.createInvoiceSignal.success(invoice));

                case 9:
                    _context.next = 11;
                    return (0, _effects.put)(_actions.startRealTimeCheckInvoiceStatusSignal.request({ chargeId: invoice.chargeId }));

                case 11:
                    _context.next = 17;
                    break;

                case 13:
                    _context.prev = 13;
                    _context.t0 = _context['catch'](0);
                    _context.next = 17;
                    return (0, _effects.put)(_actions.createInvoiceSignal.failure({ error: _context.t0 }));

                case 17:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[0, 13]]);
}

function watchCreateInvoiceSignal() {
    return _regenerator2.default.wrap(function watchCreateInvoiceSignal$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeLatest)(_actions.createInvoiceSignal.REQUEST, createInvoiceOnRequest);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

function checkInvoiceStatusOnRequest(_ref2) {
    var payload = _ref2.payload;
    var chargeId, invoiceStatus;
    return _regenerator2.default.wrap(function checkInvoiceStatusOnRequest$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.prev = 0;
                    chargeId = payload.chargeId;
                    _context3.next = 4;
                    return (0, _effects.call)(_services.getInvoiceStatus, chargeId);

                case 4:
                    invoiceStatus = _context3.sent;
                    _context3.next = 7;
                    return (0, _effects.put)((0, _actions.replaceInvoiceStatus)(invoiceStatus));

                case 7:
                    _context3.next = 9;
                    return (0, _effects.put)(_actions.checkInvoiceStatusSignal.success(invoiceStatus));

                case 9:
                    _context3.next = 15;
                    break;

                case 11:
                    _context3.prev = 11;
                    _context3.t0 = _context3['catch'](0);
                    _context3.next = 15;
                    return (0, _effects.put)(_actions.checkInvoiceStatusSignal.failure({ error: _context3.t0 }));

                case 15:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this, [[0, 11]]);
}

function watchCheckInvoiceStatusSignal() {
    return _regenerator2.default.wrap(function watchCheckInvoiceStatusSignal$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _context4.next = 2;
                    return (0, _effects.takeLatest)(_actions.checkInvoiceStatusSignal.REQUEST, checkInvoiceStatusOnRequest);

                case 2:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this);
}

function startRealTimeCheckInvoiceStatusOnRequest(_ref3) {
    var payload = _ref3.payload;
    var chargeId, invoiceStatus;
    return _regenerator2.default.wrap(function startRealTimeCheckInvoiceStatusOnRequest$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    if (false) {}

                    chargeId = payload.chargeId;
                    _context5.prev = 2;
                    _context5.next = 5;
                    return (0, _effects.call)(_services.getInvoiceStatus, chargeId);

                case 5:
                    invoiceStatus = _context5.sent;
                    _context5.next = 8;
                    return (0, _effects.put)((0, _actions.updateInvoicePaymentStatus)(invoiceStatus));

                case 8:
                    if (!(invoiceStatus.status === 'paid')) {
                        _context5.next = 11;
                        break;
                    }

                    _context5.next = 11;
                    return (0, _effects.put)(_actions.stopRealTimeCheckInvoiceStatusSignal.request());

                case 11:
                    _context5.next = 13;
                    return (0, _effects.call)(_reduxSaga.delay, 5000);

                case 13:
                    _context5.next = 21;
                    break;

                case 15:
                    _context5.prev = 15;
                    _context5.t0 = _context5['catch'](2);
                    _context5.next = 19;
                    return (0, _effects.put)(_actions.startRealTimeCheckInvoiceStatusSignal.failure({ error: _context5.t0 }));

                case 19:
                    _context5.next = 21;
                    return (0, _effects.call)(_reduxSaga.delay, 15000);

                case 21:
                    _context5.next = 0;
                    break;

                case 23:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked5, this, [[2, 15]]);
}

function watchStartRealTimeCheckInvoiceStatusSignal() {
    var payload;
    return _regenerator2.default.wrap(function watchStartRealTimeCheckInvoiceStatusSignal$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    if (false) {}

                    _context6.next = 3;
                    return (0, _effects.take)(_actions.startRealTimeCheckInvoiceStatusSignal.REQUEST);

                case 3:
                    payload = _context6.sent;
                    _context6.next = 6;
                    return (0, _effects.race)([(0, _effects.call)(startRealTimeCheckInvoiceStatusOnRequest, payload), (0, _effects.take)(_actions.stopRealTimeCheckInvoiceStatusSignal.REQUEST)]);

                case 6:
                    _context6.next = 0;
                    break;

                case 8:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _marked6, this);
}

exports.default = [(0, _effects.fork)(watchCreateInvoiceSignal), (0, _effects.fork)(watchCheckInvoiceStatusSignal), (0, _effects.fork)(watchStartRealTimeCheckInvoiceStatusSignal)];

/***/ }),

/***/ "./src/modules/create/services.js":
/*!****************************************!*\
  !*** ./src/modules/create/services.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getInvoiceStatus = exports.createInvoice = exports.SERVER_URL = undefined;

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SERVER_URL = exports.SERVER_URL = 'https://node-satoshi-crate.glitch.me'; // NPM Dependencies
var createInvoice = exports.createInvoice = function createInvoice(amount) {
    return _axios2.default.post(SERVER_URL + '/create', { amount: amount }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return _promise2.default.reject(error);
    });
};

var getInvoiceStatus = exports.getInvoiceStatus = function getInvoiceStatus(chargeId) {
    return _axios2.default.get(SERVER_URL + '/status/' + chargeId).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return _promise2.default.reject(error);
    });
};

/***/ }),

/***/ "./src/modules/error/pages/not-found.js":
/*!**********************************************!*\
  !*** ./src/modules/error/pages/not-found.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Not Found Page Component
 */
var NotFoundPage = function NotFoundPage() {
    return _react2.default.createElement(
        _antd.Row,
        { type: 'flex', justify: 'start' },
        _react2.default.createElement(
            _antd.Col,
            null,
            'Whoops, page not found ',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                'Go to the home page.'
            )
        )
    );
};

// UI Dependencies
// NPM Dependencies
exports.default = NotFoundPage;

/***/ }),

/***/ "./src/modules/redeem/actions.js":
/*!***************************************!*\
  !*** ./src/modules/redeem/actions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.replaceGiftDetails = exports.REPLACE_GIFT_DETAILS_DELTA = exports.redeemGiftSignal = exports.getGiftDetailsSignal = exports.REDEEM_GIFT = exports.REPLACE_GIFT_DETAILS = exports.GET_GIFT_DETAILS = exports.MODULE_NAME = undefined;

var _redux = __webpack_require__(/*! lib/redux */ "./src/lib/redux.js");

// Module Name
var MODULE_NAME = exports.MODULE_NAME = 'REDEEM';

// Action Types
// Lib Dependencies
var GET_GIFT_DETAILS = exports.GET_GIFT_DETAILS = 'GET_GIFT_DETAILS';
var REPLACE_GIFT_DETAILS = exports.REPLACE_GIFT_DETAILS = 'REPLACE_GIFT_DETAILS';
var REDEEM_GIFT = exports.REDEEM_GIFT = 'REDEEM_GIFT';

// Signals
var getGiftDetailsSignal = exports.getGiftDetailsSignal = (0, _redux.createSignalAction)(MODULE_NAME, GET_GIFT_DETAILS);
var redeemGiftSignal = exports.redeemGiftSignal = (0, _redux.createSignalAction)(MODULE_NAME, REDEEM_GIFT);

// Deltas
var REPLACE_GIFT_DETAILS_DELTA = exports.REPLACE_GIFT_DETAILS_DELTA = (0, _redux.createDeltaAction)(MODULE_NAME, REPLACE_GIFT_DETAILS);

// Action Creators
var replaceGiftDetails = exports.replaceGiftDetails = (0, _redux.createActionCreator)(REPLACE_GIFT_DETAILS_DELTA);

/***/ }),

/***/ "./src/modules/redeem/pages/redeem-page.js":
/*!*************************************************!*\
  !*** ./src/modules/redeem/pages/redeem-page.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _emoji = __webpack_require__(/*! utils/components/emoji */ "./src/utils/components/emoji.js");

var _emoji2 = _interopRequireDefault(_emoji);

var _actions = __webpack_require__(/*! ../actions */ "./src/modules/redeem/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import CreateBox from '../components/create-box';

// Util Dependencies
var RedeemPage = function (_Component) {
    (0, _inherits3.default)(RedeemPage, _Component);

    function RedeemPage(props) {
        (0, _classCallCheck3.default)(this, RedeemPage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RedeemPage.__proto__ || (0, _getPrototypeOf2.default)(RedeemPage)).call(this, props));

        _this.componentDidMount = function () {
            var _this$props = _this.props,
                match = _this$props.match,
                getGiftDetails = _this$props.getGiftDetails;

            var orderId = Number(match.params.id);

            getGiftDetails({ orderId: orderId });
        };

        _this.state = {
            loading: false
        };
        return _this;
    }

    (0, _createClass3.default)(RedeemPage, [{
        key: 'render',
        value: function render() {
            var loading = this.state.loading;
            var _props = this.props,
                giftDetails = _props.giftDetails,
                match = _props.match;


            if (loading || giftDetails === 'notFound') {
                return _react2.default.createElement(
                    _antd.Row,
                    { type: 'flex', align: 'middle', style: { height: '100%' } },
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 24 },
                        _react2.default.createElement(
                            'div',
                            { style: { textAlign: 'center' } },
                            loading ? _react2.default.createElement(_antd.Spin, {
                                tip: 'loading...',
                                size: 'large'
                            }) : _react2.default.createElement(
                                'p',
                                null,
                                'Gift with ID \'' + match.params.id + '\' not found'
                            )
                        )
                    )
                );
            }

            return _react2.default.createElement(
                _antd.Row,
                { type: 'flex', align: 'middle', style: { height: '100%' } },
                _react2.default.createElement(
                    _antd.Col,
                    { span: 24 },
                    _react2.default.createElement(
                        'h1',
                        { style: { marginBottom: 20 }, className: 'avenir banner-text' },
                        'A gift from Satoshi, to you'
                    )
                )
            );
        }
    }]);
    return RedeemPage;
}(_react.Component);

// Local Dependencies


// UI Dependencies
// NPM Dependencies


RedeemPage.propTypes = {
    match: _propTypes2.default.object.isRequired,
    getGiftDetails: _propTypes2.default.func.isRequired,
    giftDetails: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};


var mapStateToProps = function mapStateToProps(state) {
    return (0, _extends3.default)({}, state, {
        giftDetails: state.redeem.giftDetails
    });
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        getGiftDetails: _actions.getGiftDetailsSignal.request
    }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RedeemPage);

/***/ }),

/***/ "./src/modules/redeem/reducer.js":
/*!***************************************!*\
  !*** ./src/modules/redeem/reducer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = redeemReducer;

var _actions = __webpack_require__(/*! ./actions */ "./src/modules/redeem/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    giftDetails: {}
}; // Local Dependencies


function replaceGiftDetails(state, giftDetails) {
    return (0, _extends3.default)({}, state, {
        giftDetails: giftDetails
    });
}

function redeemReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _actions.REPLACE_GIFT_DETAILS_DELTA:
            return replaceGiftDetails(state, action.payload);
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/modules/redeem/sagas.js":
/*!*************************************!*\
  !*** ./src/modules/redeem/sagas.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getGiftDetailsOnRequest = getGiftDetailsOnRequest;
exports.watchGetGiftDetailsSignal = watchGetGiftDetailsSignal;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _services = __webpack_require__(/*! ./services */ "./src/modules/redeem/services.js");

var _actions = __webpack_require__(/*! ./actions */ "./src/modules/redeem/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getGiftDetailsOnRequest),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(watchGetGiftDetailsSignal); // NPM Dependencies


// Local Dependencies


function getGiftDetailsOnRequest(_ref) {
    var payload = _ref.payload;
    var orderId, invoiceStatus;
    return _regenerator2.default.wrap(function getGiftDetailsOnRequest$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    orderId = payload.orderId;
                    _context.next = 4;
                    return (0, _effects.call)(_services.getGiftDetails, orderId);

                case 4:
                    invoiceStatus = _context.sent;
                    _context.next = 7;
                    return (0, _effects.put)((0, _actions.replaceGiftDetails)(invoiceStatus));

                case 7:
                    _context.next = 9;
                    return (0, _effects.put)(_actions.getGiftDetailsSignal.success(invoiceStatus));

                case 9:
                    _context.next = 15;
                    break;

                case 11:
                    _context.prev = 11;
                    _context.t0 = _context['catch'](0);
                    _context.next = 15;
                    return (0, _effects.put)(_actions.getGiftDetailsSignal.failure({ error: _context.t0 }));

                case 15:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[0, 11]]);
}

function watchGetGiftDetailsSignal() {
    return _regenerator2.default.wrap(function watchGetGiftDetailsSignal$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeLatest)(_actions.getGiftDetailsSignal.REQUEST, getGiftDetailsOnRequest);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

exports.default = [(0, _effects.fork)(watchGetGiftDetailsSignal)];

/***/ }),

/***/ "./src/modules/redeem/services.js":
/*!****************************************!*\
  !*** ./src/modules/redeem/services.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGiftDetails = exports.SERVER_URL = undefined;

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SERVER_URL = exports.SERVER_URL = 'https://node-satoshi-crate.glitch.me'; // NPM Dependencies
var getGiftDetails = exports.getGiftDetails = function getGiftDetails(orderId) {
    return _axios2.default.get(SERVER_URL + '/gift/' + orderId).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return _promise2.default.reject(error);
    });
};

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _actions = __webpack_require__(/*! modules/app/actions */ "./src/modules/app/actions.js");

var _reducers = __webpack_require__(/*! ./reducers */ "./src/store/reducers.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _middleware = __webpack_require__(/*! ./middleware */ "./src/store/middleware.js");

var _middleware2 = _interopRequireDefault(_middleware);

var _rootSaga = __webpack_require__(/*! ./rootSaga */ "./src/store/rootSaga.js");

var _rootSaga2 = _interopRequireDefault(_rootSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Single instance of the Redux Store.
 * @type {[type]}
 */


// Module Dependencies
var reduxStore = (0, _redux.createStore)((0, _reducers2.default)(), (0, _middleware2.default)());

// Bootstrap all sagas upon application initialisation.


// Local Dependencies
// NPM Dependencies
_middleware.reduxSagaMiddleware.run(_rootSaga2.default);

// Bootstrap the application upon DOMContentLoaded, with the BOOT action
// dispatched, the whole application initialisation chain will kick off.
document.addEventListener('DOMContentLoaded', function () {
    reduxStore.dispatch(_actions.initApplicationSignal.request());
});

exports.default = reduxStore;

/***/ }),

/***/ "./src/store/middleware.js":
/*!*********************************!*\
  !*** ./src/store/middleware.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduxSagaMiddleware = exports.devTools = undefined;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxSaga = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Filter out actions from the redux logger
 * @param  {object} state - Redux store state.
 * @param  {object} action - Action being passed to Redux.
 * @return {boolean} A boolean to determine whether to log the action.
 */
var filterActions = function filterActions(state, action) {
    if (!Object({"NODE_ENV":"prod","APP_VERSION":"0.1.1"}).REDUX_LOGGER_PREDICATE_REGEX) {
        return true;
    }

    var regex = new RegExp(Object({"NODE_ENV":"prod","APP_VERSION":"0.1.1"}).REDUX_LOGGER_PREDICATE_REGEX);
    return !action.type || !action.type.match(regex);
};

/**
 * Dev tools extension.
 * @type {object}
 */
// NPM Dependencies
var devTools = exports.devTools = window.devToolsExtension ? window.devToolsExtension({
    predicate: filterActions
}) : function (f) {
    return f;
};

/**
 * Redux saga middleware
 * @type {function}
 */
var reduxSagaMiddleware = exports.reduxSagaMiddleware = (0, _reduxSaga2.default)();

/**
 * Creates the middleware object to pass into redux.
 * @return {Object} An object containing all the middleware to load into redux.
 */
var getMiddleware = function getMiddleware() {
    return (0, _redux.compose)((0, _redux.applyMiddleware)(reduxSagaMiddleware, (0, _reduxLogger.createLogger)({
        predicate: filterActions
    })), devTools);
};

exports.default = getMiddleware;

/***/ }),

/***/ "./src/store/reducers.js":
/*!*******************************!*\
  !*** ./src/store/reducers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reducer = __webpack_require__(/*! modules/app/reducer */ "./src/modules/app/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(/*! modules/create/reducer */ "./src/modules/create/reducer.js");

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(/*! modules/redeem/reducer */ "./src/modules/redeem/reducer.js");

var _reducer6 = _interopRequireDefault(_reducer5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mapping of all reducers within the application.
 * @type {Object}
 */
// NPM Dependencies
var reducers = {
  application: _reducer2.default,
  create: _reducer4.default,
  redeem: _reducer6.default
};

/**
 * Combines all the reducers to pass into redux.
 * @return {Object} An object containing all the reducers to load into the redux store.
 */


// Module Dependencies
var getReducers = function getReducers() {
  return (0, _redux.combineReducers)(reducers);
};

exports.default = getReducers;

/***/ }),

/***/ "./src/store/rootSaga.js":
/*!*******************************!*\
  !*** ./src/store/rootSaga.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _sagas = __webpack_require__(/*! modules/app/sagas */ "./src/modules/app/sagas.js");

var _sagas2 = _interopRequireDefault(_sagas);

var _sagas3 = __webpack_require__(/*! modules/create/sagas */ "./src/modules/create/sagas.js");

var _sagas4 = _interopRequireDefault(_sagas3);

var _sagas5 = __webpack_require__(/*! modules/redeem/sagas */ "./src/modules/redeem/sagas.js");

var _sagas6 = _interopRequireDefault(_sagas5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(rootSaga); // NPM Dependencies


// Module Dependencies


/**
 * Prepare all the sagas to be bootstrapped right before starting of the application
 * @returns {object} Generator object
 */
function rootSaga() {
    return _regenerator2.default.wrap(function rootSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.all)([].concat((0, _toConsumableArray3.default)(_sagas2.default), (0, _toConsumableArray3.default)(_sagas4.default), (0, _toConsumableArray3.default)(_sagas6.default)));

                case 2:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

exports.default = rootSaga;

/***/ }),

/***/ "./src/utils/components/emoji.js":
/*!***************************************!*\
  !*** ./src/utils/components/emoji.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NPM Dependencies
var Emoji = function Emoji(_ref) {
    var symbol = _ref.symbol,
        label = _ref.label;
    return _react2.default.createElement(
        'span',
        {
            className: 'emoji',
            role: 'img',
            'aria-label': label,
            'aria-hidden': label
        },
        symbol
    );
};

Emoji.propTypes = {
    symbol: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired
};

exports.default = Emoji;

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map?89b69a2d