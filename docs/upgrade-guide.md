---
layout: page
title: Upgrade Guide
---

- [Upgrading from 5 to 6](#upgrading-from-5-to-6)
- [Upgrading from 4 to 5](#upgrading-from-4-to-5)

## Upgrading from 5 to 6

If you want to upgrade from WordPlate 5 to 6 you can follow this guide.

1. Bump the version number in the `composer.json` file to `^6.0`.

2. Update the `realpath(__DIR__.'/../')` to `realpath(__DIR__)` in the `wp-config.php` file.

3. Run `composer update` and everything should work as before.

## Upgrading from 4 to 5

If you want to upgrade from WordPlate 4 to 5 you can follow this guide.

1. Bump the version number in the `composer.json` file to `^5.0`.

2. Copy and paste the contents of the [`wp-config.php`](public/wp-config.php) file into your application.

    > **Note:** Make sure you don't overwrite any of your custom constants.

3. Run `composer update` and everything should work as before.
