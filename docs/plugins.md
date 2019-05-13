# Plugins

[WordPress Packagist](https://wpackagist.org) comes straight out of the box with WordPlate. It mirrors the WordPress [plugin](https://plugins.svn.wordpress.org) and [theme](https://themes.svn.wordpress.org) directories as a Composer repository.

Require the desired plugin or theme using `wpackagist-plugin` or `wpackagist-theme` as the vendor name. Packages are installed to `public/plugins`, `public/mu-plugins` or `public/themes`.

```bash
$ composer require wpackagist-plugin/hide-updates
```

This is an example of how your `composer.json` file might look like:

```json
"require": {
    "wordplate/framework": "^7.1",
    "wpackagist-plugin/hide-updates": "^1.0"
},
```

Please visit [WordPress Packagist](https://wpackagist.org) website for more information and examples.

> Are you a visual learner? WordPlate provides a [free, thorough introduction to WordPlate](https://www.youtube.com/playlist?list=PLigSAMFNpkZiVpi0rSzoWhS4qa4JPq09O) for newcomers to the framework. It's a great place to start your journey.

## Must-use Plugins

With WordPlate you can enable standard plugins to be required just like [must-use](https://codex.wordpress.org/Must_Use_Plugins) plugins.

> [Must-use plugins](https://codex.wordpress.org/Must_Use_Plugins) (a.k.a. mu-plugins) are plugins installed in a special directory inside the content folder and which are automatically enabled on all sites in the installation.

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

## Third-party Plugins

Below we've put together a list of plugins we recommend using. If you've any suggestions of plugins we can add to this list, please let us know!

- **Blade** - The [plugin](https://github.com/fiskhandlarn/blade) integrates [Laravel's Blade](https://laravel.com/docs/5.8/blade) templating system in WordPress.
- **Disable Embeds** - The [plugin](https://wordpress.org/plugins/disable-embeds) prevents others from embedding your site.
- **Disable Emojis** - The [plugin](https://wordpress.org/plugins/disable-emojis) disables the new WordPress emoji functionality.
- **Email Log** - The [plugin](https://wordpress.org/plugins/email-log) that allows you to log and view all emails sent from WordPress.
- **Hide Updates** - The [plugin](https://wordpress.org/plugins/hide-updates) hides update notices for updates in WordPress.
- **Soil** - The [plugin](https://roots.io/plugins/soil) contains a collection of modules to apply theme-agnostic front-end modifications.
- **WP Migrate DB** - The [plugin](https://wordpress.org/plugins/wp-migrate-db) help you export your database as a MySQL data dump.

If you know of a plugin which would fit on this list, please [open an issue](https://github.com/wordplate/wordplate.github.io) on GitHub!
