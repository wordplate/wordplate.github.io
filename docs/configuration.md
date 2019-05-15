# Configuration

WordPlate works like any other WordPress environment with one key difference. Instead of [hard-coding](https://en.m.wikipedia.org/wiki/Hard_coding) secret keys and passphrases in the `wp-config.php` file WordPlate relies on [environment variables](https://github.com/vlucas/phpdotenv/blob/ffcaf1dfee56c8830d83d9812efad2a98c08f02e/README.md#why-env). You'll notice a `.env` file in the root of your project, this is where you add your database credentials for example.

If you don't see any `.env` file, please copy the `.env.example` file and name it `.env`. Remember that the `.env` should not be committed to your Git repository. The credentials in this file are secret.

## Environment Variables

WordPlate ships with a lot of default configuration for setting up new WordPress sites. Please see the [source code](https://github.com/wordplate/framework/blob/6e34056cb6f0b4d4070e72b1ffbeca8300b4de9a/src/Application.php#L69-L125) if you want to see what environment variables that exists in the framework.

For example; if you want to force a custom address to your website you may add the environment variables `WP_HOME` and `WP_SITEURL` to the `.env` file.

```
WP_HOME=https://example.com
WP_SITEURL=https://example.com
```

WordPlate provides a `env()` function to let you easily fetch any environment variable in your application:

```
echo env('WP_THEME'); // wordplate
```

If you want to register custom environment variables you may do so in the `public/wp-config.php` file:

```php
define('WP_ALLOW_MULTISITE', env('WP_ALLOW_MULTISITE', true));
```

## Salt Keys

The first thing you should do after installing WordPlate is to add [WordPress salts](https://wordplate.github.io/salt) to your `.env` environment file.

Typically, these strings should be [64 characters long](https://wordplate.github.io/salt). The strings can be set in the `.env` environment file. If you have not renamed the `.env.example` file to `.env`, you may do that now. If the [WordPress salts](https://wordplate.github.io/salt) is not set, your user sessions and other encrypted data will not be secure!

Please visit [WordPlate's salt page](https://wordplate.github.io/salt) and copy the WordPress salts to your environment file.

> If you're using WP-CLI and want to generate your salt keys on the CLI. Please see the [WP-CLI Dotenv helper](https://aaemnnost.tv/wp-cli-commands/dotenv) command by [Evan Mattson](https://github.com/aaemnnosttv).

## Public Directory

After installing WordPlate, you should configure your web server's document / web root to be the `public` directory. The `index.php` in this directory serves as the front controller for all HTTP requests entering your application.

If you want to rename the `public` directory you'll need to add the following line to the `wp-config.php` file:

```php
$application->setPublicPath(realpath(__DIR__));
```

## WordPress Version

WordPlate supports WordPress 5.2+ and comes with the latest version out of the box. If you want to configure an exact version of WordPress, **which isn't recommended**, you may add it to your `composer.json` file. This way you can lock the WordPress version number to the one you're working with.

```json
"require": {
  "johnpbloch/wordpress": "5.2.1"
}
```

If you want to save space we recommend removing the `wp-content` directory once WordPress has been installed through Composer. This won't break your current setup since WordPlate uses the `public` directory. If you want to remove the `wp-content` directory after running `composer install` or `composer update`, we suggest adding the following Composer script to your `composer.json` file:

```json
"scripts": {
    "post-autoload-dump": [
        "rm -rf public/wordpress/wp-content"
    ]
}
```
