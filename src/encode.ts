import {
  ABC,
  abc
} from './constants';
import { options } from './cli';
import { Transform } from 'stream';

const transformSymbol = (symbol: string) => {
  if (abc.includes(symbol)) {
    const index = (abc.indexOf(symbol) + options.shift) % abc.length;

    return abc[index];
  } else if (ABC.includes(symbol)) {
    const index = (ABC.indexOf(symbol) + options.shift) % ABC.length;

    return ABC[index];
  } else {
    return symbol;
  }
};

const encodeFunction = (value: string) => value
  .split('')
  .map(transformSymbol)
  .join('');

export class EncodeStream extends Transform {
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
    const result = encodeFunction(chunk);

    callback(null, result);
  }
}
