(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-Home"],{

/***/ "./client/components/PreFooter.js":
/*!****************************************!*\
  !*** ./client/components/PreFooter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_api_homeJoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/api/homeJoin */ "./client/store/api/homeJoin.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function PreFooter(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    heading: "",
    image: "",
    text: "",
    buttonText: "",
    buttonLink: "",
    buttonText2: "",
    buttonLink2: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      homeJoin = _useState2[0],
      setHomeJoin = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_homeJoin__WEBPACK_IMPORTED_MODULE_2__["getHomeJoin"])({
      onSuccess: function onSuccess(res) {
        setHomeJoin(res.data.data);
      }
    }));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "join"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-7 col-md-7 col-12 align-self-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, homeJoin.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, homeJoin.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: homeJoin.buttonLink,
    className: "btn more"
  }, homeJoin.buttonText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: homeJoin.buttonLink2,
    className: "btn more ml-1 ml-md-4 yellow-btn"
  }, homeJoin.buttonText2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-5 col-md-5 col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: homeJoin.image,
    alt: "",
    className: "img-fluid"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (PreFooter);

/***/ }),

/***/ "./client/pages/Home.js":
/*!******************************!*\
  !*** ./client/pages/Home.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PreFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PreFooter */ "./client/components/PreFooter.js");
/* harmony import */ var _store_api_homePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/api/homePage */ "./client/store/api/homePage.js");
/* harmony import */ var _store_api_homeFreeVidSec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/api/homeFreeVidSec */ "./client/store/api/homeFreeVidSec.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _store_ui_subscriptionModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/ui/subscriptionModal */ "./client/store/ui/subscriptionModal.js");
/* harmony import */ var _store_ui_loginModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/ui/loginModal */ "./client/store/ui/loginModal.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/storage */ "./client/services/storage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












 // import { Link, useNavigate } from "react-router-dom";

var HomeSlider = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-HomeSlider";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-HomeSlider */[__webpack_require__.e("vendors~components-HomeSlider~components-HomeSlider3~components-NavBar~components-NewTeacher~compone~2adcdc41"), __webpack_require__.e("vendors~components-HomeCourses~components-HomeSlider~components-NewTeacher~components-QuickCarousal~~7c62f0c5"), __webpack_require__.e("components-HomeSlider")]).then(__webpack_require__.bind(null, /*! ../components/HomeSlider */ "./client/components/HomeSlider.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/HomeSlider */ "./client/components/HomeSlider.js");
    }

    return eval('require.resolve')("../components/HomeSlider");
  }
}, {
  ssr: false
});
var PopularCourse = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-PopularCourses";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | components-PopularCourses */ "components-PopularCourses").then(__webpack_require__.bind(null, /*! ../components/PopularCourses */ "./client/components/PopularCourses.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/PopularCourses */ "./client/components/PopularCourses.js");
    }

    return eval('require.resolve')("../components/PopularCourses");
  }
}, {
  ssr: false
});
var ResultSlider = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-ResultSlider";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-ResultSlider */[__webpack_require__.e("vendors~components-HomeSlider~components-HomeSlider3~components-NavBar~components-NewTeacher~compone~2adcdc41"), __webpack_require__.e("vendors~components-HomeSlider3~components-ResultSlider~components-StudentRating~components-Teachers~~1e448b8d"), __webpack_require__.e("components-ResultSlider")]).then(__webpack_require__.bind(null, /*! ../components/ResultSlider */ "./client/components/ResultSlider.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/ResultSlider */ "./client/components/ResultSlider.js");
    }

    return eval('require.resolve')("../components/ResultSlider");
  }
}, {
  ssr: false
});
var OcCommunity = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-OcCommunity";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | components-OcCommunity */ "components-OcCommunity").then(__webpack_require__.bind(null, /*! ../components/OcCommunity */ "./client/components/OcCommunity.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/OcCommunity */ "./client/components/OcCommunity.js");
    }

    return eval('require.resolve')("../components/OcCommunity");
  }
}, {
  ssr: false
});
var UnbeatablePrice = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "UnbeatablePrice";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | UnbeatablePrice */ "UnbeatablePrice").then(__webpack_require__.bind(null, /*! ./UnbeatablePrice */ "./client/pages/UnbeatablePrice.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./UnbeatablePrice */ "./client/pages/UnbeatablePrice.js");
    }

    return eval('require.resolve')("./UnbeatablePrice");
  }
}, {
  ssr: false
});
var WhatsNew = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-WhatsNew";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-WhatsNew */[__webpack_require__.e("vendors~components-HomeSlider~components-HomeSlider3~components-NavBar~components-NewTeacher~compone~2adcdc41"), __webpack_require__.e("vendors~components-HomeSlider3~components-ResultSlider~components-StudentRating~components-Teachers~~1e448b8d"), __webpack_require__.e("vendors~components-HomeSlider3~components-WhatsNew"), __webpack_require__.e("components-WhatsNew")]).then(__webpack_require__.bind(null, /*! ../components/WhatsNew */ "./client/components/WhatsNew.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/WhatsNew */ "./client/components/WhatsNew.js");
    }

    return eval('require.resolve')("../components/WhatsNew");
  }
}, {
  ssr: false
});
var HomeDetails = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-HomeDetails";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | components-HomeDetails */ "components-HomeDetails").then(__webpack_require__.bind(null, /*! ../components/HomeDetails */ "./client/components/HomeDetails.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/HomeDetails */ "./client/components/HomeDetails.js");
    }

    return eval('require.resolve')("../components/HomeDetails");
  }
}, {
  ssr: false
});
var HomeSlider3 = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-HomeSlider3";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-HomeSlider3 */[__webpack_require__.e("vendors~components-HomeSlider~components-HomeSlider3~components-NavBar~components-NewTeacher~compone~2adcdc41"), __webpack_require__.e("vendors~components-HomeSlider3~components-ResultSlider~components-StudentRating~components-Teachers~~1e448b8d"), __webpack_require__.e("vendors~components-HomeSlider3~components-WhatsNew"), __webpack_require__.e("components-HomeSlider3")]).then(__webpack_require__.bind(null, /*! ../components/HomeSlider3 */ "./client/components/HomeSlider3.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/HomeSlider3 */ "./client/components/HomeSlider3.js");
    }

    return eval('require.resolve')("../components/HomeSlider3");
  }
}, {
  ssr: false
});
var HappyBtn = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-HappyBtn";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | components-HappyBtn */ "components-HappyBtn").then(__webpack_require__.bind(null, /*! ../components/HappyBtn */ "./client/components/HappyBtn.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/HappyBtn */ "./client/components/HappyBtn.js");
    }

    return eval('require.resolve')("../components/HappyBtn");
  }
}, {
  ssr: false
});
var StudentRating = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-StudentRating";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-StudentRating */[__webpack_require__.e("vendors~components-HomeSlider3~components-ResultSlider~components-StudentRating~components-Teachers~~1e448b8d"), __webpack_require__.e("vendors~components-StudentRating"), __webpack_require__.e("components-StudentRating")]).then(__webpack_require__.bind(null, /*! ../components/StudentRating */ "./client/components/StudentRating.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/StudentRating */ "./client/components/StudentRating.js");
    }

    return eval('require.resolve')("../components/StudentRating");
  }
}, {
  ssr: false
});
var UniSwiper = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-UniSwiper";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-UniSwiper */[__webpack_require__.e("vendors~components-HomeCourses~components-HomeSlider~components-NewTeacher~components-QuickCarousal~~7c62f0c5"), __webpack_require__.e("components-UniSwiper")]).then(__webpack_require__.bind(null, /*! ../components/UniSwiper */ "./client/components/UniSwiper.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/UniSwiper */ "./client/components/UniSwiper.js");
    }

    return eval('require.resolve')("../components/UniSwiper");
  }
}, {
  ssr: false
});
var Teachers = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-Teachers";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-Teachers */[__webpack_require__.e("vendors~components-HomeSlider~components-HomeSlider3~components-NavBar~components-NewTeacher~compone~2adcdc41"), __webpack_require__.e("vendors~components-HomeCourses~components-HomeSlider~components-NewTeacher~components-QuickCarousal~~7c62f0c5"), __webpack_require__.e("vendors~components-HomeSlider3~components-ResultSlider~components-StudentRating~components-Teachers~~1e448b8d"), __webpack_require__.e("components-Teachers")]).then(__webpack_require__.bind(null, /*! ../components/Teachers */ "./client/components/Teachers.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/Teachers */ "./client/components/Teachers.js");
    }

    return eval('require.resolve')("../components/Teachers");
  }
}, {
  ssr: false
});
var FreeTrail = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-FreeTrail";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-FreeTrail */[__webpack_require__.e("vendors~components-FreeTrail~components-StartQuiz~components-modals-LoginModal~components-modals-Reg~047cbc03"), __webpack_require__.e("vendors~components-FreeTrail~components-modals-LoginModal~components-modals-RegisterModal~components~670639ae"), __webpack_require__.e("components-FreeTrail")]).then(__webpack_require__.bind(null, /*! ../components/FreeTrail */ "./client/components/FreeTrail.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/FreeTrail */ "./client/components/FreeTrail.js");
    }

    return eval('require.resolve')("../components/FreeTrail");
  }
}, {
  ssr: false
});
var NewTeachers = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-NewTeacher";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-NewTeacher */[__webpack_require__.e("vendors~components-HomeSlider~components-HomeSlider3~components-NavBar~components-NewTeacher~compone~2adcdc41"), __webpack_require__.e("vendors~components-HomeCourses~components-HomeSlider~components-NewTeacher~components-QuickCarousal~~7c62f0c5"), __webpack_require__.e("components-NewTeacher")]).then(__webpack_require__.bind(null, /*! ../components/NewTeacher */ "./client/components/NewTeacher.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/NewTeacher */ "./client/components/NewTeacher.js");
    }

    return eval('require.resolve')("../components/NewTeacher");
  }
}, {
  ssr: false
});
var QuickCarousal = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-QuickCarousal";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-QuickCarousal */[__webpack_require__.e("vendors~components-HomeCourses~components-HomeSlider~components-NewTeacher~components-QuickCarousal~~7c62f0c5"), __webpack_require__.e("components-QuickCarousal")]).then(__webpack_require__.bind(null, /*! ../components/QuickCarousal */ "./client/components/QuickCarousal.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/QuickCarousal */ "./client/components/QuickCarousal.js");
    }

    return eval('require.resolve')("../components/QuickCarousal");
  }
}, {
  ssr: false
});
var Students = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-Students";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-Students */[__webpack_require__.e("vendors~components-HomeSlider~components-HomeSlider3~components-NavBar~components-NewTeacher~compone~2adcdc41"), __webpack_require__.e("vendors~components-HomeCourses~components-HomeSlider~components-NewTeacher~components-QuickCarousal~~7c62f0c5"), __webpack_require__.e("components-Students")]).then(__webpack_require__.bind(null, /*! ../components/Students */ "./client/components/Students.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/Students */ "./client/components/Students.js");
    }

    return eval('require.resolve')("../components/Students");
  }
}, {
  ssr: false
});
var HomeCourses = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-HomeCourses";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-HomeCourses */[__webpack_require__.e("vendors~components-HomeCourses~components-HomeSlider~components-NewTeacher~components-QuickCarousal~~7c62f0c5"), __webpack_require__.e("vendors~components-HomeCourses~pages-AllCourses~pages-CoursePage~pages-DashboardCourses~pages-SearchCourse"), __webpack_require__.e("components-HomeCourses")]).then(__webpack_require__.bind(null, /*! ../components/HomeCourses */ "./client/components/HomeCourses.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/HomeCourses */ "./client/components/HomeCourses.js");
    }

    return eval('require.resolve')("../components/HomeCourses");
  }
}, {
  ssr: false
});
var DragableButton = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},
  chunkName: function chunkName() {
    return "components-DragableButton";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | components-DragableButton */[__webpack_require__.e("vendors~components-DragableButton"), __webpack_require__.e("components-DragableButton")]).then(__webpack_require__.bind(null, /*! ../components/DragableButton */ "./client/components/DragableButton.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ../components/DragableButton */ "./client/components/DragableButton.js");
    }

    return eval('require.resolve')("../components/DragableButton");
  }
}, {
  ssr: false
});

var Home = function Home(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(); // const userCount = useSelector((state) => state.ui.homePage.data.userCount);

  var homePageCMS = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.ui.homePage.data;
  });
  var categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.entities.categories;
  });
  var courses = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.entities.courses;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCategory = _useState2[0],
      setStelectedCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      categoryName = _useState4[0],
      setCategoryName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    heading: "",
    heading2: "",
    image: "",
    buttonText: "",
    buttonLink: ""
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      freeVidSec = _useState6[0],
      setFreeVidSec = _useState6[1];

  var subscriptionPlans = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.entities.subscriptionPlans;
  });
  var courseMenus = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.entities.courseMenus;
  });
  var authToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth.token;
  });
  var filteredCategoriesList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return categories.list.filter(function (cat) {
      var coursesInCategory = courses.list.filter(function (c) {
        return cat._id === c.category._id;
      });
      return coursesInCategory.length > 0;
    });
  }, [categories.list, courses.list]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!selectedCategory && filteredCategoriesList[0]) {
      setCategoryName(filteredCategoriesList[0].name);
      setStelectedCategory(filteredCategoriesList[0]._id);
    }
  }, [filteredCategoriesList]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_homePage__WEBPACK_IMPORTED_MODULE_6__["loadHomePageCMS"])({}));
    dispatch(Object(_store_api_homeFreeVidSec__WEBPACK_IMPORTED_MODULE_7__["getHomeFreeVidSec"])({
      onSuccess: function onSuccess(res) {
        setFreeVidSec(res.data.data);
      }
    }));
  }, []);

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

  var goToSubscription = function goToSubscription(plan) {
    if (!authToken) {
      dispatch(Object(_store_ui_loginModal__WEBPACK_IMPORTED_MODULE_10__["setLoginModalVisibility"])(true));
      _services_storage__WEBPACK_IMPORTED_MODULE_11__["default"].store("GO_TO_SUBSCRIPTION", {
        visible: true,
        category: selectedCategory,
        plan: plan
      });
      return;
    }

    props.history.push("/subscription/".concat(selectedCategory));
    dispatch(Object(_store_ui_subscriptionModal__WEBPACK_IMPORTED_MODULE_9__["setSubscriptionModal"])({
      visible: true,
      category: selectedCategory,
      plan: plan
    }));
  };

  var renderSubscriptionCards = function renderSubscriptionCards() {
    if (!selectedCategory) return null;
    var plansForThisCategory = subscriptionPlans.list.filter(function (sp) {
      return sp.category._id === selectedCategory;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row justify-content-center"
    }, plansForThisCategory.map(function (subscriptinPlan) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4 mt-3",
        key: subscriptinPlan._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mx-5 mx-md-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();
          goToSubscription(subscriptinPlan);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-100",
        src: subscriptinPlan.cardImage
      }))));
    }));
  };

  var renderMenuCards = function renderMenuCards() {
    var oLevelLinks = courseMenus.oLevelLinks,
        oLevelImage = courseMenus.oLevelImage,
        satPrepLinks = courseMenus.satPrepLinks,
        satPrepImage = courseMenus.satPrepImage,
        aLevelLinks = courseMenus.aLevelLinks,
        aLevelImage = courseMenus.aLevelImage;
    var menus = [{
      image: oLevelImage,
      link: oLevelLinks
    }, {
      image: satPrepImage,
      link: satPrepLinks
    }, {
      image: aLevelImage,
      link: aLevelLinks
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container mb-5",
      style: {
        marginTop: "20px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, menus.map(function (men) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4 mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mx-5 mx-md-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: men.link
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: men.image,
        className: "w-100"
      }))));
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: homePageCMS.metaTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: homePageCMS.metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: homePageCMS.metaKeyWords
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeSlider, {
    buttonText: homePageCMS.buttonText1,
    buttonLink: homePageCMS.buttonLink1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DragableButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopularCourse, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WhatsNew, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OcCommunity, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Teachers, {
    heading: homePageCMS.heading2,
    teacherText: homePageCMS.teacherText,
    buttonText: homePageCMS.buttonText2,
    buttonLink: homePageCMS.buttonLink2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResultSlider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnbeatablePrice, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeDetails, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeSlider3, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StudentRating, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FreeTrail, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HappyBtn, null));
};

Home.loadData = function (_ref) {
  var store = _ref.store,
      matchedRoute = _ref.matchedRoute;
  var token = store.getState().auth.token;
  var dispatch = store.dispatch;
  var promiseArray = []; // if (token) {

  promiseArray.push(dispatch(Object(_store_api_homePage__WEBPACK_IMPORTED_MODULE_6__["loadHomePageCMS"])({}))); // }

  return Promise.all(promiseArray);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./client/store/api/homeFreeVidSec.js":
/*!********************************************!*\
  !*** ./client/store/api/homeFreeVidSec.js ***!
  \********************************************/
/*! exports provided: getHomeFreeVidSec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeFreeVidSec", function() { return getHomeFreeVidSec; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/home_page_free_sec";
var getHomeFreeVidSec = function getHomeFreeVidSec() {
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

/***/ "./client/store/api/homeJoin.js":
/*!**************************************!*\
  !*** ./client/store/api/homeJoin.js ***!
  \**************************************/
/*! exports provided: getHomeJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeJoin", function() { return getHomeJoin; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/home_join";
var getHomeJoin = function getHomeJoin() {
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

/***/ "./client/store/api/homePage.js":
/*!**************************************!*\
  !*** ./client/store/api/homePage.js ***!
  \**************************************/
/*! exports provided: loadHomePageCMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomePageCMS", function() { return loadHomePageCMS; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
/* harmony import */ var _ui_homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/homePage */ "./client/store/ui/homePage.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var path = "/cms/home_page_cms_data";
var loadHomePageCMS = function loadHomePageCMS() {
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
              dispatch(Object(_ui_homePage__WEBPACK_IMPORTED_MODULE_2__["setHomeLoader"])(true));
              _context.next = 4;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path
              });

            case 4:
              res = _context.sent;
              data = res.data.data;
              dispatch(Object(_ui_homePage__WEBPACK_IMPORTED_MODULE_2__["setHomeData"])(data)); //onSuccess event firing

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
              dispatch(Object(_ui_homePage__WEBPACK_IMPORTED_MODULE_2__["setHomeLoader"])(false));
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
//# sourceMappingURL=pages-Home.28749304893b10a6c0b0.js.map