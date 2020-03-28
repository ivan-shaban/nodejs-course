import { options } from './cli';
import { EncodeStream } from './encode';
import { DecodeStream } from './decode';
import { pipeline } from 'stream';
import fs from 'fs';

const transformStream = options.action === 'encode'
  ? new EncodeStream()
  : new DecodeStream();

const inputStream = !!options.input
  ? fs.createReadStream(options.input)
  : process.stdin;

const outputStream = !!options.output
  ? fs.createWriteStream(options.output)
  : process.stdout;

const pipe = pipeline(
  inputStream,
  transformStream,
  outputStream,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);

pipe.on('end', (error, result) => {
  console.log(`>> finished`, error, result);
});

// const example = options.action === 'encode'
//   ? 'This is secret. Message about "_" symbol!'
//   : 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';

// const result = action(example);

// console.log(`>> result:`, result, result === 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!');
