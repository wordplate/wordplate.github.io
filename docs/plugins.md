---
layout: page
title: Plugins
---

[WordPress Packagist](https://wpackagist.org) comes straight out of the box with WordPlate. It mirrors the WordPress [plugin](https://plugins.svn.wordpress.org) and [theme](https://themes.svn.wordpress.org) directories as a Composer repository.

- [Installation](#installation)
- [Autoloader](#autoloader)
- [Recommended](#recommended)

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

## Plugin Loader

With WordPlate you can enable standard plugins to be required just like [must-use](https://codex.wordpress.org/Must_Use_Plugins) plugins in WordPlate.

> Must-use plugins (a.k.a. mu-plugins) are plugins installed in a special directory inside the content folder and which are automatically enabled on all sites in the installation. Must-use plugins do not show in the default list of plugins on the Plugins page of wp-admin – although they do appear in a special Must-Use section – and cannot be disabled except by removing the plugin file from the must-use directory, which is found in public/mu-plugins by default - [WordPress](https://codex.wordpress.org/Must_Use_Plugins)

Add the desired `mu-plugins` using `wpackagist-plugin` as the vendor name to `installer-paths` in your `composer.json` file.

```json
"extra": {
    "installer-paths": {
        "public/mu-plugins/{$name}": [
            "type:wordpress-muplugin",
            "wpackagist-plugin/hide-updates",
        ]
    }
}
```

Require the desired plugin using `wpackagist-plugin` as the vendor name.

```sh
$ composer require wpackagist-plugin/hide-updates
```

The plugin is installed to the `public/mu-plugins` directory.

## Recommended

Below we've put together a list of plugins we recommend using. If you've any suggestions of plugins we can add to this list, please let us know!

### Bladerunner

[Bladerunner](https://github.com/ekandreas/bladerunner) is plugin to integrate [Laravel's Blade templating](https://laravel.com/docs/5.5/blade) system in WordPress.

> Blade is the simple, yet powerful templating engine provided with Laravel. Unlike other popular PHP templating engines, Blade does not restrict you from using plain PHP code in your views. In fact, all Blade views are compiled into plain PHP code and cached until they are modified, meaning Blade adds essentially zero overhead to your application - [Laravel](https://laravel.com/docs/5.5/blade)

### Disable Embeds

[Disable Embeds](https://wordpress.org/plugins/disable-embeds) prevents others from embedding your site. Prevents you from embedding other non-whitelisted sites. Disables all JavaScript related to the feature.

### Disable Emojis

The [Disable Emojis](https://wordpress.org/plugins/disable-emojis) plugin disables the new WordPress emoji functionality.

### Email Log

[Email Log](https://wordpress.org/plugins/email-log) logs every email sent through WordPress and provides a UI where you can view them. The logged emails will be stored in a separate table and can be viewed from the admin interface. While viewing the logs, the emails can be filtered or sorted based on the date, email, subject etc.

### Hide Updates

The [Hide Updates](https://wordpress.org/plugins/hide-updates) plugin hides update notices for core, plugin, and theme updates in WordPress admin for all users except super admins. It’s useful for agencies or developers who take care of updates and maintenance of a client’s site and wants to hide the notices for other users. Super admins are not affected by this plugin and will continue to see all the updates.

### Plate

[Plate](https://github.com/wordplate/plate#readme) is a plugin with a bunch of defaults to help you make the most out of WordPress. It comes with handy features such as cleaning up WordPress's administrator dashboard. It is required by default but could easily be removed in the `composer.json` file. Visit [the documentation](https://github.com/wordplate/plate#readme) for more information.

### Soil

[Soil](https://roots.io/plugins/soil) is a WordPress plugin which contains a collection of modules to apply theme-agnostic front-end modifications.

### WP Migrate DB

[WP Migrate DB](https://wordpress.org/plugins/wp-migrate-db) exports your database as a MySQL data dump (much like phpMyAdmin), does a find and replace on URLs and file paths, handles serialized data, then allows you to save it to your computer as an SQL file. To complete the migration, you need to use a database management tool (e.g. phpMyAdmin) to import the SQL file to your database, replacing your existing database. It is perfect for developers who need to migrate fresh data from the production site to their local install, or migrate their locally developed site to a staging or production server.
