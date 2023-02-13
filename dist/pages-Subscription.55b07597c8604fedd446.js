(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-Subscription"],{

/***/ "./client/pages/Subscription.js":
/*!**************************************!*\
  !*** ./client/pages/Subscription.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_api_subscriptionPageCms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/api/subscriptionPageCms */ "./client/store/api/subscriptionPageCms.js");
/* harmony import */ var _store_ui_subscriptionModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/ui/subscriptionModal */ "./client/store/ui/subscriptionModal.js");
/* harmony import */ var _store_ui_loginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/ui/loginModal */ "./client/store/ui/loginModal.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage */ "./client/services/storage.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var FreeVideos = function FreeVideos(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

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
  var authToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth.token;
  });
  var subscriptionPlans = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.entities.subscriptionPlans;
  });
  var subscriptionPageCMS = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ui.subscriptionPage.data;
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
    var category = categories.list.find(function (c) {
      return c._id === props.match.params.category;
    });
    var name = category ? category.name : categories.list[0].name;
    var id = category ? category._id : categories.list[0]._id;

    if (!selectedCategory) {
      setCategoryName(name);
      setStelectedCategory(id);
    }

    dispatch(Object(_store_api_subscriptionPageCms__WEBPACK_IMPORTED_MODULE_2__["getFreeVideosImageSec"])({}));
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

  var renderSubscriptionCards = function renderSubscriptionCards() {
    if (!selectedCategory) return null;
    var plansForThisCategory = subscriptionPlans.list.filter(function (sp) {
      return sp.category._id === selectedCategory;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row justify-content-center"
    }, plansForThisCategory.map(function (subscriptinPlan) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4 mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mx-5 mx-md-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();

          if (!authToken) {
            dispatch(Object(_store_ui_loginModal__WEBPACK_IMPORTED_MODULE_4__["setLoginModalVisibility"])(true));
            _services_storage__WEBPACK_IMPORTED_MODULE_5__["default"].store("GO_TO_SUBSCRIPTION", {
              visible: true,
              category: selectedCategory,
              plan: plan
            });
            return;
          }

          dispatch(Object(_store_ui_subscriptionModal__WEBPACK_IMPORTED_MODULE_3__["setSubscriptionModal"])({
            visible: true,
            category: selectedCategory,
            plan: subscriptinPlan
          }));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "w-100",
        src: subscriptinPlan.cardImage
      }))));
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: subscriptionPageCMS.metaTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: subscriptionPageCMS.metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: subscriptionPageCMS.metaKeyWords
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    style: {
      marginTop: "200px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-100",
    src: subscriptionPageCMS.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-center mt-4"
  }, subscriptionPageCMS.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mt-2 subscription-page-top-text"
  }, react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(subscriptionPageCMS.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "popular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg_cover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, categoryName ? categoryName + " " : "All ", "Subscription Plans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs",
    id: "courseTab",
    role: "tablist"
  }, renderCategories()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home_sub_top_text",
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(subscriptionPageCMS.text2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mb-5",
    style: {
      marginTop: "30px"
    }
  }, renderSubscriptionCards()));
};

FreeVideos.loadData = function (_ref) {
  var store = _ref.store,
      matchedRoute = _ref.matchedRoute;
  var token = store.getState().auth.token;
  var dispatch = store.dispatch;
  var promiseArray = []; // if (token) {
  // }

  promiseArray.push(dispatch(Object(_store_api_subscriptionPageCms__WEBPACK_IMPORTED_MODULE_2__["getFreeVideosImageSec"])({})));
  return Promise.all(promiseArray);
};

/* harmony default export */ __webpack_exports__["default"] = (FreeVideos);

/***/ })

}]);
//# sourceMappingURL=pages-Subscription.55b07597c8604fedd446.js.map