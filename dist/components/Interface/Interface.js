"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Warning = _interopRequireDefault(require("../Warning/Warning"));
var _Piano = _interopRequireDefault(require("../Piano/Piano"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Interface() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "interface"
  }, /*#__PURE__*/_react.default.createElement(_Piano.default, null), /*#__PURE__*/_react.default.createElement(_Warning.default, null));
}
var _default = Interface;
exports.default = _default;