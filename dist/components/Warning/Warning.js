"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Warning.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Warning() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "warning"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Flip your screen!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "phone"
  }));
}
var _default = Warning;
exports.default = _default;