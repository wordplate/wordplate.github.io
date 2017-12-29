---
layout: page
title: Installation
redirect_from:
  - /docs/getting-started
---

- [Installation](#installation)
- [Configuration](#configuration)
- [WordPress](#wordpress)

## Installation

To use WordPlate, you need to have PHP 710+ installed on your machine. You'll also optionally need [Node.js](https://nodejs.org/en) and [NPM](https://www.npmjs.com) installed if you want to use [Laravel Mix](https://laravel.com/docs/5.5/mix) to compile your CSS and Javascript.

Make sure your server meets the following requirements:

- PHP >= 7.1
- Mbstring PHP Extension

Install WordPlate by issuing the Composer `create-project` command in your terminal:

```bash
$ composer create-project wordplate/wordplate
```

#### Laravel Valet

If you want to use [Laravel Valet](https://laravel.com/docs/5.5/valet) with WordPlate, [please see our local valet driver repository](https://github.com/wordplate/valet#readme).

## Configuration

The first thing you should do after installing WordPlate is to add [WordPress salts](https://wordplate.github.io/salt) to your `.env` environment file.

Typically, these strings should be [64 characters long](https://wordplate.github.io/salt). The strings can be set in the `.env` environment file. If you have not renamed the `.env.example` file to `.env`, you may do that now. If the [WordPress salts](https://wordplate.github.io/salt) is not set, your user sessions and other encrypted data will not be secure!

Please visit [WordPlate's salt page](https://wordplate.github.io/salt) and copy the WordPress salts to your environment file.

> If you're using WP-CLI and want to generate your salt keys on the CLI. Please see the [WP-CLI Dotenv helper](https://aaemnnost.tv/wp-cli-commands/dotenv) command by [Evan Mattson](https://github.com/aaemnnosttv).

#### Public Directory

After installing WordPlate, you should configure your web server's document / web root to be the `public` directory. The `index.php` in this directory serves as the front controller for all HTTP requests entering your application.

## WordPress

WordPlate supports WordPress `4.8+` and comes with the latest version out of the box. If you want to specify an exact version of WordPress you may add it to your [`composer.json`](composer.json) file.

```json
"require": {
  "johnpbloch/wordpress": "4.8.1"
}
```

This way you can lock the WordPress version number to the one you're working with. This could come in handy if you're opening your project six months from now and WordPress has released a new version with breaking changes.
