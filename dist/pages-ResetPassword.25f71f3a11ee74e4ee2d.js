(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-ResetPassword"],{

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

/***/ "./client/pages/ResetPassword.js":
/*!***************************************!*\
  !*** ./client/pages/ResetPassword.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _shared_TextError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/TextError */ "./client/shared/TextError.js");
/* harmony import */ var _assets_temp_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/temp/logo.png */ "./client/assets/temp/logo.png");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader */ "./client/components/Loader.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_ToastBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ToastBody */ "./client/components/ToastBody.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/storage */ "./client/services/storage.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/error */ "./client/helpers/error.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_ui_loginModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/ui/loginModal */ "./client/store/ui/loginModal.js");
/* harmony import */ var _store_api_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/api/auth */ "./client/store/api/auth.js");
var _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var ResetPassword = function ResetPassword(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showLoader = _useState2[0],
      setShowLoader = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      resetEmail = _useState4[0],
      setResetEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      passResetCode = _useState6[0],
      sePassResetCode = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      codeVerified = _useState8[0],
      setCodeVerified = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var email = _services_storage__WEBPACK_IMPORTED_MODULE_9__["default"].get("password_reset_email");
    if (!email) _this.props.history.replace("/");
    setResetEmail(email);
  }, []);

  var verifySubmitHandler = function verifySubmitHandler(value) {
    setShowLoader(true);
    sePassResetCode(value.resetCode);
    var body = {
      email: resetEmail,
      resetCode: value.resetCode
    };
    dispatch(Object(_store_api_auth__WEBPACK_IMPORTED_MODULE_13__["checkPasswordResetCode"])({
      body: body,
      onSuccess: function onSuccess() {
        setCodeVerified(true);
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  };

  var resendResetEmail = function resendResetEmail() {
    setShowLoader(true);
    dispatch(Object(_store_api_auth__WEBPACK_IMPORTED_MODULE_13__["resendPasswordResetEmail"])({
      body: {
        email: resetEmail
      },
      onSuccess: function onSuccess() {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ToastBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: "Email Sent",
          message: "We have sent you another password reset email"
        }));
      },
      onError: function onError(err) {
        console.log("Error  skfjsdfhsdjhf", err);
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  };

  var renderVerifyForm = function renderVerifyForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: {
        resetCode: ""
      },
      onSubmit: verifySubmitHandler,
      validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
        resetCode: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(6, "Reset Code must be 6 characters long").max(6, "Reset Code must be 6 characters long").required("Enter Reset Code")
      })
    }, function (_ref) {
      _objectDestructuringEmpty(_ref);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "covering"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "text",
        className: "form-control border",
        placeholder: "Enter 6 Digit Reset Code",
        name: "resetCode"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "resetCode",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary btn-block ",
        style: {
          backgroundColor: "#00acf0",
          borderColor: "#00acf0",
          padding: "10px 10px"
        }
      }, "Next"));
    });
  };

  var resetPasswordHandler = function resetPasswordHandler(values) {
    setShowLoader(true);

    var body = _objectSpread({
      email: resetEmail,
      verificationCode: passResetCode
    }, values);

    dispatch(Object(_store_api_auth__WEBPACK_IMPORTED_MODULE_13__["resetMyPassword"])({
      body: body,
      onSuccess: function onSuccess(res) {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ToastBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: "Password Changed",
          message: "your password has been changed."
        }));
        props.history.replace("/");
        dispatch(Object(_store_ui_loginModal__WEBPACK_IMPORTED_MODULE_12__["setLoginModalVisibility"])(true));
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  };

  var renderResetForm = function renderResetForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: {
        password: "",
        confirmPassword: ""
      },
      onSubmit: resetPasswordHandler,
      validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
        password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Enter a password*").min(6, "minimum 6 chars*"),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required*").oneOf([yup__WEBPACK_IMPORTED_MODULE_3__["ref"]("password"), null], "Passwords must match")
      })
    }, function (_ref2) {
      _objectDestructuringEmpty(_ref2);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "covering"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "password",
        className: "form-control border",
        placeholder: "New Password",
        name: "password"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "password",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "covering"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        type: "password",
        className: "form-control border",
        placeholder: "Confirm New Password",
        name: "confirmPassword"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
        name: "confirmPassword",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary btn-block ",
        style: {
          backgroundColor: "#00acf0",
          borderColor: "#00acf0",
          padding: "10px 10px"
        }
      }, "Reset"));
    });
  };

  var renderLoader = function renderLoader() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlapping-loader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "10px",
      paddingTop: "228px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-5 verify-email-form-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "verify-email-form shadow p-4 position-relative"
  }, showLoader && renderLoader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-center mb-3"
  }, "Reset Password"), !codeVerified && renderVerifyForm(), codeVerified && renderResetForm(), !codeVerified && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mt-3 mb-0 resend-text text-muted"
  }, "We have sent you a password reset code to your email address, Please check your junk/spam folder as well. If you haven't recieved any email click", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: resendResetEmail,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Resend")), ".")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResetPassword);

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
//# sourceMappingURL=pages-ResetPassword.25f71f3a11ee74e4ee2d.js.map