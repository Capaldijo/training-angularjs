# Angular Quickstart project

**Inspired by HotTowel Angular & FountainJS**

>*Opinionated Angular style guide for teams by [@john_papa](//twitter.com/john_papa)*

>More details about the styles and patterns used in this app can be found in my [Angular Style Guide](https://github.com/johnpapa/angularjs-styleguide) and my [Angular Patterns: Clean Code](http://jpapa.me/ngclean) course at [Pluralsight](http://pluralsight.com/training/Authors/Details/john-papa) and working in teams.

## Prerequisites

1. Install [Node.js](http://nodejs.org) v6
 - on Debian
    ```sh
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    apt-get `[sudo] apt-get install node`
    ```
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. update Node.js : `[sudo] npm install -g npm`
3. Install gulp : `[sudo] npm install -g gulp-cli`
4. Install gulp : `[sudo] npm install -g bower`
5. Install bower resolver : `sudo npm install -g bower-npm-resolver`

## Installing Project
 - `npm install`
 - `bower install`

## Running project

### Linting
 - Run code analysis using `gulp vet`. This runs jshint, eslint jscs, and tslint.

### Tests
 - Run the unit tests using `gulp test` (via karma & jasmine).
 - Run the unit tests continuously using `gulp test:auto`. This will open up Chrome & generate html report, for easy debugging.
 - The 'test-helpers' folder will be served during tests. It can contains mocks, or any JS that will be needed only at test time.
### Running project
 - Run the project with `gulp serve` (or  `gulp serve:dist` for production-like run)
 - Serves it on localhost:3000. Any update to a source files will make the browser to reload itself.

### Building the project
 - Update the project version using `gulp bump`
    - `gulp bump` or `gulp bump:minor` : 1.0.0 => 1.0.1
    - `gulp bump:minor` : 1.0.1 => 1.1.0
    - `gulp bump:major` : 1.1.0 => 2.0.0
 - Build the optimized project using `gulp build`
    - This create the optimized code for the project and puts it in the "dist" folder
    - performs code vet beforehand. To skip vet, use `gulp build --no-vet`
    - Build against a profile: `gulp build:prod` to override **env/conf.js** with *env/prod-conf.js*.
 - Package the previously built project using `gulp package`
    - This creates a zip of the dist folder, with its md5 checksum.

Building project cook-up an optimized version of project files into dist/folder
This process involves the following steps :
 - vet code within app/ folder.
 - make templateCahes out of all html files for fast HTML loading
 - compiles SCSS files into CSS, & add browser prefixes.
 - transpiles TypeScript to EcmaScript 2015
 - Babelify TypeScript & JavaScript to ES5
 - minifying bower dependencies into vendor-[hash].js
 - minifying application sources into app-[hash].js
 - copy all resources into dist/ folder
 - optimize images.

> Note that build will fails if vet reports some errors. `gulp buid --no-vet` can skip code linting.

> You can create any build profile: Just create env/my-profile-conf.js, and you can build your application using this profile with `gulp build:my-profile`

> Any gulp task can be run with **--verbose** or **--debug** option to get a more complete trace.

## Exploring

### Structure
The structure also contains a gulpfile.js

```sh
 /.tmp				# contains files generated by gulp serve
	/app			# project's root
		/env		# project conf & flavors
		/resources
			/images
			/i18n	# contains locale**.json
		/src		# js|ts sources
		/styles		# common .scss styles
```

## Gulp Tasks

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Plugin managment

    **gulp.conf** defines a path *plugins* to contains plugin. A plugin is a folder that comes with its proper sources, styles, images and  locales.
- `gulp serve --pluginName`
    Serves the project including content of `{Plugin-folder}/pluginName`

- `gulp build --pluginName`
    Builds the project including content of `{Plugin-folder}/pluginName`


### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

### Testing

- `gulp test`

    Runs all unit tests using karma runner, mocha, chai and sinon with phantomjs. Depends on vet task, for code analysis.

- `gulp test:auto`

    Runs a watch to run all unit tests.

- `gulp autotest --startServers`

    Runs a watch to run all unit tests and midway tests. Cranks up a second node process to run a server for the midway tests to hit a web api.

### Cleaning Up

- `gulp clean`

    Remove all files from the build and temp folders


### Fonts, images, lib & other resources

- `gulp resources:fonts`

    Copy all fonts from source to the build folder

- `gulp resources:images`

    Copy all images from source to the build folder. Minify images.

- `gulp resources:lib`

    Copy lib folder from source to the build folder

- `gulp resources:i18n`

    Search for all locales files across the project, & merge them into one file. Locale files pattern is defined in gulp.conf. By default, any file named **i18n/xx_XX.json" will match.

- `gulp resources`

    All of the above

### Styles

- `gulp styles`

    Compile scss files to CSS, add vendor prefixes, and copy to the build folder

### Serving Development Code

- `gulp serve`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles scss to css in a temp folder.


### Building Production Code

- `gulp build`

    Copies all fonts, minify images, minify code and builds the production code to the dist/ folder.

### Serving Production Code

- `gulp serve:dist`

    Serve the optimized code from the dist/ folder.