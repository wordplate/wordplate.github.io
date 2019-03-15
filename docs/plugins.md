---
layout: page
title: Plugins
---

[WordPress Packagist](https://wpackagist.org) comes straight out of the box with WordPlate. It mirrors the WordPress [plugin](https://plugins.svn.wordpress.org) and [theme](https://themes.svn.wordpress.org) directories as a Composer repository.

{% include youtube.html %}

## Installation

Require the desired plugin or theme using `wpackagist-plugin` or `wpackagist-theme` as the vendor name. Packages are installed to `public/plugins`, `public/mu-plugins` or `public/themes`.

```bash
$ composer require wpackagist-plugin/hide-updates
```

This is an example of how your `composer.json` file might look like:

```json
"require": {
    "wordplate/framework": "^7.0",
    "wpackagist-plugin/hide-updates": "^1.0"
},
```

Please visit [WordPress Packagist](https://wpackagist.org) website for more information and examples.

> _**Tip:** If you're using plugins which is required for your website to work you should definitely check out WordPlate's [plugin loader](/docs/plugin-loader)._

## Recommended

Below we've put together a list of plugins we recommend using. If you've any suggestions of plugins we can add to this list, please let us know!

#### WordPlate Plugins

- **ACF** - The [plugin](https://github.com/wordplate/acf#readme) allows you to register your custom fields using ACF and PHP.
- **BEM** - The [plugin](https://github.com/wordplate/bem#readme) updates WordPress navigation menu classes to use BEM methodology.
- **Mail** - The [plugin](https://github.com/wordplate/mail#readme) allows you to register custom SMTP credentials through the environment file.
- **Plate** - The [plugin](https://github.com/wordplate/plate#readme) cleans up the WordPress dashboard features your client doesn't use.

#### Third-party Plugins

- **Bladerunner** - The [plugin](https://github.com/ekandreas/bladerunner#readme) integrates [Laravel’s Blade](https://laravel.com/docs/5.7/blade) templating system in WordPress.
- **Disable Embeds** - The [plugin](https://wordpress.org/plugins/disable-embeds) prevents others from embedding your site.
- **Disable Emojis** - The [plugin](https://wordpress.org/plugins/disable-emojis) disables the new WordPress emoji functionality.
- **Email Log** - The [plugin](https://wordpress.org/plugins/email-log) that allows you to log and view all emails sent from WordPress.
- **Hide Updates** - The [plugin](https://wordpress.org/plugins/hide-updates) hides update notices for updates in WordPress.
- **Soil** - The [plugin](https://roots.io/plugins/soil) contains a collection of modules to apply theme-agnostic front-end modifications.
- **WP Migrate DB** - The [plugin](https://wordpress.org/plugins/wp-migrate-db) help you export your database as a MySQL data dump.

If you know of a plugin which would fit on this list, please [open an issue](https://github.com/wordplate/wordplate.github.io) on GitHub!
