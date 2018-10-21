---
layout: page
title: Introduction
---

WordPlate is a free, open-source modern WordPress stack with a focus on simplicity. You can use it to easily develop WordPress websites with a modern stack. It simplifies the fuzziness around WordPress development.

WordPlate is simply a wrapper around WordPress to make developers life easier. It is just like developing any WordPress website with [themes](https://developer.wordpress.org/themes) and [plugins](https://developer.wordpress.org/plugins).

The project is developed openly on [GitHub](https://github.com/wordplate/wordplate), feel free to contribute!

## Features

- **WordPress as a dependency.** WordPress is installed using Composer as a dependency. This allows WordPress to be updated by running `composer update` in the root of the project.

- **Environment files.** Similar to Laravel and Symfony, WordPlate puts environment variables within an `.env` file such as database credentials and WordPress salts.

- **WordPress Packagist.** Manage your WordPress plugins and themes with Composer. WordPlate has integrated WordPress Packagist out of the box.

- **Must-use plugins.** WordPlate comes with a [must-use plugin](https://codex.wordpress.org/Must_Use_Plugins) loader out of the box. This means you can lock your plugins to specific versions and they are auto-activated by default.

- **Laravel Mix.** Integrated Webpack build tool which comes with several common CSS and JavaScript pre-processors. Versioning and cache busting built right in.

- **Helpers.** WordPlate includes a variety of global "helper" PHP functions.

## Goals

- **Fast and simple.** No clutter, no bloat, no complex dependencies. WordPlate is built with PHP so it’s quick and easy to deploy.

- **Powerful and extensible.** Customize, extend, and integrate WordPlate to suit your needs. WordPlate’s architecture is flexible and modern and comes with great documentation.

- **Free and open.** WordPlate is released under the [MIT license](https://github.com/wordplate/wordplate/blob/master/LICENSE).

## Installation

To give WordPlate a spin, go to the [Installation](docs/installation) page. You’ll need a server with PHP 7.1+ and MySQL 5.5+.

{% include youtube.html %}

## Developers

- [Vincent Klaiber](http://github.com/vinkla)
- [Chris Andersson](https://github.com/puredazzle)
- [Daniel Gerdgren](https://github.com/tditlu)
- [Oskar Joelson](https://github.com/fiskhandlarn)
