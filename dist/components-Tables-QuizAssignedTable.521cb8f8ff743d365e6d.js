(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-Tables-QuizAssignedTable"],{

/***/ "./client/components/Tables/QuizAssignedTable.js":
/*!*******************************************************!*\
  !*** ./client/components/Tables/QuizAssignedTable.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs */ "./client/configs.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var datatables_net_bs4_css_dataTables_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-bs4/css/dataTables.bootstrap4.min.css */ "./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css");
/* harmony import */ var datatables_net_bs4_css_dataTables_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4_css_dataTables_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/error */ "./client/helpers/error.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_5__["DataTable"] = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");

var QuizTable = /*#__PURE__*/function (_Component) {
  _inherits(QuizTable, _Component);

  var _super = _createSuper(QuizTable);

  function QuizTable() {
    var _this;

    _classCallCheck(this, QuizTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          token = _this$props.token,
          courseId = _this$props.courseId;
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_5__("#QuizAssignedTable").DataTable({
        language: {
          paginate: {
            next: '<span class="pagination-fa"><i class="fa fa-chevron-right" ></i></span>',
            previous: '<span class="pagination-fa"><i class="fa fa-chevron-left" ></i></span>'
          }
        },
        processing: true,
        serverSide: true,
        order: [[0, "_id"]],
        ajax: {
          url: _configs__WEBPACK_IMPORTED_MODULE_2__["apiPath"] + "/quizes/teacher_courses_quizzes/" + courseId,
          type: "GET",
          headers: {
            "x-auth-token": token
          }
        },
        columns: [{
          data: "_id"
        }, {
          data: "_id"
        }, {
          data: "markedByTeacher"
        }, {
          data: "_id"
        }],
        columnDefs: [{
          targets: 0,
          createdCell: _this.renderQuizName
        }, {
          targets: 1,
          createdCell: _this.renderCourseColumn
        }, {
          targets: 3,
          createdCell: _this.renderActionsColumn
        }]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "navigateToMarkQuiz", function (_id) {
      _this.props.history.push("/mark_quiz/" + _id);
    });

    _defineProperty(_assertThisInitialized(_this), "renderQuizName", function (td, cellData, rowData, row, col) {
      return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, rowData.quiz.name), td);
    });

    _defineProperty(_assertThisInitialized(_this), "renderCourseColumn", function (td, cellData, rowData, row, col) {
      return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, rowData.course.name), td);
    });

    _defineProperty(_assertThisInitialized(_this), "renderActionsColumn", function (td, cellData, rowData, row, col) {
      return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary btn-sm",
        onClick: function onClick() {
          _this.navigateToMarkQuiz(rowData._id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-clipboard"
      }))), td);
    });

    return _this;
  }

  _createClass(QuizTable, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        id: "QuizAssignedTable",
        className: "w-100 table table-striped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Marked"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Actions"))));
    }
  }]);

  return QuizTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(QuizTable));

/***/ })

}]);
//# sourceMappingURL=components-Tables-QuizAssignedTable.521cb8f8ff743d365e6d.js.map