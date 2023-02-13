(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-Tables-MyCoursesTable"],{

/***/ "./client/components/Tables/MyCoursesTable.js":
/*!****************************************************!*\
  !*** ./client/components/Tables/MyCoursesTable.js ***!
  \****************************************************/
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
  var courses = props.courses;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_3__("#myCourseTable").DataTable();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: "myCourseTable",
    className: "table table-striped table-bordered",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Stats"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Quizzes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, courses.map(function (course, courseIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: "".concat(course._id, " ").concat(courseIndex)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, course.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, course.category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "btn btn-primary",
      to: "/dashboard/quiz_stat/" + course._id
    }, "Stats")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "btn btn-secondary",
      to: "/dashboard/course_quizzes/" + course._id
    }, "Quizzes")));
  })));
});

/***/ })

}]);
//# sourceMappingURL=components-Tables-MyCoursesTable.c5af700a43366afb11c7.js.map