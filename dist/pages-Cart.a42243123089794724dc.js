(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-Cart"],{

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

/***/ "./client/components/PhoneInput.js":
/*!*****************************************!*\
  !*** ./client/components/PhoneInput.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-phone-input-2 */ "./node_modules/react-phone-input-2/lib/lib.js");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var MyInput = function MyInput(props) {
  var error = props.error,
      label = props.label,
      className = props.className,
      _onChange = props.onChange,
      onChangeFormik = props.onChangeFormik;
  var classes = className + " form-control form-control-alternative text-black";

  if (error) {
    classes = classes + " border border-danger";
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
    className: "form-control-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_phone_input_2__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    country: "pk",
    prefix: "+",
    inputClass: classes
  }, props, {
    specialLabel: "",
    onChange: function onChange(phoneNumber) {
      if (phoneNumber.charAt(0) !== "+") phoneNumber = "+".concat(phoneNumber);

      _onChange(phoneNumber);
    }
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-danger"
  }, error));
};

/* harmony default export */ __webpack_exports__["default"] = (MyInput);

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

/***/ "./client/pages/Cart.js":
/*!******************************!*\
  !*** ./client/pages/Cart.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _shared_TextError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/TextError */ "./client/shared/TextError.js");
/* harmony import */ var _store_api_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/api/cart */ "./client/store/api/cart.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader */ "./client/components/Loader.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/error */ "./client/helpers/error.js");
/* harmony import */ var _components_PhoneInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PhoneInput */ "./client/components/PhoneInput.js");
/* harmony import */ var _store_api_cartCms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/api/cartCms */ "./client/store/api/cartCms.js");
/* harmony import */ var _helpers_priceFormater__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/priceFormater */ "./client/helpers/priceFormater.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_11__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var Cart = function Cart(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.entities.cart;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(cart.coupon || ""),
      _useState2 = _slicedToArray(_useState, 2),
      couponCode = _useState2[0],
      setCouponCode = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCouponCode(cart.coupon);
  }, [cart]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      cartLoader = _useState4[0],
      setCartLoader = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    heading1: "",
    text1: "",
    heading2: "",
    text2: "",
    heading3: "",
    text3: ""
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      cartCms = _useState6[0],
      setCartCms = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_api_cart__WEBPACK_IMPORTED_MODULE_5__["getMyCart"])()); //

    dispatch(Object(_store_api_cartCms__WEBPACK_IMPORTED_MODULE_9__["loadCartPageCMS"])({
      onSuccess: function onSuccess(res) {
        setCartCms(res.data.data);
      }
    }));
  }, props);

  var trackGtag = function trackGtag(paymentMethod) {
    if (window.gtag) {
      gtag("event", "conversion", {
        send_to: "AW-458348445/4MTOCNKе6u8CEJ2vx90B",
        value: parseFloat(cart.price),
        currency: "PKR",
        transaction_id: "",
        paymentMethod: paymentMethod
      });
    }
  };

  var applyCoupon = function applyCoupon(e) {
    e.preventDefault();
    if (!couponCode) return;
    setCartLoader(true);
    dispatch(Object(_store_api_cart__WEBPACK_IMPORTED_MODULE_5__["getMyCart"])({
      couponCode: couponCode,
      onError: function onError(err) {
        Object(_helpers_error__WEBPACK_IMPORTED_MODULE_7__["handleErrors"])(err);
      },
      onEnd: function onEnd() {
        setCartLoader(false);
      }
    }));
  };

  var removeCoupon = function removeCoupon(e) {
    e.preventDefault();
    setCartLoader(true);
    dispatch(Object(_store_api_cart__WEBPACK_IMPORTED_MODULE_5__["getMyCart"])({
      removeCoupon: 1,
      onError: function onError(err) {
        Object(_helpers_error__WEBPACK_IMPORTED_MODULE_7__["handleErrors"])(err);
      },
      onEnd: function onEnd() {
        setCartLoader(false);
      }
    }));
  }; //overlapping Loader


  var renderLoader = function renderLoader() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlapping-loader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  };

  var renderCartItems = function renderCartItems() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, cart.items.map(function (cartItem, cartItemIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: cartItem._id + "cart page item" + cartItemIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        scope: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          dispatch(Object(_store_api_cart__WEBPACK_IMPORTED_MODULE_5__["deleteCartItem"])({
            id: cartItem._id
          }));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fal fa-times"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, cartItem.itemType === "BUNDLE" ? renderBundleItem(cartItem) : renderSingleItem(cartItem))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Rs. ".concat(Object(_helpers_priceFormater__WEBPACK_IMPORTED_MODULE_10__["formatPrice"])(cartItem.price))));
    }));
  };

  var renderSingleItem = function renderSingleItem(cartItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left_block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: cartItem.course.image,
      alt: "",
      className: "img-fluid"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right_block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, cartItem.course.name), !cartItem.completeCourse && renderChapters(cartItem.chapters), cartItem.completeCourse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "badge badge-success badge-lg mx-1 mt-1 float-left p-2 font-weight-normal"
    }, "Complete Course")));
  };

  var renderBundleItem = function renderBundleItem(cartItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, cartItem.courses.map(function (c) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: "100%",
          height: "120px",
          backgroundImage: "url(\"".concat(c.image, "\")"),
          backgroundSize: "cover",
          backgroundPosition: "center"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "text-center mt-2"
      }, c.name)));
    })));
  };

  var renderChapters = function renderChapters(chapters) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix"
    }, chapters.map(function (chap) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: chap._id,
        className: "badge badge-secondary badge-lg mx-1 mt-1 float-left p-2 font-weight-normal"
      }, chap.name);
    }));
  };

  var renderPayProForm = function renderPayProForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: {
        name: "",
        phone: "",
        email: "",
        address: ""
      },
      validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
        name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Name is required"),
        phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Phone is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required().email("Email is not valid."),
        address: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Address is required")
      }),
      onSubmit: function onSubmit(form) {
        setCheckoutLoader(true);
        trackGtag("Direct Bank Transfer");
        dispatch(Object(_store_api_cart__WEBPACK_IMPORTED_MODULE_5__["checkoutPayPro"])({
          body: form,
          onSuccess: function onSuccess() {
            props.history.replace("/my-orders");
          },
          onEnd: function onEnd() {
            setCheckoutLoader(false);
          }
        }));
      }
    }, function (_ref) {
      var submitForm = _ref.submitForm,
          setFieldValue = _ref.setFieldValue,
          values = _ref.values;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkout-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        name: "name",
        className: "form-control",
        placeholder: "Name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "name",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "covering"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhoneInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: values.phone,
        placeholder: "Phone",
        onChange: function onChange(phone) {
          setFieldValue("phone", phone);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "phone",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "email",
        name: "email",
        className: "form-control",
        placeholder: "E-mail"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "email",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        name: "address",
        className: "form-control",
        placeholder: "Address"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "address",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: submitForm,
        className: "btn more"
      }, "Checkout")))));
    });
  };

  var renderCashCollectionForm = function renderCashCollectionForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: {
        firstName: "",
        lastName: "",
        address: "",
        address2: "",
        city: "",
        country: "",
        phone: "",
        email: "",
        otherInstructions: ""
      },
      validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
        firstName: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("First Name is required"),
        lastName: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Last Name is required"),
        address: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Address is required"),
        address2: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().optional(),
        city: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("City is required"),
        country: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Country is required"),
        phone: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Phone is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required().email("Email is not valid."),
        otherInstructions: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().optional()
      }),
      onSubmit: function onSubmit(form) {
        setCheckoutLoader(true);
        trackGtag("Cash Collection");
        dispatch(Object(_store_api_cart__WEBPACK_IMPORTED_MODULE_5__["checkoutCashCollection"])({
          body: form,
          onSuccess: function onSuccess() {
            props.history.replace("/my-orders");
          },
          onEnd: function onEnd() {
            setCheckoutLoader(false);
          }
        }));
      }
    }, function (_ref2) {
      var submitForm = _ref2.submitForm,
          setFieldValue = _ref2.setFieldValue,
          values = _ref2.values;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkout-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        name: "firstName",
        className: "form-control",
        placeholder: "First Name *"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "firstName",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        name: "lastName",
        className: "form-control",
        placeholder: "Last Name *"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "lastName",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        name: "address",
        className: "form-control",
        placeholder: "Street Address*"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "address",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        name: "address2",
        className: "form-control",
        placeholder: "Apartment, suit, unit etc.(Optional)"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "address2",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        name: "city",
        className: "form-control",
        placeholder: "City*"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "city",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        name: "country",
        className: "form-control",
        placeholder: "Country*"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "country",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "covering"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhoneInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: values.phone,
        placeholder: "Phone",
        onChange: function onChange(phone) {
          setFieldValue("phone", phone);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "phone",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "email",
        name: "email",
        className: "form-control",
        placeholder: "E-mail"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "email",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        name: "otherInstructions",
        className: "form-control",
        placeholder: "Other Instruction"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "otherInstructions",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: submitForm,
        className: "btn more"
      }, "Checkout")))));
    });
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      checkoutLoader = _useState8[0],
      setCheckoutLoader = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("card"),
      _useState10 = _slicedToArray(_useState9, 2),
      currentPaymentOption = _useState10[0],
      setCurrentPaymentOption = _useState10[1];

  var renderPaymentMethods = function renderPaymentMethods() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "position-relative"
    }, checkoutLoader && renderLoader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment_options"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "accordion",
      id: "accordionExample"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      id: "headingThree"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mb-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-block text-left collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseThree",
      "aria-expanded": currentPaymentOption === "card",
      "aria-controls": "collapseThree",
      onClick: function onClick() {
        setCurrentPaymentOption("card");
      }
    }, cartCms.heading1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _defineProperty({
      id: "collapseThree",
      className: "collapse",
      "aria-labelledby": "headingThree",
      "data-parent": "#accordionExample"
    }, "className", currentPaymentOption === "card" ? "collapse show" : "collapse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body"
    }, cartCms.text1 && react_render_html__WEBPACK_IMPORTED_MODULE_11___default()(cartCms.text1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "card-checkout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-primary",
      onClick: function onClick() {
        trackGtag("Card Payment");
        setCheckoutLoader(true);
        dispatch(Object(_store_api_cart__WEBPACK_IMPORTED_MODULE_5__["createBankAlfalahSession"])({
          onSuccess: function onSuccess(res) {
            Checkout.configure({
              session: {
                id: res.data.data.sessionId,
                version: res.data.data.sessionVersion
              },
              order: {
                amount: parseFloat(cart.price),
                currency: "PKR",
                description: "Order Goods",
                id: res.data.data.orderId
              },
              interaction: {
                operation: "PURCHASE",
                merchant: {
                  name: "OUT-CLASS",
                  address: {
                    line1: "200 Sample St",
                    line2: "1234 Example Town"
                  }
                }
              },
              merchant: "OUTCLASSLEAR"
            });
            Checkout.showPaymentPage();
          },
          onEnd: function onEnd() {
            setCheckoutLoader(false);
          }
        }));
      }
    }, "Pay with Credit Card"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      id: "headingOne"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mb-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-block text-left",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseOne",
      "aria-expanded": currentPaymentOption === "paypro",
      "aria-controls": "collapseOne",
      onClick: function onClick() {
        setCurrentPaymentOption("paypro");
      }
    }, cartCms.heading2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "collapseOne",
      className: currentPaymentOption === "paypro" ? "collapse show" : "collapse",
      "aria-labelledby": "headingOne",
      "data-parent": "#accordionExample"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body"
    }, cartCms.text2 && react_render_html__WEBPACK_IMPORTED_MODULE_11___default()(cartCms.text2), renderPayProForm()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      id: "headingOne"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "mb-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-block text-left",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseOne",
      "aria-expanded": currentPaymentOption === "cash",
      "aria-controls": "collapseOne",
      onClick: function onClick() {
        setCurrentPaymentOption("cash");
      }
    }, cartCms.heading3))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "collapseOne",
      className: currentPaymentOption === "cash" ? "collapse show" : "collapse",
      "aria-labelledby": "headingOne",
      "data-parent": "#accordionExample"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body"
    }, cartCms.text3 && react_render_html__WEBPACK_IMPORTED_MODULE_11___default()(cartCms.text3), renderCashCollectionForm()))))));
  };

  var taxAmount = cart.totalAmount - cart.totalAmount / 1.16;
  var subTotal = cart.totalAmount - taxAmount;
  var discount = cart.totalAmount - cart.price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "other_banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Cart"))), cart.items.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "pro_cart position-relative"
  }, cartLoader && renderLoader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col"
  }, "Price"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, renderCartItems()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 offset-lg-6 col-md-8 offset-md-4 col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: applyCoupon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 col-md-6 col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Coupon code",
    value: couponCode,
    onChange: function onChange(e) {
      setCouponCode(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 col-md-3 col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn more",
    type: "submit"
  }, "Apply")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 col-md-3 col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn more btn-danger bg-danger",
    onClick: removeCoupon,
    type: "button"
  }, "Cancel")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "payment_method"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-9  col-12"
  }, renderPaymentMethods()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3  col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Cart totals:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-borderless "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Subtotal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Rs. ".concat(Object(_helpers_priceFormater__WEBPACK_IMPORTED_MODULE_10__["formatPrice"])(isDecimal(subTotal) ? subTotal.toFixed(2) : subTotal)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "discount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " Rs. ".concat(Object(_helpers_priceFormater__WEBPACK_IMPORTED_MODULE_10__["formatPrice"])(isDecimal(taxAmount) ? taxAmount.toFixed(2) : taxAmount)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "discount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " Rs. ".concat(Object(_helpers_priceFormater__WEBPACK_IMPORTED_MODULE_10__["formatPrice"])(discount)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colspan: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Rs. ".concat(Object(_helpers_priceFormater__WEBPACK_IMPORTED_MODULE_10__["formatPrice"])(cart.price)))))))))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: "100px"
    },
    className: "pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center"
  }, "Cart is empty")));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

function isDecimal(num) {
  return num % 1 != 0;
}

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

/***/ }),

/***/ "./client/store/api/cartCms.js":
/*!*************************************!*\
  !*** ./client/store/api/cartCms.js ***!
  \*************************************/
/*! exports provided: loadCartPageCMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCartPageCMS", function() { return loadCartPageCMS; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/cms/cart";
var loadCartPageCMS = function loadCartPageCMS() {
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
              _context.next = 3;
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].get({
                url: path
              });

            case 3:
              res = _context.sent;
              data = res.data.data; //onSuccess event firing

              if (onSuccess) onSuccess(res);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              //onError event firing
              console.log("Error => ", _context.t0);
              if (onError) onError(_context.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context.t0);

            case 12:
              _context.prev = 12;
              if (onEnd) onEnd();
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8, 12, 15]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ })

}]);
//# sourceMappingURL=pages-Cart.a42243123089794724dc.js.map