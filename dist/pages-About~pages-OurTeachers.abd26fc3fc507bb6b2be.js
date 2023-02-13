(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-About~pages-OurTeachers"],{

/***/ "./client/assets/img/bg.png":
/*!**********************************!*\
  !*** ./client/assets/img/bg.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/bg.e1ba8c8d6e2531085c8f236d6ccb3f3c.png");

/***/ }),

/***/ "./client/assets/temp/bag.png":
/*!************************************!*\
  !*** ./client/assets/temp/bag.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/bag.120a06415cb686e6f2169acc8010b436.png");

/***/ }),

/***/ "./client/shared/OurTeamAbout.js":
/*!***************************************!*\
  !*** ./client/shared/OurTeamAbout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _ourTeamData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ourTeamData */ "./client/shared/ourTeamData.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_api_teamMembers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/api/teamMembers */ "./client/store/api/teamMembers.js");
/* harmony import */ var _assets_img_bg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/bg.png */ "./client/assets/img/bg.png");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function OurTeam(props) {
  var _props$pageType = props.pageType,
      pageType = _props$pageType === void 0 ? "about" : _props$pageType;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.entities.categories.list;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("all"),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCategory = _useState2[0],
      setStelectedCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      categoryName = _useState4[0],
      setCategoryName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      teamMembers = _useState6[0],
      setTeamMembers = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("managementBoard"),
      _useState8 = _slicedToArray(_useState7, 2),
      currentTab = _useState8[0],
      setCurrentTab = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState10 = _slicedToArray(_useState9, 2),
      currentTeacher = _useState10[0],
      setCurrentTeacher = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      filteredTeam = _useState12[0],
      setFilteredTeam = _useState12[1];

  var filterTeamMembers = function filterTeamMembers() {
    var tab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var members = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var filterred = members.filter(function (team) {
      if (pageType === "teacher") return true;
      if (team[tab]) return true;
      return false;
    });
    setCurrentTab(tab);
    setFilteredTeam(filterred);
    if (filterred[0]) setCurrentTeacher(filterred[0]);
  };

  var filteredCategoriesList = categories.filter(function (cat) {
    var membersInCategory = filteredTeam.filter(function (tMem) {
      return tMem.category && cat._id === tMem.category._id;
    });
    return membersInCategory.length > 0;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_teamMembers__WEBPACK_IMPORTED_MODULE_4__["loadTeamMembers"])({
      onSuccess: function onSuccess(res) {
        var fltr = res.data.data.filter(function (tm) {
          if (pageType === "about") return tm.showOnAbout;
          if (pageType === "teacher") return tm.showOnTeacher;
          return true;
        });
        setTeamMembers(fltr);
        if (pageType === "about") filterTeamMembers("managementBoard", fltr);
        if (pageType === "teacher") filterTeamMembers("", fltr);
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
        className: selectedCategory === cat._id ? "nav-link text-main" : "text-white nav-link",
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "teacher",
    style: {
      backgroundImage: "url(".concat(_assets_img_bg_png__WEBPACK_IMPORTED_MODULE_5__["default"], ")"),
      marginTop: "50px",
      padding: "50px 0",
      backgrounRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      color: "white",
      padding: "20px 0 20px"
    }
  }, props.heading), pageType !== "teacher" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs",
    id: "level",
    role: "tablist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link text-white",
    id: "home-tab",
    "data-toggle": "tab",
    role: "tab",
    "aria-controls": "home",
    "aria-selected": "true",
    style: {
      background: "none",
      textDecoration: "underline"
    },
    onClick: function onClick() {
      filterTeamMembers("managementBoard", teamMembers);
    }
  }, "Management Board")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link text-white",
    id: "profile-tab",
    "data-toggle": "tab",
    role: "tab",
    "aria-controls": "profile",
    "aria-selected": "false",
    style: {
      background: "none",
      textDecoration: "underline"
    },
    onClick: function onClick() {
      // setCurrentTab("leadership");
      filterTeamMembers("leadership", teamMembers);
    }
  }, "Leadership")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link text-white",
    id: "contact-tab",
    "data-toggle": "tab",
    role: "tab",
    "aria-controls": "contact",
    "aria-selected": "false",
    style: {
      background: "none",
      textDecoration: "underline"
    },
    onClick: function onClick() {
      filterTeamMembers("coreTeam", teamMembers);
    }
  }, "Core Team"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs",
    id: "level",
    role: "tablist"
  }, renderCategories()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content",
    id: "myTabContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade show active",
    id: "home",
    role: "tabpanel",
    "aria-labelledby": "home-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 col-md-6 col-12 align-self-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav nav-pills",
    id: "teacher",
    role: "tablist"
  }, filteredTeam.filter(function (tm) {
    if (selectedCategory === "all") return true;
    return tm.category && tm.category._id == selectedCategory;
  }).map(function (teacherItem, teacherIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: teacherItem._id,
      className: currentTeacher._id === teacherItem._id ? "nav-link active" : "nav-link",
      id: "v-pills-home-tab",
      "data-toggle": "pill",
      role: "tab",
      "aria-controls": "v-pills-home",
      "aria-selected": "true",
      onClick: function onClick(e) {
        e.preventDefault();
        setCurrentTeacher(teacherItem);
      }
    }, teacherItem.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, teacherItem.designation));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 col-md-6 col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content",
    id: "teacherContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade show active",
    id: "v-pills-home",
    role: "tabpanel",
    "aria-labelledby": "v-pills-home-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: currentTeacher.image,
    className: "card-img-top",
    alt: "..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title"
  }, currentTeacher.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, currentTeacher.designation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, currentTeacher.introduction && react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(currentTeacher.introduction)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "links"
  }, currentTeacher.twitterLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: currentTeacher.twitterLink,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter"
  })), currentTeacher.facebookLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: currentTeacher.facebookLink,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook"
  })), currentTeacher.linkedInLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: currentTeacher.linkedInLink,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin"
  })), currentTeacher.instagramLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: currentTeacher.instagramLink,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-instagram"
  })))))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (OurTeam);

/***/ }),

/***/ "./client/shared/ourTeamData.js":
/*!**************************************!*\
  !*** ./client/shared/ourTeamData.js ***!
  \**************************************/
/*! exports provided: ourTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ourTeam", function() { return ourTeam; });
/* harmony import */ var _assets_temp_bag_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/temp/bag.png */ "./client/assets/temp/bag.png");

var ourTeam = [{
  _id: 1,
  name: "Christine Eve",
  designation: "TEACHER",
  image: _assets_temp_bag_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  _id: 2,
  name: "Christine Eve",
  designation: "TEACHER",
  image: _assets_temp_bag_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  _id: 3,
  name: "Christine Eve",
  designation: "TEACHER",
  image: _assets_temp_bag_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  _id: 4,
  name: "Christine Eve",
  designation: "TEACHER",
  image: _assets_temp_bag_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  _id: 5,
  name: "Christine Eve",
  designation: "TEACHER",
  image: _assets_temp_bag_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  _id: 6,
  name: "Christine Eve",
  designation: "TEACHER",
  image: _assets_temp_bag_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  _id: 7,
  name: "Christine Eve",
  designation: "TEACHER",
  image: _assets_temp_bag_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  _id: 8,
  name: "Christine Eve",
  designation: "TEACHER",
  image: _assets_temp_bag_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}];

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

/***/ })

}]);
//# sourceMappingURL=pages-About~pages-OurTeachers.abd26fc3fc507bb6b2be.js.map