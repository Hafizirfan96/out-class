(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-RichTextEditor"],{

/***/ "./client/components/RichTextEditor.js":
/*!*********************************************!*\
  !*** ./client/components/RichTextEditor.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var RichTextEditor = function RichTextEditor(props) {
  var error = props.error,
      label = props.label,
      _props$className = props.className,
      className = _props$className === void 0 ? "" : _props$className,
      _props$onChange = props.onChange,
      _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$value = props.value,
      value = _props$value === void 0 ? "" : _props$value;

  var classes = className + "";

  if (error) {
    classes = classes + " border border-danger";
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "from-group"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-control-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__["CKEditor"], _extends({
    editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default.a,
    activeClass: "border border-primary",
    data: value
  }, props, {
    onChange: function onChange(event, editor) {
      _onChange(editor.getData());
    }
  }))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-danger"
  }, error));
};

/* harmony default export */ __webpack_exports__["default"] = (RichTextEditor);

/***/ })

}]);
//# sourceMappingURL=components-RichTextEditor.f7b0c5c874f5c8fcfb07.js.map