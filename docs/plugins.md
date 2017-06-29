---
layout: page
title: Plugins
---

[WordPress Packagist](https://wpackagist.org) comes straight out of the box with WordPlate. It mirrors the WordPress [plugin](https://plugins.svn.wordpress.org) and [theme](https://themes.svn.wordpress.org) directories as a Composer repository.

- [Installation](#installation)
- [Autoloader](#autoloader)
- [Recommended Plugins](#recommended-plugins)

## Installation

Require the desired plugin or theme using `wpackagist-plugin` or `wpackagist-theme` as the vendor name. Packages are installed to `public/plugins`, `public/mu-plugins` or `public/themes`.

```bash
$ composer require wpackagist-plugin/hide-updates
```

This is an example of how your `composer.json` file might look like:

```json
"require": {
    "wordplate/framework": "^6.0",
    "wpackagist-plugin/hide-updates": "^1.0"
},
```

Please visit [WordPress Packagist](https://wpackagist.org) website for more information and examples.

## Autoloader

If you want to enable standard plugins to be required just like [must-use](https://codex.wordpress.org/Must_Use_Plugins) plugins in WordPlate, please see our [autoloader package](https://github.com/wordplate/autoloader#readme) for more information.

## Recommended Plugins

Below we've put together a list of plugins we recommend using. If you've any suggestions of plugins we can add to this list, please let us know!

### Hide Updates

The [Hide Updates](https://wordpress.org/plugins/hide-updates) plugin hides update notices for core, plugin, and theme updates in WordPress admin for all users except super admins. It’s useful for agencies or developers who take care of updates and maintenance of a client’s site and wants to hide the notices for other users. Super admins are not affected by this plugin and will continue to see all the updates.

### Soil

[Soil](https://roots.io/plugins/soil) is a WordPress plugin which contains a collection of modules to apply theme-agnostic front-end modifications.

### WP Migrate DB

[WP Migrate DB](https://wordpress.org/plugins/wp-migrate-db) exports your database as a MySQL data dump (much like phpMyAdmin), does a find and replace on URLs and file paths, handles serialized data, then allows you to save it to your computer as an SQL file. To complete the migration, you need to use a database management tool (e.g. phpMyAdmin) to import the SQL file to your database, replacing your existing database. It is perfect for developers who need to migrate fresh data from the production site to their local install, or migrate their locally developed site to a staging or production server.
