(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-HomeSlider"],{

/***/ "./client/assets/temp/Icon_1.png":
/*!***************************************!*\
  !*** ./client/assets/temp/Icon_1.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Icon_1.5dcd2da166b1ab52700605fade097f08.png");

/***/ }),

/***/ "./client/assets/temp/Icon_2.png":
/*!***************************************!*\
  !*** ./client/assets/temp/Icon_2.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Icon_2.480e214ce38ee0c50fd99da35a433674.png");

/***/ }),

/***/ "./client/assets/temp/Icon_3.png":
/*!***************************************!*\
  !*** ./client/assets/temp/Icon_3.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Icon_3.6fbd3d25e81e60322bcf1b71b1b37847.png");

/***/ }),

/***/ "./client/assets/temp/Icon_4.png":
/*!***************************************!*\
  !*** ./client/assets/temp/Icon_4.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Icon_4.7ba65671aa4745dfaa73594001b85dd4.png");

/***/ }),

/***/ "./client/assets/temp/si.png":
/*!***********************************!*\
  !*** ./client/assets/temp/si.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/si.e6ea58d359cb3a3a18988858154c57dd.png");

/***/ }),

/***/ "./client/components/HomeButton.js":
/*!*****************************************!*\
  !*** ./client/components/HomeButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Button(_ref) {
  var href = _ref.href,
      title = _ref.title,
      btnClass = _ref.btnClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    className: "btn more ".concat(btnClass)
  }, title);
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./client/components/HomeSlider.js":
/*!*****************************************!*\
  !*** ./client/components/HomeSlider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _assets_temp_si_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/temp/si.png */ "./client/assets/temp/si.png");
/* harmony import */ var _assets_temp_Icon_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/temp/Icon_1.png */ "./client/assets/temp/Icon_1.png");
/* harmony import */ var _assets_temp_Icon_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/temp/Icon_2.png */ "./client/assets/temp/Icon_2.png");
/* harmony import */ var _assets_temp_Icon_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/temp/Icon_3.png */ "./client/assets/temp/Icon_3.png");
/* harmony import */ var _assets_temp_Icon_4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/temp/Icon_4.png */ "./client/assets/temp/Icon_4.png");
/* harmony import */ var _components_HomeButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomeButton */ "./client/components/HomeButton.js");
/* harmony import */ var _shared_whyData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/whyData */ "./client/shared/whyData.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_slidernext_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/slidernext.png */ "./client/components/css/slidernext.png");
/* harmony import */ var _css_sliderpre_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/sliderpre.png */ "./client/components/css/sliderpre.png");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/swiper.scss */ "./node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! swiper/components/navigation/navigation.scss */ "./node_modules/swiper/components/navigation/navigation.scss");
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _store_api_homeSliders__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../store/api/homeSliders */ "./client/store/api/homeSliders.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















swiper__WEBPACK_IMPORTED_MODULE_15__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_15__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_15__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_15__["EffectFade"], swiper__WEBPACK_IMPORTED_MODULE_15__["Pagination"]]);


function HomeSlider(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])(); // loadHomeSliders

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var userCount = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.ui.homePage.data.userCount;
  });

  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      sliders = _useState4[0],
      setSliders = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_homeSliders__WEBPACK_IMPORTED_MODULE_17__["loadHomeSliders"])({
      onSuccess: function onSuccess(res) {
        setSliders(res.data.data);
      }
    }));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "banner_home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    indicators: false // prevIcon={
    //   <span className="carousel-control-next-icon dn" aria-hidden="true">
    //     <i className="far fa-long-arrow-alt-left "></i>
    //   </span>
    // }
    ,
    prevIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "none"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _css_sliderpre_png__WEBPACK_IMPORTED_MODULE_12__["default"]
    })),
    nextIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginLeft: "63%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _css_slidernext_png__WEBPACK_IMPORTED_MODULE_11__["default"]
    })) // nextIcon={
    //   <span className="carousel-control-next-icon ml-slider" aria-hidden="true">
    //     <i className="far fa-long-arrow-alt-right"></i>
    //   </span>
    // }
    // activeIndex={index}
    // onSelect={handleSelect}

  }, sliders.map(function (coursalItem, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, {
      key: "coursalItem-".concat(coursalItem._id, "-").concat(index),
      className: "carousel-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "d-none d-md-block w-100 BR",
      src: coursalItem.image,
      alt: "First slide",
      style: {
        objectFit: "cover"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "d-block d-md-none w-100 BR",
      src: coursalItem.mobileImage || coursalItem.image,
      alt: "First slide",
      style: {
        objectFit: "cover"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, coursalItem.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, coursalItem.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "35%"
      }
    }, coursalItem.text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, coursalItem.text)), coursalItem.buttonText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
      className: "btn btn_styled",
      to: coursalItem.buttonLink
    }, coursalItem.buttonText)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-sm-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_whyData__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeSlider);

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

/***/ "./client/shared/whyData.js":
/*!**********************************!*\
  !*** ./client/shared/whyData.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_api_infoCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/api/infoCards */ "./client/store/api/infoCards.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function WhyData(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      infoCards = _useState2[0],
      setInfoCards = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_infoCards__WEBPACK_IMPORTED_MODULE_3__["loadInfoCards"])({
      onSuccess: function onSuccess(res) {
        setInfoCards(res.data.data);
      }
    }));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "new-homeslider1-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "new-homeslider1-wrap-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn--1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    className: "whyData-btn"
  }, "Sign up for free trail")), infoCards.map(function (cardItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-homeslider1-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-homeslider1-card-img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: cardItem.image
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "whydata-p"
    }, " ", cardItem.text, " "));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (WhyData);

/***/ }),

/***/ "./client/store/api/homeSliders.js":
/*!*****************************************!*\
  !*** ./client/store/api/homeSliders.js ***!
  \*****************************************/
/*! exports provided: loadHomeSliders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomeSliders", function() { return loadHomeSliders; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/home_header_slider";
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

/***/ }),

/***/ "./client/store/api/infoCards.js":
/*!***************************************!*\
  !*** ./client/store/api/infoCards.js ***!
  \***************************************/
/*! exports provided: loadInfoCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadInfoCards", function() { return loadInfoCards; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/info_cards";
var loadInfoCards = function loadInfoCards() {
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
//# sourceMappingURL=components-HomeSlider.4b08b33319d44416e985.js.map