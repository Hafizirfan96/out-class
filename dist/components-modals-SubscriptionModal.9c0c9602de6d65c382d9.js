(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-modals-SubscriptionModal"],{

/***/ "./client/components/modals/SubscriptionModal.js":
/*!*******************************************************!*\
  !*** ./client/components/modals/SubscriptionModal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_ui_subscriptionModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/ui/subscriptionModal */ "./client/store/ui/subscriptionModal.js");
/* harmony import */ var _store_api_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/api/cart */ "./client/store/api/cart.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _helpers_priceFormater__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/priceFormater */ "./client/helpers/priceFormater.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var SubscriptionModal = function SubscriptionModal() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      modalStep = _useState2[0],
      setModalStep = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedCourses = _useState4[0],
      setSelectedCourses = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedPricePlan = _useState6[0],
      setSelectedPricePlan = _useState6[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var subscriptionPlans = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.entities.subscriptionPlans;
  });
  var subscriptionModal = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.ui.subscriptionModal;
  });
  var subscriptionPageCMS = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.ui.subscriptionPage.data;
  });
  var courses = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.entities.courses.list;
  });
  var categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.entities.categories.list;
  });

  var closeModal = function closeModal() {
    dispatch(Object(_store_ui_subscriptionModal__WEBPACK_IMPORTED_MODULE_5__["setSubscriptionModal"])({
      visible: false
    }));
  };

  var selectedCategory = categories.find(function (c) {
    return c._id === subscriptionModal.category;
  });
  var plansForThisCategory = subscriptionPlans.list.filter(function (sp) {
    return sp.category._id === subscriptionModal.category;
  });
  var filteredCourses = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    var category = subscriptionModal.category;
    return courses.filter(function (c) {
      return c.category._id === category;
    });
  }, [categories, courses, subscriptionModal.category]);
  var MAX_COURSE_SELECTION = subscriptionModal.plan.numberOfCourses;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setModalStep(1);
  }, [subscriptionModal.visible]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSelectedCourses([]);

    if (subscriptionModal.plan && subscriptionModal.plan.pricePlans && subscriptionModal.plan.pricePlans[0]) {
      setSelectedPricePlan(subscriptionModal.plan.pricePlans[0]);
    }
  }, [subscriptionModal.plan]);

  var renderCoursesList = function renderCoursesList() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "courses-check-list my-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, filteredCourses.map(function (c) {
      var checked = selectedCourses.includes(c._id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 col-md-6",
        key: c._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mr-5 mr-md-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
          checked: checked,
          color: "primary",
          disabled: !checked && selectedCourses.length >= MAX_COURSE_SELECTION,
          onChange: function onChange(e) {
            if (e.target.checked) {
              selectedCourses.push(c._id);
              setSelectedCourses(_toConsumableArray(selectedCourses));
            } else {
              setSelectedCourses(selectedCourses.filter(function (sc) {
                return sc !== c._id;
              }));
            }
          }
        }),
        label: c.name
      })));
    })));
  };

  var renderSelectedCoursesList = function renderSelectedCoursesList() {
    var selectedCoursesList = filteredCourses.filter(function (c) {
      return selectedCourses.includes(c._id);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "courses-check-list mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "font-weight-bold mt-4"
    }, subscriptionPageCMS.coursesSelectedHeading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, selectedCoursesList.map(function (sc) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 mr-5 mr-md-0",
        key: sc._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
          checked: true,
          color: "primary"
        }),
        label: sc.name
      }));
    })));
  };

  var renderPricePlans = function renderPricePlans() {
    if (!subscriptionModal.plan || !subscriptionModal.plan.pricePlans) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sub-modal-wrapper px-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row justify-content-center"
    }, subscriptionModal.plan.pricePlans.map(function (pPlan) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4",
        key: pPlan._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();
          setSelectedPricePlan(pPlan);
        },
        style: {
          textDecoration: "none"
        },
        className: "text-dark"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "plan-btn ".concat(pPlan._id === selectedPricePlan._id && "active")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-center mb-1"
      }, pPlan.accessText && react_render_html__WEBPACK_IMPORTED_MODULE_3___default()(pPlan.accessText.trim())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "text-center mb-1 font-weight-bold"
      }, "Rs. ", pPlan.price && Object(_helpers_priceFormater__WEBPACK_IMPORTED_MODULE_9__["formatPrice"])(pPlan.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-center mb-0 text-danger"
      }, pPlan.saleText && react_render_html__WEBPACK_IMPORTED_MODULE_3___default()(pPlan.saleText.trim())))));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-center my-3"
    }, selectedPricePlan.bottomAccessText && react_render_html__WEBPACK_IMPORTED_MODULE_3___default()(selectedPricePlan.bottomAccessText)));
  };

  var renderStep1 = function renderStep1() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sub-modal-wrapper px-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row justify-content-center py-4"
    }, plansForThisCategory.map(function (thisCatPlan) {
      var isPlanSelected = subscriptionModal.plan._id === thisCatPlan._id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-center col-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        style: {
          border: "2px solid #00acf0",
          borderRadius: "5px",
          padding: "10px 20px",
          color: isPlanSelected ? "#ffffff" : "#00acf0",
          background: isPlanSelected ? "#00acf0" : "#ffffff",
          textDecoration: "none",
          fontWeight: "bold",
          margin: "auto",
          marginTop: "10px"
        },
        onClick: function onClick(e) {
          e.preventDefault();
          dispatch(Object(_store_ui_subscriptionModal__WEBPACK_IMPORTED_MODULE_5__["setSubscriptionModal"])({
            plan: thisCatPlan
          }));
        }
      }, thisCatPlan.name && thisCatPlan.name.toUpperCase(), " PLAN"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, subscriptionModal.plan.chooseText ? react_render_html__WEBPACK_IMPORTED_MODULE_3___default()(subscriptionModal.plan.chooseText) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "text-center pt-4"
    }, "You can choose", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-main"
    }, "ANY ", MAX_COURSE_SELECTION), " " + (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.name) + " ", "Courses")), renderCoursesList()), renderPricePlans(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      href: "#",
      className: "next-btn",
      disabled: selectedCourses.length !== MAX_COURSE_SELECTION,
      onClick: function onClick(e) {
        e.preventDefault();
        setModalStep(2);
      }
    }, "Next")));
  };

  var renderStep2 = function renderStep2() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "text-center mt-3"
    }, subscriptionPageCMS.topHeading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sub-modal-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-6"
    }, renderSelectedCoursesList()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "font-weight-bold mt-4"
    }, subscriptionModal.plan && subscriptionModal.plan.name.toUpperCase(), " ", "PLAN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sub-details px-4 pt-3 pb-2 mb-4 "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-lg"
    }, subscriptionPageCMS.priceLabel, " ", selectedPricePlan && Object(_helpers_priceFormater__WEBPACK_IMPORTED_MODULE_9__["formatPrice"])(selectedPricePlan.price), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, subscriptionPageCMS.confirmation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mt-4"
    }, subscriptionPageCMS.subPer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, selectedPricePlan && selectedPricePlan.numberOfDays, " Days from payment.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "font-weight-bold mt-4 text-center"
    }, subscriptionPageCMS.bottomHeading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-center mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      href: "#",
      className: "next-btn",
      onClick: function onClick(e) {
        e.preventDefault();
        var body = {
          courses: selectedCourses,
          subscriptionType: subscriptionModal.subscriptionType,
          bundlePrice: selectedPricePlan.price,
          numberOfDays: selectedPricePlan.numberOfDays
        };
        dispatch(Object(_store_api_cart__WEBPACK_IMPORTED_MODULE_6__["addBundleToCartApi"])({
          body: body,
          onSuccess: function onSuccess(res) {
            closeModal();
            history.push("/cart");
          },
          onError: function onError(err) {
            alert("Something went wrong");
          },
          onEnd: function onEnd() {
            console.log("On End");
          }
        }));
      }
    }, "Confirm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      href: "#",
      className: "sub-back-btn ml-4",
      onClick: function onClick(e) {
        e.preventDefault();
        setModalStep(1);
      }
    }, "Back"))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    show: subscriptionModal.visible,
    onHide: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _defineProperty({
    href: "#",
    className: "text-dark",
    onClick: function onClick(e) {
      e.preventDefault();
      closeModal();
    }
  }, "className", "modal-close-btn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, modalStep === 1 ? renderStep1() : renderStep2()));
};

/* harmony default export */ __webpack_exports__["default"] = (SubscriptionModal);

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

/***/ })

}]);
//# sourceMappingURL=components-modals-SubscriptionModal.9c0c9602de6d65c382d9.js.map