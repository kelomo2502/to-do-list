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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Exo:400,700);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 100vh;\\n  width: 100%;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-weight: 500;\\n}\\n\\n.todo-list {\\n  width: 50%;\\n  border: 1px solid #fff;\\n  background-color: #fff;\\n}\\n\\n.title {\\n  border-bottom: 1px solid rgb(196, 196, 196);\\n  width: 100%;\\n  height: 45px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.title p {\\n  padding-left: 10px;\\n  font-size: 20px;\\n  margin: 1px;\\n}\\n\\n.input-section {\\n  height: 35px;\\n  width: 100%;\\n  border-bottom: 1px solid rgb(196, 196, 196);\\n  line-height: 35px;\\n}\\n\\n.todo-input {\\n  width: 90%;\\n  height: 90%;\\n  border: transparent;\\n  padding-left: 10px;\\n  font-style: italic;\\n}\\n\\n.lists {\\n  border-bottom: 1px solid rgb(196, 196, 196);\\n  list-style: none;\\n  padding-left: 10px;\\n  padding-right: 10px;\\n}\\n\\n.list {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 15px;\\n}\\n\\n.list:hover {\\n  background-color: mistyrose;\\n}\\n\\n.list:hover .desc {\\n  background-color: mistyrose;\\n}\\n\\n.list p {\\n  margin: 1px;\\n}\\n\\n.li-div {\\n  display: flex;\\n}\\n\\n#btn {\\n  background-color: lightgoldenrodyellow;\\n  border: transparent;\\n  height: 30px;\\n  width: 100%;\\n}\\n\\n.draggable {\\n  cursor: move;\\n}\\n\\n.line {\\n  text-decoration: line-through;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.fa {\\n  cursor: pointer;\\n}\\n\\ninput {\\n  outline: none;\\n  border: none;\\n  padding-left: 8px;\\n  font-style: italic;\\n}\\n\\n.area {\\n  background: rgb(216, 248, 248);\\n  width: 100%;\\n  height: 100vh;\\n  top: 0;\\n  position: absolute;\\n  z-index: -1;\\n}\\n\\n.circles {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n}\\n\\n.circles li {\\n  background-color: mistyrose;\\n  position: absolute;\\n  display: block;\\n  list-style: none;\\n  width: 20px;\\n  height: 20px;\\n  animation: animate 25s linear infinite;\\n  bottom: -150px;\\n}\\n\\n.circles li:nth-child(1) {\\n  left: 25%;\\n  width: 80px;\\n  height: 80px;\\n  animation-delay: 0s;\\n}\\n\\n.circles li:nth-child(2) {\\n  left: 10%;\\n  width: 20px;\\n  height: 20px;\\n  animation-delay: 2s;\\n  animation-duration: 12s;\\n}\\n\\n.circles li:nth-child(3) {\\n  left: 70%;\\n  width: 20px;\\n  height: 20px;\\n  animation-delay: 4s;\\n}\\n\\n.circles li:nth-child(4) {\\n  left: 40%;\\n  width: 60px;\\n  height: 60px;\\n  animation-delay: 0s;\\n  animation-duration: 18s;\\n}\\n\\n.circles li:nth-child(5) {\\n  left: 65%;\\n  width: 20px;\\n  height: 20px;\\n  animation-delay: 0s;\\n}\\n\\n.circles li:nth-child(6) {\\n  left: 75%;\\n  width: 110px;\\n  height: 110px;\\n  animation-delay: 3s;\\n}\\n\\n.circles li:nth-child(7) {\\n  left: 35%;\\n  width: 150px;\\n  height: 150px;\\n  animation-delay: 7s;\\n}\\n\\n.circles li:nth-child(8) {\\n  left: 50%;\\n  width: 25px;\\n  height: 25px;\\n  animation-delay: 15s;\\n  animation-duration: 45s;\\n}\\n\\n.circles li:nth-child(9) {\\n  left: 20%;\\n  width: 15px;\\n  height: 15px;\\n  animation-delay: 2s;\\n  animation-duration: 35s;\\n}\\n\\n.circles li:nth-child(10) {\\n  left: 85%;\\n  width: 150px;\\n  height: 150px;\\n  animation-delay: 0s;\\n  animation-duration: 11s;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compare\": () => (/* binding */ compare),\n/* harmony export */   \"load\": () => (/* binding */ load),\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"storageAvailable\": () => (/* binding */ storageAvailable)\n/* harmony export */ });\nlet todov = 0;\nconst defaultTodo = [];\n\nfunction storageAvailable(type) {\n  let storage;\n  try {\n    storage = window[type];\n    const x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return (\n      e instanceof DOMException\n      && (e.code === 22\n        || e.code === 1014\n        || e.name === 'QuotaExceededError'\n        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')\n      && storage\n      && storage.length !== 0\n    );\n  }\n}\n\nif (storageAvailable('localStorage')) {\n  todov = JSON.parse(localStorage.getItem('information'));\n  if (todov === null) {\n    todov = defaultTodo;\n  }\n} else {\n  todov = defaultTodo;\n}\nfunction save(variable) {\n  localStorage.setItem('information', JSON.stringify(variable));\n}\nfunction load() {\n  let variable = JSON.parse(localStorage.getItem('information'));\n  if (variable === null) {\n    variable = [];\n  }\n  return variable;\n}\nfunction compare(a, b) {\n  return a.index - b.index;\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/data.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeContainer\": () => (/* binding */ makeContainer),\n/* harmony export */   \"makeDrageable\": () => (/* binding */ makeDrageable)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\nconst theBigList = document.querySelector('.lists');\n\nfunction getDragAfterElement(tdle, y) {\n  const dragableElements = [...tdle.querySelectorAll('.list:not(.dragging)')];\n\n  return dragableElements.reduce((closest, child) => {\n    const box = child.getBoundingClientRect();\n    const offset = y - box.top - box.height / 2;\n    if (offset < 0 && offset > closest.offset) {\n      return { offset, element: child };\n    } return closest;\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\n}\n\nfunction hold(element) {\n  element.classList.add('dragging');\n}\n\nfunction drag(element) {\n  element.classList.remove('dragging');\n}\n\nfunction makeDrageable(element) {\n  const newTodo = [];\n  element.addEventListener('dragstart', () => { hold(element); });\n  element.addEventListener('dragend', () => {\n    drag(element);\n    const e = theBigList.querySelectorAll('.list');\n    let list = (0,_data__WEBPACK_IMPORTED_MODULE_0__.load)();\n\n    list.sort(_data__WEBPACK_IMPORTED_MODULE_0__.compare);\n    for (let i = 0; i < e.length; i += 1) {\n      const otherId = parseInt(e[i].id, 10);\n      newTodo[i] = list[otherId];\n      newTodo[i].index = i;\n      e[i].id = [i];\n    }\n    (0,_data__WEBPACK_IMPORTED_MODULE_0__.save)(newTodo);\n    list = (0,_data__WEBPACK_IMPORTED_MODULE_0__.load)(list);\n  });\n}\n\nfunction makeContainer(tdl) {\n  tdl.addEventListener('dragover', (e) => {\n    e.preventDefault();\n    const afterElement = getDragAfterElement(tdl, e.clientY);\n    const dragable = document.querySelector('.dragging');\n    if (afterElement == null) {\n      tdl.appendChild(dragable);\n    } else {\n      tdl.insertBefore(dragable, afterElement);\n    }\n  });\n}\n\n//# sourceURL=webpack://webpack-template/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ \"./src/status.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag */ \"./src/drag.js\");\n/* harmony import */ var _addEditRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addEditRemove */ \"./src/addEditRemove.js\");\n\n\n\n\n\n\nlet todolist = [];\nif (localStorage.getItem('information') === null) {\n  localStorage.setItem('information', '[]');\n}\nclass Tasks {\n  constructor() {\n    this.toDoList = null;\n  }\n\n  setTodo(todolist) {\n    this.todo = todolist;\n  }\n\n  getTodo() {\n    return this.todo;\n  }\n}\nconst lists = new Tasks();\nconst todoDiv = document.querySelector('.lists');\n(0,_drag__WEBPACK_IMPORTED_MODULE_3__.makeContainer)(todoDiv);\nlet i = 0;\nconst getTodoList = () => {\n  todolist.forEach((list) => {\n    const li = document.createElement('li');\n    (0,_drag__WEBPACK_IMPORTED_MODULE_3__.makeDrageable)(li);\n    li.classList.add('list');\n    li.classList.add('draggable');\n    li.id = i;\n    li.draggable = true;\n    const liDiv = document.createElement('div');\n    liDiv.classList.add('li-div');\n    // create checkbox\n    const checkbox = document.createElement('input');\n    checkbox.classList.add('checkbox');\n    checkbox.type = 'checkbox';\n    checkbox.checked = list.completed;\n    liDiv.appendChild(checkbox);\n    // create description\n    const desc = document.createElement('input');\n    desc.classList.add('desc');\n    desc.value = list.description;\n    desc.onchange = () => {\n      (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.saveone)(desc);\n    };\n    liDiv.appendChild(desc);\n    checkbox.addEventListener('change', function check() {\n      if (this.checked) {\n        desc.classList.add('line');\n      } else {\n        desc.classList.remove('line');\n      }\n    });\n    li.appendChild(liDiv);\n    // create 3 vertical dots\n    const dots = document.createElement('i');\n    dots.classList.add('fa');\n    dots.classList.add('fa-ellipsis-v');\n    li.appendChild(dots);\n    todoDiv.appendChild(li);\n    // create trashcan\n    const trash = document.createElement('i');\n    trash.classList.add('fa');\n    trash.id = `trashcan${i}`;\n    trash.classList.add('fa-trash');\n    trash.addEventListener('click', () => {\n      todolist = (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.removeone)(trash);\n      (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.ShowAll)(todoDiv);\n      window.location.reload();\n    });\n    dots.addEventListener('click', () => {\n      dots.classList.add('hidden');\n      trash.classList.remove('hidden');\n    });\n    trash.classList.add('hidden');\n    li.appendChild(trash);\n    todoDiv.appendChild(li);\n    i += 1;\n  });\n  const cbox = document.querySelectorAll('.checkbox');\n  cbox.forEach((chbox) => {\n    chbox.addEventListener('change', _status__WEBPACK_IMPORTED_MODULE_1__.updateStatus);\n  });\n};\nconst todoInput = document.getElementById('todo-input');\ntodoInput.addEventListener('keydown', (e) => {\n  if (e.key === 'Enter') {\n    (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.addActivity)(todoInput.value);\n    (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.ShowAll)(todoDiv);\n    const get = (0,_data__WEBPACK_IMPORTED_MODULE_2__.load)();\n    lists.setTodo(get);\n    window.location.reload();\n  }\n});\nconst clearBtn = document.getElementById('btn');\nclearBtn.addEventListener('click', () => {\n  (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.removeCompleteds)();\n  const get = (0,_data__WEBPACK_IMPORTED_MODULE_2__.load)();\n  (0,_addEditRemove__WEBPACK_IMPORTED_MODULE_4__.ShowAll)(todoDiv);\n  lists.setTodo(get);\n  window.location.reload();\n});\nwindow.addEventListener('DOMContentLoaded', () => {\n  if (localStorage.getItem('information')) {\n    todolist = JSON.parse(localStorage.getItem('information'));\n  } else {\n    localStorage.setItem(\n      'information',\n      JSON.stringify(todolist.sort((a, b) => +a.index - +b.index)),\n    );\n  }\n\n  getTodoList(todolist.sort((a, b) => +a.index - +b.index));\n});\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"updateStatus\": () => (/* binding */ updateStatus)\n/* harmony export */ });\nfunction updateStatus(event) {\n  event.target.nextElementSibling.classList.toggle('completed');\n  const status = JSON.parse(localStorage.getItem('information'));\n  if (status[event.target.parentNode.parentNode.id].completed === true) {\n    status[event.target.parentNode.parentNode.id].completed = false;\n  } else {\n    status[event.target.parentNode.parentNode.id].completed = true;\n  }\n  localStorage.setItem('information', JSON.stringify(status));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStatus);\n\n//# sourceURL=webpack://webpack-template/./src/status.js?");

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