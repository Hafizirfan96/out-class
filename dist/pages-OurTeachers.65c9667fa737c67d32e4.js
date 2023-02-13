(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-OurTeachers"],{

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

/***/ "./client/pages/OurTeachers.js":
/*!*************************************!*\
  !*** ./client/pages/OurTeachers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _store_api_faqs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/api/faqs */ "./client/store/api/faqs.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ "./client/components/Loader.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_OurTeamAbout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/OurTeamAbout */ "./client/shared/OurTeamAbout.js");
/* harmony import */ var _store_api_teacherPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/api/teacherPage */ "./client/store/api/teacherPage.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");











var OurTeachers = function OurTeachers(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var pageData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ui.ourTeachersPage.data;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_teacherPage__WEBPACK_IMPORTED_MODULE_7__["loadTeacherPageCMS"])({}));
  }, []); //overlapping Loader

  var renderLoader = function renderLoader() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlapping-loader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: pageData.metaTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: pageData.metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: pageData.metaKeyWords
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "other_banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, pageData.mainHeading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item active"
  }, pageData.mainHeading))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "teacher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pageData.text1 && react_render_html__WEBPACK_IMPORTED_MODULE_5___default()(pageData.text1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_OurTeamAbout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    heading: pageData.heading1,
    pageType: "teacher"
  }))));
};

OurTeachers.loadData = function (_ref) {
  var store = _ref.store,
      matchedRoute = _ref.matchedRoute;
  console.log("Teacher Page data");
  var token = store.getState().auth.token;
  var dispatch = store.dispatch;
  var promiseArray = []; // if (token) {

  promiseArray.push(dispatch(Object(_store_api_teacherPage__WEBPACK_IMPORTED_MODULE_7__["loadTeacherPageCMS"])({}))); // }

  return Promise.all(promiseArray);
};

/* harmony default export */ __webpack_exports__["default"] = (OurTeachers);

/***/ }),

/***/ "./client/store/api/faqs.js":
/*!**********************************!*\
  !*** ./client/store/api/faqs.js ***!
  \**********************************/
/*! exports provided: loadFaqs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFaqs", function() { return loadFaqs; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/faqs";
var loadFaqs = function loadFaqs() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      onSuccess = _ref.onSuccess,
      onError = _ref.onError,
      onEnd = _ref.onEnd;

  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path
              });

            case 3:
              res = _context.sent;
              //onSuccess event firing
              if (onSuccess) onSuccess(res);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              //onError event firing
              console.log("Error => ", _context.t0);
              if (onError) onError(_context.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context.t0);

            case 11:
              _context.prev = 11;
              if (onEnd) onEnd();
              return _context.finish(11);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7, 11, 14]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./client/store/api/teacherPage.js":
/*!*****************************************!*\
  !*** ./client/store/api/teacherPage.js ***!
  \*****************************************/
/*! exports provided: loadTeacherPageCMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTeacherPageCMS", function() { return loadTeacherPageCMS; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
/* harmony import */ var _ui_ourTeachersPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ourTeachersPage */ "./client/store/ui/ourTeachersPage.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var path = "/cms/teacher_page_cms_data";
var loadTeacherPageCMS = function loadTeacherPageCMS() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? {} : _ref$body,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError,
      onEnd = _ref.onEnd;

  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var res, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              //showing loader on ui
              Object(_ui_ourTeachersPage__WEBPACK_IMPORTED_MODULE_2__["setOurTeachersLoader"])(true);
              _context.next = 4;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path
              });

            case 4:
              res = _context.sent;
              data = res.data.data;
              dispatch(Object(_ui_ourTeachersPage__WEBPACK_IMPORTED_MODULE_2__["setOurTeachersData"])(data)); //onSuccess event firing

              if (onSuccess) onSuccess(res);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              //onError event firing
              if (onError) onError(_context.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context.t0);

            case 13:
              _context.prev = 13;
              Object(_ui_ourTeachersPage__WEBPACK_IMPORTED_MODULE_2__["setOurTeachersLoader"])(true);
              if (onEnd) onEnd();
              return _context.finish(13);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10, 13, 17]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ })

}]);
//# sourceMappingURL=pages-OurTeachers.65c9667fa737c67d32e4.js.map