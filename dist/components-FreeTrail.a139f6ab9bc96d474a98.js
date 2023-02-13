(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-FreeTrail"],{

/***/ "./client/components/FreeTrail.js":
/*!****************************************!*\
  !*** ./client/components/FreeTrail.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FreeTrail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _css_outclassled_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/outclassled.png */ "./client/components/css/outclassled.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





function FreeTrail() {
  var authToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth.token;
  });
  var initialValues = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    topic: ""
  }; // const validationSchema = Yup.object({
  //   email: Yup.string().email("Invalid email format").required("Required"),
  //   password: Yup.string()
  //     .required("required")
  //     .min(5, "Password is too short - should be 5 chars minimum."),
  // });
  //    const onSubmit = async (values) => {
  //      setLoading(true);
  //      dispatch(setCredational(values));
  //      dispatch(
  //        login({
  //          body: {
  //            email: values.email,
  //            password: values.password,
  //          },
  //          onSuccess: (res) => {
  //            navigate("/");
  //            console.log("res===>", res)
  //            setLoading(false);
  //          },
  //          onError: (error) => {
  //            setLoading(false);
  //            if (error.response) {
  //              if (error.response.data.errors) {
  //                for (let key in error.response.data.errors) {
  //                  setError(error.response.data.errors[key]);
  //                }
  //              } else if (error.response.data.message) {
  //                setError(error.response.data.message);
  //              }
  //            }
  //          },
  //        })
  //      );
  //    };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FreeTrail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-freetrail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: initialValues // validationSchema={validationSchema}
    // onSubmit={onSubmit}
    ,
    onSubmit: function onSubmit(values) {
      // same shape as initial values
      console.log("login values", values);
    }
  }, function (_ref) {
    var values = _ref.values,
        handleChange = _ref.handleChange,
        handleBlur = _ref.handleBlur,
        handleSubmit = _ref.handleSubmit,
        errors = _ref.errors,
        touched = _ref.touched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-freetrail2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Get a free 3-Day trial:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " form-input-trail "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "firstname",
      placeholder: "First Name",
      onChange: handleChange("firstname"),
      onBlur: handleBlur("firstname"),
      value: values.firstname
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "lastname",
      placeholder: "Last Name",
      onChange: handleChange("lastname"),
      onBlur: handleBlur("lastname"),
      value: values.lastname
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      name: "email",
      placeholder: "Email Address",
      className: "form-input-trail3",
      onChange: handleChange("email"),
      onBlur: handleBlur("email"),
      value: values.email
    }), authToken ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      name: "password",
      placeholder: "password",
      onChange: handleChange("password"),
      onBlur: handleBlur("password"),
      value: values.phone,
      className: "form-input-trail3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "phone",
      placeholder: "phone Number",
      onChange: handleChange("phone"),
      onBlur: handleBlur("phone"),
      value: values.phone,
      className: "form-input-trail3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "colorss",
      onChange: handleChange("topic"),
      onBlur: handleBlur("topic"),
      value: values.topic,
      className: "form-input-trail3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "",
      label: "Course( Fsc / Matric / O levels )*"
    }, "Course( Fsc / Matric / O levels )*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Fsc",
      label: "Fsc"
    }, " ", "Fsc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Matric",
      label: "Matric"
    }, " ", "Matric"), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "O Levels",
      label: "OLevels"
    }, " ", "O Levels"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "them_btn-outline ",
      onClick: handleSubmit //   disabled={loading ? true : false}

    }, "Submit"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap-freetrail-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _css_outclassled_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  })));
}

/***/ }),

/***/ "./client/components/css/outclassled.png":
/*!***********************************************!*\
  !*** ./client/components/css/outclassled.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/outclassled.7e4edbdb2df2bb34ed14a8f9acb64ea7.png");

/***/ })

}]);
//# sourceMappingURL=components-FreeTrail.a139f6ab9bc96d474a98.js.map