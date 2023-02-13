(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-CoursePage~pages-DashboardUserQuizzes~pages-MarkQuizPage~pages-StatPage"],{

/***/ "./client/store/api/quizes.js":
/*!************************************!*\
  !*** ./client/store/api/quizes.js ***!
  \************************************/
/*! exports provided: getQuizWithAnswer, getCourseQuizes, answerQuiz, assignMarksToQuiz, getCourseQuizAnswers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuizWithAnswer", function() { return getQuizWithAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourseQuizes", function() { return getCourseQuizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answerQuiz", function() { return answerQuiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignMarksToQuiz", function() { return assignMarksToQuiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourseQuizAnswers", function() { return getCourseQuizAnswers; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/quizes";
var getQuizWithAnswer = function getQuizWithAnswer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "" : _ref$id,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError,
      onEnd = _ref.onEnd;

  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var storeState, token, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              storeState = getState();
              token = storeState.auth.token;
              _context.prev = 2;
              _context.next = 5;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path + "/get_quiz_with_answer/" + id,
                headers: {
                  "x-auth-token": token
                }
              });

            case 5:
              res = _context.sent;
              //onSuccess event firing
              if (onSuccess) onSuccess(res);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              //onError event firing
              if (onError) onError(_context.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context.t0);

            case 12:
              _context.prev = 12;
              if (onEnd) onEnd();
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9, 12, 15]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getCourseQuizes = function getCourseQuizes() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$id = _ref3.id,
      id = _ref3$id === void 0 ? "" : _ref3$id,
      onSuccess = _ref3.onSuccess,
      onError = _ref3.onError,
      onEnd = _ref3.onEnd;

  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState) {
      var storeState, token, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              storeState = getState();
              token = storeState.auth.token;
              _context2.prev = 2;
              _context2.next = 5;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path + "/course_quizzes/" + id,
                headers: {
                  "x-auth-token": token
                }
              });

            case 5:
              res = _context2.sent;
              //onSuccess event firing
              if (onSuccess) onSuccess(res);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              //onError event firing
              if (onError) onError(_context2.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context2.t0);

            case 12:
              _context2.prev = 12;
              if (onEnd) onEnd();
              return _context2.finish(12);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9, 12, 15]]);
    }));

    return function (_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var answerQuiz = function answerQuiz() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$id = _ref5.id,
      id = _ref5$id === void 0 ? "" : _ref5$id,
      _ref5$body = _ref5.body,
      body = _ref5$body === void 0 ? {} : _ref5$body,
      onSuccess = _ref5.onSuccess,
      onError = _ref5.onError,
      onEnd = _ref5.onEnd;

  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState) {
      var storeState, token, res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              storeState = getState();
              token = storeState.auth.token;
              _context3.prev = 2;
              _context3.next = 5;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].post({
                url: path + "/answer_quiz/" + id,
                body: body,
                headers: {
                  "x-auth-token": token
                }
              });

            case 5:
              res = _context3.sent;
              //onSuccess event firing
              if (onSuccess) onSuccess(res);
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](2);
              //onError event firing
              if (onError) onError(_context3.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context3.t0);

            case 12:
              _context3.prev = 12;
              if (onEnd) onEnd();
              return _context3.finish(12);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 9, 12, 15]]);
    }));

    return function (_x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }();
}; //

var assignMarksToQuiz = function assignMarksToQuiz() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref7$id = _ref7.id,
      id = _ref7$id === void 0 ? "" : _ref7$id,
      _ref7$body = _ref7.body,
      body = _ref7$body === void 0 ? {} : _ref7$body,
      onSuccess = _ref7.onSuccess,
      onError = _ref7.onError,
      onEnd = _ref7.onEnd;

  return /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState) {
      var storeState, token, res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              storeState = getState();
              token = storeState.auth.token;
              _context4.prev = 2;
              _context4.next = 5;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].post({
                url: path + "/mark_quiz_answer/" + id,
                body: body,
                headers: {
                  "x-auth-token": token
                }
              });

            case 5:
              res = _context4.sent;
              //onSuccess event firing
              if (onSuccess) onSuccess(res);
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](2);
              //onError event firing
              if (onError) onError(_context4.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context4.t0);

            case 12:
              _context4.prev = 12;
              if (onEnd) onEnd();
              return _context4.finish(12);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 9, 12, 15]]);
    }));

    return function (_x7, _x8) {
      return _ref8.apply(this, arguments);
    };
  }();
}; //

var getCourseQuizAnswers = function getCourseQuizAnswers() {
  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref9$id = _ref9.id,
      id = _ref9$id === void 0 ? "" : _ref9$id,
      onSuccess = _ref9.onSuccess,
      onError = _ref9.onError,
      onEnd = _ref9.onEnd;

  return /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState) {
      var storeState, token, res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              storeState = getState();
              token = storeState.auth.token;
              _context5.prev = 2;
              _context5.next = 5;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path + "/course_quiz_answers/" + id,
                headers: {
                  "x-auth-token": token
                }
              });

            case 5:
              res = _context5.sent;
              //onSuccess event firing
              if (onSuccess) onSuccess(res);
              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](2);
              //onError event firing
              if (onError) onError(_context5.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context5.t0);

            case 12:
              _context5.prev = 12;
              if (onEnd) onEnd();
              return _context5.finish(12);

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 9, 12, 15]]);
    }));

    return function (_x9, _x10) {
      return _ref10.apply(this, arguments);
    };
  }();
};

/***/ })

}]);
//# sourceMappingURL=pages-CoursePage~pages-DashboardUserQuizzes~pages-MarkQuizPage~pages-StatPage.f1069cfb9f5b5e4bbb07.js.map