(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-Video-VideoPlayer"],{

/***/ "./client/components/Video/VideoPlayer.js":
/*!************************************************!*\
  !*** ./client/components/Video/VideoPlayer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js/dist/video-js.min.css */ "./node_modules/video.js/dist/video-js.min.css");
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _silvermine_videojs_quality_selector_dist_css_quality_selector_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @silvermine/videojs-quality-selector/dist/css/quality-selector.css */ "./node_modules/@silvermine/videojs-quality-selector/dist/css/quality-selector.css");
/* harmony import */ var _silvermine_videojs_quality_selector_dist_css_quality_selector_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_silvermine_videojs_quality_selector_dist_css_quality_selector_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var videojs_watermark_with_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! videojs-watermark-with-text */ "./node_modules/videojs-watermark-with-text/es5/plugin.js");
/* harmony import */ var videojs_watermark_with_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(videojs_watermark_with_text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videojs_seek_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videojs-seek-buttons */ "./node_modules/videojs-seek-buttons/dist/videojs-seek-buttons.es.js");
/* harmony import */ var videojs_seek_buttons_dist_videojs_seek_buttons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videojs-seek-buttons/dist/videojs-seek-buttons.css */ "./node_modules/videojs-seek-buttons/dist/videojs-seek-buttons.css");
/* harmony import */ var videojs_seek_buttons_dist_videojs_seek_buttons_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videojs_seek_buttons_dist_videojs_seek_buttons_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage */ "./client/services/storage.js");
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









video_js__WEBPACK_IMPORTED_MODULE_1__["default"].options.hls.overrideNative = true;
video_js__WEBPACK_IMPORTED_MODULE_1__["default"].options.html5.nativeAudioTracks = false;
video_js__WEBPACK_IMPORTED_MODULE_1__["default"].options.html5.nativeVideoTracks = false;
window.videojs = video_js__WEBPACK_IMPORTED_MODULE_1__["default"];

__webpack_require__(/*! videojs-contrib-hls */ "./node_modules/videojs-contrib-hls/es5/videojs-contrib-hls.js"); // import "videojs-watermark-with-text/dist/videojs-watermark.css";


__webpack_require__(/*! @silvermine/videojs-quality-selector */ "./node_modules/@silvermine/videojs-quality-selector/src/js/index.js")(video_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

var VideoPlayer = /*#__PURE__*/function (_React$Component) {
  _inherits(VideoPlayer, _React$Component);

  var _super = _createSuper(VideoPlayer);

  function VideoPlayer() {
    var _this;

    _classCallCheck(this, VideoPlayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getCurrentDuration", function () {
      if (!_this.player) return 0;
      return Math.floor(_this.player.currentTime());
    });

    _defineProperty(_assertThisInitialized(_this), "exitFullScreen", function () {
      if (!_this.player) return;
      if (!_this.player.isFullscreen_) return;
      var document = window.document;

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "paused", function () {
      return _this.player.paused();
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function () {
      if (!_this.player) return;

      _this.player.pause();
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      if (!_this.player) return;

      _this.player.play();
    });

    return _this;
  }

  _createClass(VideoPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          _this$props$waterMark = _this$props.waterMarkText,
          waterMarkText = _this$props$waterMark === void 0 ? "" : _this$props$waterMark,
          onVideoEnd = _this$props.onVideoEnd,
          onNext = _this$props.onNext,
          onPrev = _this$props.onPrev,
          _this$props$videoSour = _this$props.videoSource,
          videoSource = _this$props$videoSour === void 0 ? "" : _this$props$videoSour,
          playbackRates = _this$props.playbackRates,
          sources = _this$props.sources;
      video_js__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin("watermark", videojs_watermark_with_text__WEBPACK_IMPORTED_MODULE_4___default.a);
      this.player = Object(video_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.videoNode, {
        html5: {
          nativeAudioTracks: false,
          nativeVideoTracks: false,
          hls: {
            overrideNative: true,
            debug: true
          }
        },
        playbackRates: playbackRates
      }, function onPlayerReady() {
        this.src(sources);
        this.controlBar.addChild("QualitySelector");
        this.watermark({
          type: "text",
          text: waterMarkText
        });
        var continueVideo = _services_storage__WEBPACK_IMPORTED_MODULE_7__["default"].get("continue_video");

        if (continueVideo) {
          var parsedInt = parseInt(continueVideo) || 0;
          this.currentTime(parsedInt);
          _services_storage__WEBPACK_IMPORTED_MODULE_7__["default"].remove("continue_video");
        }

        this.on("ended", function () {
          if (onVideoEnd) onVideoEnd();
        });
      });
      console.log("PLAYER -=> ", this.player); //////// backward and forward buttons

      /* ADD PREVIOUS */

      var Button = video_js__WEBPACK_IMPORTED_MODULE_1__["default"].getComponent("Button");
      var PrevButton = video_js__WEBPACK_IMPORTED_MODULE_1__["default"].extend(Button, {
        constructor: function constructor() {
          Button.apply(this, arguments);
          this.addClass("vjs-icon-previous-item");
          this.controlText("Previous");
        },
        handleClick: function handleClick() {
          if (onPrev) onPrev();
        }
      });
      /* ADD PREVIOUS */

      var NextButton = video_js__WEBPACK_IMPORTED_MODULE_1__["default"].extend(Button, {
        constructor: function constructor() {
          Button.apply(this, arguments);
          this.addClass("vjs-icon-next-item");
          this.controlText("Next");
        },
        handleClick: function handleClick() {
          if (onNext) onNext();
        }
      }); // Register the new component

      video_js__WEBPACK_IMPORTED_MODULE_1__["default"].registerComponent("NextButton", NextButton);
      video_js__WEBPACK_IMPORTED_MODULE_1__["default"].registerComponent("PrevButton", PrevButton); //player.getChild('controlBar').addChild('SharingButton', {});

      this.player.getChild("controlBar").addChild("PrevButton", {}, 0);
      this.player.getChild("controlBar").addChild("NextButton", {}, 2); ///seek buttons

      this.player.seekButtons({
        forward: 5,
        back: 5,
        forwardIndex: 3,
        backIndex: 3
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.player) {
        this.player.dispose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var captions = this.props.captions;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "course-video-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "data-vjs-player": true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
        id: "my-vide-player",
        width: "720",
        height: "420",
        style: {
          width: "100%"
        },
        controls: true,
        ref: function ref(node) {
          return _this2.videoNode = node;
        },
        className: "video-js vjs-default-skin vjs-big-play-centered",
        controlsList: "nodownload"
      }, captions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("track", {
        kind: "captions",
        src: captions,
        srclang: "en",
        label: "English",
        default: true
      }))));
    }
  }]);

  return VideoPlayer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (VideoPlayer);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=components-Video-VideoPlayer.96c4106b7f83e2927428.js.map