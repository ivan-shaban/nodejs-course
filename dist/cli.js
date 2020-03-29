'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.options = void 0;

const _commander = require('commander');

const _package = _interopRequireDefault(require('../package.json'));

const _fs = _interopRequireDefault(require('fs'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function parseShift(value) {
  const result = parseInt(value, 10);

  if (result < 0) {
    console.error(
      "'shift' argument value must be greater then 0, received: ".concat(value)
    );
    process.exit(1);
  }

  return result;
}

function parseAction(value) {
  if (value !== 'encode' && value !== 'decode') {
    console.error(
      "'action' argument value must be 'encode'  'decode', received: ".concat(
        value
      )
    );
    process.exit(1);
  }

  return value;
}

function parseInput(value) {
  if (value && !_fs.default.existsSync(value)) {
    console.error(
      "'input' argument value must be a valid path to file, received: ".concat(
        value
      )
    );
    process.exit(1);
  }

  return value;
}

function parseOutput(value) {
  if (value && !_fs.default.existsSync(value)) {
    console.error(
      "'output' argument value must be a valid path to file, received: ".concat(
        value
      )
    );
    process.exit(1);
  }

  return value;
}

const cli = new _commander.Command()
  .version(_package.default.version)
  .requiredOption(
    '-s, --shift <value>',
    'a shift, number, required',
    parseShift
  )
  .requiredOption(
    '-a, --action <type>',
    'an action, possible values: encode/decode, required',
    parseAction
  )
  .option('-i, --input <path>', 'path to input file, options', parseInput)
  .option('-o, --output <path>', 'path to output file, optional', parseOutput)
  .parse(process.argv);
const options = cli.opts();
exports.options = options;
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkudHMiXSwibmFtZXMiOlsicGFyc2VTaGlmdCIsInZhbHVlIiwicmVzdWx0IiwicGFyc2VJbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJwcm9jZXNzIiwiZXhpdCIsInBhcnNlQWN0aW9uIiwicGFyc2VJbnB1dCIsImZzIiwiZXhpc3RzU3luYyIsInBhcnNlT3V0cHV0IiwiY2xpIiwiQ29tbWFuZCIsInZlcnNpb24iLCJwa2ciLCJyZXF1aXJlZE9wdGlvbiIsIm9wdGlvbiIsInBhcnNlIiwiYXJndiIsIm9wdGlvbnMiLCJvcHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUFtQztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0YsS0FBRCxFQUFRLEVBQVIsQ0FBdkI7O0FBQ0EsTUFBSUMsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZEUsSUFBQUEsT0FBTyxDQUFDQyxLQUFSLG9FQUEwRUosS0FBMUU7QUFDQUssSUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsQ0FBYjtBQUNEOztBQUNELFNBQU9MLE1BQVA7QUFDRDs7QUFFRCxTQUFTTSxXQUFULENBQXFCUCxLQUFyQixFQUFvQztBQUNsQyxNQUFJQSxLQUFLLEtBQUssUUFBVixJQUFzQkEsS0FBSyxLQUFLLFFBQXBDLEVBQThDO0FBQzVDRyxJQUFBQSxPQUFPLENBQUNDLEtBQVIseUVBQWdGSixLQUFoRjtBQUNBSyxJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxDQUFiO0FBQ0Q7O0FBQ0QsU0FBT04sS0FBUDtBQUNEOztBQUVELFNBQVNRLFVBQVQsQ0FBb0JSLEtBQXBCLEVBQW1DO0FBQ2pDLE1BQUlBLEtBQUssSUFBSSxDQUFDUyxlQUFHQyxVQUFILENBQWNWLEtBQWQsQ0FBZCxFQUFvQztBQUNsQ0csSUFBQUEsT0FBTyxDQUFDQyxLQUFSLDBFQUFnRkosS0FBaEY7QUFDQUssSUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsQ0FBYjtBQUNEOztBQUNELFNBQU9OLEtBQVA7QUFDRDs7QUFFRCxTQUFTVyxXQUFULENBQXFCWCxLQUFyQixFQUFvQztBQUNsQyxNQUFJQSxLQUFLLElBQUksQ0FBQ1MsZUFBR0MsVUFBSCxDQUFjVixLQUFkLENBQWQsRUFBb0M7QUFDbENHLElBQUFBLE9BQU8sQ0FBQ0MsS0FBUiwyRUFBaUZKLEtBQWpGO0FBQ0FLLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLENBQWI7QUFDRDs7QUFDRCxTQUFPTixLQUFQO0FBQ0Q7O0FBRUQsSUFBTVksR0FBRyxHQUFHLElBQUlDLGtCQUFKLEdBQ1RDLE9BRFMsQ0FDREMsb0JBQUlELE9BREgsRUFFVEUsY0FGUyxDQUVNLHFCQUZOLEVBRTZCLDJCQUY3QixFQUUwRGpCLFVBRjFELEVBR1RpQixjQUhTLENBR00scUJBSE4sRUFHNkIscURBSDdCLEVBR29GVCxXQUhwRixFQUlUVSxNQUpTLENBSUYsb0JBSkUsRUFJb0IsNkJBSnBCLEVBSW1EVCxVQUpuRCxFQUtUUyxNQUxTLENBS0YscUJBTEUsRUFLcUIsK0JBTHJCLEVBS3NETixXQUx0RCxFQU1UTyxLQU5TLENBTUhiLE9BQU8sQ0FBQ2MsSUFOTCxDQUFaO0FBUU8sSUFBTUMsT0FBTyxHQUFHUixHQUFHLENBQUNTLElBQUosRUFBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnY29tbWFuZGVyJztcclxuaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VTaGlmdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICBpZiAocmVzdWx0IDwgMCkge1xyXG4gICAgY29uc29sZS5lcnJvcihgJ3NoaWZ0JyBhcmd1bWVudCB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhlbiAwLCByZWNlaXZlZDogJHt2YWx1ZX1gKTtcclxuICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VBY3Rpb24odmFsdWU6IHN0cmluZykge1xyXG4gIGlmICh2YWx1ZSAhPT0gJ2VuY29kZScgJiYgdmFsdWUgIT09ICdkZWNvZGUnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGAnYWN0aW9uJyBhcmd1bWVudCB2YWx1ZSBtdXN0IGJlICdlbmNvZGUnIFxcICdkZWNvZGUnLCByZWNlaXZlZDogJHt2YWx1ZX1gKTtcclxuICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUlucHV0KHZhbHVlOiBzdHJpbmcpIHtcclxuICBpZiAodmFsdWUgJiYgIWZzLmV4aXN0c1N5bmModmFsdWUpKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGAnaW5wdXQnIGFyZ3VtZW50IHZhbHVlIG11c3QgYmUgYSB2YWxpZCBwYXRoIHRvIGZpbGUsIHJlY2VpdmVkOiAke3ZhbHVlfWApO1xyXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gIH1cclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlT3V0cHV0KHZhbHVlOiBzdHJpbmcpIHtcclxuICBpZiAodmFsdWUgJiYgIWZzLmV4aXN0c1N5bmModmFsdWUpKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGAnb3V0cHV0JyBhcmd1bWVudCB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgcGF0aCB0byBmaWxlLCByZWNlaXZlZDogJHt2YWx1ZX1gKTtcclxuICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBjbGkgPSBuZXcgQ29tbWFuZCgpXHJcbiAgLnZlcnNpb24ocGtnLnZlcnNpb24pXHJcbiAgLnJlcXVpcmVkT3B0aW9uKCctcywgLS1zaGlmdCA8dmFsdWU+JywgJ2Egc2hpZnQsIG51bWJlciwgcmVxdWlyZWQnLCBwYXJzZVNoaWZ0KVxyXG4gIC5yZXF1aXJlZE9wdGlvbignLWEsIC0tYWN0aW9uIDx0eXBlPicsICdhbiBhY3Rpb24sIHBvc3NpYmxlIHZhbHVlczogZW5jb2RlL2RlY29kZSwgcmVxdWlyZWQnLCBwYXJzZUFjdGlvbilcclxuICAub3B0aW9uKCctaSwgLS1pbnB1dCA8cGF0aD4nLCAncGF0aCB0byBpbnB1dCBmaWxlLCBvcHRpb25zJywgcGFyc2VJbnB1dClcclxuICAub3B0aW9uKCctbywgLS1vdXRwdXQgPHBhdGg+JywgJ3BhdGggdG8gb3V0cHV0IGZpbGUsIG9wdGlvbmFsJywgcGFyc2VPdXRwdXQpXHJcbiAgLnBhcnNlKHByb2Nlc3MuYXJndik7XHJcblxyXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IGNsaS5vcHRzKCk7XHJcbiJdfQ==
