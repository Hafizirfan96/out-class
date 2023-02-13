(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-NavBar"],{

/***/ "./client/assets/img/icons8-doorbell-48.png":
/*!**************************************************!*\
  !*** ./client/assets/img/icons8-doorbell-48.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/icons8-doorbell-48.ff4e371e227e4a02f1b1ae4c3b12ecd7.png");

/***/ }),

/***/ "./client/components/AppHeader.js":
/*!****************************************!*\
  !*** ./client/components/AppHeader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_temp_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/temp/logo.png */ "./client/assets/temp/logo.png");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage */ "./client/services/storage.js");
/* harmony import */ var _store_auth_authReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/auth/authReducer */ "./client/store/auth/authReducer.js");
/* harmony import */ var _store_ui_loginModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/ui/loginModal */ "./client/store/ui/loginModal.js");
/* harmony import */ var _store_ui_registerModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/ui/registerModal */ "./client/store/ui/registerModal.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_api_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/api/auth */ "./client/store/api/auth.js");
/* harmony import */ var _assets_img_icons8_doorbell_48_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/icons8-doorbell-48.png */ "./client/assets/img/icons8-doorbell-48.png");
/* harmony import */ var _store_api_notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/api/notification */ "./client/store/api/notification.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Loader */ "./client/components/Loader.js");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-spinners/BounceLoader */ "./node_modules/react-spinners/BounceLoader.js");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_13__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 //redux actions









 // import Loader from "../components/Loader";

 // const dispatch = useDispatch();



function AppHeader(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      notify = _useState2[0],
      SetNotify = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var commonData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.ui.commonData;
  });
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth.user;
  });
  var authToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth.token;
  });

  var showLoginModal = function showLoginModal() {
    dispatch(Object(_store_ui_loginModal__WEBPACK_IMPORTED_MODULE_6__["setLoginModalVisibility"])(true));
  };

  var showRegisterModal = function showRegisterModal() {
    dispatch(Object(_store_ui_registerModal__WEBPACK_IMPORTED_MODULE_7__["setRegisterModalVisibility"])(true));
  };

  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var user = _services_storage__WEBPACK_IMPORTED_MODULE_4__["default"].get("user");
    var token = _services_storage__WEBPACK_IMPORTED_MODULE_4__["default"].get("xAuthToken");
    dispatch(Object(_store_auth_authReducer__WEBPACK_IMPORTED_MODULE_5__["setToken"])(token));
    dispatch(Object(_store_auth_authReducer__WEBPACK_IMPORTED_MODULE_5__["setUser"])(user));

    if (token) {
      noti(); // window.location.reload()
    } else return;
  }, []); //read user from localstorage
  // useEffect(() => {
  //   if (isMounted.current) {
  //     console.log('fetching');
  //     dispatch(
  //           loadNotification({
  //             onSuccess: (res) => {
  //               SetNotify(res.data.data);
  //             },
  //           })
  //         );
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, [dispatch]);

  var noti = function noti() {
    // window.location.reload()
    setLoading(true);
    dispatch(Object(_store_api_notification__WEBPACK_IMPORTED_MODULE_11__["loadNotification"])({
      onSuccess: function onSuccess(res) {
        // console.log("resdata",res.data)
        SetNotify(res.data.data);
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-light top_nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    className: "navbar-brand",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: commonData.logo,
    alt: "Logo",
    className: "img-fluid"
  })), authToken ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex styling-width"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
    as: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
      var children = _ref.children,
          _onClick = _ref.onClick;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        ref: ref,
        onClick: function onClick(e) {
          e.preventDefault();

          _onClick(e);
        },
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-2"
      }, "My Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-nav-img",
        style: {
          backgroundImage: "url(\"".concat(user.image, "\")")
        }
      }));
    }),
    id: "dropdown-custom-components dropdown-button-drop-left"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, null, "".concat(user.firstName, " ").concat(user.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
    to: "/dashboard"
  }, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
    to: "/my-orders"
  }, "My Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    onClick: function onClick() {
      dispatch(Object(_store_api_auth__WEBPACK_IMPORTED_MODULE_9__["signoutUser"])());
    }
  }, "Signout"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "bell-icon",
    src: _assets_img_icons8_doorbell_48_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    onClick: handleShow
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav ml-auto login_user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    onClick: showLoginModal
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link btn",
    onClick: showRegisterModal
  }, "Join For Free"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: show,
    onHide: handleClose,
    className: "nofication-model"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "noti-text"
  }, "Notification"), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, notify.map(function (n) {
    // {console.log("notification=========>>>>", n)}
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "noti-details"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "noti-title"
    }, n.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "noti-dec"
    }, n.desc));
  })) :
  /*#__PURE__*/
  // <SpinnerDotted  />
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_13___default.a, {
    style: {
      height: "40",
      color: "red"
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (AppHeader);

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

/***/ "./client/components/NavBar.js":
/*!*************************************!*\
  !*** ./client/components/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader */ "./client/components/AppHeader.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap_submenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-submenu */ "./node_modules/react-bootstrap-submenu/dist/index.js");
/* harmony import */ var react_bootstrap_submenu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_submenu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage */ "./client/services/storage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _css_live_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/live.png */ "./client/components/css/live.png");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var searchLink = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
var toggleRef = null;

var NavBar = function NavBar(props) {
  var cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.entities.cart;
  });
  var courses = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.entities.courses;
  });
  var categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.entities.categories;
  });
  var navMenus = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.ui.navbarMenus;
  });
  var activities = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.entities.activities.list;
  });

  var makeCourseParentStructure = function makeCourseParentStructure() {
    var courseParents = {};
    courses.list.forEach(function (co) {
      if (!courseParents[co.category._id]) courseParents[co.category._id] = [];

      courseParents[co.category._id].push(co);
    });
    var categoryTree = [];
    var parentCategories = categories.list.filter(function (c) {
      return !c.parent;
    });
    parentCategories.forEach(function (pc) {
      categoryTree.push({
        id: pc._id,
        name: pc.name,
        type: "category",
        children: getChildren(pc._id)
      });
    });
    return categoryTree;
  };

  var getChildren = function getChildren(id) {
    var children = [];
    var catChildren = categories.list.filter(function (category) {
      return id === category.parent;
    });
    catChildren.forEach(function (category) {
      children.push({
        name: category.name,
        id: category._id,
        type: "category"
      });
    });
    var courseChildren = courses.list.filter(function (course) {
      return id === course.category._id;
    });
    courseChildren.forEach(function (course) {
      children.push({
        name: course.name,
        id: course.slug,
        type: "course",
        _id: course._id
      });
    }); //deep populating by recurring this function

    children.forEach(function (chil, index) {
      if (chil.type === "category") children[index].children = getChildren(chil.id);
    });
    return children;
  };

  var coursesDropdownArray = makeCourseParentStructure();

  var renderCoursesDropdown = function renderCoursesDropdown(items) {
    return items.map(function (item) {
      if (item.children && item.children.length > 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_submenu__WEBPACK_IMPORTED_MODULE_3__["DropdownSubmenu"], {
          key: item.id,
          title: item.name
        }, renderCoursesDropdown(item.children));
      } else {
        if (item.type !== "course") return;
        var courseLink = "";
        var thisActivity;

        if (item.type === "course") {
          thisActivity = activities.find(function (ac) {
            return item._id == ac.course;
          }); // {console.log(" navbar slg=====>",thisActivity.lesson.slug)}
          // courseLink = thisActivity
          //   ? `/course/${item.id}/${thisActivity.lesson.slug}`
          //   : `/course/${item.id}`;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
          key: item.id // to={courseLink}
          ,
          onClick: function onClick() {
            if (thisActivity && thisActivity.lesson.type === "video") {
              _services_storage__WEBPACK_IMPORTED_MODULE_5__["default"].store("continue_video", thisActivity.duration);
            }

            props.history.push(courseLink);
            toggleNavBar();
          }
        }, item.name);
      }
    });
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      searchString = _useState2[0],
      setSearchString = _useState2[1];

  var toggleNavBar = function toggleNavBar() {
    if (toggleRef) toggleRef.click();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    id: "header",
    className: "home_header sticky-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    className: "d-none",
    to: "/search/" + searchString,
    ref: searchLink,
    onClick: toggleNavBar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: "main_nav",
    expand: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    ref: function ref(_ref) {
      toggleRef = _ref;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    className: " d-block  custom_link d-sm-block d-md-block position-relative d-lg-none",
    to: "/cart",
    onClick: toggleNavBar
  }, cart && cart.items && cart.items != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-warning badge-sm position-absolute",
    style: {
      top: "-3px",
      right: "-3px"
    }
  }, cart.items.length || 0) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fal fa-shopping-cart"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "responsive-navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "navbar-nav justify-content-center mx-auto",
    id: "primary-menu"
  }, navMenus.list.map(function (nm) {
    return nm.name.toLowerCase().trim() === "courses" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrap-nav-icon"
    }, nm.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: nm.image,
      style: {
        width: "2vw",
        height: "2vw"
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        display: "none"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nav-h1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "nav-hot"
    }, nm.highLightText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_submenu__WEBPACK_IMPORTED_MODULE_3__["NavDropdownMenu"], {
      title: "Courses",
      id: "collasible-nav-dropdown",
      key: nm._id,
      className: "navbar_courses"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
      to: "/all-courses",
      onClick: toggleNavBar,
      className: "navbar_all_courses"
    }, "All Courses"), renderCoursesDropdown(coursesDropdownArray)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
      as: "li",
      key: nm._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrap-nav-icon"
    }, nm.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: nm.image
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        display: "none"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nav-h1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "nav-hot"
    }, nm.highLightText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
      to: nm.link,
      onClick: toggleNavBar
    }, nm.name))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    as: "li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    className: "form-inline",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      if (!searchString) return;
      if (searchLink.current) searchLink.current.click();
      toggleNavBar();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    style: {
      marginTop: "9%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    type: "text",
    placeholder: "Search Courses",
    onChange: function onChange(e) {
      setSearchString(e.target.value.trim());
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn btn-submit",
    type: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-search"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    as: "li",
    className: "  d-none  d-sm-none d-md-none d-lg-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
    className: "position-relative",
    style: {
      marginTop: "33%"
    },
    to: "/cart"
  }, cart && cart.items && cart.items != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-warning badge-sm position-absolute",
    style: {
      top: "-3px",
      right: "-3px"
    }
  }, cart.items.length || 0) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fal fa-shopping-cart"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./client/components/css/live.png":
/*!****************************************!*\
  !*** ./client/components/css/live.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/live.287ccca35dfe822bfde31c8f0acdf73c.png");

/***/ }),

/***/ "./client/store/api/notification.js":
/*!******************************************!*\
  !*** ./client/store/api/notification.js ***!
  \******************************************/
/*! exports provided: loadNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadNotification", function() { return loadNotification; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // const authToken = useSelector((state) => state.auth.token);

var path = "/cms/notification";
var loadNotification = function loadNotification() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? {} : _ref$body,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError,
      onEnd = _ref.onEnd;

  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var store, auth, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              store = getState();
              auth = store.auth; //showing loader on ui

              _context.next = 5;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path,
                headers: {
                  "x-auth-token": auth.token
                }
              });

            case 5:
              res = _context.sent;
              //onSuccess event firing
              if (onSuccess) onSuccess(res);
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              //onError event firing
              console.log("Error => ", _context.t0);
              if (onError) onError(_context.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context.t0);

            case 13:
              _context.prev = 13;
              if (onEnd) onEnd();
              return _context.finish(13);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9, 13, 16]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ })

}]);
//# sourceMappingURL=components-NavBar.19bf0f8411ad4ae0e287.js.map