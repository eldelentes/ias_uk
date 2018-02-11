# IAS Microsite



## Dependencies

Run: `npm cache clear && npm i && bower cache clean && bower install`

*Note: Before you can install Web Start Kit dependencies, you will need to install [Gulp](http://gulpjs.com/), [Node](https://nodejs.org/), [NPM](https://www.npmjs.com/), and [Bower](http://bower.io/).*

[back to top](#table-of-contents)

## Build

Generate a fresh build of your project. Task will run several individual tasks on files within `./src` and then output them to `./build`.

Run: `gulp build`

### Environments

You can specify which environment you want to build. If you do not pass `env` as an option, then `dev` will be used by default.


## Server

Start a local dev server. Additionally, gulp will watch for any changes to files and reload browser while server is running.

Run: `gulp server`

### Local URLs

* Local - http://localhost:3000
* UI - Set to `false` by default


## Scripts

Run a series of sub-tasks to generate final JavaScript files. See `./gulpfile.babel.js` for reference.

*Note: Each file on the root of `./src/scripts` will be compiled to its own file in `./build/scripts`. Each file can have own includes, just like Sass with `@import` functionality. See `./src/scripts/main.js` as an example.*

Run: `gulp scripts`

[back to top](#table-of-contents)

## Styles

Run a series of sub-tasks to generate final CSS files. See `./gulpfile.babel.js` for reference.

*Note: Each file on the root of `./src/styles` will be compiled to its own file in `./build/styles`.*

Run: `gulp styles`


## Views

Run a series of sub-tasks to generate final HTML files. See `./gulpfile.babel.js` for reference.

Run: `gulp views`

### Pug Structure

Web Starter Kit follows an opinionated directory structure. To learn more about Pug go to [https://pugjs.org/api/getting-started.html/](https://pugjs.org/api/getting-started.html/).