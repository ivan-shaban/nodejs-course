"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecodeStream = void 0;

var _constants = require("./constants");

var _cli = require("./cli");

var _stream = require("stream");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var transformSymbol = function transformSymbol(symbol) {
  if (_constants.abc.includes(symbol)) {
    var index = (_constants.abc.indexOf(symbol) - _cli.options.shift) % _constants.abc.length;

    index = index < 0 ? _constants.abc.length + index : index;
    return _constants.abc[index];
  } else if (_constants.ABC.includes(symbol)) {
    var _index = (_constants.ABC.indexOf(symbol) - _cli.options.shift) % _constants.ABC.length;

    _index = _index < 0 ? _constants.ABC.length + _index : _index;
    return _constants.ABC[_index];
  } else {
    return symbol;
  }
};

var decodeFunction = function decodeFunction(value) {
  return value.split('').map(transformSymbol).join('');
};

var DecodeStream = /*#__PURE__*/function (_Transform) {
  _inherits(DecodeStream, _Transform);

  var _super = _createSuper(DecodeStream);

  function DecodeStream() {
    _classCallCheck(this, DecodeStream);

    return _super.call(this, {
      autoDestroy: true,
      emitClose: true
    });
  }

  _createClass(DecodeStream, [{
    key: "_transform",
    value: function _transform(chunk, encoding, callback) {
      if (Buffer.isBuffer(chunk)) {
        chunk = chunk.toString();
      }

      var result = decodeFunction(chunk);
      callback(null, result);
    }
  }]);

  return DecodeStream;
}(_stream.Transform);

exports.DecodeStream = DecodeStream;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvZGUudHMiXSwibmFtZXMiOlsidHJhbnNmb3JtU3ltYm9sIiwic3ltYm9sIiwiYWJjIiwiaW5jbHVkZXMiLCJpbmRleCIsImluZGV4T2YiLCJvcHRpb25zIiwic2hpZnQiLCJsZW5ndGgiLCJBQkMiLCJkZWNvZGVGdW5jdGlvbiIsInZhbHVlIiwic3BsaXQiLCJtYXAiLCJqb2luIiwiRGVjb2RlU3RyZWFtIiwiYXV0b0Rlc3Ryb3kiLCJlbWl0Q2xvc2UiLCJjaHVuayIsImVuY29kaW5nIiwiY2FsbGJhY2siLCJCdWZmZXIiLCJpc0J1ZmZlciIsInRvU3RyaW5nIiwicmVzdWx0IiwiVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsTUFBRCxFQUFvQjtBQUMxQyxNQUFJQyxlQUFJQyxRQUFKLENBQWFGLE1BQWIsQ0FBSixFQUEwQjtBQUN4QixRQUFJRyxLQUFLLEdBQUcsQ0FBQ0YsZUFBSUcsT0FBSixDQUFZSixNQUFaLElBQXNCSyxhQUFRQyxLQUEvQixJQUF3Q0wsZUFBSU0sTUFBeEQ7O0FBQ0FKLElBQUFBLEtBQUssR0FBR0EsS0FBSyxHQUFHLENBQVIsR0FDSkYsZUFBSU0sTUFBSixHQUFhSixLQURULEdBRUpBLEtBRko7QUFJQSxXQUFPRixlQUFJRSxLQUFKLENBQVA7QUFDRCxHQVBELE1BT08sSUFBSUssZUFBSU4sUUFBSixDQUFhRixNQUFiLENBQUosRUFBMEI7QUFDL0IsUUFBSUcsTUFBSyxHQUFHLENBQUNLLGVBQUlKLE9BQUosQ0FBWUosTUFBWixJQUFzQkssYUFBUUMsS0FBL0IsSUFBd0NFLGVBQUlELE1BQXhEOztBQUNBSixJQUFBQSxNQUFLLEdBQUdBLE1BQUssR0FBRyxDQUFSLEdBQ0pLLGVBQUlELE1BQUosR0FBYUosTUFEVCxHQUVKQSxNQUZKO0FBSUEsV0FBT0ssZUFBSUwsTUFBSixDQUFQO0FBQ0QsR0FQTSxNQU9BO0FBQ0wsV0FBT0gsTUFBUDtBQUNEO0FBQ0YsQ0FsQkQ7O0FBb0JBLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQW1CQSxLQUFLLENBQzVDQyxLQUR1QyxDQUNqQyxFQURpQyxFQUV2Q0MsR0FGdUMsQ0FFbkNiLGVBRm1DLEVBR3ZDYyxJQUh1QyxDQUdsQyxFQUhrQyxDQUFuQjtBQUFBLENBQXZCOztJQUthQyxZOzs7OztBQUNYLDBCQUFjO0FBQUE7O0FBQUEsNkJBQ047QUFDSkMsTUFBQUEsV0FBVyxFQUFFLElBRFQ7QUFFSkMsTUFBQUEsU0FBUyxFQUFFO0FBRlAsS0FETTtBQUtiOzs7OytCQUVVQyxLLEVBQVlDLFEsRUFBa0JDLFEsRUFBOEQ7QUFDckcsVUFBSUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCSixLQUFoQixDQUFKLEVBQTRCO0FBQzFCQSxRQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0ssUUFBTixFQUFSO0FBQ0Q7O0FBQ0QsVUFBTUMsTUFBTSxHQUFHZCxjQUFjLENBQUNRLEtBQUQsQ0FBN0I7QUFFQUUsTUFBQUEsUUFBUSxDQUFDLElBQUQsRUFBT0ksTUFBUCxDQUFSO0FBQ0Q7Ozs7RUFmK0JDLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBQkMsXHJcbiAgYWJjXHJcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnLi9jbGknO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdzdHJlYW0nO1xyXG5cclxuY29uc3QgdHJhbnNmb3JtU3ltYm9sID0gKHN5bWJvbDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKGFiYy5pbmNsdWRlcyhzeW1ib2wpKSB7XHJcbiAgICBsZXQgaW5kZXggPSAoYWJjLmluZGV4T2Yoc3ltYm9sKSAtIG9wdGlvbnMuc2hpZnQpICUgYWJjLmxlbmd0aDtcclxuICAgIGluZGV4ID0gaW5kZXggPCAwXHJcbiAgICAgID8gYWJjLmxlbmd0aCArIGluZGV4XHJcbiAgICAgIDogaW5kZXg7XHJcblxyXG4gICAgcmV0dXJuIGFiY1tpbmRleF07XHJcbiAgfSBlbHNlIGlmIChBQkMuaW5jbHVkZXMoc3ltYm9sKSkge1xyXG4gICAgbGV0IGluZGV4ID0gKEFCQy5pbmRleE9mKHN5bWJvbCkgLSBvcHRpb25zLnNoaWZ0KSAlIEFCQy5sZW5ndGg7XHJcbiAgICBpbmRleCA9IGluZGV4IDwgMFxyXG4gICAgICA/IEFCQy5sZW5ndGggKyBpbmRleFxyXG4gICAgICA6IGluZGV4O1xyXG5cclxuICAgIHJldHVybiBBQkNbaW5kZXhdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gc3ltYm9sO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRlY29kZUZ1bmN0aW9uID0gKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlXHJcbiAgLnNwbGl0KCcnKVxyXG4gIC5tYXAodHJhbnNmb3JtU3ltYm9sKVxyXG4gIC5qb2luKCcnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWNvZGVTdHJlYW0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBhdXRvRGVzdHJveTogdHJ1ZSxcclxuICAgICAgZW1pdENsb3NlOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF90cmFuc2Zvcm0oY2h1bms6IGFueSwgZW5jb2Rpbmc6IHN0cmluZywgY2FsbGJhY2s6IChlcnJvcj86IChFcnJvciB8IG51bGwpLCBkYXRhPzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkge1xyXG4gICAgICBjaHVuayA9IGNodW5rLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBkZWNvZGVGdW5jdGlvbihjaHVuayk7XHJcblxyXG4gICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcclxuICB9XHJcbn1cclxuIl19