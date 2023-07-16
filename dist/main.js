/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --orange: orange;
  --red: #b64229;
  --off-white: #f2f2f2;
  --off-black: #333;
  --blue-dark: #3a424e;
  --blue-light: #618ba2;
  --primary-font: "Roboto", sans-serif;
}

* {
  padding: 0px;
  margin: 0px;
}

#content {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

nav {
  user-select: none;
  display: flex;
  gap: 3rem;
}

nav button {
  border: none;
  background: transparent;
  font-family: var(--primary-font);
  font-size: 1.3rem;
  cursor: pointer;
  display: block;
  outline: none;
  position: relative;
  padding: 20px 0px;
  transition: 0.3s;
}

nav button:before {
  content: "";
  border-bottom: 1px solid black;
  padding: 0 10px;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 0;
  transition: 0.3s;
}

nav button:hover:before {
  width: 100%;
  padding: 0;
  border-bottom: 1px solid var(--orange);
}

nav button:hover {
  transition: 0.3s;
  color: var(--orange);
}

.logo-container {
  user-select: none;
  pointer-events: none;
  display: flex;
  align-items: center;
}

.logo-container img {
  max-width: 5rem;
  max-height: 5rem;
  padding-right: 1rem;
}

.restaurant-name {
  font-family: "Lobster", cursive;
  font-size: 2rem;
  white-space: nowrap;
  color: var(--red);
}

main {
  height: 100%;
  background-color: #f2f2f2;
  padding: 3rem 15rem;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home h3 {
  color: var(--red);
  font-size: 1.6rem;
  font-family: var(--primary-font);
  padding-bottom: 15px;
}

.home h2 {
  color: var(--off-black);
  font-size: 3rem;
  font-family: var(--primary-font);
  padding-bottom: 30px;
}

.home p {
  font-family: var(--primary-font);
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  white-space: pre-line;
  line-height: 1.5rem;
}

footer {
  display: flex;
  justify-content: space-between;
  background-color: var(--blue-dark);
  padding: 30px 120px;
  color: var(--off-white);
  font-family: var(--primary-font);
}

footer h5 {
  font-size: 1.3rem;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info i {
  display: flex;
  gap: 10px;
  color: var(--blue-light);
}

.info p {
  font-family: var(--primary-font);
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--off-white);
}

.social button {
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 3px;
  background-color: var(--blue-light);
  color: var(--off-white);
  cursor: pointer;
}

.social button:hover {
  background-color: var(--blue-dark);
  transition: 0.3s;
}

.follow {
  padding-bottom: 10px;
}

.icon-container {
  display: flex;
  justify-content: space-between;
}

.menu-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.menu-container img {
  width: 300px;
  height: fit-content;
  border-radius: 10px;
}

.menu-item {
  display: flex;
  font-family: var(--primary-font);
  color: var(--off-black);
  gap: 15px;
}

.menu .title {
  font-family: var(--primary-font);
  color: var(--off-black);
  font-size: 3rem;
  text-align: center;
  padding-bottom: 30px;
}

.sub-title {
  color: var(--red);
  font-size: 1.6rem;
  font-family: var(--primary-font);
  padding-bottom: 15px;
  text-align: center;
}

.menu-item h4 {
  font-size: 1.2rem;
  color: var(--red);
  border-bottom: 1px solid var(--off-black);
  font-weight: 400;
}

.menu-item span {
  float: right;
}

.menu-item p {
  padding-top: 15px;
  text-align: justify;
}

.contact-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  font-family: var(--primary-font);
  color: var(--off-black);
}

.info-container {
  display: flex;
  flex-direction: column;
}

.info2,
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
}

.map iframe {
  width: 500px;
  height: 420px;
  border: none;
  border-radius: 1rem;
}

form label {
  font-size: 18px;
  border-bottom: 1px var(--off-black) solid;
}

form input[type="text"],
form textarea {
  font-family: var(--primary-font);
  height: 2rem;
  border: none;
  border-radius: 0.5px;
  background: none;
  background-color: #e5e5e5;
  padding: 5px;
  resize: none;
}

form input:focus-visible {
  outline: 1px solid var(--blue-light);
}

form input[type="submit"] {
  color: var(--off-white);
  height: 2rem;
  width: 6rem;
  background-color: var(--red);
  font-size: 1rem;
  border: none;
  border-radius: 0.2rem;
}

form input[type="submit"]:hover {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --orange: orange;\n  --red: #b64229;\n  --off-white: #f2f2f2;\n  --off-black: #333;\n  --blue-dark: #3a424e;\n  --blue-light: #618ba2;\n  --primary-font: \"Roboto\", sans-serif;\n}\n\n* {\n  padding: 0px;\n  margin: 0px;\n}\n\n#content {\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nheader {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n  padding: 1rem 2rem;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\nnav {\n  user-select: none;\n  display: flex;\n  gap: 3rem;\n}\n\nnav button {\n  border: none;\n  background: transparent;\n  font-family: var(--primary-font);\n  font-size: 1.3rem;\n  cursor: pointer;\n  display: block;\n  outline: none;\n  position: relative;\n  padding: 20px 0px;\n  transition: 0.3s;\n}\n\nnav button:before {\n  content: \"\";\n  border-bottom: 1px solid black;\n  padding: 0 10px;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 0;\n  transition: 0.3s;\n}\n\nnav button:hover:before {\n  width: 100%;\n  padding: 0;\n  border-bottom: 1px solid var(--orange);\n}\n\nnav button:hover {\n  transition: 0.3s;\n  color: var(--orange);\n}\n\n.logo-container {\n  user-select: none;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n}\n\n.logo-container img {\n  max-width: 5rem;\n  max-height: 5rem;\n  padding-right: 1rem;\n}\n\n.restaurant-name {\n  font-family: \"Lobster\", cursive;\n  font-size: 2rem;\n  white-space: nowrap;\n  color: var(--red);\n}\n\nmain {\n  height: 100%;\n  background-color: #f2f2f2;\n  padding: 3rem 15rem;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.home h3 {\n  color: var(--red);\n  font-size: 1.6rem;\n  font-family: var(--primary-font);\n  padding-bottom: 15px;\n}\n\n.home h2 {\n  color: var(--off-black);\n  font-size: 3rem;\n  font-family: var(--primary-font);\n  padding-bottom: 30px;\n}\n\n.home p {\n  font-family: var(--primary-font);\n  font-size: 1.2rem;\n  font-weight: 300;\n  text-align: center;\n  white-space: pre-line;\n  line-height: 1.5rem;\n}\n\nfooter {\n  display: flex;\n  justify-content: space-between;\n  background-color: var(--blue-dark);\n  padding: 30px 120px;\n  color: var(--off-white);\n  font-family: var(--primary-font);\n}\n\nfooter h5 {\n  font-size: 1.3rem;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.info i {\n  display: flex;\n  gap: 10px;\n  color: var(--blue-light);\n}\n\n.info p {\n  font-family: var(--primary-font);\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: var(--off-white);\n}\n\n.social button {\n  width: 35px;\n  height: 35px;\n  border: none;\n  border-radius: 3px;\n  background-color: var(--blue-light);\n  color: var(--off-white);\n  cursor: pointer;\n}\n\n.social button:hover {\n  background-color: var(--blue-dark);\n  transition: 0.3s;\n}\n\n.follow {\n  padding-bottom: 10px;\n}\n\n.icon-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 50px;\n}\n\n.menu-container img {\n  width: 300px;\n  height: fit-content;\n  border-radius: 10px;\n}\n\n.menu-item {\n  display: flex;\n  font-family: var(--primary-font);\n  color: var(--off-black);\n  gap: 15px;\n}\n\n.menu .title {\n  font-family: var(--primary-font);\n  color: var(--off-black);\n  font-size: 3rem;\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.sub-title {\n  color: var(--red);\n  font-size: 1.6rem;\n  font-family: var(--primary-font);\n  padding-bottom: 15px;\n  text-align: center;\n}\n\n.menu-item h4 {\n  font-size: 1.2rem;\n  color: var(--red);\n  border-bottom: 1px solid var(--off-black);\n  font-weight: 400;\n}\n\n.menu-item span {\n  float: right;\n}\n\n.menu-item p {\n  padding-top: 15px;\n  text-align: justify;\n}\n\n.contact-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n  font-family: var(--primary-font);\n  color: var(--off-black);\n}\n\n.info-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.info2,\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n}\n\n.map iframe {\n  width: 500px;\n  height: 420px;\n  border: none;\n  border-radius: 1rem;\n}\n\nform label {\n  font-size: 18px;\n  border-bottom: 1px var(--off-black) solid;\n}\n\nform input[type=\"text\"],\nform textarea {\n  font-family: var(--primary-font);\n  height: 2rem;\n  border: none;\n  border-radius: 0.5px;\n  background: none;\n  background-color: #e5e5e5;\n  padding: 5px;\n  resize: none;\n}\n\nform input:focus-visible {\n  outline: 1px solid var(--blue-light);\n}\n\nform input[type=\"submit\"] {\n  color: var(--off-white);\n  height: 2rem;\n  width: 6rem;\n  background-color: var(--red);\n  font-size: 1rem;\n  border: none;\n  border-radius: 0.2rem;\n}\n\nform input[type=\"submit\"]:hover {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  infoContainer.appendChild(createInfo());
  infoContainer.appendChild(createForm());
  contactContainer.appendChild(infoContainer);
  contactContainer.appendChild(createMap());
  contact.appendChild(contactContainer);

  return contact;
}

function createTitle(text) {
  const title = document.createElement("h1");
  title.textContent = text;

  return title;
}

function createInfo() {
  const info = document.createElement("div");
  info.classList.add("info2");

  const address = document.createElement("p");
  address.textContent = "123 Main Street, Riverside, USA";

  const hours = document.createElement("p");
  hours.innerText = "Mon-Thurs:8am-8pm\nFri-Sun:8am-11pm";

  const phone = document.createElement("p");
  phone.textContent = "+1 (555) 123-4567";

  info.appendChild(address);
  info.appendChild(hours);
  info.appendChild(phone);

  return info;
}

function createForm() {
  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.setAttribute("action", "#");

  const fullNameLabel = createFormLabel("fname", "Full Name");
  const fullNameInput = createFormInput("text", "fname", "John");

  const lastNameLabel = createFormLabel("lname", "Last Name");
  const lastNameInput = createFormInput("text", "lname", "Doe");

  const messageLabel = createFormLabel("message", "Message");
  const messageInput = document.createElement("textarea");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("placeholder", "Type your message...");

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");

  form.appendChild(fullNameLabel);
  form.appendChild(fullNameInput);
  form.appendChild(lastNameLabel);
  form.appendChild(lastNameInput);
  form.appendChild(messageLabel);
  form.appendChild(messageInput);
  form.appendChild(submit);

  return form;
}

function createFormLabel(name, content) {
  const formLabel = document.createElement("label");
  formLabel.setAttribute("for", name);
  formLabel.textContent = content;

  return formLabel;
}

function createFormInput(type, name, placeholder, id) {
  const formInput = document.createElement("input");
  formInput.setAttribute("type", type);
  formInput.setAttribute("id", id);
  formInput.setAttribute("name", name);
  formInput.setAttribute("placeholder", placeholder);

  return formInput;
}

function createMap() {
  const mapDiv = document.createElement("div");
  mapDiv.classList.add("map");
  mapDiv.id = "map";

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9304242831545!2d-117.36875132390315!3d33.99432082078585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb20abfc8e1a5%3A0x3d2a2e685ccce29f!2sMain%20St%2C%20Riverside%2C%20CA%2C%20USA!5e0!3m2!1sen!2sgr!4v1689432632428!5m2!1sen!2sgr";
  mapDiv.appendChild(iframe);
  return mapDiv;
}

// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  // initMap();
  main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createH3("Discover"));
  home.appendChild(createH2("OUR STORY"));
  home.appendChild(
    createParagraph(
      "Welcome to The Grillsmith, a beloved local tavern where food, drink, and community converge with a simple vision: to create a gathering place that celebrates the joy of good company and delicious cuisine.\n\nWe take pride in offering a diverse menu that features both small and big plates of mouthwatering mixed grills, perfectly paired with an extensive selection of beers and beverages. Indulge in the enticing flavors of our expertly grilled dishes, carefully prepared to satisfy your cravings.\n\nJoin us for an unforgettable experience of great flavors, warm hospitality, and a journey of culinary delights."
    )
  );

  return home;
}

function createH3(text) {
  const h3 = document.createElement("h3");
  h3.textContent = text;

  return h3;
}

function createH2(text) {
  const h2 = document.createElement("h2");
  h2.textContent = text;

  return h2;
}

function createParagraph(text) {
  const p = document.createElement("p");
  p.textContent = text;

  return p;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/initialization.js":
/*!*******************************!*\
  !*** ./src/initialization.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _img_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/restaurant-logo.png */ "./src/img/restaurant-logo.png");





function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.appendChild(createLogo());
  header.appendChild(createNav());

  return header;
}

function createLogo() {
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const restaurantLogo = new Image();
  restaurantLogo.src = _img_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_3__;
  logoContainer.appendChild(restaurantLogo);

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "The Grillsmith";

  logoContainer.appendChild(restaurantLogo);
  logoContainer.appendChild(restaurantName);

  return logoContainer;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());

  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.id = "main";

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.appendChild(createSocial());
  footer.appendChild(createInfo());
  return footer;
}

function createSocial() {
  const social = document.createElement("div");
  social.classList.add("social");

  const follow = document.createElement("h5");
  follow.classList.add("follow");
  follow.textContent = "Follow Us";

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");

  const fbButton = document.createElement("button");
  fbButton.classList.add("fb-button");

  const fbIcon = document.createElement("i");
  fbIcon.classList.add("fa-brands");
  fbIcon.classList.add("fa-facebook-f");
  fbIcon.classList.add("fa-lg");

  const instaButton = document.createElement("button");
  instaButton.classList.add("insta-button");

  const instaIcon = document.createElement("i");
  instaIcon.classList.add("fa-brands");
  instaIcon.classList.add("fa-instagram");
  instaIcon.classList.add("fa-lg");

  iconContainer.appendChild(fbButton);
  iconContainer.appendChild(instaButton);
  social.appendChild(follow);
  social.appendChild(iconContainer);
  fbButton.appendChild(fbIcon);
  instaButton.appendChild(instaIcon);

  return social;
}

function createInfo() {
  const info = document.createElement("div");
  info.classList.add("info");

  const infoTitle = document.createElement("h5");
  infoTitle.classList.add("info-title");
  infoTitle.textContent = "Contact Info";

  const address = document.createElement("p");
  address.classList.add("info-address");
  address.textContent = "123 Main Street, Riverside, USA";

  const addressIcon = document.createElement("i");
  addressIcon.classList.add("fa-solid");
  addressIcon.classList.add("fa-location-dot");

  const phone = document.createElement("p");
  phone.classList.add("info-phone");
  phone.textContent = "+1 (555) 123-4567";

  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("fa-solid");
  phoneIcon.classList.add("fa-phone");

  const hours = document.createElement("p");
  hours.classList.add("info-hours");
  hours.innerText = "Mon-Sun:12am-11pm";

  const hoursIcon = document.createElement("i");
  hoursIcon.classList.add("fa-solid");
  hoursIcon.classList.add("fa-clock");

  addressIcon.appendChild(address);
  phoneIcon.appendChild(phone);
  hoursIcon.appendChild(hours);
  info.appendChild(infoTitle);
  info.appendChild(addressIcon);
  info.appendChild(phoneIcon);
  info.appendChild(hoursIcon);
  return info;
}

function initializeWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant-logo.png */ "./src/img/restaurant-logo.png");
/* harmony import */ var _img_S_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/S.jpg */ "./src/img/S.jpg");
/* harmony import */ var _img_M_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/M.jpg */ "./src/img/M.jpg");
/* harmony import */ var _img_L_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/L.jpg */ "./src/img/L.jpg");
/* harmony import */ var _img_XL_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/XL.jpg */ "./src/img/XL.jpg");






function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuContainer.appendChild(
    createMenuItem(
      "Colossal Conquests",
      "20",
      "A mighty mixed grill platter with marinated steak, grilled chicken, lamb chops, and pork ribs. Served with flame-kissed vegetables and house-made barbecue sauce.",
      _img_S_jpg__WEBPACK_IMPORTED_MODULE_1__
    )
  );

  menuContainer.appendChild(
    createMenuItem(
      "Mighty Monsters",
      "25",
      "An epic grill platter featuring char-grilled sausages, beef brisket, garlic prawns, and grilled vegetables. Drizzled with chimichurri sauce.",
      _img_M_jpg__WEBPACK_IMPORTED_MODULE_2__
    )
  );

  menuContainer.appendChild(
    createMenuItem(
      "Titanic Tastes",
      "29",
      "A towering feast with baby back ribs, grilled salmon, chicken skewers, and seasoned fries. Served with tangy barbecue sauce.",
      _img_L_jpg__WEBPACK_IMPORTED_MODULE_3__
    )
  );

  menuContainer.appendChild(
    createMenuItem(
      "Monstrous Morsels",
      "33",
      "Tenderloin steak medallions, BBQ chicken wings, garlic butter shrimp skewers, and grilled vegetables. Served with creamy mashed potatoes.",
      _img_XL_jpg__WEBPACK_IMPORTED_MODULE_4__
    )
  );

  menu.appendChild(createSubTitle("Discover"));
  menu.appendChild(createTitle("OUR MENU"));
  menu.appendChild(menuContainer);

  return menu;
}

function createTitle(text) {
  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = text;

  return title;
}

function createSubTitle(text) {
  const subTitle = document.createElement("h3");
  subTitle.classList.add("sub-title");
  subTitle.textContent = text;

  return subTitle;
}

function createContainer() {
  const container = document.createElement("div");
  container.classList.add("menu-container");

  return container;
}

function createMenuItem(name, price, description, src) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodInfo = document.createElement("div");

  const foodImg = document.createElement("img");
  foodImg.src = src;
  foodImg.alt = `Image of ${name}`;

  const foodName = document.createElement("h4");
  foodName.textContent = name;

  const foodPrice = document.createElement("span");
  foodPrice.textContent = `$${price}`;

  const foodDetails = document.createElement("p");
  foodDetails.textContent = description;

  foodName.appendChild(foodPrice);
  foodInfo.appendChild(foodName);
  foodInfo.appendChild(foodDetails);
  menuItem.appendChild(foodImg);
  menuItem.appendChild(foodInfo);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/img/L.jpg":
/*!***********************!*\
  !*** ./src/img/L.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/L.jpg";

/***/ }),

/***/ "./src/img/M.jpg":
/*!***********************!*\
  !*** ./src/img/M.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/M.jpg";

/***/ }),

/***/ "./src/img/S.jpg":
/*!***********************!*\
  !*** ./src/img/S.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/S.jpg";

/***/ }),

/***/ "./src/img/XL.jpg":
/*!************************!*\
  !*** ./src/img/XL.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/XL.jpg";

/***/ }),

/***/ "./src/img/restaurant-logo.png":
/*!*************************************!*\
  !*** ./src/img/restaurant-logo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/restaurant-logo.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initialization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialization */ "./src/initialization.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");



// import createMenu from "./menu";
// import createContact from "./contact";

(0,_initialization__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
// createMenu();
// createContact();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsaUNBQWlDLHFCQUFxQixtQkFBbUIseUJBQXlCLHNCQUFzQix5QkFBeUIsMEJBQTBCLDJDQUEyQyxHQUFHLE9BQU8saUJBQWlCLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsWUFBWSxrQkFBa0Isa0NBQWtDLHdCQUF3Qix1QkFBdUIsdUJBQXVCLCtDQUErQyxHQUFHLFNBQVMsc0JBQXNCLGtCQUFrQixjQUFjLEdBQUcsZ0JBQWdCLGlCQUFpQiw0QkFBNEIscUNBQXFDLHNCQUFzQixvQkFBb0IsbUJBQW1CLGtCQUFrQix1QkFBdUIsc0JBQXNCLHFCQUFxQixHQUFHLHVCQUF1QixrQkFBa0IsbUNBQW1DLG9CQUFvQix1QkFBdUIsaUJBQWlCLFlBQVksYUFBYSxtQkFBbUIsYUFBYSxxQkFBcUIsR0FBRyw2QkFBNkIsZ0JBQWdCLGVBQWUsMkNBQTJDLEdBQUcsc0JBQXNCLHFCQUFxQix5QkFBeUIsR0FBRyxxQkFBcUIsc0JBQXNCLHlCQUF5QixrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLG9CQUFvQixxQkFBcUIsd0JBQXdCLEdBQUcsc0JBQXNCLHNDQUFzQyxvQkFBb0Isd0JBQXdCLHNCQUFzQixHQUFHLFVBQVUsaUJBQWlCLDhCQUE4Qix3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsY0FBYyxzQkFBc0Isc0JBQXNCLHFDQUFxQyx5QkFBeUIsR0FBRyxjQUFjLDRCQUE0QixvQkFBb0IscUNBQXFDLHlCQUF5QixHQUFHLGFBQWEscUNBQXFDLHNCQUFzQixxQkFBcUIsdUJBQXVCLDBCQUEwQix3QkFBd0IsR0FBRyxZQUFZLGtCQUFrQixtQ0FBbUMsdUNBQXVDLHdCQUF3Qiw0QkFBNEIscUNBQXFDLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLGFBQWEsa0JBQWtCLGNBQWMsNkJBQTZCLEdBQUcsYUFBYSxxQ0FBcUMsc0JBQXNCLHFCQUFxQiw0QkFBNEIsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsdUJBQXVCLHdDQUF3Qyw0QkFBNEIsb0JBQW9CLEdBQUcsMEJBQTBCLHVDQUF1QyxxQkFBcUIsR0FBRyxhQUFhLHlCQUF5QixHQUFHLHFCQUFxQixrQkFBa0IsbUNBQW1DLEdBQUcscUJBQXFCLGtCQUFrQixtQ0FBbUMsY0FBYyxHQUFHLHlCQUF5QixpQkFBaUIsd0JBQXdCLHdCQUF3QixHQUFHLGdCQUFnQixrQkFBa0IscUNBQXFDLDRCQUE0QixjQUFjLEdBQUcsa0JBQWtCLHFDQUFxQyw0QkFBNEIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0Isc0JBQXNCLHNCQUFzQixxQ0FBcUMseUJBQXlCLHVCQUF1QixHQUFHLG1CQUFtQixzQkFBc0Isc0JBQXNCLDhDQUE4QyxxQkFBcUIsR0FBRyxxQkFBcUIsaUJBQWlCLEdBQUcsa0JBQWtCLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyxxQ0FBcUMsNEJBQTRCLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsR0FBRyw0QkFBNEIsa0JBQWtCLDJCQUEyQixnQkFBZ0Isa0JBQWtCLEdBQUcsaUJBQWlCLGlCQUFpQixrQkFBa0IsaUJBQWlCLHdCQUF3QixHQUFHLGdCQUFnQixvQkFBb0IsOENBQThDLEdBQUcsK0NBQStDLHFDQUFxQyxpQkFBaUIsaUJBQWlCLHlCQUF5QixxQkFBcUIsOEJBQThCLGlCQUFpQixpQkFBaUIsR0FBRyw4QkFBOEIseUNBQXlDLEdBQUcsaUNBQWlDLDRCQUE0QixpQkFBaUIsZ0JBQWdCLGlDQUFpQyxvQkFBb0IsaUJBQWlCLDBCQUEwQixHQUFHLHVDQUF1QyxvQkFBb0IsR0FBRyxxQkFBcUI7QUFDdjdPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbFQxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSx3QkFBd0I7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUkzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDUTtBQUNBO0FBQ007QUFDTzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIscURBQUk7QUFDM0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGlEQUFVOztBQUV4RDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsaURBQVU7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxvREFBYTs7QUFFOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtZO0FBQ1o7QUFDQTtBQUNBO0FBQ0U7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVDQUFNO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1Q0FBTTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdUNBQU07QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdDQUFPO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixNQUFNOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakh4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzRCO0FBQ2pCO0FBQ2hDO0FBQ0E7O0FBRUEsMkRBQWlCO0FBQ2pCLGlEQUFVO0FBQ1Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLW9yYW5nZTogb3JhbmdlO1xuICAtLXJlZDogI2I2NDIyOTtcbiAgLS1vZmYtd2hpdGU6ICNmMmYyZjI7XG4gIC0tb2ZmLWJsYWNrOiAjMzMzO1xuICAtLWJsdWUtZGFyazogIzNhNDI0ZTtcbiAgLS1ibHVlLWxpZ2h0OiAjNjE4YmEyO1xuICAtLXByaW1hcnktZm9udDogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxubmF2IHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbn1cblxubmF2IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxubmF2IGJ1dHRvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDA7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbm5hdiBidXR0b246aG92ZXI6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xufVxuXG5uYXYgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28tY29udGFpbmVyIGltZyB7XG4gIG1heC13aWR0aDogNXJlbTtcbiAgbWF4LWhlaWdodDogNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLnJlc3RhdXJhbnQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogM3JlbSAxNXJlbTtcbn1cblxuLmhvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaG9tZSBoMyB7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uaG9tZSBoMiB7XG4gIGNvbG9yOiB2YXIoLS1vZmYtYmxhY2spO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmhvbWUgcCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcbiAgcGFkZGluZzogMzBweCAxMjBweDtcbiAgY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xufVxuXG5mb290ZXIgaDUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5pbmZvIGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcbn1cblxuLmluZm8gcCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XG59XG5cbi5zb2NpYWwgYnV0dG9uIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc29jaWFsIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5mb2xsb3cge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogNTBweDtcbn1cblxuLm1lbnUtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBjb2xvcjogdmFyKC0tb2ZmLWJsYWNrKTtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ubWVudSAudGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgY29sb3I6IHZhcigtLW9mZi1ibGFjayk7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51LWl0ZW0gaDQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLXJlZCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1vZmYtYmxhY2spO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWVudS1pdGVtIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZW51LWl0ZW0gcCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgY29sb3I6IHZhcigtLW9mZi1ibGFjayk7XG59XG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pbmZvMixcbi5jb250YWN0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm1hcCBpZnJhbWUge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLW9mZi1ibGFjaykgc29saWQ7XG59XG5cbmZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXG5mb3JtIHRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgcGFkZGluZzogNXB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbmZvcm0gaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ibHVlLWxpZ2h0KTtcbn1cblxuZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG59XG5cbmZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFDZCxRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJB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Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1vcmFuZ2U6IG9yYW5nZTtcXG4gIC0tcmVkOiAjYjY0MjI5O1xcbiAgLS1vZmYtd2hpdGU6ICNmMmYyZjI7XFxuICAtLW9mZi1ibGFjazogIzMzMztcXG4gIC0tYmx1ZS1kYXJrOiAjM2E0MjRlO1xcbiAgLS1ibHVlLWxpZ2h0OiAjNjE4YmEyO1xcbiAgLS1wcmltYXJ5LWZvbnQ6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5uYXYge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG5uYXYgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxubmF2IGJ1dHRvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwcHg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxubmF2IGJ1dHRvbjpob3ZlcjpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxufVxcblxcbm5hdiBidXR0b246aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIgaW1nIHtcXG4gIG1heC13aWR0aDogNXJlbTtcXG4gIG1heC1oZWlnaHQ6IDVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIHBhZGRpbmc6IDNyZW0gMTVyZW07XFxufVxcblxcbi5ob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUgaDMge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5ob21lIGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmYtYmxhY2spO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmhvbWUgcCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG4gIHBhZGRpbmc6IDMwcHggMTIwcHg7XFxuICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcbn1cXG5cXG5mb290ZXIgaDUge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaW5mbyBpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XFxufVxcblxcbi5pbmZvIHAge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcXG59XFxuXFxuLnNvY2lhbCBidXR0b24ge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc29jaWFsIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmZvbGxvdyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmljb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1vZmYtYmxhY2spO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubWVudSAudGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICBjb2xvcjogdmFyKC0tb2ZmLWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uc3ViLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtIGg0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tb2ZmLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tZW51LWl0ZW0gc3BhbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5tZW51LWl0ZW0gcCB7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICBjb2xvcjogdmFyKC0tb2ZmLWJsYWNrKTtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW5mbzIsXFxuLmNvbnRhY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1hcCBpZnJhbWUge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbmZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLW9mZi1ibGFjaykgc29saWQ7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmZvcm0gdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5mb3JtIGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsdWUtbGlnaHQpO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250YWluZXJcIik7XG5cbiAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKCkpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0oKSk7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFwKCkpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSh0ZXh0KSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvKCkge1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mbzJcIik7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMjMgTWFpbiBTdHJlZXQsIFJpdmVyc2lkZSwgVVNBXCI7XG5cbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaG91cnMuaW5uZXJUZXh0ID0gXCJNb24tVGh1cnM6OGFtLThwbVxcbkZyaS1TdW46OGFtLTExcG1cIjtcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiKzEgKDU1NSkgMTIzLTQ1NjdcIjtcblxuICBpbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBpbmZvLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgaW5mby5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgcmV0dXJuIGluZm87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1mb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIiNcIik7XG5cbiAgY29uc3QgZnVsbE5hbWVMYWJlbCA9IGNyZWF0ZUZvcm1MYWJlbChcImZuYW1lXCIsIFwiRnVsbCBOYW1lXCIpO1xuICBjb25zdCBmdWxsTmFtZUlucHV0ID0gY3JlYXRlRm9ybUlucHV0KFwidGV4dFwiLCBcImZuYW1lXCIsIFwiSm9oblwiKTtcblxuICBjb25zdCBsYXN0TmFtZUxhYmVsID0gY3JlYXRlRm9ybUxhYmVsKFwibG5hbWVcIiwgXCJMYXN0IE5hbWVcIik7XG4gIGNvbnN0IGxhc3ROYW1lSW5wdXQgPSBjcmVhdGVGb3JtSW5wdXQoXCJ0ZXh0XCIsIFwibG5hbWVcIiwgXCJEb2VcIik7XG5cbiAgY29uc3QgbWVzc2FnZUxhYmVsID0gY3JlYXRlRm9ybUxhYmVsKFwibWVzc2FnZVwiLCBcIk1lc3NhZ2VcIik7XG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtZXNzYWdlXCIpO1xuICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZnVsbE5hbWVMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZnVsbE5hbWVJbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFzdE5hbWVMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFzdE5hbWVJbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1MYWJlbChuYW1lLCBjb250ZW50KSB7XG4gIGNvbnN0IGZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZm9ybUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBuYW1lKTtcbiAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gY29udGVudDtcblxuICByZXR1cm4gZm9ybUxhYmVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtSW5wdXQodHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIsIGlkKSB7XG4gIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XG4gIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xuICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xuXG4gIHJldHVybiBmb3JtSW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcCgpIHtcbiAgY29uc3QgbWFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFwRGl2LmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XG4gIG1hcERpdi5pZCA9IFwibWFwXCI7XG5cbiAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgaWZyYW1lLnNyYyA9XG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMzA3LjkzMDQyNDI4MzE1NDUhMmQtMTE3LjM2ODc1MTMyMzkwMzE1ITNkMzMuOTk0MzIwODIwNzg1ODUhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDgwZGNiMjBhYmZjOGUxYTUlM0EweDNkMmEyZTY4NWNjY2UyOWYhMnNNYWluJTIwU3QlMkMlMjBSaXZlcnNpZGUlMkMlMjBDQSUyQyUyMFVTQSE1ZTAhM20yITFzZW4hMnNnciE0djE2ODk0MzI2MzI0MjghNW0yITFzZW4hMnNnclwiO1xuICBtYXBEaXYuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgcmV0dXJuIG1hcERpdjtcbn1cblxuLy8gbGV0IG1hcDtcblxuLy8gYXN5bmMgZnVuY3Rpb24gaW5pdE1hcCgpIHtcbi8vICAgLy8gVGhlIGxvY2F0aW9uIG9mIFVsdXJ1XG4vLyAgIGNvbnN0IHBvc2l0aW9uID0geyBsYXQ6IC0yNS4zNDQsIGxuZzogMTMxLjAzMSB9O1xuLy8gICAvLyBSZXF1ZXN0IG5lZWRlZCBsaWJyYXJpZXMuXG4vLyAgIC8vQHRzLWlnbm9yZVxuLy8gICBjb25zdCB7IE1hcCB9ID0gYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeShcIm1hcHNcIik7XG4vLyAgIGNvbnN0IHsgQWR2YW5jZWRNYXJrZXJFbGVtZW50IH0gPSBhd2FpdCBnb29nbGUubWFwcy5pbXBvcnRMaWJyYXJ5KFwibWFya2VyXCIpO1xuXG4vLyAgIC8vIFRoZSBtYXAsIGNlbnRlcmVkIGF0IFVsdXJ1XG4vLyAgIG1hcCA9IG5ldyBNYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbi8vICAgICB6b29tOiA0LFxuLy8gICAgIGNlbnRlcjogcG9zaXRpb24sXG4vLyAgICAgbWFwSWQ6IFwiREVNT19NQVBfSURcIixcbi8vICAgfSk7XG5cbi8vICAgLy8gVGhlIG1hcmtlciwgcG9zaXRpb25lZCBhdCBVbHVydVxuLy8gICBjb25zdCBtYXJrZXIgPSBuZXcgQWR2YW5jZWRNYXJrZXJFbGVtZW50KHtcbi8vICAgICBtYXA6IG1hcCxcbi8vICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4vLyAgICAgdGl0bGU6IFwiVWx1cnVcIixcbi8vICAgfSk7XG4vLyB9XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgLy8gaW5pdE1hcCgpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuIiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVIMyhcIkRpc2NvdmVyXCIpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVIMihcIk9VUiBTVE9SWVwiKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgXCJXZWxjb21lIHRvIFRoZSBHcmlsbHNtaXRoLCBhIGJlbG92ZWQgbG9jYWwgdGF2ZXJuIHdoZXJlIGZvb2QsIGRyaW5rLCBhbmQgY29tbXVuaXR5IGNvbnZlcmdlIHdpdGggYSBzaW1wbGUgdmlzaW9uOiB0byBjcmVhdGUgYSBnYXRoZXJpbmcgcGxhY2UgdGhhdCBjZWxlYnJhdGVzIHRoZSBqb3kgb2YgZ29vZCBjb21wYW55IGFuZCBkZWxpY2lvdXMgY3Vpc2luZS5cXG5cXG5XZSB0YWtlIHByaWRlIGluIG9mZmVyaW5nIGEgZGl2ZXJzZSBtZW51IHRoYXQgZmVhdHVyZXMgYm90aCBzbWFsbCBhbmQgYmlnIHBsYXRlcyBvZiBtb3V0aHdhdGVyaW5nIG1peGVkIGdyaWxscywgcGVyZmVjdGx5IHBhaXJlZCB3aXRoIGFuIGV4dGVuc2l2ZSBzZWxlY3Rpb24gb2YgYmVlcnMgYW5kIGJldmVyYWdlcy4gSW5kdWxnZSBpbiB0aGUgZW50aWNpbmcgZmxhdm9ycyBvZiBvdXIgZXhwZXJ0bHkgZ3JpbGxlZCBkaXNoZXMsIGNhcmVmdWxseSBwcmVwYXJlZCB0byBzYXRpc2Z5IHlvdXIgY3JhdmluZ3MuXFxuXFxuSm9pbiB1cyBmb3IgYW4gdW5mb3JnZXR0YWJsZSBleHBlcmllbmNlIG9mIGdyZWF0IGZsYXZvcnMsIHdhcm0gaG9zcGl0YWxpdHksIGFuZCBhIGpvdXJuZXkgb2YgY3VsaW5hcnkgZGVsaWdodHMuXCJcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUgzKHRleHQpIHtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gaDM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUgyKHRleHQpIHtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gaDI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0KSB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuL2ltZy9yZXN0YXVyYW50LWxvZ28ucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ28oKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9nbygpIHtcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ28tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnRMb2dvID0gbmV3IEltYWdlKCk7XG4gIHJlc3RhdXJhbnRMb2dvLnNyYyA9IGxvZ287XG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudExvZ28pO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1uYW1lXCIpO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiVGhlIEdyaWxsc21pdGhcIjtcblxuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRMb2dvKTtcbiAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cbiAgcmV0dXJuIGxvZ29Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG5cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGNyZWF0ZUhvbWUoKSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGNyZWF0ZU1lbnUoKSk7XG5cbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGNyZWF0ZUNvbnRhY3QoKSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU29jaWFsKCkpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbygpKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU29jaWFsKCkge1xuICBjb25zdCBzb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzb2NpYWwuY2xhc3NMaXN0LmFkZChcInNvY2lhbFwiKTtcblxuICBjb25zdCBmb2xsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gIGZvbGxvdy5jbGFzc0xpc3QuYWRkKFwiZm9sbG93XCIpO1xuICBmb2xsb3cudGV4dENvbnRlbnQgPSBcIkZvbGxvdyBVc1wiO1xuXG4gIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBmYkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGZiQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYi1idXR0b25cIik7XG5cbiAgY29uc3QgZmJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGZiSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtYnJhbmRzXCIpO1xuICBmYkljb24uY2xhc3NMaXN0LmFkZChcImZhLWZhY2Vib29rLWZcIik7XG4gIGZiSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtbGdcIik7XG5cbiAgY29uc3QgaW5zdGFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbnN0YUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaW5zdGEtYnV0dG9uXCIpO1xuXG4gIGNvbnN0IGluc3RhSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpbnN0YUljb24uY2xhc3NMaXN0LmFkZChcImZhLWJyYW5kc1wiKTtcbiAgaW5zdGFJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1pbnN0YWdyYW1cIik7XG4gIGluc3RhSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtbGdcIik7XG5cbiAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmYkJ1dHRvbik7XG4gIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdGFCdXR0b24pO1xuICBzb2NpYWwuYXBwZW5kQ2hpbGQoZm9sbG93KTtcbiAgc29jaWFsLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICBmYkJ1dHRvbi5hcHBlbmRDaGlsZChmYkljb24pO1xuICBpbnN0YUJ1dHRvbi5hcHBlbmRDaGlsZChpbnN0YUljb24pO1xuXG4gIHJldHVybiBzb2NpYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oKSB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXRpdGxlXCIpO1xuICBpbmZvVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgSW5mb1wiO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiaW5mby1hZGRyZXNzXCIpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMjMgTWFpbiBTdHJlZXQsIFJpdmVyc2lkZSwgVVNBXCI7XG5cbiAgY29uc3QgYWRkcmVzc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgYWRkcmVzc0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICBhZGRyZXNzSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtbG9jYXRpb24tZG90XCIpO1xuXG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBob25lLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXBob25lXCIpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiKzEgKDU1NSkgMTIzLTQ1NjdcIjtcblxuICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1waG9uZVwiKTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaW5mby1ob3Vyc1wiKTtcbiAgaG91cnMuaW5uZXJUZXh0ID0gXCJNb24tU3VuOjEyYW0tMTFwbVwiO1xuXG4gIGNvbnN0IGhvdXJzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBob3Vyc0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICBob3Vyc0ljb24uY2xhc3NMaXN0LmFkZChcImZhLWNsb2NrXCIpO1xuXG4gIGFkZHJlc3NJY29uLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBwaG9uZUljb24uYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBob3Vyc0ljb24uYXBwZW5kQ2hpbGQoaG91cnMpO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm9UaXRsZSk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzc0ljb24pO1xuICBpbmZvLmFwcGVuZENoaWxkKHBob25lSWNvbik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaG91cnNJY29uKTtcbiAgcmV0dXJuIGluZm87XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7XG4iLCJpbXBvcnQgbG9nbyBmcm9tIFwiLi9pbWcvcmVzdGF1cmFudC1sb2dvLnBuZ1wiO1xuaW1wb3J0IGdyaWxsUyBmcm9tIFwiLi9pbWcvUy5qcGdcIjtcbmltcG9ydCBncmlsbE0gZnJvbSBcIi4vaW1nL00uanBnXCI7XG5pbXBvcnQgZ3JpbGxMIGZyb20gXCIuL2ltZy9MLmpwZ1wiO1xuaW1wb3J0IGdyaWxsWEwgZnJvbSBcIi4vaW1nL1hMLmpwZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQ29sb3NzYWwgQ29ucXVlc3RzXCIsXG4gICAgICBcIjIwXCIsXG4gICAgICBcIkEgbWlnaHR5IG1peGVkIGdyaWxsIHBsYXR0ZXIgd2l0aCBtYXJpbmF0ZWQgc3RlYWssIGdyaWxsZWQgY2hpY2tlbiwgbGFtYiBjaG9wcywgYW5kIHBvcmsgcmlicy4gU2VydmVkIHdpdGggZmxhbWUta2lzc2VkIHZlZ2V0YWJsZXMgYW5kIGhvdXNlLW1hZGUgYmFyYmVjdWUgc2F1Y2UuXCIsXG4gICAgICBncmlsbFNcbiAgICApXG4gICk7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiTWlnaHR5IE1vbnN0ZXJzXCIsXG4gICAgICBcIjI1XCIsXG4gICAgICBcIkFuIGVwaWMgZ3JpbGwgcGxhdHRlciBmZWF0dXJpbmcgY2hhci1ncmlsbGVkIHNhdXNhZ2VzLCBiZWVmIGJyaXNrZXQsIGdhcmxpYyBwcmF3bnMsIGFuZCBncmlsbGVkIHZlZ2V0YWJsZXMuIERyaXp6bGVkIHdpdGggY2hpbWljaHVycmkgc2F1Y2UuXCIsXG4gICAgICBncmlsbE1cbiAgICApXG4gICk7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiVGl0YW5pYyBUYXN0ZXNcIixcbiAgICAgIFwiMjlcIixcbiAgICAgIFwiQSB0b3dlcmluZyBmZWFzdCB3aXRoIGJhYnkgYmFjayByaWJzLCBncmlsbGVkIHNhbG1vbiwgY2hpY2tlbiBza2V3ZXJzLCBhbmQgc2Vhc29uZWQgZnJpZXMuIFNlcnZlZCB3aXRoIHRhbmd5IGJhcmJlY3VlIHNhdWNlLlwiLFxuICAgICAgZ3JpbGxMXG4gICAgKVxuICApO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIk1vbnN0cm91cyBNb3JzZWxzXCIsXG4gICAgICBcIjMzXCIsXG4gICAgICBcIlRlbmRlcmxvaW4gc3RlYWsgbWVkYWxsaW9ucywgQkJRIGNoaWNrZW4gd2luZ3MsIGdhcmxpYyBidXR0ZXIgc2hyaW1wIHNrZXdlcnMsIGFuZCBncmlsbGVkIHZlZ2V0YWJsZXMuIFNlcnZlZCB3aXRoIGNyZWFteSBtYXNoZWQgcG90YXRvZXMuXCIsXG4gICAgICBncmlsbFhMXG4gICAgKVxuICApO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlU3ViVGl0bGUoXCJEaXNjb3ZlclwiKSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoXCJPVVIgTUVOVVwiKSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHRleHQpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ViVGl0bGUodGV4dCkge1xuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgc3ViVGl0bGUuY2xhc3NMaXN0LmFkZChcInN1Yi10aXRsZVwiKTtcbiAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBzdWJUaXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgc3JjKSB7XG4gIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICBjb25zdCBmb29kSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgZm9vZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZvb2RJbWcuc3JjID0gc3JjO1xuICBmb29kSW1nLmFsdCA9IGBJbWFnZSBvZiAke25hbWV9YDtcblxuICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBmb29kUHJpY2UudGV4dENvbnRlbnQgPSBgJCR7cHJpY2V9YDtcblxuICBjb25zdCBmb29kRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb29kRGV0YWlscy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGZvb2ROYW1lLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG4gIGZvb2RJbmZvLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgZm9vZEluZm8uYXBwZW5kQ2hpbGQoZm9vZERldGFpbHMpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSW1nKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEluZm8pO1xuXG4gIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL2luaXRpYWxpemF0aW9uXCI7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG4vLyBpbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG4vLyBpbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG5jcmVhdGVIb21lKCk7XG4vLyBjcmVhdGVNZW51KCk7XG4vLyBjcmVhdGVDb250YWN0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=