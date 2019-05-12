# WordPlate

![WordPlate](https://cloud.githubusercontent.com/assets/499192/24309675/09eec350-10cd-11e7-98f3-094003bc8e15.png)

WordPlate is a free, open-source modern WordPress stack with a focus on simplicity. You can use it to easily develop WordPress websites with a modern stack. It simplifies the fuzziness around WordPress development.

WordPlate is simply a wrapper around WordPress to make developers life easier. It is just like developing any WordPress website with [themes](https://developer.wordpress.org/themes) and [plugins](https://developer.wordpress.org/plugins).

The project is developed openly on [GitHub](https://github.com/wordplate/wordplate), feel free to contribute!

[![Build Status](https://img.shields.io/travis/wordplate/wordplate.github.io/master.svg?style=flat)](https://travis-ci.org/wordplate/wordplate.github.io)
[![License](https://img.shields.io/github/license/wordplate/wordplate.github.io.svg?style=flat)](https://github.com/wordplate/wordplate.github.io/blob/master/LICENSE)

### Features

- **WordPress as a dependency.** WordPress is installed using Composer as a dependency. This allows WordPress to be updated by running `composer update` in the root of the project.

- **Environment Files.** Similar to Laravel and Symfony, WordPlate puts environment variables within an `.env` file such as database credentials and WordPress salts.

- **WordPress Packagist.** Manage your WordPress plugins and themes with Composer. WordPlate has integrated WordPress Packagist out of the box.

- **Must-use plugins.** WordPlate comes with a [must-use plugin](https://codex.wordpress.org/Must_Use_Plugins) loader out of the box. This means you can lock your plugins to specific versions and they are auto-activated by default.

- **Mail.** Are you using custom SMTP credentials to send emails? WordPlate provides a package to add your credentials to the environment file.

- **Laravel Mix.** Integrated Webpack build tool which comes with several common CSS and JavaScript pre-processors. Versioning and cache busting built right in.

- **Security.** WordPlate installs the [`wp-password-bcrypt`](https://github.com/roots/wp-password-bcrypt#readme) package out of the box.

- **Helpers.** WordPlate includes a variety of global "helper" PHP functions.



### Goals

- **Fast and simple.** No clutter, no bloat, no complex dependencies. WordPlate is built with PHP so it’s quick and easy to deploy.

- **Powerful and extensible.** Customize, extend, and integrate WordPlate to suit your needs. WordPlate’s architecture is flexible and modern and comes with great documentation.

- **Free and open.** WordPlate is released under the [MIT license](https://github.com/wordplate/wordplate/blob/master/LICENSE).

### Developers

- [Vincent Klaiber](http://github.com/vinkla)
- [Chris Andersson](https://github.com/puredazzle)
- [Daniel Gerdgren](https://github.com/tditlu)
- [Oskar Joelson](https://github.com/fiskhandlarn)

### License

[MIT](https://github.com/wordplate/wordplate.github.io/blob/master/LICENSE) © [Vincent Klaiber](https://doubledip.se)
