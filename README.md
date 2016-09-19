# meteor-sanitize-filename
This is just a meteor wrapper for the npm package sanitize-filename. On the client side, I used "cosmos:browserify" package to make sanitize-filename work.

## API

`sanitizeFilename(inputString, [options])  // this function can be called from both client and server side`

`Sanitize inputString by removing or replacing invalid characters. Return valid file name string.`

`Options:`

* `options.replacement: A string to replace invalid characters with. Optional. Default: "".`

See [https://github.com/parshap/node-sanitize-filename](https://github.com/parshap/node-sanitize-filename) for all the documentation.


Related Packages:
* [cosmos:browserify](https://atmospherejs.com/cosmos/browserify)

* [sanitize-filename](https://www.npmjs.com/package/sanitize-filename)