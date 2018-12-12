---
layout: page
title: Upgrade Guide
redirect_from:
  - /docs/upgrade-guide
---

## Upgrading from 6 to 7

If you want to upgrade from WordPlate 5 to 6 you can follow this guide.

1. Bump the version number in the `composer.json` file to `^7.0`.

    > _**Note:** WordPlate 7.0 requires WordPress 5.0 or later._

2. Update the `realpath(__DIR__)` to `realpath(__DIR__.'/../')` in the `wp-config.php` file.

3. If your public directory isn't named `public`, add the following line to the `wp-config.php` file:

    ```php
    $application->setPublicPath(realpath(__DIR__));
    ```

4. If you aren't planning to use the [Gutenberg](https://wordpress.org/gutenberg/) editor, install the classic editor:

    ```sh
    $ composer require wpackagist-plugin/classic-editor
    ```

5. Run `composer update` and everything should work as before.

## Upgrading from 5 to 6

If you want to upgrade from WordPlate 5 to 6 you can follow this guide.

1. Bump the version number in the `composer.json` file to `^6.0`.

2. Update the `realpath(__DIR__.'/../')` to `realpath(__DIR__)` in the `wp-config.php` file.

3. Run `composer update` and everything should work as before.

## Upgrading from 4 to 5

If you want to upgrade from WordPlate 4 to 5 you can follow this guide.

1. Bump the version number in the `composer.json` file to `^5.0`.

2. Copy and paste the contents of the [`wp-config.php`](public/wp-config.php) file into your application.

    > _**Note:** Make sure you don't overwrite any of your custom constants._

3. Run `composer update` and everything should work as before.
