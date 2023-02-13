(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-Teachers"],{

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

/***/ "./client/components/Teachers.js":
/*!***************************************!*\
  !*** ./client/components/Teachers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_api_teamMembers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/api/teamMembers */ "./client/store/api/teamMembers.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HomeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeButton */ "./client/components/HomeButton.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/swiper.scss */ "./node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _css_slidernext_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/slidernext.png */ "./client/components/css/slidernext.png");
/* harmony import */ var _css_sliderpre_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/sliderpre.png */ "./client/components/css/sliderpre.png");
/* harmony import */ var _css_sept_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/sept.png */ "./client/components/css/sept.png");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_15__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














 // import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';




swiper__WEBPACK_IMPORTED_MODULE_9__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_9__["Autoplay"]]);

function Teachers(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      teachersList = _useState2[0],
      setTeachersList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_teamMembers__WEBPACK_IMPORTED_MODULE_2__["loadTeamMembers"])({
      onSuccess: function onSuccess(res) {
        var filtered = res.data.data.filter(function (t) {
          return t.showOnHome;
        });

        if (screen.width < 650) {
          setTeachersList(filtered.slice(0, 3));
        } else {
          setTeachersList(filtered);
        }
      }
    }));
  }, []);
  var options = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  };
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "teacher-slider"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "next",
      src: _css_slidernext_png__WEBPACK_IMPORTED_MODULE_10__["default"]
    })),
    prevArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "teacher-slider"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "pre",
      src: _css_sliderpre_png__WEBPACK_IMPORTED_MODULE_11__["default"]
    })),
    autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    // cssEase: "linear"
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
    className: "body-wrap-newteacher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-newteacher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detail-teacher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "font-weight-bold color"
  }, props.heading), props.teacherText && react_render_html__WEBPACK_IMPORTED_MODULE_4___default()(props.teacherText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-teacherslide-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_13___default.a, _extends({}, settings, {
    arrows: true
  }), teachersList.map(function (t) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3-1 ",
      key: t._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "square"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-teacher-card",
      style: {
        backgroundImage: "url(\"".concat(t.image, "\")")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-teacher-info p-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "text-center text-white font-weight-bold mt-2"
    }, t.name), react_render_html__WEBPACK_IMPORTED_MODULE_4___default()(t.introduction))))))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ts-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    className: "ts-btn-a",
    to: props.buttonLink
  }, props.buttonText)))); // return (
  //   <section className="teachers">
  //     <div className="container">
  //       <h2>{props.heading}</h2>
  //       <Swiper
  //         autoplay={true}
  //         slidesPerView={4}
  //         spaceBetween={15}
  //         navigation={{
  //           nextEl: "#homeSwiperNext",
  //           prevEl: "#homeSwiperPrev",
  //         }}
  //         className="teacher_carousel"
  //         breakpoints={{
  //           0: {
  //             slidesPerView: 1,
  //           },
  //           576: {
  //             slidesPerView: 2,
  //           },
  //           992: {
  //             slidesPerView: 3,
  //           },
  //           1200: {
  //             slidesPerView: 4,
  //           },
  //         }}
  //       >
  //         {teachersList.map((teacherItemData, index) => (
  //           <SwiperSlide
  //             className="item"
  //             key={`teacherItemData-${teacherItemData._id}-${index}`}
  //           >
  //             <Card>
  //               <img
  //                 src={teacherItemData.image}
  //                 alt=""
  //                 className="card-img-top"
  //               />
  //               <Card.Body>
  //                 <h5>{teacherItemData.name}</h5>
  //                 <p className="authority">{teacherItemData.designation}</p>
  //                 <div>
  //                   {teacherItemData.introduction &&
  //                     renderHTML(teacherItemData.introduction)}
  //                 </div>
  //               </Card.Body>
  //               {/* <Card.Footer>
  //                 <Row>
  //                   {teacherItemData.twitterLink && (
  //                     <Col xs={3}>
  //                       <a href={teacherItemData.twitterLink} target="_blank">
  //                         <i className="fab fa-twitter"></i>
  //                       </a>
  //                     </Col>
  //                   )}
  //                   {teacherItemData.facebookLink && (
  //                     <Col xs={3}>
  //                       <a href={teacherItemData.facebookLink} target="_blank">
  //                         <i className="fab fa-facebook"></i>
  //                       </a>
  //                     </Col>
  //                   )}
  //                   {teacherItemData.linkedInLink && (
  //                     <Col xs={3}>
  //                       <a href={teacherItemData.linkedInLink} target="_blank">
  //                         <i className="fab fa-linkedin"></i>
  //                       </a>
  //                     </Col>
  //                   )}
  //                   {teacherItemData.instagramLink && (
  //                     <Col xs={3}>
  //                       <a href={teacherItemData.instagramLink} target="_blank">
  //                         <i className="fab fa-instagram"></i>
  //                       </a>
  //                     </Col>
  //                   )}
  //                 </Row>
  //               </Card.Footer> */}
  //             </Card>
  //           </SwiperSlide>
  //         ))}
  //         <div className="mt-1">
  //           <div
  //             id="homeSwiperPrev"
  //             style={{ width: "50px", height: "50px", float: "left" }}
  //           >
  //             <i
  //               className="far fa-long-arrow-alt-left"
  //               style={{
  //                 backgroundColor: "#012237",
  //                 borderRadius: "50%",
  //                 textalign: "center",
  //                 justifyContent: "center",
  //                 alignItems: "center",
  //                 verticalAlign: "middle",
  //                 padding: "10px 12px",
  //                 transition: "0.3s all",
  //                 color: "#fff",
  //               }}
  //             ></i>
  //           </div>
  //           <div
  //             id="homeSwiperNext"
  //             style={{ width: "50px", height: "50px", float: "right" }}
  //           >
  //             <i
  //               className="far fa-long-arrow-alt-right"
  //               style={{
  //                 backgroundColor: "#012237",
  //                 borderRadius: "50%",
  //                 textalign: "center",
  //                 justifyContent: "center",
  //                 alignItems: "center",
  //                 verticalAlign: "middle",
  //                 padding: "10px 12px",
  //                 transition: "0.3s all",
  //                 color: "#fff",
  //               }}
  //             ></i>
  //           </div>
  //         </div>
  //       </Swiper>
  //     </div>
  //     {/* <Link to={props.buttonLink} className={`btn more`}>
  //       {props.buttonText}
  //     </Link> */}
  //   </section>
  // );
}

/* harmony default export */ __webpack_exports__["default"] = (Teachers);

/***/ }),

/***/ "./client/components/css/sept.png":
/*!****************************************!*\
  !*** ./client/components/css/sept.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/sept.0684d49cdea6796c6452728375c7bb18.png");

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

/***/ "./client/store/api/teamMembers.js":
/*!*****************************************!*\
  !*** ./client/store/api/teamMembers.js ***!
  \*****************************************/
/*! exports provided: loadTeamMembers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTeamMembers", function() { return loadTeamMembers; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/team_members";
var loadTeamMembers = function loadTeamMembers() {
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

/***/ "./node_modules/swiper/swiper.scss":
/*!*****************************************!*\
  !*** ./node_modules/swiper/swiper.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=components-Teachers.64f703b7c2c1e21a7c87.js.map