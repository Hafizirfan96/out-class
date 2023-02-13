(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-FreeVideos"],{

/***/ "./client/pages/FreeVideos.js":
/*!************************************!*\
  !*** ./client/pages/FreeVideos.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _store_api_freeVideos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/api/freeVideos */ "./client/store/api/freeVideos.js");
/* harmony import */ var _store_api_freeVidosPageCMS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/api/freeVidosPageCMS */ "./client/store/api/freeVidosPageCMS.js");
/* harmony import */ var _store_api_freeVideoImageSec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/api/freeVideoImageSec */ "./client/store/api/freeVideoImageSec.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _store_ui_loginModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/ui/loginModal */ "./client/store/ui/loginModal.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/storage */ "./client/services/storage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var FreeVideos = function FreeVideos(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCategory = _useState2[0],
      setStelectedCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      categoryName = _useState4[0],
      setCategoryName = _useState4[1];

  var categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.entities.categories;
  });
  var freeVideos = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.entities.freeVideos;
  });
  var authToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.auth.token;
  });
  var freeVideosPageCMS = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.ui.freeVideosPage.data;
  });
  var mainVideoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showVideoModal = _useState6[0],
      setShowVideoModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      currentPlayingVideoId = _useState8[0],
      setCurrentPlayingVideoId = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    headng: "",
    text: "",
    buttonText: "",
    buttonLink: "",
    image: ""
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      imageSec = _useState10[0],
      setImageSec = _useState10[1];

  var filteredCategoriesList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return categories.list.filter(function (cat) {
      var freeVideosInCategory = freeVideos.list.filter(function (fv) {
        return cat._id === fv.category._id;
      });
      return freeVideosInCategory.length > 0;
    });
  }, [categories.list, freeVideos.list]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (filteredCategoriesList.length > 0 && !selectedCategory) {
      setStelectedCategory(filteredCategoriesList[0]._id);
      setCategoryName(filteredCategoriesList[0].name);
    }
  }, [filteredCategoriesList.length]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_freeVidosPageCMS__WEBPACK_IMPORTED_MODULE_6__["loadFreeVideosPageCMS"])({}));
    dispatch(Object(_store_api_freeVideos__WEBPACK_IMPORTED_MODULE_5__["getAllFreeVideos"])({}));
    dispatch(Object(_store_api_freeVideoImageSec__WEBPACK_IMPORTED_MODULE_7__["getFreeVideosImageSec"])({
      onSuccess: function onSuccess(res) {
        setImageSec(res.data.data);
      }
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var videoToPlay = _services_storage__WEBPACK_IMPORTED_MODULE_11__["default"].get("FREE_VIDEO_TO_PLAY");

    if (videoToPlay) {
      _services_storage__WEBPACK_IMPORTED_MODULE_11__["default"].remove("FREE_VIDEO_TO_PLAY");
      setCurrentPlayingVideoId(videoToPlay);
      setShowVideoModal(true);
    }
  }, [authToken]);

  var renderCategories = function renderCategories() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (filteredCategoriesList || []).map(function (cat) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item",
        role: "presentation",
        key: cat._id + "home course"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: selectedCategory === cat._id ? "nav-link active" : "nav-link",
        onClick: function onClick(e) {
          e.preventDefault();
          setStelectedCategory(cat._id);
          setCategoryName(cat.name);
        },
        id: "marketing-tab",
        "data-toggle": "tab",
        role: "tab",
        "aria-controls": "marketing",
        "aria-selected": "false"
      }, cat.name));
    }));
  };

  var renderVideos = function renderVideos() {
    var list = freeVideos.list;

    if (selectedCategory) {
      list = freeVideos.list.filter(function (fv) {
        return fv.category._id === selectedCategory;
      });
    } else {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, list.map(function (fv) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: fv._id,
        className: "col-lg-3 col-md-4 col-sm-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        style: {
          textDecoration: "none"
        },
        onClick: function onClick(e) {
          e.preventDefault();

          if (mainVideoRef.current) {
            mainVideoRef.current.target.pauseVideo();
          }

          if (!authToken) {
            //this storage flag will be used to play video after login..
            //useEffect will be called as authToken changes
            _services_storage__WEBPACK_IMPORTED_MODULE_11__["default"].store("FREE_VIDEO_TO_PLAY", fv.videoId);
            dispatch(Object(_store_ui_loginModal__WEBPACK_IMPORTED_MODULE_10__["setLoginModalVisibility"])(true));
            return;
          }

          setCurrentPlayingVideoId(fv.videoId);
          setShowVideoModal(true);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "free-video-list-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container",
        style: {
          backgroundImage: "url(\"".concat(fv.thumbnail, "\")")
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "video-name"
      }, fv.videoTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "video-desc"
      }, fv.description))));
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: freeVideosPageCMS.metaTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: freeVideosPageCMS.metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: freeVideosPageCMS.metaKeyWords
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: "200px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-center"
  }, freeVideosPageCMS.heading1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center font-weight-bold",
    style: {
      color: "rgb(0, 172, 240)"
    }
  }, freeVideosPageCMS.heading2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "youtube-video-iframe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_1__["default"], {
    videoId: freeVideosPageCMS.text1,
    containerClassName: "embed-responsive embed-responsive-16by9",
    className: "embed-responsive-item",
    onReady: function onReady(e) {
      mainVideoRef.current = e;
    },
    opts: {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "why_data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg_2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 col-md-6 col-12 align-self-center order-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, imageSec.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, imageSec.text && react_render_html__WEBPACK_IMPORTED_MODULE_8___default()(imageSec.text))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 col-md-6 col-12  order-md-1 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageSec.image,
    alt: "",
    className: "img-fluid"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "popular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg_cover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, categoryName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs",
    id: "courseTab",
    role: "tablist"
  }, renderCategories()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    style: {
      marginTop: "50px",
      marginBottom: "20px"
    }
  }, renderVideos()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "choose-course-banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center text-white text-md-left"
  }, freeVideosPageCMS.heading3)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center text-white text-md-left font-weight-bold"
  }, freeVideosPageCMS.heading4)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "monthly-plan-banner-btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: freeVideosPageCMS.buttonLink1,
    className: "monthly-plan-btn"
  }, freeVideosPageCMS.buttonText1)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showVideoModal,
    onHide: function onHide() {
      return setShowVideoModal(false);
    },
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: "#000000"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_1__["default"], {
    videoId: currentPlayingVideoId,
    containerClassName: "embed-responsive embed-responsive-16by9",
    className: "embed-responsive-item"
  }))));
};

FreeVideos.loadData = function (_ref) {
  var store = _ref.store,
      matchedRoute = _ref.matchedRoute;
  var token = store.getState().auth.token;
  var dispatch = store.dispatch;
  var promiseArray = []; // if (token) {
  // }

  promiseArray.push(dispatch(_store_api_freeVidosPageCMS__WEBPACK_IMPORTED_MODULE_6__["loadFreeVideosPageCMS"]));
  promiseArray.push(dispatch(Object(_store_api_freeVideos__WEBPACK_IMPORTED_MODULE_5__["getAllFreeVideos"])({})));
  return Promise.all(promiseArray);
};

/* harmony default export */ __webpack_exports__["default"] = (FreeVideos);

/***/ }),

/***/ "./client/store/api/freeVideoImageSec.js":
/*!***********************************************!*\
  !*** ./client/store/api/freeVideoImageSec.js ***!
  \***********************************************/
/*! exports provided: getFreeVideosImageSec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFreeVideosImageSec", function() { return getFreeVideosImageSec; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/free_videos_sec";
var getFreeVideosImageSec = function getFreeVideosImageSec() {
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

/***/ "./client/store/api/freeVideos.js":
/*!****************************************!*\
  !*** ./client/store/api/freeVideos.js ***!
  \****************************************/
/*! exports provided: getAllFreeVideos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFreeVideos", function() { return getAllFreeVideos; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _store_entities_freeVideos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/entities/freeVideos */ "./client/store/entities/freeVideos.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var path = "/cms/free_videos";
var getAllFreeVideos = function getAllFreeVideos(_ref) {
  var onSuccess = _ref.onSuccess,
      onError = _ref.onError,
      onEnd = _ref.onEnd;
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var storeState, token, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              storeState = getState();
              token = storeState.auth.token;
              _context.next = 5;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path + "/all_free_videos",
                headers: {
                  "x-auth-token": token
                }
              });

            case 5:
              res = _context.sent;
              dispatch(Object(_store_entities_freeVideos__WEBPACK_IMPORTED_MODULE_1__["setFreeVideos"])(res.data.data)); //onSuccess event firing

              if (onSuccess) onSuccess(res);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              //onError event firing
              if (onError) onError(_context.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_2__["handleErrors"])(_context.t0);

            case 13:
              _context.prev = 13;
              if (onEnd) onEnd();
              return _context.finish(13);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10, 13, 16]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./client/store/api/freeVidosPageCMS.js":
/*!**********************************************!*\
  !*** ./client/store/api/freeVidosPageCMS.js ***!
  \**********************************************/
/*! exports provided: loadFreeVideosPageCMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFreeVideosPageCMS", function() { return loadFreeVideosPageCMS; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
/* harmony import */ var _ui_freeVideosPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/freeVideosPage */ "./client/store/ui/freeVideosPage.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var path = "/cms/free_videos_cms_data";
var loadFreeVideosPageCMS = function loadFreeVideosPageCMS() {
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
              dispatch(Object(_ui_freeVideosPage__WEBPACK_IMPORTED_MODULE_2__["setFreeVideosPageLoader"])(true));
              _context.next = 4;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path
              });

            case 4:
              res = _context.sent;
              data = res.data.data;
              dispatch(Object(_ui_freeVideosPage__WEBPACK_IMPORTED_MODULE_2__["setFreeVideosPageData"])(data)); //onSuccess event firing

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
              dispatch(Object(_ui_freeVideosPage__WEBPACK_IMPORTED_MODULE_2__["setFreeVideosPageLoader"])(false));
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
//# sourceMappingURL=pages-FreeVideos.def6227a5024cc6166d1.js.map