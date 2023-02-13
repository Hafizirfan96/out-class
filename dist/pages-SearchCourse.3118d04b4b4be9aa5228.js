(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-SearchCourse"],{

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

/***/ "./client/components/Loader.js":
/*!*************************************!*\
  !*** ./client/components/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners/BounceLoader */ "./node_modules/react-spinners/BounceLoader.js");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? "#00acf0" : _props$color;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_1___default.a, {
    color: color
  });
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

/***/ "./client/pages/SearchCourse.js":
/*!**************************************!*\
  !*** ./client/pages/SearchCourse.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _store_api_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/api/cart */ "./client/store/api/cart.js");
/* harmony import */ var _shared_TextError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/TextError */ "./client/shared/TextError.js");
/* harmony import */ var _store_api_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/api/courses */ "./client/store/api/courses.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader */ "./client/components/Loader.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rating-stars-component */ "./node_modules/react-rating-stars-component/dist/react-stars.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_CourseCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CourseCard */ "./client/components/CourseCard.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var MyCourses = function MyCourses(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); //   const cart = useSelector((state) => state.entities.cart);

  var courses = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.entities.courses;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showLoader = _useState2[0],
      setShowLoader = _useState2[1]; //overlapping Loader


  var renderLoader = function renderLoader() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlapping-loader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], null));
  };

  var renderCourses = function renderCourses() {
    var search = props.match.params.search;
    var filteredCourses = courses.list.filter(function (c) {
      return c.name.toLowerCase().includes(search.trim().toLowerCase());
    });
    return filteredCourses.length > 0 ? filteredCourses.map(function (course) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 col-md-3 col-sm-6",
        key: course._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CourseCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        course: course
      }));
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 py-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "text-center"
    }, "No Courses Found"));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative",
    style: {
      minHeight: "200px"
    }
  }, showLoader ? renderLoader() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, renderCourses())))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyCourses);

/***/ }),

/***/ "./client/shared/TextError.js":
/*!************************************!*\
  !*** ./client/shared/TextError.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TextError(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error mr-3"
  }, props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (TextError);

/***/ })

}]);
//# sourceMappingURL=pages-SearchCourse.3118d04b4b4be9aa5228.js.map