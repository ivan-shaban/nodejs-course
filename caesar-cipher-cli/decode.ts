import {
  ABC,
  abc
} from './constants';
import { options } from './cli';
import { Transform } from 'stream';

const transformSymbol = (symbol: string) => {
  if (abc.includes(symbol)) {
    let index = abc.indexOf(symbol) - options.shift;
    index = index < 0
      ? abc.length + index
      : index;

    return abc[index];
  } else if (ABC.includes(symbol)) {
    let index = ABC.indexOf(symbol) - options.shift;
    index = index < 0
      ? ABC.length + index
      : index;

    return ABC[index];
  } else {
    return symbol;
  }
};

const decodeFunction = (value: string) => value
  .split('')
  .map(transformSymbol)
  .join('');

export class DecodeStream extends Transform {
  constructor() {
    super({
      autoDestroy: true,
      emitClose: true
    });
  }

  _transform(chunk: any, encoding: string, callback: (error?: (Error | null), data?: any) => void): void {
    if (Buffer.isBuffer(chunk)) {
      chunk = chunk.toString();
    }
    const result = decodeFunction(chunk);

    callback(null, result);
  }
}
