# Upgrade Guide

## Upgrade from 7 to 8

**🚧 This version is still under development 🚧**

If you want to upgrade from WordPlate 7 to 8 you can follow this guide.

1. WordPlate now requires PHP 7.2 or later.

1. Bump the version number in the `composer.json` file to `^8.0`.

    > **Note:** WordPlate 8.0 requires WordPress 5.2 or later.

1. Laravel's helper functions is now optional in WordPlate. If you want to use the functions, install the [`laravel/helpers`](https://github.com/laravel/helpers#readme) package, with Composer, in the root of your project:

    ```sh
    $ composer require laravel/helpers
    ```
    
1. Replace any usage of `asset`, `stylesheet_url` and `template_url` functions with WordPress's [`get_theme_file_uri`](https://developer.wordpress.org/reference/functions/get_theme_file_uri/) function.

1. Replace any usage of `stylesheet_path` and `template_path` functions with WordPress's [`get_theme_file_path`](https://developer.wordpress.org/reference/functions/get_theme_file_path/) function .

1. The `base_path` and `template_slug` functions have been removed.

1. Run `composer update` in the root of your project and your app should be up and running!

## Upgrade from 6 to 7

If you want to upgrade from WordPlate 6 to 7 you can follow this guide.

1. Bump the version number in the `composer.json` file to `^7.0`.

    > **Note:** WordPlate 7.0 requires WordPress 5.0 or later.

1. Update the `realpath(__DIR__)` to `realpath(__DIR__.'/../')` in the `wp-config.php` file.

1. If your public directory isn't named `public`, add the following line to the `wp-config.php` file:

    ```php
    $application->setPublicPath(realpath(__DIR__));
    ```

1. If you aren't planning to use the [Gutenberg](https://wordpress.org/gutenberg/) editor, install the classic editor:

    ```sh
    $ composer require wpackagist-plugin/classic-editor
    ```

1. Run `composer update` and everything should work as before.

## Upgrade from 5 to 6

If you want to upgrade from WordPlate 5 to 6 you can follow this guide.

1. Bump the version number in the `composer.json` file to `^6.0`.

1. Update the `realpath(__DIR__.'/../')` to `realpath(__DIR__)` in the `wp-config.php` file.

1. Run `composer update` and everything should work as before.

## Upgrade from 4 to 5

If you want to upgrade from WordPlate 4 to 5 you can follow this guide.

1. Bump the version number in the `composer.json` file to `^5.0`.

1. Copy and paste the contents of the [`wp-config.php`](public/wp-config.php) file into your application.

    > **Note:** Make sure you don't overwrite any of your custom constants.

1. Run `composer update` and everything should work as before.
