"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = exports.A = void 0;

require("@babel/polyfill");

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var log = (0, _debug.default)('LOG');

var A = function A() {
  _classCallCheck(this, A);
};

exports.A = A;

var sum = function sum(a, b) {
  log({
    a: a,
    b: b
  });
  return a + b;
};

exports.sum = sum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJBIiwic3VtIiwiYSIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLG9CQUFNLEtBQU4sQ0FBWjs7SUFDYUMsQzs7Ozs7O0FBRU4sSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDM0JKLEVBQUFBLEdBQUcsQ0FBQztBQUFFRyxJQUFBQSxDQUFDLEVBQURBLENBQUY7QUFBS0MsSUFBQUEsQ0FBQyxFQUFEQTtBQUFMLEdBQUQsQ0FBSDtBQUNBLFNBQU9ELENBQUMsR0FBR0MsQ0FBWDtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuXG5jb25zdCBsb2cgPSBkZWJ1ZygnTE9HJyk7XG5leHBvcnQgY2xhc3MgQSB7fVxuXG5leHBvcnQgY29uc3Qgc3VtID0gKGEsIGIpID0+IHtcbiAgbG9nKHsgYSwgYiB9KTtcbiAgcmV0dXJuIGEgKyBiO1xufTtcbiJdfQ==