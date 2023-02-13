(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-modals-TrialModal"],{

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

/***/ "./client/components/modals/TrialModal.js":
/*!************************************************!*\
  !*** ./client/components/modals/TrialModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _shared_TextError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/TextError */ "./client/shared/TextError.js");
/* harmony import */ var _PhoneInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PhoneInput */ "./client/components/PhoneInput.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loader */ "./client/components/Loader.js");
/* harmony import */ var _store_ui_trialModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/ui/trialModal */ "./client/store/ui/trialModal.js");
/* harmony import */ var _store_api_trialRequests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/api/trialRequests */ "./client/store/api/trialRequests.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









 //redux actions




function RegisterModal(props) {
  //accessing state from redux
  var trialModal = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ui.trialModal;
  });
  var commonData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ui.commonData;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); //loader

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showLoader = _useState2[0],
      setShowLoader = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showCompletion = _useState4[0],
      setShowCompletion = _useState4[1];

  var closeModal = function closeModal() {
    dispatch(Object(_store_ui_trialModal__WEBPACK_IMPORTED_MODULE_9__["setTrialModalVisibility"])(false));
    setShowCompletion(false);
  };

  var onSubmit = function onSubmit(body) {
    setShowLoader(true);
    dispatch(Object(_store_api_trialRequests__WEBPACK_IMPORTED_MODULE_10__["requestTrialApi"])({
      body: body,
      onSuccess: function onSuccess() {
        setShowCompletion(true);
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
  }; //overlapping Loader


  var renderLoader = function renderLoader() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "overlapping-loader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], null));
  };

  var renderTrialForm = function renderTrialForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      initialValues: {
        name: "",
        phoneNumber: "",
        email: ""
      },
      onSubmit: onSubmit,
      validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
        name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required("Name is required."),
        phoneNumber: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required("Phone number is required."),
        email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required("Email is required.").email("Enter a valid email.").typeError("Email is required.")
      })
    }, function (_ref) {
      var values = _ref.values,
          setFieldValue = _ref.setFieldValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group",
        style: {
          flexGrow: 1,
          height: "58px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "covering"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        type: "text",
        className: "form-control",
        placeholder: "Name",
        name: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
        name: "name",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_5__["default"]
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "covering"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        type: "text",
        className: "form-control",
        placeholder: "Email",
        name: "email"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
        name: "email",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_5__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group",
        style: {
          flexGrow: 1,
          height: "58px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "covering"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhoneInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: values.phoneNumber,
        placeholder: "Phone",
        onChange: function onChange(phoneNumber) {
          setFieldValue("phoneNumber", phoneNumber);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
        name: "phoneNumber",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_5__["default"]
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group margin"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-default"
      }, "Submit")));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    show: trialModal.visible,
    onHide: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: " login-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "bg no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "6",
    className: "img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 h-100 img-fill",
    style: {
      backgroundImage: "url(\"".concat(commonData.registerModalImage, "\")")
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "6",
    className: "align-self-center position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: closeModal,
    className: "position-absolute",
    style: {
      top: 10,
      right: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  })), showLoader && renderLoader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup-form-wrapper",
    style: {
      minHeight: "400px"
    }
  }, !showCompletion ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-center"
  }, "Request Your Free Trial Now"), renderTrialForm()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      height: "360px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-center"
  }, "Your request has been submitted."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center"
  }, "Our support team will contact you soon.")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (RegisterModal);

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

/***/ "./client/store/api/trialRequests.js":
/*!*******************************************!*\
  !*** ./client/store/api/trialRequests.js ***!
  \*******************************************/
/*! exports provided: requestTrialApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestTrialApi", function() { return requestTrialApi; });
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http */ "./client/services/http.js");
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var path = "/trial_requests";
var requestTrialApi = function requestTrialApi(_ref) {
  var _ref$body = _ref.body,
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
              return _services_http__WEBPACK_IMPORTED_MODULE_0__["default"].post({
                url: path,
                body: body
              });

            case 3:
              res = _context.sent;
              if (onSuccess) onSuccess(res);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              //onError event firing
              if (onError) onError(_context.t0);else Object(_helpers_error__WEBPACK_IMPORTED_MODULE_1__["handleErrors"])(_context.t0);

            case 10:
              _context.prev = 10;
              if (onEnd) onEnd();
              return _context.finish(10);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7, 10, 13]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ })

}]);
//# sourceMappingURL=components-modals-TrialModal.3f80b04bce01c3363d07.js.map