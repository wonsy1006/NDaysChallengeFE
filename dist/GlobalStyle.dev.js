'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _styledComponents = require('styled-components');

var _index = _interopRequireDefault(
  require('./node_modules/styled-normalize/index'),
);

var _Theme = _interopRequireDefault(require('./Theme'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    "\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'NanumSquare';\n    -webkit-font-smoothing: antialised;\n    -moz-osx-font-smoothing: grayscale;\n    box-sizing: border-box;\n    min-height: 100%;\n    color: #313131;\n  }\n\n  #root {\n    margin: 0 auto;\n    max-width: 400px;\n    min-height: 100vh;\n    background: #fffbf2;\n  }\n\n  a {\n    color: #313131;\n    text-decoration: none;\n  }\n",
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  );
}

var _default = (0, _styledComponents.createGlobalStyle)(_templateObject());

exports['default'] = _default;
