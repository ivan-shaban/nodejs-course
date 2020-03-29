'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.EncodeStream = void 0;

const _constants = require('./constants');

const _cli = require('./cli');

const _stream = require('stream');

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _createSuper(Derived) {
  return function() {
    const Super = _getPrototypeOf(Derived);
    let result;
    if (_isNativeReflectConstruct()) {
      const NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], () => {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

const transformSymbol = function transformSymbol(symbol) {
  if (_constants.abc.includes(symbol)) {
    const index =
      (_constants.abc.indexOf(symbol) + _cli.options.shift) %
      _constants.abc.length;

    return _constants.abc[index];
  } else if (_constants.ABC.includes(symbol)) {
    const _index =
      (_constants.ABC.indexOf(symbol) + _cli.options.shift) %
      _constants.ABC.length;

    return _constants.ABC[_index];
  }
  return symbol;
};

const encodeFunction = function encodeFunction(value) {
  return value
    .split('')
    .map(transformSymbol)
    .join('');
};

const EncodeStream = /* #__PURE__*/ (function (_Transform) {
  _inherits(EncodeStream, _Transform);

  const _super = _createSuper(EncodeStream);

  function EncodeStream() {
    _classCallCheck(this, EncodeStream);

    return _super.call(this, {
      autoDestroy: true,
      emitClose: true
    });
  }

  _createClass(EncodeStream, [
    {
      key: '_transform',
      value: function _transform(chunk, encoding, callback) {
        if (Buffer.isBuffer(chunk)) {
          chunk = chunk.toString();
        }

        const result = encodeFunction(chunk);
        callback(null, result);
      }
    }
  ]);

  return EncodeStream;
}(_stream.Transform));

exports.EncodeStream = EncodeStream;
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbmNvZGUudHMiXSwibmFtZXMiOlsidHJhbnNmb3JtU3ltYm9sIiwic3ltYm9sIiwiYWJjIiwiaW5jbHVkZXMiLCJpbmRleCIsImluZGV4T2YiLCJvcHRpb25zIiwic2hpZnQiLCJsZW5ndGgiLCJBQkMiLCJlbmNvZGVGdW5jdGlvbiIsInZhbHVlIiwic3BsaXQiLCJtYXAiLCJqb2luIiwiRW5jb2RlU3RyZWFtIiwiYXV0b0Rlc3Ryb3kiLCJlbWl0Q2xvc2UiLCJjaHVuayIsImVuY29kaW5nIiwiY2FsbGJhY2siLCJCdWZmZXIiLCJpc0J1ZmZlciIsInRvU3RyaW5nIiwicmVzdWx0IiwiVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsTUFBRCxFQUFvQjtBQUMxQyxNQUFJQyxlQUFJQyxRQUFKLENBQWFGLE1BQWIsQ0FBSixFQUEwQjtBQUN4QixRQUFNRyxLQUFLLEdBQUcsQ0FBQ0YsZUFBSUcsT0FBSixDQUFZSixNQUFaLElBQXNCSyxhQUFRQyxLQUEvQixJQUF3Q0wsZUFBSU0sTUFBMUQ7O0FBRUEsV0FBT04sZUFBSUUsS0FBSixDQUFQO0FBQ0QsR0FKRCxNQUlPLElBQUlLLGVBQUlOLFFBQUosQ0FBYUYsTUFBYixDQUFKLEVBQTBCO0FBQy9CLFFBQU1HLE1BQUssR0FBRyxDQUFDSyxlQUFJSixPQUFKLENBQVlKLE1BQVosSUFBc0JLLGFBQVFDLEtBQS9CLElBQXdDRSxlQUFJRCxNQUExRDs7QUFFQSxXQUFPQyxlQUFJTCxNQUFKLENBQVA7QUFDRCxHQUpNLE1BSUE7QUFDTCxXQUFPSCxNQUFQO0FBQ0Q7QUFDRixDQVpEOztBQWNBLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQW1CQSxLQUFLLENBQzVDQyxLQUR1QyxDQUNqQyxFQURpQyxFQUV2Q0MsR0FGdUMsQ0FFbkNiLGVBRm1DLEVBR3ZDYyxJQUh1QyxDQUdsQyxFQUhrQyxDQUFuQjtBQUFBLENBQXZCOztJQUthQyxZOzs7OztBQUNYLDBCQUFjO0FBQUE7O0FBQUEsNkJBQ047QUFDSkMsTUFBQUEsV0FBVyxFQUFFLElBRFQ7QUFFSkMsTUFBQUEsU0FBUyxFQUFFO0FBRlAsS0FETTtBQUtiOzs7OytCQUVVQyxLLEVBQVlDLFEsRUFBa0JDLFEsRUFBOEQ7QUFDckcsVUFBSUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCSixLQUFoQixDQUFKLEVBQTRCO0FBQzFCQSxRQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0ssUUFBTixFQUFSO0FBQ0Q7O0FBQ0QsVUFBTUMsTUFBTSxHQUFHZCxjQUFjLENBQUNRLEtBQUQsQ0FBN0I7QUFFQUUsTUFBQUEsUUFBUSxDQUFDLElBQUQsRUFBT0ksTUFBUCxDQUFSO0FBQ0Q7Ozs7RUFmK0JDLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBQkMsXHJcbiAgYWJjXHJcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnLi9jbGknO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdzdHJlYW0nO1xyXG5cclxuY29uc3QgdHJhbnNmb3JtU3ltYm9sID0gKHN5bWJvbDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKGFiYy5pbmNsdWRlcyhzeW1ib2wpKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IChhYmMuaW5kZXhPZihzeW1ib2wpICsgb3B0aW9ucy5zaGlmdCkgJSBhYmMubGVuZ3RoO1xyXG5cclxuICAgIHJldHVybiBhYmNbaW5kZXhdO1xyXG4gIH0gZWxzZSBpZiAoQUJDLmluY2x1ZGVzKHN5bWJvbCkpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gKEFCQy5pbmRleE9mKHN5bWJvbCkgKyBvcHRpb25zLnNoaWZ0KSAlIEFCQy5sZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIEFCQ1tpbmRleF07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBzeW1ib2w7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZW5jb2RlRnVuY3Rpb24gPSAodmFsdWU6IHN0cmluZykgPT4gdmFsdWVcclxuICAuc3BsaXQoJycpXHJcbiAgLm1hcCh0cmFuc2Zvcm1TeW1ib2wpXHJcbiAgLmpvaW4oJycpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuY29kZVN0cmVhbSBleHRlbmRzIFRyYW5zZm9ybSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGF1dG9EZXN0cm95OiB0cnVlLFxyXG4gICAgICBlbWl0Q2xvc2U6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3RyYW5zZm9ybShjaHVuazogYW55LCBlbmNvZGluZzogc3RyaW5nLCBjYWxsYmFjazogKGVycm9yPzogKEVycm9yIHwgbnVsbCksIGRhdGE/OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoY2h1bmspKSB7XHJcbiAgICAgIGNodW5rID0gY2h1bmsudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGVuY29kZUZ1bmN0aW9uKGNodW5rKTtcclxuXHJcbiAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xyXG4gIH1cclxufVxyXG4iXX0=
