(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-MarkQuizPage"],{

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

/***/ "./client/pages/MarkQuizPage.js":
/*!**************************************!*\
  !*** ./client/pages/MarkQuizPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DashboardSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DashboardSideBar */ "./client/components/DashboardSideBar.js");
/* harmony import */ var _store_api_quizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/api/quizes */ "./client/store/api/quizes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var DashboardCourses = function DashboardCourses(props) {
  var answerId = props.match.params.answerId;
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth.user;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showLoader = _useState2[0],
      setShowLoader = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    quiz: {
      name: ""
    },
    questions: [],
    answers: {},
    questionMarks: {},
    totalQuizMarks: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      quizAnswer = _useState4[0],
      setQuizAnswer = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_quizes__WEBPACK_IMPORTED_MODULE_4__["getQuizWithAnswer"])({
      id: answerId,
      onSuccess: function onSuccess(res) {
        setQuizAnswer(res.data.data);
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  }, []);

  var onMarksSave = function onMarksSave() {
    var questionMarks = quizAnswer.questionMarks,
        questions = quizAnswer.questions;
    var totalQuizMarks = 0;
    questions.forEach(function (q) {
      totalQuizMarks += q.marks || 0;
    });
    var obtainedMarks = 0;

    for (var key in questionMarks) {
      obtainedMarks += parseInt(questionMarks[key]) || 0;
    }

    console.log("TOTAL MARKS => ", totalQuizMarks);
    console.log("Obtained MARKS => ", obtainedMarks);
    dispatch(Object(_store_api_quizes__WEBPACK_IMPORTED_MODULE_4__["assignMarksToQuiz"])({
      id: answerId,
      body: {
        obtainedMarks: obtainedMarks,
        questionMarks: questionMarks,
        totalQuizMarks: totalQuizMarks
      },
      onSuccess: function onSuccess(res) {
        alert("Marks Saved");
      }
    }));
  };

  var renderQuestions = function renderQuestions() {
    var questions = quizAnswer.questions,
        questionMarks = quizAnswer.questionMarks;
    return questions.map(function (q, qIndex) {
      var marks = 0;
      if (questionMarks && questionMarks[q._id]) marks = questionMarks[q._id];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card shadow mt-1 p-2",
        key: q._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "mr-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q#", qIndex + 1, ".")), user.role == "TEACHER" || user.role == "TEACHER_ASSISTANT" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        placeholder: "Marks",
        style: {
          width: "80px"
        },
        value: marks || "",
        onChange: function onChange(e) {
          var newQuizAnswer = _objectSpread(_objectSpread({}, quizAnswer), {}, {
            questionMarks: _objectSpread({}, questionMarks)
          });

          newQuizAnswer.questionMarks[q._id] = e.target.value;
          setQuizAnswer(newQuizAnswer);
        }
      }) : marks, "/", q.marks)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, q.name && react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(q.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, q.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: q.image,
        style: {
          weight: "200px",
          width: "500px"
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, q.type === "multi-choice" ? renderQuestionOptions(q) : renderQuestionWrittenAnswer(q)));
    });
  };

  var renderQuestionOptions = function renderQuestionOptions(q) {
    var selectedOptions = {};
    var answers = quizAnswer.answers;

    if (answers[q._id] && answers[q._id].selectedOptions) {
      selectedOptions = answers[q._id].selectedOptions;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Marked"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Correct")), q.options.map(function (o) {
      var isSelected = selectedOptions[o.id] || false;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: o.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, isSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-check text-success"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times text-danger"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "my-2 "
      }, o.name && react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(o.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, o.isCorrect && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-check text-success ml-2"
      })));
    }));
  };

  var renderQuestionWrittenAnswer = function renderQuestionWrittenAnswer(q) {
    var answers = quizAnswer.answers;
    var ans = "";
    if (answers[q._id]) ans = answers[q._id].writtenAnswer;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Ans: "), ans);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "dash_board"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DashboardSideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeTab: "assigned_courses"
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, quizAnswer.quiz.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderQuestions()), (user.role == "TEACHER" || user.role == "TEACHER_ASSISTANT") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary my-5",
    onClick: onMarksSave
  }, "Save"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardCourses);

/***/ })

}]);
//# sourceMappingURL=pages-MarkQuizPage.f1e8efd23e9d06087c1a.js.map