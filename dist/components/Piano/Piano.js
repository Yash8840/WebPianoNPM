"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _Key = _interopRequireDefault(require("../Key/Key"));
var _react = _interopRequireWildcard(require("react"));
require("./Piano.css");
var _SelectedScaleDropdown = _interopRequireDefault(require("../SelectedScaleDropdown/SelectedScaleDropdown"));
var _SelectedSoundDropdown = _interopRequireDefault(require("../SelectedSoundDropdown/SelectedSoundDropdown"));
var _Scales = require("../Scales/Scales");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Piano() {
  const [selectedScale, setSelectedScale] = (0, _react.useState)(_Scales.chromatic);
  const [selectedScaleName, setSelectedScaleName] = (0, _react.useState)('chromatic');
  const [selectedSound, setSelectedSound] = (0, _react.useState)('default');
  const handleScaleChange = event => {
    setSelectedScaleName(event.target.value);
    if (event.target.value === "Chromatic") {
      setSelectedScale(_Scales.chromatic);
    } else if (event.target.value === "Major") {
      setSelectedScale(_Scales.major);
    } else if (event.target.value === "Japanese") {
      setSelectedScale(_Scales.japanese);
    } else if (event.target.value === "Major Pentatonic") {
      setSelectedScale(_Scales.majorPentatonic);
    } else if (event.target.value === "South East Asian") {
      setSelectedScale(_Scales.southEastAsian);
    } else if (event.target.value === "Klezmer") {
      setSelectedScale(_Scales.klezmer);
    } else if (event.target.value === "Major Blues") {
      setSelectedScale(_Scales.majorBlues);
    } else if (event.target.value === "Harmonic Minor") {
      setSelectedScale(_Scales.harmonicMinor);
    } else if (event.target.value === "Dorian") {
      setSelectedScale(_Scales.dorian);
    } else if (event.target.value === "Mixolodian") {
      setSelectedScale(_Scales.mixolodian);
    } else if (event.target.value === "Minor") {
      setSelectedScale(_Scales.minor);
    } else if (event.target.value === "Minor Pentatonic") {
      setSelectedScale(_Scales.minorPentatonic);
    } else {
      setSelectedScale(_Scales.minorBlues);
    }
  };
  const handleSoundChange = event => {
    setSelectedSound(event.target.value);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "piano-parent"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Piano"), /*#__PURE__*/_react.default.createElement(_SelectedScaleDropdown.default, {
    handleScaleChange: handleScaleChange,
    selectedScaleName: selectedScaleName
  }), /*#__PURE__*/_react.default.createElement(_SelectedSoundDropdown.default, {
    handleSoundChange: handleSoundChange,
    selectedSound: selectedSound
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "piano"
  }, selectedScale.map((note, key) => /*#__PURE__*/_react.default.createElement(_Key.default, {
    sound: selectedSound,
    key: key,
    note: note.note,
    color: note.color
  }))));
}
var _default = Piano;
exports.default = _default;