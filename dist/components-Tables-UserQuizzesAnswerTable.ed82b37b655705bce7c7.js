(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-Tables-UserQuizzesAnswerTable"],{

/***/ "./client/components/Tables/UserQuizzesAnswerTable.js":
/*!************************************************************!*\
  !*** ./client/components/Tables/UserQuizzesAnswerTable.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var datatables_net_bs4_css_dataTables_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-bs4/css/dataTables.bootstrap4.min.css */ "./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css");
/* harmony import */ var datatables_net_bs4_css_dataTables_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4_css_dataTables_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__);




jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__["DataTable"] = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$quizzes = props.quizzes,
      quizzes = _props$quizzes === void 0 ? [] : _props$quizzes;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#myCourseTable").DataTable();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: "myCourseTable",
    className: "table table-striped table-bordered",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Marked"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Quiz"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, quizzes.map(function (quizAns, quizIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: "".concat(quizAns._id, " ").concat(quizIndex)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, quizAns.quiz.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, quizAns.markedByTeacher ? "Marked" : "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "btn btn-secondary",
      to: "/mark_quiz/" + quizAns._id
    }, "Quizzes")));
  })));
});

/***/ })

}]);
//# sourceMappingURL=components-Tables-UserQuizzesAnswerTable.ed82b37b655705bce7c7.js.map