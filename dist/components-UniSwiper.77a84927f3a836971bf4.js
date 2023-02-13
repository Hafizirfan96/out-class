(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-UniSwiper"],{

/***/ "./client/components/UniSwiper.js":
/*!****************************************!*\
  !*** ./client/components/UniSwiper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/swiper.scss */ "./node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_api_unis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/api/unis */ "./client/store/api/unis.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_3__["EffectFade"]]);

function UniSwiper(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      unis = _useState2[0],
      setUnis = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_unis__WEBPACK_IMPORTED_MODULE_5__["loadUniversities"])({
      onSuccess: function onSuccess(res) {
        setUnis(res.data.data);
      }
    }));
  }, []);
  var options = {
    autoplay: true,
    responsive: {
      0: {
        items: 3
      },
      576: {
        items: 4
      },
      992: {
        items: 6
      },
      1200: {
        items: 9
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "partner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__["Swiper"], {
    id: "partner_carousel",
    slidesPerView: 9,
    autoplay: true,
    spaceBetween: 20,
    navigation: {
      nextEl: "#uniSwiperNext",
      prevEl: "#uniSwiperPrev"
    },
    breakpoints: {
      0: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 6
      },
      1200: {
        slidesPerView: 9
      }
    }
  }, unis.map(function (data, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__["SwiperSlide"], {
      key: "data-".concat(data._id, "-").concat(index),
      className: "item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: data.image,
      className: "img-fluid"
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "uniSwiperPrev",
    style: {
      width: "50px",
      height: "50px",
      float: "left"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-long-arrow-alt-left",
    style: {
      backgroundColor: "#012237",
      borderRadius: "50%",
      textalign: "center",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "middle",
      padding: "10px 12px",
      transition: "0.3s all",
      color: "#fff"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "uniSwiperNext",
    style: {
      width: "50px",
      height: "50px",
      float: "right"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-long-arrow-alt-right",
    style: {
      backgroundColor: "#012237",
      borderRadius: "50%",
      textalign: "center",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "middle",
      padding: "10px 12px",
      transition: "0.3s all",
      color: "#fff"
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (UniSwiper);

/***/ }),

/***/ "./client/store/api/unis.js":
/*!**********************************!*\
  !*** ./client/store/api/unis.js ***!
  \**********************************/
/*! exports provided: loadUniversities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUniversities", function() { return loadUniversities; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/universities_list";
var loadUniversities = function loadUniversities() {
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
              _context.next = 3;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path
              });

            case 3:
              res = _context.sent;
              data = res.data.data; //onSuccess event firing

              if (onSuccess) onSuccess(res);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              //onError event firing
              console.log("Error => ", _context.t0);
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
      }, _callee, null, [[0, 8, 12, 15]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/swiper/swiper.scss":
/*!*****************************************!*\
  !*** ./node_modules/swiper/swiper.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=components-UniSwiper.77a84927f3a836971bf4.js.map