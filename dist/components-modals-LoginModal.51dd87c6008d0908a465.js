(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-modals-LoginModal"],{

/***/ "./client/assets/temp/login.png":
/*!**************************************!*\
  !*** ./client/assets/temp/login.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/login.49c101275a17a5c852a9ef9d045f08db.png");

/***/ }),

/***/ "./client/components/FacebookLogin.js":
/*!********************************************!*\
  !*** ./client/components/FacebookLogin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "./node_modules/react-facebook-login/dist/facebook-login-render-props.js");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$onFBResponse = props.onFBResponse,
      onFBResponse = _props$onFBResponse === void 0 ? function () {} : _props$onFBResponse;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1___default.a, {
    appId: "404150057463766",
    fields: "name,email,picture",
    callback: onFBResponse,
    render: function render(renderProps) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: renderProps.onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-facebook-f"
      }));
    }
  });
}); // appId="806610436211447"
//         autoLoad={true}
//         fields="name,email,picture"
//         onClick={componentClicked}
//         callback={responseFacebook}

/***/ }),

/***/ "./client/components/GoogleLogin.js":
/*!******************************************!*\
  !*** ./client/components/GoogleLogin.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$onGoogleRespon = props.onGoogleResponse,
      onGoogleResponse = _props$onGoogleRespon === void 0 ? function () {} : _props$onGoogleRespon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_1___default.a, {
    clientId: "937232182872-bpaepcabl7qvvuonp0bvvr22n9k533th.apps.googleusercontent.com",
    onSuccess: onGoogleResponse // onFailure={onGoogleResponse}
    ,
    render: function render(renderProps) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: renderProps.onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-google-plus-g"
      }));
    } //   cookiePolicy={"single_host_origin"}

  });
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

/***/ "./client/components/modals/LoginModal.js":
/*!************************************************!*\
  !*** ./client/components/modals/LoginModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_temp_login_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/temp/login.png */ "./client/assets/temp/login.png");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _shared_TextError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/TextError */ "./client/shared/TextError.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Loader */ "./client/components/Loader.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _FacebookLogin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FacebookLogin */ "./client/components/FacebookLogin.js");
/* harmony import */ var _GoogleLogin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../GoogleLogin */ "./client/components/GoogleLogin.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/storage */ "./client/services/storage.js");
/* harmony import */ var _store_ui_loginModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/ui/loginModal */ "./client/store/ui/loginModal.js");
/* harmony import */ var _store_ui_registerModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/ui/registerModal */ "./client/store/ui/registerModal.js");
/* harmony import */ var _store_api_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/api/auth */ "./client/store/api/auth.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












 //redux actions



 //global data for module

var loginSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]({
  email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email("Email is not valid.").required("Enter your email"),
  password: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required("Enter your password.").min(5, "Password is too short - should be 5 chars minimum")
});
var forgotSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]({
  email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email("Email is not valid.").required("Enter your email")
});
var loginFormInitialValues = {
  email: "",
  password: ""
};
var forgotFormInitialValues = {
  email: ""
};
var verifyLink, resetLink, profileSettings;

function LoginModal(props) {
  //accesing redux state
  var logniModal = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.ui.loginModal;
  });
  var commonData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.ui.commonData;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])(); //loader

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showLoader = _useState2[0],
      setShowLoader = _useState2[1]; //Alert Message


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    type: "success",
    message: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1]; //form values


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("login"),
      _useState6 = _slicedToArray(_useState5, 2),
      formType = _useState6[0],
      setFormType = _useState6[1];

  var closeModal = function closeModal() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!logniModal.closable && !force) return;
    dispatch(Object(_store_ui_loginModal__WEBPACK_IMPORTED_MODULE_12__["setLoginModalVisibility"])(false));
    dispatch(Object(_store_ui_loginModal__WEBPACK_IMPORTED_MODULE_12__["setLoginModalClosable"])(true));
    setErrorMessage({
      type: "danger",
      message: ""
    });
    setFormType("login");
    _services_storage__WEBPACK_IMPORTED_MODULE_11__["default"].remove("GO_TO_SUBSCRIPTION");
  };

  var showRegisterModal = function showRegisterModal() {
    dispatch(Object(_store_ui_registerModal__WEBPACK_IMPORTED_MODULE_13__["setRegisterModalVisibility"])(true));
  }; //login from submit handler.


  var onSubmitHandler = function onSubmitHandler(values, onSubmitProps) {
    setErrorMessage({
      type: "danger",
      message: ""
    });
    setShowLoader(true);
    dispatch(Object(_store_api_auth__WEBPACK_IMPORTED_MODULE_14__["signinUser"])({
      body: values,
      onSuccess: function onSuccess(res) {
        var emailVerified = res.data.data.emailVerified; // if (!emailVerified) {
        //   if (verifyLink) {
        //     return verifyLink.click();
        //   }
        // }

        navigateToSubscription();
        closeModal(true);
        setErrorMessage({
          type: "danger",
          message: ""
        });
      },
      onError: function onError(err) {
        if (err.response && err.response.data && err.response.data.message) {
          setErrorMessage({
            type: "danger",
            message: err.response.data.message
          });
        }
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  };

  var onPasswordReset = function onPasswordReset(values) {
    setShowLoader(true);
    dispatch(Object(_store_api_auth__WEBPACK_IMPORTED_MODULE_14__["requestPasswordReset"])({
      body: values,
      onSuccess: function onSuccess(res) {
        _services_storage__WEBPACK_IMPORTED_MODULE_11__["default"].store("password_reset_email", values.email);
        closeModal(true);
        if (resetLink) resetLink.click();
      },
      onError: function onError(err) {
        if (err.response && err.response.data && err.response.data.message) {
          setErrorMessage({
            type: "danger",
            message: err.response.data.message
          });
        }
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  }; //signin with facebook handler


  var signinWithFacebookHandler = function signinWithFacebookHandler(facebookRes) {
    setShowLoader(true);
    var accessToken = facebookRes.accessToken,
        userID = facebookRes.userID;
    dispatch(Object(_store_api_auth__WEBPACK_IMPORTED_MODULE_14__["signinWithFacebook"])({
      body: {
        accessToken: accessToken,
        userID: userID
      },
      onSuccess: function onSuccess(res) {
        closeModal(true);
        setErrorMessage({
          type: "danger",
          message: ""
        });
        var user = res.data.data;

        if (!user.phoneNumber) {
          if (profileSettings) return profileSettings.click();
        }

        navigateToSubscription();
      },
      onError: function onError(err) {
        console.error(err.response.data.message);

        if (err.response && err.response.data && err.response.data.message) {
          setErrorMessage(err.response.data.message);
        }
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  }; //signinWithGoogle


  var signinWithGoogleHandler = function signinWithGoogleHandler(googleRes) {
    setShowLoader(true);
    var accessToken = googleRes.accessToken,
        googleId = googleRes.googleId;
    dispatch(Object(_store_api_auth__WEBPACK_IMPORTED_MODULE_14__["signinWithGoogle"])({
      body: {
        accessToken: accessToken,
        googleId: googleId
      },
      onSuccess: function onSuccess(res) {
        closeModal(true);
        setErrorMessage({
          type: "danger",
          message: ""
        });
        var user = res.data.data;

        if (!user.phoneNumber) {
          if (profileSettings) return profileSettings.click();
        }

        navigateToSubscription();
      },
      onError: function onError(err) {
        console.error(err.response.data.message);

        if (err.response && err.response.data && err.response.data.message) {
          setErrorMessage(err.response.data.message);
        }
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  };

  var navigateToSubscription = function navigateToSubscription() {
    var goToSubscription = _services_storage__WEBPACK_IMPORTED_MODULE_11__["default"].get("GO_TO_SUBSCRIPTION");

    if (goToSubscription) {
      _services_storage__WEBPACK_IMPORTED_MODULE_11__["default"].remove("GO_TO_SUBSCRIPTION");
      history.push("/subscription/" + goToSubscription.category);
    }
  }; //overlapping Loader


  var renderLoader = function renderLoader() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlapping-loader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], null));
  }; //Login Form


  var renderLoginForm = function renderLoginForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
      initialValues: loginFormInitialValues,
      onSubmit: onSubmitHandler,
      validationSchema: loginSchema
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "covering"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "text",
      className: "form-control",
      placeholder: "Email",
      name: "email"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "email",
      component: _shared_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "covering"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "password",
      className: "form-control",
      placeholder: "Password",
      name: "password"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "password",
      component: _shared_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-default"
    }, "Login")));
  };

  var renderForgotPassForm = function renderForgotPassForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
      initialValues: forgotFormInitialValues,
      validationSchema: forgotSchema,
      onSubmit: onPasswordReset
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "covering"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      type: "text",
      className: "form-control",
      placeholder: "Email",
      name: "email"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "email",
      component: _shared_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-default"
    }, "Next")));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: logniModal.visible,
    onHide: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/verify-email",
    className: "d-none",
    ref: function ref(_ref) {
      return verifyLink = _ref;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/reset-password",
    className: "d-none",
    ref: function ref(_ref2) {
      return resetLink = _ref2;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/dashboard",
    className: "d-none",
    ref: function ref(_ref3) {
      return profileSettings = _ref3;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "login-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "bg no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    className: "img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 h-100 img-fill",
    style: {
      backgroundImage: "url(\"".concat(commonData.loginModalImage, "\")")
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    className: "align-self-center position-relative "
  }, logniModal.closable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: closeModal,
    className: "position-absolute",
    style: {
      top: 10,
      right: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  })), showLoader && renderLoader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup-form-wrapper"
  }, errorMessage.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-".concat(errorMessage.type)
  }, errorMessage.message), formType === "login" && renderLoginForm(), formType === "forgot" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-center pb-3"
  }, "Reset Password"), renderForgotPassForm(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted resend-text py-3"
  }, "We'll send you a 6 - Digit code to your email address, which you can use to reset your password.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "register-link"
  }, formType === "login" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      setErrorMessage({
        type: "danger",
        message: ""
      });
      setFormType("forgot");
    }
  }, "Forgot Password or Username?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "or my-3"
  }, "or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row  mb-4 social-login-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 col-md-6 col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FacebookLogin__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onFBResponse: signinWithFacebookHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6 col-md-6 col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GoogleLogin__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onGoogleResponse: signinWithGoogleHandler
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Not Registered ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "bold",
    onClick: function onClick() {
      showRegisterModal();
      closeModal(true);
    }
  }, "Join for Free")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

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
//# sourceMappingURL=components-modals-LoginModal.51dd87c6008d0908a465.js.map