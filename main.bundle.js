/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Exo:400,700);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  width: 50%;\\r\\n  border: 1px solid #fff;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  border-bottom: 1px solid rgb(196, 196, 196);\\r\\n  width: 100%;\\r\\n  height: 45px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.title p {\\r\\n  padding-left: 10px;\\r\\n  font-size: 20px;\\r\\n  margin: 1px;\\r\\n}\\r\\n\\r\\n.input-section {\\r\\n  height: 35px;\\r\\n  width: 100%;\\r\\n  border-bottom: 1px solid rgb(196, 196, 196);\\r\\n  line-height: 35px;\\r\\n}\\r\\n\\r\\n.todo-input {\\r\\n  width: 90%;\\r\\n  height: 90%;\\r\\n  border: transparent;\\r\\n  padding-left: 10px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.lists {\\r\\n  border-bottom: 1px solid rgb(196, 196, 196);\\r\\n  list-style: none;\\r\\n  padding-left: 10px;\\r\\n  padding-right: 10px;\\r\\n  min-height: 25px;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.list:hover {\\r\\n  background-color: mistyrose;\\r\\n}\\r\\n\\r\\n.list:hover .desc {\\r\\n  background-color: mistyrose;\\r\\n}\\r\\n\\r\\n.list p {\\r\\n  margin: 1px;\\r\\n}\\r\\n\\r\\n.li-div {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n#btn {\\r\\n  background-color: lightgoldenrodyellow;\\r\\n  border: transparent;\\r\\n  height: 30px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.draggable {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.line {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.fa {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  padding-left: 8px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.area {\\r\\n  background: rgb(216, 248, 248);\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  top: 0;\\r\\n  position: absolute;\\r\\n  z-index: -1;\\r\\n}\\r\\n\\r\\n.circles {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.circles li {\\r\\n  background-color: mistyrose;\\r\\n  position: absolute;\\r\\n  display: block;\\r\\n  list-style: none;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  animation: animate 25s linear infinite;\\r\\n  bottom: -150px;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(1) {\\r\\n  left: 25%;\\r\\n  width: 80px;\\r\\n  height: 80px;\\r\\n  animation-delay: 0s;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(2) {\\r\\n  left: 10%;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  animation-delay: 2s;\\r\\n  animation-duration: 12s;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(3) {\\r\\n  left: 70%;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  animation-delay: 4s;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(4) {\\r\\n  left: 40%;\\r\\n  width: 60px;\\r\\n  height: 60px;\\r\\n  animation-delay: 0s;\\r\\n  animation-duration: 18s;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(5) {\\r\\n  left: 65%;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  animation-delay: 0s;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(6) {\\r\\n  left: 75%;\\r\\n  width: 110px;\\r\\n  height: 110px;\\r\\n  animation-delay: 3s;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(7) {\\r\\n  left: 35%;\\r\\n  width: 150px;\\r\\n  height: 150px;\\r\\n  animation-delay: 7s;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(8) {\\r\\n  left: 50%;\\r\\n  width: 25px;\\r\\n  height: 25px;\\r\\n  animation-delay: 15s;\\r\\n  animation-duration: 45s;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(9) {\\r\\n  left: 20%;\\r\\n  width: 15px;\\r\\n  height: 15px;\\r\\n  animation-delay: 2s;\\r\\n  animation-duration: 35s;\\r\\n}\\r\\n\\r\\n.circles li:nth-child(10) {\\r\\n  left: 85%;\\r\\n  width: 150px;\\r\\n  height: 150px;\\r\\n  animation-delay: 0s;\\r\\n  animation-duration: 11s;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addEditRemove.js":
/*!******************************!*\
  !*** ./src/addEditRemove.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShowAll\": () => (/* binding */ ShowAll),\n/* harmony export */   \"addActivity\": () => (/* binding */ addActivity),\n/* harmony export */   \"eliminateOne\": () => (/* binding */ eliminateOne),\n/* harmony export */   \"removeCompleteds\": () => (/* binding */ removeCompleteds),\n/* harmony export */   \"removeone\": () => (/* binding */ removeone),\n/* harmony export */   \"saveone\": () => (/* binding */ saveone)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\nconst theBigList = document.querySelector('.lists');\n\nfunction ShowAll(element) {\n  while (element.lastElementChild) {\n    element.removeChild(element.lastElementChild);\n  }\n}\n\nfunction removeCompleteds() {\n  const actualtodo = (0,_data__WEBPACK_IMPORTED_MODULE_0__.load)();\n  const result = actualtodo.filter((activity) => activity.completed === false);\n  for (let i = 0; i < result.length; i += 1) {\n    result[i].index = i;\n  }\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.save)(result);\n}\n\nfunction addActivity(text) {\n  const actualtodo = (0,_data__WEBPACK_IMPORTED_MODULE_0__.load)();\n  const { length } = actualtodo;\n  const newActivity = {\n    description: text,\n    completed: false,\n    id: Date(),\n    index: length,\n  };\n  actualtodo[length] = newActivity;\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.save)(actualtodo);\n}\n\nfunction eliminateOne(element) {\n  // eliminate one\n  const { id } = element;\n  const actualtodo = (0,_data__WEBPACK_IMPORTED_MODULE_0__.load)();\n  const result = actualtodo.filter((activity) => activity.id === id);\n  element.parentNode.removeChild(element);\n  const e = theBigList.querySelectorAll('.list');\n  for (let i = 0; i < result.length; i += 1) {\n    result[i].index = i;\n    e[i].id = i;\n  }\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.save)(result);\n}\n\nfunction saveone(element) {\n  const todolist = (0,_data__WEBPACK_IMPORTED_MODULE_0__.load)();\n  const index = element.parentNode.parentNode.id;\n  todolist[index].description = element.value;\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.save)(todolist);\n  return todolist;\n}\n\nfunction removeone(element) {\n  const todolist = (0,_data__WEBPACK_IMPORTED_MODULE_0__.load)();\n  const index = element.parentNode.id;\n  todolist.splice(index, 1);\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.save)(todolist);\n  return todolist;\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/addEditRemove.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compare\": () => (/* binding */ compare),\n/* harmony export */   \"load\": () => (/* binding */ load),\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"storageAvailable\": () => (/* binding */ storageAvailable)\n/* harmony export */ });\nlet todov = 0;\r\nconst defaultTodo = [];\r\n\r\nfunction storageAvailable(type) {\r\n  let storage;\r\n  try {\r\n    storage = window[type];\r\n    const x = '__storage_test__';\r\n    storage.setItem(x, x);\r\n    storage.removeItem(x);\r\n    return true;\r\n  } catch (e) {\r\n    return (\r\n      e instanceof DOMException\r\n      && (e.code === 22\r\n        || e.code === 1014\r\n        || e.name === 'QuotaExceededError'\r\n        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')\r\n      && storage\r\n      && storage.length !== 0\r\n    );\r\n  }\r\n}\r\n\r\nif (storageAvailable('localStorage')) {\r\n  todov = JSON.parse(localStorage.getItem('information'));\r\n  if (todov === null) {\r\n    todov = defaultTodo;\r\n  }\r\n} else {\r\n  todov = defaultTodo;\r\n}\r\nfunction save(variable) {\r\n  localStorage.setItem('information', JSON.stringify(variable));\r\n}\r\nfunction load() {\r\n  let variable = JSON.parse(localStorage.getItem('information'));\r\n  if (variable === null) {\r\n    variable = [];\r\n  }\r\n  return variable;\r\n}\r\nfunction compare(a, b) {\r\n  return a.index - b.index;\r\n}\r\n\n\n//# sourceURL=webpack://webpack-template/./src/data.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeContainer\": () => (/* binding */ makeContainer),\n/* harmony export */   \"makeDrageable\": () => (/* binding */ makeDrageable)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\r\n\r\nconst theBigList = document.querySelector('.lists');\r\n\r\nfunction getDragAfterElement(tdle, y) {\r\n  const dragableElements = [...tdle.querySelectorAll('.list:not(.dragging)')];\r\n\r\n  return dragableElements.reduce((closest, child) => {\r\n    const box = child.getBoundingClientRect();\r\n    const offset = y - box.top - box.height / 2;\r\n    if (offset < 0 && offset > closest.offset) {\r\n      return { offset, element: child };\r\n    } return closest;\r\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\r\n}\r\n\r\nfunction hold(element) {\r\n  element.classList.add('dragging');\r\n}\r\n\r\nfunction drag(element) {\r\n  element.classList.remove('dragging');\r\n}\r\n\r\nfunction makeDrageable(element) {\r\n  const newTodo = [];\r\n  element.addEventListener('dragstart', () => { hold(element); });\r\n  element.addEventListener('dragend', () => {\r\n    drag(element);\r\n    const e = theBigList.querySelectorAll('.list');\r\n    let list = (0,_data__WEBPACK_IMPORTED_MODULE_0__.load)();\r\n\r\n    list.sort(_data__WEBPACK_IMPORTED_MODULE_0__.compare);\r\n    for (let i = 0; i < e.length; i += 1) {\r\n      const otherId = parseInt(e[i].id, 10);\r\n      newTodo[i] = list[otherId];\r\n      newTodo[i].index = i;\r\n      e[i].id = [i];\r\n    }\r\n    (0,_data__WEBPACK_IMPORTED_MODULE_0__.save)(newTodo);\r\n    list = (0,_data__WEBPACK_IMPORTED_MODULE_0__.load)(list);\r\n  });\r\n}\r\n\r\nfunction makeContainer(tdl) {\r\n  tdl.addEventListener('dragover', (e) => {\r\n    e.preventDefault();\r\n    const afterElement = getDragAfterElement(tdl, e.clientY);\r\n    const dragable = document.querySelector('.dragging');\r\n    if (afterElement == null) {\r\n      tdl.appendChild(dragable);\r\n    } else {\r\n      tdl.insertBefore(dragable, afterElement);\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack://webpack-template/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ \"./src/status.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag */ \"./src/drag.js\");\n/* harmony import */ var _addEditRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addEditRemove */ \"./src/addEditRemove.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet todolist = [];\r\nif (localStorage.getItem('information') === null) {\r\n  localStorage.setItem('information', '[]');\r\n}\r\nclass Tasks {\r\n  constructor() {\r\n    this.toDoList = null;\r\n  }\r\n\r\n  setTodo(todolist) {\r\n    this.todo = todolist;\r\n  }\r\n\r\n  getTodo() {\r\n    return this.todo;\r\n  }\r\n}\r\nconst lists = new Tasks();\r\nconst todoDiv = document.querySelector('.lists');\r\n(0,_drag__WEBPACK_IMPORTED_MODULE_3__.makeContainer)(todoDiv);\r\nlet i = 0;\r\nconst getTodoList = () => {\r\n  todolist.forEach((list) => {\r\n    const li = document.createElement('li');\r\n    (0,_drag__WEBPACK_IMPORTED_MODULE_3__.makeDrageable)(li);\r\n    li.classList.add('list');\r\n    li.classList.add('draggable');\r\n    li.id = i;\r\n    li.draggable = true;\r\n    const liDiv = document.createElement('div');\r\n    liDiv.classList.add('li-div');\r\n    // create checkbox\r\n    const checkbox = document.createElement('input');\r\n    checkbox.classList.add('checkbox');\r\n    checkbox.type = 'checkbox';\r\n    checkbox.checked = list.completed;\r\n    liDiv.appendChild(checkbox);\r\n    // create description\r\n    const desc = document.createElement('input');\r\n    desc.classList.add('desc');\r\n    desc.value = list.description;\r\n    desc.onchange = () => {\r\n      (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.saveone)(desc);\r\n    };\r\n    liDiv.appendChild(desc);\r\n    checkbox.addEventListener('change', function check() {\r\n      if (this.checked) {\r\n        desc.classList.add('line');\r\n      } else {\r\n        desc.classList.remove('line');\r\n      }\r\n    });\r\n    li.appendChild(liDiv);\r\n    // create 3 vertical dots\r\n    const dots = document.createElement('i');\r\n    dots.classList.add('fa');\r\n    dots.classList.add('fa-ellipsis-v');\r\n    li.appendChild(dots);\r\n    todoDiv.appendChild(li);\r\n    // create trashcan\r\n    const trash = document.createElement('i');\r\n    trash.classList.add('fa');\r\n    trash.id = `trashcan${i}`;\r\n    trash.classList.add('fa-trash');\r\n    trash.addEventListener('click', () => {\r\n      todolist = (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.removeone)(trash);\r\n      (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.ShowAll)(todoDiv);\r\n      window.location.reload();\r\n    });\r\n    dots.addEventListener('click', () => {\r\n      dots.classList.add('hidden');\r\n      trash.classList.remove('hidden');\r\n    });\r\n    trash.classList.add('hidden');\r\n    li.appendChild(trash);\r\n    todoDiv.appendChild(li);\r\n    i += 1;\r\n  });\r\n  const cbox = document.querySelectorAll('.checkbox');\r\n  cbox.forEach((chbox) => {\r\n    chbox.addEventListener('change', _status__WEBPACK_IMPORTED_MODULE_1__.updateStatus);\r\n  });\r\n};\r\nconst todoInput = document.getElementById('todo-input');\r\ntodoInput.addEventListener('keydown', (e) => {\r\n  if (e.key === 'Enter') {\r\n    (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.addActivity)(todoInput.value);\r\n    (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.ShowAll)(todoDiv);\r\n    const get = (0,_data__WEBPACK_IMPORTED_MODULE_2__.load)();\r\n    lists.setTodo(get);\r\n    window.location.reload();\r\n  }\r\n});\r\nconst clearBtn = document.getElementById('btn');\r\nclearBtn.addEventListener('click', () => {\r\n  (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.removeCompleteds)();\r\n  const get = (0,_data__WEBPACK_IMPORTED_MODULE_2__.load)();\r\n  (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.ShowAll)(todoDiv);\r\n  lists.setTodo(get);\r\n  window.location.reload();\r\n});\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  if (localStorage.getItem('information')) {\r\n    todolist = JSON.parse(localStorage.getItem('information'));\r\n  } else {\r\n    localStorage.setItem(\r\n      'information',\r\n      JSON.stringify(todolist.sort((a, b) => +a.index - +b.index)),\r\n    );\r\n  }\r\n\r\n  getTodoList(todolist.sort((a, b) => +a.index - +b.index));\r\n});\r\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"updateStatus\": () => (/* binding */ updateStatus)\n/* harmony export */ });\nfunction updateStatus(event) {\r\n  event.target.nextElementSibling.classList.toggle('completed');\r\n  const status = JSON.parse(localStorage.getItem('information'));\r\n  if (status[event.target.parentNode.parentNode.id].completed === true) {\r\n    status[event.target.parentNode.parentNode.id].completed = false;\r\n  } else {\r\n    status[event.target.parentNode.parentNode.id].completed = true;\r\n  }\r\n  localStorage.setItem('information', JSON.stringify(status));\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStatus);\n\n//# sourceURL=webpack://webpack-template/./src/status.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;