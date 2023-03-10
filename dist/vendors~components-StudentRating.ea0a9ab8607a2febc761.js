(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["vendors~components-StudentRating"],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/react-dynamic-star/dist/rds.es.js":
/*!********************************************************!*\
  !*** ./node_modules/react-dynamic-star/dist/rds.es.js ***!
  \********************************************************/
/*! exports provided: DynamicStar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicStar", function() { return MemoizedComponent; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./node_modules/react-dynamic-star/dist/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



let counter = 0;
const useId = (prefix) => {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](counter);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    setId(++counter);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => `${prefix ? prefix + "_" : ""}${id}`, [prefix, id]);
};
const fullStar = 1;
const emptyStar = 0;
const createEmptyStar = () => ({
  raw: emptyStar,
  percent: "0%"
});
const createFullStar = () => ({
  raw: fullStar,
  percent: "100%"
});
const createStarWithPercentageFilled = (roundedOneDecimalPoint) => ({
  raw: roundedOneDecimalPoint,
  percent: roundedOneDecimalPoint * 100 + "%"
});
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STAR": {
      if (action.payload === void 0) {
        return state;
      }
      return [...state, ...Array(action.payload).fill(createEmptyStar())];
    }
    case "FILL_STAR": {
      if (action.payload === void 0) {
        return state;
      }
      const fullStarsCounter = Math.floor(action.payload);
      const surplus = Math.round(action.payload % 1 * 10) / 10;
      const roundedOneDecimalPoint = Math.round(surplus * 10) / 10;
      return state.map((_, index) => fullStarsCounter >= index + 1 ? createFullStar() : action.payload === index + roundedOneDecimalPoint ? createStarWithPercentageFilled(roundedOneDecimalPoint) : createEmptyStar());
    }
    case "REMOVE_STAR": {
      return [...state.slice(0, action.payload)];
    }
    default:
      return state;
  }
};
var style = "";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = react__WEBPACK_IMPORTED_MODULE_1___default.a, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
function DynamicStar({
  rating,
  outlined,
  outlineWidth,
  sharpnessStar = 2.5,
  totalStars = 5,
  width = 100,
  height = 100,
  emptyStarColor = "transparent",
  fullStarColor = "#FFBC00"
}) {
  const id = useId("star");
  const internalTotalStars = totalStars < 0 ? 0 : totalStars;
  const [stars, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__["useReducer"](reducer, Array(internalTotalStars).fill(createEmptyStar()));
  const getFullFillColor = (starData) => starData.raw !== emptyStar ? fullStarColor : emptyStarColor;
  const calcStarPoints = (centerX, centerY, innerCircleArms, innerRadius, outerRadius) => {
    const angle = Math.PI / innerCircleArms;
    const angleOffsetToCenterStar = 60;
    const totalArms = innerCircleArms * 2;
    let points = "";
    for (let i = 0; i < totalArms; i++) {
      const isEvenIndex = i % 2 === 0;
      const r = isEvenIndex ? outerRadius : innerRadius;
      const currX = centerX + Math.cos(i * angle + angleOffsetToCenterStar) * r;
      const currY = centerY + Math.sin(i * angle + angleOffsetToCenterStar) * r;
      points += currX + "," + currY + " ";
    }
    return points;
  };
  const getStarPoints = () => {
    const centerX = width / 2;
    const centerY = width / 2;
    const innerCircleArms = 5;
    const innerRadius = width / innerCircleArms;
    const innerOuterRadiusRatio = sharpnessStar;
    const outerRadius = innerRadius * innerOuterRadiusRatio;
    return calcStarPoints(centerX, centerY, innerCircleArms, innerRadius, outerRadius);
  };
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    const removeStars = internalTotalStars - stars.length;
    if (removeStars < 0) {
      dispatch({
        type: "REMOVE_STAR",
        payload: removeStars
      });
    }
  }, [internalTotalStars, stars.length]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    const addStars = internalTotalStars - stars.length;
    if (addStars > 0) {
      dispatch({
        type: "ADD_STAR",
        payload: addStars
      });
    }
  }, [internalTotalStars, stars.length]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    dispatch({
      type: "FILL_STAR",
      payload: typeof rating === "string" ? parseFloat(rating) : rating
    });
  }, [rating, stars.length]);
  return /* @__PURE__ */ jsx("div", {
    className: "dynamic-star-rating",
    "aria-label": `${rating} of 5`,
    children: stars.map((star, index) => /* @__PURE__ */ jsx("div", {
      className: "dynamic-star-container",
      children: /* @__PURE__ */ jsxs("svg", {
        className: "dynamic-star-svg",
        style: {
          fill: `url(#${id}_gradient${star.raw})`,
          stroke: typeof outlined === "string" ? outlined : outlined ? fullStarColor : "none",
          strokeWidth: outlineWidth != null ? outlineWidth : "unset",
          width,
          height
        },
        "aria-hidden": "true",
        children: [/* @__PURE__ */ jsx("polygon", {
          points: getStarPoints(),
          fillRule: "nonzero"
        }), /* @__PURE__ */ jsx("defs", {
          children: /* @__PURE__ */ jsxs("linearGradient", {
            id: `${id}_gradient${star.raw}`,
            children: [/* @__PURE__ */ jsx("stop", {
              id: "stop1",
              offset: star.percent,
              stopOpacity: "1",
              stopColor: getFullFillColor(star)
            }), /* @__PURE__ */ jsx("stop", {
              id: "stop2",
              offset: star.percent,
              stopOpacity: "0",
              stopColor: getFullFillColor(star)
            }), /* @__PURE__ */ jsx("stop", {
              id: "stop3",
              offset: star.percent,
              stopOpacity: "1",
              stopColor: emptyStarColor
            }), /* @__PURE__ */ jsx("stop", {
              id: "stop4",
              offset: "100%",
              stopOpacity: "1",
              stopColor: emptyStarColor
            })]
          })
        })]
      })
    }, `${id}_${index}`))
  });
}
const MemoizedComponent = react__WEBPACK_IMPORTED_MODULE_1__["memo"](DynamicStar);



/***/ }),

/***/ "./node_modules/react-dynamic-star/dist/style.css":
/*!********************************************************!*\
  !*** ./node_modules/react-dynamic-star/dist/style.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=vendors~components-StudentRating.ea0a9ab8607a2febc761.js.map