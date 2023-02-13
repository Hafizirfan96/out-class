(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-ForumPage"],{

/***/ "./client/pages/ForumPage.js":
/*!***********************************!*\
  !*** ./client/pages/ForumPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _shared_TextError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/TextError */ "./client/shared/TextError.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_api_forum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/api/forum */ "./client/store/api/forum.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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









var ForumPage = function ForumPage(props) {
  var threadId = props.match.params.threadId;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth.user;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showLoader = _useState2[0],
      setShowLoader = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    type: "",
    answers: 0,
    createdAt: new Date(),
    user: {
      firstName: "",
      lastName: "",
      image: ""
    }
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      forumThread = _useState4[0],
      setForumThread = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      forumMessages = _useState6[0],
      setForumMessages = _useState6[1];

  var deleteMessage = function deleteMessage(id, index) {
    var conf = window.confirm("Are you sure you want to delete?");
    if (!conf) return;
    dispatch(Object(_store_api_forum__WEBPACK_IMPORTED_MODULE_5__["deleteForumMessage"])({
      id: id,
      onSuccess: function onSuccess(res) {
        var newMessages = _toConsumableArray(forumMessages);

        newMessages.splice(index, 1);
        setForumMessages(newMessages);
      }
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setShowLoader(true);
    dispatch(Object(_store_api_forum__WEBPACK_IMPORTED_MODULE_5__["getForumThread"])({
      threadId: threadId,
      onSuccess: function onSuccess(res) {
        setForumMessages([_objectSpread(_objectSpread({}, res.data.data), {}, {
          user: user
        })].concat(_toConsumableArray(forumMessages)));
        setForumThread(res.data.data);
      },
      onEnd: function onEnd() {
        setShowLoader(false);
      }
    }));
    dispatch(Object(_store_api_forum__WEBPACK_IMPORTED_MODULE_5__["getForumMessages"])({
      threadId: threadId,
      onSuccess: function onSuccess(res) {
        setForumMessages(res.data.data);
      }
    }));
  }, []);

  var renderMessages = function renderMessages() {
    return forumMessages.map(function (message, messageIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form_cover",
        key: "".concat(message._id, " + ").concat(messageIndex)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 align-self-center"
      }, user && user.role === "ADMIN" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-danger float-right",
        onClick: function onClick() {
          deleteMessage(message._id, messageIndex);
        }
      }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, messageIndex + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, message.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 col-md-5 offset-md-7 offset-lg-8 col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left_block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "".concat(message.user.firstName, " ").concat(message.user.lastName)), "".concat(forumThread.type === "question" ? "Answered" : "Replied", " ").concat(moment__WEBPACK_IMPORTED_MODULE_6___default()(message.createdAt).fromNow()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right_block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: message.user.image,
        alt: "",
        className: "img-fluid",
        style: {
          width: "64px",
          height: "64px",
          objectFit: "cover",
          backgroundColor: "#ccc"
        }
      })))))));
    });
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      sendingMessage = _useState8[0],
      setSendingMessage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    message: ""
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      initialFormValues = _useState10[0],
      setInitialFormValues = _useState10[1];

  var onSendMessage = function onSendMessage(values, _ref) {
    var resetForm = _ref.resetForm;
    if (sendingMessage) return;

    var body = _objectSpread(_objectSpread({}, values), {}, {
      thread: threadId
    });

    setSendingMessage(true);
    dispatch(Object(_store_api_forum__WEBPACK_IMPORTED_MODULE_5__["answerForumThread"])({
      body: body,
      onSuccess: function onSuccess(res) {
        setForumMessages([].concat(_toConsumableArray(forumMessages), [_objectSpread(_objectSpread({}, res.data.data), {}, {
          user: user
        })]));
        resetForm();
      },
      onEnd: function onEnd() {
        setSendingMessage(false);
      }
    }));
  };

  var renderReplyForm = function renderReplyForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
        message: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Message is required.")
      }),
      enableReinitialize: true,
      initialValues: initialFormValues,
      onSubmit: onSendMessage
    }, function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: "#ccc",
          padding: "3px",
          borderRadius: "3px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "covering m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        className: "form-control border-none",
        placeholder: "Write your opinion...",
        name: "message",
        as: "textarea"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
        name: "message",
        component: _shared_TextError__WEBPACK_IMPORTED_MODULE_3__["default"]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-right",
        style: {
          marginTop: "3px",
          marginBottom: "1px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Send ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-paper-plane"
      })))));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "other_banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Forum"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "form_sec"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form_cover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10 col-md-10 col-12 align-self-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, forumThread.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, forumThread.answers, " ", forumThread.type === "question" ? "Answers" : "Replies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spaced"
  }, forumThread.type === "question" ? "Asked ".concat(moment__WEBPACK_IMPORTED_MODULE_6___default()(forumThread.createdAt).fromNow()) : "Started Discussion ".concat(moment__WEBPACK_IMPORTED_MODULE_6___default()(forumThread.createdAt).fromNow())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 col-md-2 col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: forumThread.user.image,
    alt: "",
    className: "img-fluid",
    style: {
      width: "64px",
      height: "64px",
      objectFit: "cover",
      backgroundColor: "#ccc"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "name"
  }, forumThread.user.firstName + " " + forumThread.user.lastName)))), renderMessages(), renderReplyForm())));
};

/* harmony default export */ __webpack_exports__["default"] = (ForumPage);

/***/ })

}]);
//# sourceMappingURL=pages-ForumPage.59830d5a53d127ef3344.js.map