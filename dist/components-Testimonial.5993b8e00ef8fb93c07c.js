(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-Testimonial"],{

/***/ "./client/components/Testimonial.js":
/*!******************************************!*\
  !*** ./client/components/Testimonial.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rating-stars-component */ "./node_modules/react-rating-stars-component/dist/react-stars.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rating_stars_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/swiper.scss */ "./node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/components/navigation/navigation.scss */ "./node_modules/swiper/components/navigation/navigation.scss");
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_api_testimonials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/api/testimonials */ "./client/store/api/testimonials.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_5__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_5__["EffectFade"], swiper__WEBPACK_IMPORTED_MODULE_5__["Pagination"]]);


var MultiCarouselPage = function MultiCarouselPage(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      testimonials = _useState2[0],
      setTestimonials = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.courseId) return;
    dispatch(Object(_store_api_testimonials__WEBPACK_IMPORTED_MODULE_7__["loadTestimonials"])({
      id: props.courseId,
      onSuccess: function onSuccess(res) {
        setTestimonials(res.data.data);
      }
    }));
  }, [props.courseId]);
  return testimonials.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], {
    autoplay: true,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,
    navigation: {
      nextEl: "#courseTestimonialNext",
      prevEl: "#courseTestimonialPrev"
    }
  }, testimonials.map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
      key: data._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "course-testimonial-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: data.image,
      alt: "",
      className: "w-100"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_rating_stars_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
      count: 5,
      value: data.rating || 0,
      edit: false,
      size: 16,
      isHalf: true,
      emptySymbol: "fa fa-star-o",
      fullSymbol: "fa fa-star",
      emptyIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-star"
      }),
      halfIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-star-half-alt"
      }),
      filledIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-star"
      }),
      activeColor: "#00acf0",
      fractions: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-2"
    }, data.review), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, data.name)))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-2 clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "courseTestimonialPrev",
    className: "float-left",
    style: {
      width: "40px",
      height: "40px",
      float: "right",
      backgroundColor: "#012237",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      cursor: "pointer"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-long-arrow-alt-left text-white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "courseTestimonialNext",
    className: "float-right",
    style: {
      width: "40px",
      height: "40px",
      float: "right",
      backgroundColor: "#012237",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      cursor: "pointer"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-long-arrow-alt-right text-white"
  })))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (MultiCarouselPage);

/***/ }),

/***/ "./client/store/api/testimonials.js":
/*!******************************************!*\
  !*** ./client/store/api/testimonials.js ***!
  \******************************************/
/*! exports provided: loadTestimonials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTestimonials", function() { return loadTestimonials; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
/* harmony import */ var _ui_testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/testimonials */ "./client/store/ui/testimonials.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var path = "/cms/testimonial_slider";
var loadTestimonials = function loadTestimonials() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "" : _ref$id,
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
              dispatch(Object(_ui_testimonials__WEBPACK_IMPORTED_MODULE_2__["loadingTestimonials"])(true));
              _context.prev = 1;
              _context.next = 4;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: "".concat(path, "/course/").concat(id)
              });

            case 4:
              res = _context.sent;
              data = res.data.data;
              dispatch(Object(_ui_testimonials__WEBPACK_IMPORTED_MODULE_2__["setTestimonial"])(data)); //onSuccess event firing

              if (onSuccess) onSuccess(res);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              //onError event firing
              console.log("Error => ", _context.t0);
              if (onError) onError(_context.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context.t0);

            case 14:
              _context.prev = 14;
              if (onEnd) onEnd();
              dispatch(Object(_ui_testimonials__WEBPACK_IMPORTED_MODULE_2__["loadingTestimonials"])(false));
              return _context.finish(14);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10, 14, 18]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/swiper/components/navigation/navigation.scss":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/components/navigation/navigation.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=components-Testimonial.5993b8e00ef8fb93c07c.js.map