Allel Project setup with:
* [Mithril 2.x](http://mithril.js.org)
* [Rollup](http://rollupjs.org) for optimized module bundles
* [Babel](http://babeljs.io) for transpiling es2015 to es5

## Setup

Install dependencies
```
npm install
```


## Build and watch

Script commands defined in `package.json`:

* `build`: creates a minified bundle in `dist/js/`
* `serve`: serves the build directory at [localhost:5000](http://localhost:5000/)
* `dev`: starts a local webserver; creates a bundle in `dist/js/` that is being updated with each code change; calls LiveReload to refresh the browser after code changes are built

Call `npm run dev` and open a web page at [localhost:3000](http://localhost:3000/). The port number is set by environment variable `PORT` in `package.json`.


Other configuration file:
* `.babelrc`: Babel configuration


## License

MIT
