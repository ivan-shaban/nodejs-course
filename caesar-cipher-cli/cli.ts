import { Command } from 'commander';
import pkg from '../package.json';
import fs from 'fs';

function parseShift(value: string) {
  const result = parseInt(value, 10);
  if (result < 0) {
    console.error(`'shift' argument value must be greater then 0, received: ${value}`);
    process.exit(1);
  }
  return result;
}

function parseAction(value: string) {
  if (value !== 'encode' && value !== 'decode') {
    console.error(`'action' argument value must be 'encode' \ 'decode', received: ${value}`);
    process.exit(1);
  }
  return value;
}

// TODO: посмотреть возможность асинхронной валидации
function parseInput(value: string) {
  if (value && !fs.existsSync(value)) {
    console.error(`'input' argument value must be a valid path to file, received: ${value}`);
    process.exit(1);
  }
  return value;
}

// TODO: посмотреть возможность асинхронной валидации
function parseOutput(value: string) {
  if (value && !fs.existsSync(value)) {
    console.error(`'output' argument value must be a valid path to file, received: ${value}`);
    process.exit(1);
  }
  return value;
}

const cli = new Command()
  .version(pkg.version)
  .requiredOption('-s, --shift <value>', 'a shift', parseShift)
  .requiredOption('-a, --action <type>', 'an action, possible valies: encode/decode', parseAction)
  .option('-i, --input <path>', 'an input file', parseInput)
  .option('-o, --output <path>', 'an output file', parseOutput)
  .parse(process.argv);

export const options = cli.opts();
