"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var characterStyles = {
  character: "styles__character___2r3d8",
  crCharacter: "styles__crCharacter___3rDmF"
};

require('load-styles')("/*  imported from styles.css  */\n\n.styles__character___2r3d8 {\n  display: inline;\n}\n\n.styles__crCharacter___3rDmF {\n  display: block;\n}\n\n.styles__crCharacter___3rDmF + .styles__crCharacter___3rDmF {\n  height: 1em;\n}");

var styles = {
  containerStyle: {
    width: '100%',
    padding: '1rem',
    border: '1px solid darkGray',
    borderRadius: '4px',
    boxSizing: 'border-box',
    cursor: 'text',
    font: '400 13.3333px Arial',
    height: 'auto'
  },
  inputStyle: {
    border: '0',
    outline: 'none',
    width: '2rem',
    paddingLeft: '0',
    backgroundColor: 'transparent'
  }
};

var TextAreaCharacter = function TextAreaCharacter(_ref) {
  var c = _ref.c,
      i = _ref.i,
      getCharacterStyle = _ref.getCharacterStyle,
      value = _ref.value;
  var styles = (0, _react.useMemo)(function () {
    return (getCharacterStyle === null || getCharacterStyle === void 0 ? void 0 : getCharacterStyle(c, i, value)) || {};
  }, [c, i, value, getCharacterStyle]);

  switch (c) {
    case '\r':
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: characterStyles.crCharacter
      });

    default:
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: characterStyles.character,
        style: styles
      }, c);
  }
};

var DEFAULT_PROPS = {
  rows: 5
}; // ROWS, ONCHANGE, VALUE, STYLE, GETCHARACTERSTYLE

var TextAreaColors = function TextAreaColors(initialProps) {
  var inputRef = (0, _react.useRef)(null);
  var rootRef = (0, _react.useRef)(null);

  var props = _objectSpread(_objectSpread({}, DEFAULT_PROPS), initialProps);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var onInputValueChange = (0, _react.useCallback)(function (e) {
    var _props$onChange;

    props === null || props === void 0 ? void 0 : (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, function (v) {
      return "".concat(v).concat(e.target.value);
    });
  });
  var giveInputFocus = (0, _react.useCallback)(function () {
    if (!window.getSelection().toString()) {
      var _inputRef$current;

      inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    }
  }, [inputRef]);
  var onInputKeyDown = (0, _react.useCallback)(function (e) {
    var _props$onChange2, _props$onChange3;

    console.log(e);

    if (e !== null && e !== void 0 && e.ctrlKey) {
      switch (e === null || e === void 0 ? void 0 : e.keyCode) {
        case 65: // TODO: Manage select all

      }
    } else {
      switch (e === null || e === void 0 ? void 0 : e.keyCode) {
        case 8:
          // Manage backspace
          props === null || props === void 0 ? void 0 : (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 ? void 0 : _props$onChange2.call(props, function (v) {
            if (!v || v.length < 1) {
              return '';
            }

            return _toConsumableArray(v).slice(0, -1).join('');
          });
          break;

        case 13:
          props === null || props === void 0 ? void 0 : (_props$onChange3 = props.onChange) === null || _props$onChange3 === void 0 ? void 0 : _props$onChange3.call(props, function (v) {
            return [].concat(_toConsumableArray(v), ['\r']).join('');
          });
          break;
      }
    }
  });
  var valueRendered = (0, _react.useMemo)(function () {
    return (props.value || '').split('').map(function (c, i) {
      return /*#__PURE__*/_react["default"].createElement(TextAreaCharacter, {
        key: "".concat(c, "-").concat(i),
        c: c,
        i: i,
        getCharacterStyle: props.getCharacterStyle,
        value: props.value
      });
    });
  }, [props.getCharacterStyle, props.value]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({}, styles.containerStyle), (props === null || props === void 0 ? void 0 : props.style) || {}), {
      minHeight: "".concat(props.rows, "rem")
    }),
    onClick: giveInputFocus,
    role: "textbox",
    ref: rootRef
  }, valueRendered, /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    value: inputValue,
    onChange: onInputValueChange,
    style: styles.inputStyle,
    autoComplete: "off",
    onKeyDown: onInputKeyDown
  }));
};

var _default = /*#__PURE__*/(0, _react.memo)(TextAreaColors);

exports["default"] = _default;