# caesar-cipher-cli utility

## Build application

Run to make development build, you may specify options in `nodemon.json` file
```
npm run start
```

Run to make production build
```
npm run build
```

## Running application

Run to see available options
```
node dist/index.js --help
```

**Usage example:**

```bash
$ node dist/index.js -a encode -s 7 -i "./examples/input.txt" -o "./examples/output.txt"
```

```bash
$ node dist/index.js --action encode --shift 7 --input ./examples/plain.txt --output ./examples/encoded.txt
```

```bash
$ node dist/index.js --action decode --shift 7 --input ./examples/decoded.txt --output ./examples/plain.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
