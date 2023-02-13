(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-HomeSlider3"],{

/***/ "./client/components/HomeSlider3.js":
/*!******************************************!*\
  !*** ./client/components/HomeSlider3.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homeSlider3; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-owl-carousel */ "./node_modules/react-owl-carousel/umd/OwlCarousel.js");
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.theme.default.css */ "./node_modules/owl.carousel/dist/assets/owl.theme.default.css");
/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_ayes_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/ayes.png */ "./client/components/css/ayes.png");
/* harmony import */ var _css_mdcat_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/mdcat.png */ "./client/components/css/mdcat.png");
/* harmony import */ var _css_user_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/user.png */ "./client/components/css/user.png");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_slidernext_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/slidernext.png */ "./client/components/css/slidernext.png");
/* harmony import */ var _css_sliderpre_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/sliderpre.png */ "./client/components/css/sliderpre.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_api_studyMaterial__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/api/studyMaterial */ "./client/store/api/studyMaterial.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







 // imo










function homeSlider3() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      sliders = _useState2[0],
      setSliders = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_studyMaterial__WEBPACK_IMPORTED_MODULE_14__["loadHomeSliders"])({
      onSuccess: function onSuccess(res) {
        setSliders(res.data.data);
      }
    }));
  }, []);
  var settings = {
    // dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "teacher-slider"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: " homeSlider3-next",
      src: _css_slidernext_png__WEBPACK_IMPORTED_MODULE_11__["default"]
    })),
    prevArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "teacher-slider"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "homeSlider3-pre ",
      src: _css_sliderpre_png__WEBPACK_IMPORTED_MODULE_12__["default"]
    })),
    autoplay: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    }, {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: "4%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homeSlider4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " Along with "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "bT2"
  }, "top-scoring study material")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-study-material-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({}, settings, {
    arrows: true
  }), sliders.map(function (item) {
    var id = item.id,
        heading = item.heading,
        image = item.image,
        text = item.text,
        color = item.color;
    {
      console.log("study===2", item);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "study-material-card",
      style: {
        backgroundColor: color
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "study-material-card2",
      style: {
        backgroundColor: color
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "study-material-h1" // style={{color:color}}

    }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "study-material-p"
    }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "study-material-img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: image
    }))));
  })))));
}

/***/ }),

/***/ "./client/components/css/ayes.png":
/*!****************************************!*\
  !*** ./client/components/css/ayes.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/ayes.4ab060c33939c5dcc43be0cc2f5df654.png");

/***/ }),

/***/ "./client/components/css/mdcat.png":
/*!*****************************************!*\
  !*** ./client/components/css/mdcat.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/mdcat.19ca0fb7ad4e2307ef656724d1002fef.png");

/***/ }),

/***/ "./client/components/css/slidernext.png":
/*!**********************************************!*\
  !*** ./client/components/css/slidernext.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/slidernext.48baef6daad4549e183dbdcd052e0d67.png");

/***/ }),

/***/ "./client/components/css/sliderpre.png":
/*!*********************************************!*\
  !*** ./client/components/css/sliderpre.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/sliderpre.5aa92f3aede5f4df6cf2a4fff0415d88.png");

/***/ }),

/***/ "./client/components/css/user.png":
/*!****************************************!*\
  !*** ./client/components/css/user.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/user.99f94736d5280cbd7d4309ec60cc161f.png");

/***/ }),

/***/ "./client/store/api/studyMaterial.js":
/*!*******************************************!*\
  !*** ./client/store/api/studyMaterial.js ***!
  \*******************************************/
/*! exports provided: loadHomeSliders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomeSliders", function() { return loadHomeSliders; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/study_material";
var loadHomeSliders = function loadHomeSliders() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? {} : _ref$body,
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
//# sourceMappingURL=components-HomeSlider3.c3615c3a4d249a88b758.js.map