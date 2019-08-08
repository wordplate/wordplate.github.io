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

## Must-use Plugins

With WordPlate you can enable standard plugins to be required just like [must-use](https://wordpress.org/support/article/must-use-plugins/) plugins.

<Note label>

<small>_[Must-use plugins](https://wordpress.org/support/article/must-use-plugins/) (a.k.a. mu-plugins) are plugins installed in a special directory inside the content folder and which are automatically enabled on all sites in the installation._</small>

</Note>

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

Below we've put together a list of plugins we recommend using in your WordPlate project:

- [**Blade**](https://github.com/fiskhandlarn/blade) - The plugin integrates [Laravel's Blade](https://laravel.com/docs/5.8/blade) templating system in WordPress.
- [**Clean Image Filenames**](https://wordpress.org/plugins/clean-image-filenames/) - The plugin removes special characters from filenames.
- [**Disable Embeds**](https://wordpress.org/plugins/disable-embeds/) - The plugin prevents others from embedding your site.
- [**Disable Emojis**](https://wordpress.org/plugins/disable-emojis/) - The plugin disables the new WordPress emoji functionality.
- [**Disable WP REST API**](https://wordpress.org/plugins/disable-wp-rest-api/) - The plugin disables the REST API for visitors.
- [**Email Log**](https://wordpress.org/plugins/email-log/) - The plugin that allows you to log and view all emails sent from WordPress.
- [**Hide Updates**](https://wordpress.org/plugins/hide-updates/) - The plugin hides update notices for updates in WordPress.
- [**Nietzsche**](https://wordpress.org/plugins/nietzsche/) - The plugin light and fast `wp_head()` cleaner.
- [**WP Migrate DB**](https://wordpress.org/plugins/wp-migrate-db/) - The plugin help you export your database as a MySQL data dump.

If you know of a plugin which would fit on this list, please [open an issue](https://github.com/wordplate/wordplate.github.io) on GitHub!
