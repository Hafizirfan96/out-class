(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-OcCommunity"],{

/***/ "./client/components/OcCommunity.js":
/*!******************************************!*\
  !*** ./client/components/OcCommunity.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OcCommunity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _css_colorline2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/colorline2.png */ "./client/components/css/colorline2.png");
/* harmony import */ var _css_colorline1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/colorline1.png */ "./client/components/css/colorline1.png");

 // import "./css/newstyle.css";



function OcCommunity() {
  var userCount = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ui.homePage.data.userCount;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-community"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flip-count"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "shadowimg",
    src: _css_colorline1_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "community-text"
  }, "Join our community of"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flip-counter-wrapper"
  }, "".concat(userCount).split("").map(function (number) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "number",
      key: number + "flip-coint-number",
      "data-number": "" + number
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "primary"
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "community-text"
  }, "students at Out-Class")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "shadowimg",
    src: _css_colorline2_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })));
}

/***/ }),

/***/ "./client/components/css/colorline1.png":
/*!**********************************************!*\
  !*** ./client/components/css/colorline1.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/colorline1.5a29bb98ab2ce4c1e91ec5603806d4ca.png");

/***/ }),

/***/ "./client/components/css/colorline2.png":
/*!**********************************************!*\
  !*** ./client/components/css/colorline2.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/colorline2.cd9d4000f690049afb93a3bc5d99348a.png");

/***/ })

}]);
//# sourceMappingURL=components-OcCommunity.99c4e3aa51e15e36aac0.js.map