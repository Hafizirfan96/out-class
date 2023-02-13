(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["UnbeatablePrice"],{

/***/ "./client/components/css/img3.png":
/*!****************************************!*\
  !*** ./client/components/css/img3.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/img3.fe35a495790266110b8817a74bd45cbe.png");

/***/ }),

/***/ "./client/pages/UnbeatablePrice.js":
/*!*****************************************!*\
  !*** ./client/pages/UnbeatablePrice.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnbeatablePrice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_css_img3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/css/img3.png */ "./client/components/css/img3.png");
/* harmony import */ var _store_api_unbeatablePrices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/api/unbeatablePrices */ "./client/store/api/unbeatablePrices.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // import { getStudentStats } from "../store/api/studentStats";


function UnbeatablePrice() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    heading: "",
    text: "",
    text1: "",
    image: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      homeJoin = _useState2[0],
      setHomeJoin = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_unbeatablePrices__WEBPACK_IMPORTED_MODULE_4__["getUnbeatablePrices"])({
      onSuccess: function onSuccess(res) {
        setHomeJoin(res.data.data);
      }
    }));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-unbeat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "unbeat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "unbeat-h1"
  }, homeJoin.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "unbeat-p"
  }, " ", homeJoin.text1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plans"
  }, react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(homeJoin.text))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "unbeat-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: homeJoin.image
  })));
}

/***/ }),

/***/ "./client/store/api/unbeatablePrices.js":
/*!**********************************************!*\
  !*** ./client/store/api/unbeatablePrices.js ***!
  \**********************************************/
/*! exports provided: getUnbeatablePrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnbeatablePrices", function() { return getUnbeatablePrices; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/fee";
var getUnbeatablePrices = function getUnbeatablePrices() {
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

/***/ })

}]);
//# sourceMappingURL=UnbeatablePrice.1845e850c975e58d07ad.js.map