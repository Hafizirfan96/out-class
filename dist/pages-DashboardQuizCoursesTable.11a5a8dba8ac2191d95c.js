(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-DashboardQuizCoursesTable"],{

/***/ "./client/assets/img/blog.png":
/*!************************************!*\
  !*** ./client/assets/img/blog.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/blog.ed9e352eadd6bcd6dc2f34f7395f0cc3.png");

/***/ }),

/***/ "./client/assets/img/comments.png":
/*!****************************************!*\
  !*** ./client/assets/img/comments.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/comments.3a7a0f119ff102ed46fe2f30213e2bcb.png");

/***/ }),

/***/ "./client/assets/img/courses.png":
/*!***************************************!*\
  !*** ./client/assets/img/courses.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/courses.0cbcf565aff04e44f9ab5d6e585e7db6.png");

/***/ }),

/***/ "./client/assets/img/dash.png":
/*!************************************!*\
  !*** ./client/assets/img/dash.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/dash.18702d25ca8bcd1f068cc511125ace6b.png");

/***/ }),

/***/ "./client/assets/img/usr.png":
/*!***********************************!*\
  !*** ./client/assets/img/usr.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/usr.712c86e97d2fbc8012f1dedaa4985421.png");

/***/ }),

/***/ "./client/components/DashboardSideBar.js":
/*!***********************************************!*\
  !*** ./client/components/DashboardSideBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_img_dash_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/dash.png */ "./client/assets/img/dash.png");
/* harmony import */ var _assets_img_courses_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/courses.png */ "./client/assets/img/courses.png");
/* harmony import */ var _assets_img_comments_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/comments.png */ "./client/assets/img/comments.png");
/* harmony import */ var _assets_img_blog_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/blog.png */ "./client/assets/img/blog.png");
/* harmony import */ var _assets_img_usr_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/usr.png */ "./client/assets/img/usr.png");









/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth.user;
  }); // console.log("USER => ", user);

  var isTeacher = false;

  if (user.role === "TEACHER" || user.role === "TEACHER_ASSISTANT") {
    isTeacher = true;
  }

  var _props$activeTab = props.activeTab,
      activeTab = _props$activeTab === void 0 ? "user" : _props$activeTab;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-1  col-12 p-0 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidebar_cover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    bg: "dark",
    expand: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "navbarSupportedContent1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav flex-column nav-tabs mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/dashboard",
    className: activeTab === "user" ? "nav-link active" : "nav-link",
    id: "User-tab",
    "data-toggle": "tab",
    role: "tab",
    "aria-controls": "User",
    "aria-selected": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_usr_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: "",
    className: "img-fluid"
  }), "User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/dashboard/courses",
    className: activeTab === "courses" ? "nav-link active" : "nav-link",
    id: "Courses-tab",
    "data-toggle": "tab",
    role: "tab",
    "aria-controls": "Courses",
    "aria-selected": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_courses_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "",
    className: "img-fluid"
  }), "Enrolled Courses")), isTeacher && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/dashboard/assigned_courses",
    className: activeTab === "assigned_courses" ? "nav-link active" : "nav-link",
    id: "Courses-tab",
    "data-toggle": "tab",
    role: "tab",
    "aria-controls": "Courses",
    "aria-selected": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_courses_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "",
    className: "img-fluid"
  }), "Assigned Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/dashboard/my_courses",
    className: activeTab === "quizzes" ? "nav-link active" : "nav-link",
    id: "Courses-tab",
    "data-toggle": "tab",
    role: "tab",
    "aria-controls": "Courses",
    "aria-selected": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_comments_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "",
    className: "img-fluid"
  }), "Quizzes")))))));
});

/***/ }),

/***/ "./client/pages/DashboardQuizCoursesTable.js":
/*!***************************************************!*\
  !*** ./client/pages/DashboardQuizCoursesTable.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_DashboardSideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DashboardSideBar */ "./client/components/DashboardSideBar.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _store_api_courses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/api/courses */ "./client/store/api/courses.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var MyCoursesTable = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_3__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-Tables-MyCoursesTable";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-Tables-MyCoursesTable */[__webpack_require__.e("vendors~components-Tables-MyCoursesTable~components-Tables-MyOrderTable~components-Tables-QuizAssign~a3de6d19"), __webpack_require__.e("components-Tables-MyCoursesTable")]).then(__webpack_require__.bind(null, /*! ../components/Tables/MyCoursesTable */ "./client/components/Tables/MyCoursesTable.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/Tables/MyCoursesTable */ "./client/components/Tables/MyCoursesTable.js");
    }

    return eval('require.resolve')("../components/Tables/MyCoursesTable");
  }
}, {
  ssr: false
});

var DashboardCourses = function DashboardCourses(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      coursesList = _useState2[0],
      setCoursesList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showLoader = _useState4[0],
      setShowLoader = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShowLoader(true);
    dispatch(Object(_store_api_courses__WEBPACK_IMPORTED_MODULE_4__["loadMyCourses"])({
      onSuccess: function onSuccess(res) {
        setCoursesList(res.data.data);
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "dash_board"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DashboardSideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeTab: "quizzes"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-11  col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content",
    id: "DashboardContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-11 pt-5 col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content",
    id: "DashboardContent"
  }, !showLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyCoursesTable, {
    courses: coursesList
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardCourses);

/***/ })

}]);
//# sourceMappingURL=pages-DashboardQuizCoursesTable.11a5a8dba8ac2191d95c.js.map