# Theming

Building themes with WordPlate works like any other WordPress environment. All available WordPress classes and helper functions are available in WordPlate as well.

[Visit the official WordPress documentation](https://developer.wordpress.org/themes) to read more about building themes with WordPress.

## Theme Directory

For most WordPlate applications you may leave the theme directory as it is. If you want to rename the `wordplate` theme to something else you'll also need to update the `WP_THEME` environment variable in the `.env` file.

## Debugging

WordPlate implements the [`symfony/var-dumper`](https://github.com/symfony/var-dumper) package. The VarDumper component provides mechanisms for walking through any arbitrary PHP variable. It provides a better `dump()` function that you can use instead of `var_dump()`. There is also a `dd()` shorthand function available.

## Laravel Mix

WordPlate integrates [Laravel Mix](https://laravel.com/docs/5.8/mix) to get you up and running with Webpack. By default WordPlate has added support for Sass, JavaScript (ES2015+) and [asset versioning](https://laravel.com/docs/5.8/mix#versioning-and-cache-busting).

<Note label>

<small>_Laravel Mix provides a fluent API for defining Webpack build steps for your Laravel application using several common CSS and JavaScript pre-processors. Through simple method chaining, you can fluently define your asset pipeline._</small>

</Note>

### Installation

You'll need to install [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com) in your environment in order use Laravel Mix.

Once Node.js and npm is installed you may install the dependencies in the root of your WordPlate project:

```sh
$ npm install
```

To run Laravel mix while you're developing you may use the `start` script:

```sh
$ npm start
```

When you're ready to deploy your application to production you may use the `build` script:

```sh
$ npm build
```

This will by default transpile your CSS and JavaScript into the `assets` directory within your theme directory.
