(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-StartQuiz"],{

/***/ "./client/components/Loader.js":
/*!*************************************!*\
  !*** ./client/components/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners/BounceLoader */ "./node_modules/react-spinners/BounceLoader.js");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "#00acf0" : _props$color;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_1___default.a, {
    color: color
  });
});

/***/ }),

/***/ "./client/components/StartMcqs.js":
/*!****************************************!*\
  !*** ./client/components/StartMcqs.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartMcqs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _store_api_quizBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/api/quizBank */ "./client/store/api/quizBank.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function StartMcqs(_ref) {
  var quizMcqs = _ref.quizMcqs,
      setCurrentPage = _ref.setCurrentPage,
      currentPage = _ref.currentPage,
      name = _ref.name,
      quizBankId = _ref.quizBankId,
      quizBankQA = _ref.quizBankQA;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      practice = _useState2[0],
      setpractice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      solved = _useState4[0],
      setSolved = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // const navigate = useNavigate();

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var fuck = {
    0: "A",
    1: "B",
    2: "C",
    3: "D"
  }; // useState

  var initialValues = {
    op: "" // description: "",
    // image: "",

  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
      var as, as2;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              as = {};
              as2 = {
                name: "ali",
                age: 30,
                role: "admin"
              };
              practice.push(as, as2);
              console.log("asdasd====", practice);
              console.log("value-===>>", values); // localStorage.setItem("haris", "hr")

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChangew = function handleChangew(e, question, correctAnswer, options, explanation) {
    var solvedMcQ = {
      answer: [e.target.value],
      question: question,
      correctAnswer: correctAnswer,
      options: options,
      explanation: explanation
    };
    setSolved([].concat(_toConsumableArray(solved), [solvedMcQ])); // setCurrentPage(currentPage+1);

    console.log("handleChange==>>", e.target, question);
  };

  var save = function save() {
    console.log("name000===>>", name);
    console.log("quiz id===>>", quizBankId);
    console.log("quiz QA id===>>", quizBankQA);
    var user = localStorage.getItem("user");
    user = JSON.parse(user);
    console.log("user===> ", user._id);
    console.log(solved);
    dispatch(Object(_store_api_quizBank__WEBPACK_IMPORTED_MODULE_2__["postRecord"])({
      body: {
        name: name,
        quizBank: quizBankId,
        user: user._id,
        quizBankQA: quizBankQA,
        solvedQuiz: solved
      },
      onSuccess: function onSuccess(res) {
        console.log("res", res); //  navigate("/quiz-result");

        history.push("/quiz-result");
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, quizMcqs === null || quizMcqs === void 0 ? void 0 : quizMcqs.map(function (fl) {
    console.log("fl===> ", fl);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "question_wrap_step"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "sub_heading mb-3"
    }, fl.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "lender-with-cross"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: initialValues //   validationSchema={validationSchema}
      ,
      onSubmit: onSubmit //   onSubmit={(values) => {
      //     console.log("feedback values", values);
      //   }}

    }, function (_ref3) {
      var _fl$options;

      var values = _ref3.values,
          handleChange = _ref3.handleChange,
          handleBlur = _ref3.handleBlur,
          handleSubmit = _ref3.handleSubmit,
          errors = _ref3.errors,
          touched = _ref3.touched;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, (_fl$options = fl.options) === null || _fl$options === void 0 ? void 0 : _fl$options.map(function (op, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          class: "option"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "radio",
          name: "op",
          onChange: function onChange(e) {
            return handleChangew(e, fl.question, fl.correctAnswer, fl.options, fl.explanation);
          },
          onBlur: handleBlur("op"),
          value: op // name="op"
          ,
          id: op,
          class: "custom-checkbox"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          class: "bankClkTrack",
          for: op
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          class: "option_title title_1"
        }, op)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "nubmer"
        }, fuck[index])));
      })));
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn_wrap flex-columan sav-paus"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn_previs mr-2"
  }, "Pause"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger2",
    onClick: save
  }, "Save & Exit")));
}

/***/ }),

/***/ "./client/components/StartQuiz.js":
/*!****************************************!*\
  !*** ./client/components/StartQuiz.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartQuiz; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_api_quizBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/api/quizBank */ "./client/store/api/quizBank.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader */ "./client/components/Loader.js");
/* harmony import */ var _StartMcqs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StartMcqs */ "./client/components/StartMcqs.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination */ "./client/components/pagination.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function StartQuiz() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      quizMcqs = _useState2[0],
      SetQuizMcqs = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showLoader = _useState4[0],
      setShowLoader = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState8 = _slicedToArray(_useState7, 2),
      currentPage = _useState8[0],
      setCurrentPage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState10 = _slicedToArray(_useState9, 1),
      postsPerPage = _useState10[0];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      name = _useState12[0],
      setName = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      quizBankId = _useState14[0],
      setQuizBankId = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState16 = _slicedToArray(_useState15, 2),
      quizBankQA = _useState16[0],
      setQuizBankQA = _useState16[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLoading(true);
    dispatch(Object(_store_api_quizBank__WEBPACK_IMPORTED_MODULE_2__["loadQAMcqs"])({
      id: params.id,
      onSuccess: function onSuccess(res) {
        SetQuizMcqs(res.data.data.quizBankQA.mcqs);
        console.log("mcqs=======>>>", res.data.data.quizBankQA.mcqs.length);
        console.log("startQuiz=====>>>", res);
        setName(res.data.data.quizBankQA.name);
        setQuizBankId(res.data.data.quizBankQA.quizBank);
        setQuizBankQA(res.data.data.quizBankQA._id);
        console.log("name quizchp===>", res.data.data.quizBankQA.name);
        setLoading(false);
      } // onEnd: () => {
      //   },

    }));
  }, []);

  var renderLoader = function renderLoader() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlapping-loader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  };

  if (loading && quizMcqs.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Loading...");
  } //Get current posts


  var indexOfLastPost = currentPage * postsPerPage;
  var indexOfFirstPost = indexOfLastPost - postsPerPage; // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  var currentPosts = quizMcqs.slice(indexOfFirstPost, indexOfLastPost);
  var howManyPages = Math.ceil(quizMcqs.length / postsPerPage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "15%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quiz_head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " ", name), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "sub_heading text-center mt-4",
    style: {
      textAlign: "center"
    }
  }, "COMPLETE QUIZ BANK"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-quiz-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quiz_paper mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quiz_paper_head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "theme_para"
  }, "Total Questions: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, quizMcqs.length)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "time"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "theme_para"
  }, "Time : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "25:07"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
    crntBtn: currentPage,
    pages: howManyPages,
    setCurrentPage: setCurrentPage
  }), quizMcqs !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StartMcqs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: name,
    quizBankId: quizBankId,
    quizBankQA: quizBankQA,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    quizMcqs: currentPosts
  })) : null)));
}

/***/ }),

/***/ "./client/components/pagination.js":
/*!*****************************************!*\
  !*** ./client/components/pagination.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Pagination(_ref) {
  var _ref$pages = _ref.pages,
      pages = _ref$pages === void 0 ? 10 : _ref$pages,
      setCurrentPage = _ref.setCurrentPage,
      crntBtn = _ref.crntBtn;
  console.log({
    crntBtn: crntBtn
  }); //Set number of pages

  var numberOfPages = [];

  for (var i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  } // Current active button number


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(crntBtn),
      _useState2 = _slicedToArray(_useState, 2),
      currentButton = _useState2[0],
      setCurrentButton = _useState2[1]; // Array of buttons what we see on the page


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      arrOfCurrButtons = _useState4[0],
      setArrOfCurrButtons = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var tempNumberOfPages = _toConsumableArray(arrOfCurrButtons);

    var dotsInitial = "...";
    var dotsLeft = "... ";
    var dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, dotsInitial, numberOfPages.length];
    } else if (currentButton === 13) {
      var sliced = numberOfPages.slice(0, 13);
      tempNumberOfPages = [].concat(_toConsumableArray(sliced), [dotsInitial, numberOfPages.length]);
    } else if (currentButton > 12 && currentButton < numberOfPages.length - 2) {
      // from 5 to 8 -> (10 - 2)
      var sliced1 = numberOfPages.slice(currentButton - 2, currentButton); // sliced1 (5-2, 5) -> [4,5]

      var sliced2 = numberOfPages.slice(currentButton, currentButton + 1); // sliced1 (5, 5+1) -> [6]

      tempNumberOfPages = [1, dotsLeft].concat(_toConsumableArray(sliced1), _toConsumableArray(sliced2), [dotsRight, numberOfPages.length]); // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentButton > numberOfPages.length - 13) {
      // > 7
      var _sliced = numberOfPages.slice(numberOfPages.length - 13); // slice(10-4)


      tempNumberOfPages = [1, dotsLeft].concat(_toConsumableArray(_sliced));
    } else if (crntBtn !== 1 && currentButton === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (crntBtn !== 1 && currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (crntBtn !== 1 && currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton]);

  var clickNext = function clickNext() {
    return setCurrentButton(function (prev) {
      return prev >= numberOfPages.length ? prev : prev + 1;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "sub_heading pa-ques"
  }, "Question :  ", currentButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    // href="#"
    className: "".concat(currentButton === 1 ? "disabled" : "", " "),
    onClick: function onClick() {
      return setCurrentButton(function (prev) {
        return prev <= 1 ? prev : prev - 1;
      });
    }
  }, "Prev"), arrOfCurrButtons.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      //   href="#"
      key: index,
      className: "".concat(currentButton === item ? "active" : ""),
      style: {
        backgroundColor: "".concat(currentButton === item ? "#00b0f0" : "")
      },
      onClick: function onClick() {
        return setCurrentButton(item);
      }
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    // href="#"
    className: "".concat(currentButton === numberOfPages.length ? "disabled" : ""),
    onClick: function onClick() {
      return setCurrentButton(function (prev) {
        return prev >= numberOfPages.length ? prev : prev + 1;
      });
    }
  }, "Next")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn_wrap pagination2-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    //   ÷className='btn btn_previs mr-2'
    className: "btn btn_previs mr-2 ".concat(currentButton === 1 ? "disabled" : "", " "),
    onClick: function onClick() {
      return setCurrentButton(function (prev) {
        return prev <= 1 ? prev : prev - 1;
      });
    }
  }, "Previous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    //    className='btn btn_previs'
    // className={` ${currentButton === 1 ? 'disabled' : ''} `}
    className: "btn btn_previs ".concat(currentButton === numberOfPages.length ? "disabled" : ""),
    onClick: function onClick() {
      return setCurrentButton(function (prev) {
        return prev >= numberOfPages.length ? prev : prev + 1;
      });
    }
  }, "Next")));
}

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

}]);
//# sourceMappingURL=components-StartQuiz.49386a0d0787c52fda9d.js.map