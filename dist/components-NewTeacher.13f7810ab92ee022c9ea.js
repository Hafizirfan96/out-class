(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-NewTeacher"],{

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

/***/ "./client/components/NewTeacher.js":
/*!*****************************************!*\
  !*** ./client/components/NewTeacher.js ***!
  \*****************************************/
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











swiper__WEBPACK_IMPORTED_MODULE_9__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_9__["Autoplay"]]);

function NewTeachers(props) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-newteacher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detail-teacher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "font-weight-bold"
  }, props.heading), props.teacherText && react_render_html__WEBPACK_IMPORTED_MODULE_4___default()(props.teacherText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  })) // <div className="container mt-3">
  //   <div className="row">
  //     <div className="col-md-3 mt-5">
  //       <div className="teacher-home-first-block">
  //         <h1 className="font-weight-bold">{props.heading}</h1>
  //         {props.teacherText && renderHTML(props.teacherText)}
  //       </div>
  //     </div>
  //     {teachersList.map((t) => {
  //       return (
  //         <div className="col-md-3 mt-5" key={t._id}>
  //           <div className="mx-5 mx-md-0">
  //             <div className="square">
  //               <div className="content">
  //                 <div
  //                   className="home-teacher-card"
  //                   style={{ backgroundImage: `url("${t.image}")` }}
  //                 >
  //                   <div className="home-teacher-info p-3">
  //                     <h4 className="text-center text-white font-weight-bold mt-2">
  //                       {t.name}
  //                     </h4>
  //                     {renderHTML(t.introduction)}
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  //   <Link to={props.buttonLink} className={`btn more`}>
  //     {props.buttonText}
  //   </Link>
  // </div>
  ; // return (
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

/* harmony default export */ __webpack_exports__["default"] = (NewTeachers);

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
//# sourceMappingURL=components-NewTeacher.13f7810ab92ee022c9ea.js.map