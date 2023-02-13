(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-HomeCourses"],{

/***/ "./client/components/CourseCard.js":
/*!*****************************************!*\
  !*** ./client/components/CourseCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rating-stars-component */ "./node_modules/react-rating-stars-component/dist/react-stars.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rating_stars_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_priceFormater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/priceFormater */ "./client/helpers/priceFormater.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage */ "./client/services/storage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var activities = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.entities.activities.list;
  });
  var course = props.course;
  var thisActivity = activities.find(function (ac) {
    return course._id == ac.course;
  });
  var activityLink = null;
  var courseLink = null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: {
      width: "280px",
      margin: "auto"
    }
  }, console.log("course.slug", course.slug), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/course/".concat(course.slug),
    ref: function ref(_ref) {
      courseLink = _ref;
    }
  }), thisActivity && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/course/".concat(course.slug, "/").concat(thisActivity.lesson.slug),
    ref: function ref(_ref2) {
      activityLink = _ref2;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "100%",
      height: "160px",
      backgroundImage: "url(\"".concat(course.image, "\")"),
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, course.category.name, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "course_name"
  }, course.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearfix spec mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-left "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fal fa-clock"
  }), " ", course.duration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-left ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fal fa-folder-open"
  }), course.lectures)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-preview",
    onClick: function onClick() {
      console.log("THIS => activity => ", thisActivity);

      if (thisActivity && activityLink) {
        if (thisActivity.lesson.type === "video") {
          _services_storage__WEBPACK_IMPORTED_MODULE_4__["default"].store("continue_video", thisActivity.duration);
        }

        activityLink.click();
      } else {
        courseLink.click();
      }
    }
  }, "See Course")));
});

/***/ }),

/***/ "./client/components/HomeCourses.js":
/*!******************************************!*\
  !*** ./client/components/HomeCourses.js ***!
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var _CourseCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CourseCard */ "./client/components/CourseCard.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/components/navigation/navigation.scss */ "./node_modules/swiper/components/navigation/navigation.scss");
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






 // import "swiper/swiper.scss";



swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_6__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_6__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_6__["EffectFade"]]);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCategory = _useState2[0],
      setStelectedCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      categoryName = _useState4[0],
      setCategoryName = _useState4[1];

  var categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.entities.categories;
  });
  var courses = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.entities.courses;
  });

  var renderCategories = function renderCategories() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      role: "presentation"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: selectedCategory ? "nav-link" : "nav-link active",
      onClick: function onClick(e) {
        e.preventDefault();
        setStelectedCategory("");
      },
      id: "marketing-tab",
      "data-toggle": "tab",
      href: "#marketing",
      role: "tab",
      "aria-controls": "marketing",
      "aria-selected": "false"
    }, "All Courses")), (categories.list || []).map(function (cat) {
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

  var renderCourseSwiper = function renderCourseSwiper() {
    var filteredCourses = selectedCategory ? courses.list.filter(function (c) {
      return c.category._id === selectedCategory;
    }) : courses.list;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "courses"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      autoplay: true,
      slidesPerView: 4,
      spaceBetween: 15,
      className: "owl-carousel courses courses_carousel",
      navigation: {
        nextEl: "#homeSwiperNext",
        prevEl: "#homeSwiperPrev"
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      },
      nextButton: "#homeSwiperPrev",
      prevButton: "homeSwiperNext"
    }, filteredCourses.map(function (course) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_4__["SwiperSlide"], {
        className: "item",
        key: "home course => " + course._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        course: course
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "homeSwiperPrev",
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
      id: "homeSwiperNext",
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
    })))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "popular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg_cover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs",
    id: "courseTab",
    role: "tablist"
  }, renderCategories()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content",
    id: "cuorses_list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-pane fade show active",
    id: "all",
    role: "tabpanel",
    "aria-labelledby": "all-tab"
  }, renderCourseSwiper(), selectedCategory ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "btn more",
    to: "/all-courses/" + selectedCategory
  }, "All ".concat(categoryName, " Courses")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "btn more",
    to: "/all-courses"
  }, "All  Courses")))));
});

/***/ }),

/***/ "./client/helpers/priceFormater.js":
/*!*****************************************!*\
  !*** ./client/helpers/priceFormater.js ***!
  \*****************************************/
/*! exports provided: formatPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
var formatPrice = function formatPrice(price) {
  return numberWithCommas(price);
};

function numberWithCommas() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

/***/ }),

/***/ "./node_modules/swiper/components/navigation/navigation.scss":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/components/navigation/navigation.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=components-HomeCourses.067f7ab223731c6028ec.js.map