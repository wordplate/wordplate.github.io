---
layout: page
title: Plugin Loader
---

With WordPlate you can enable standard plugins to be required just like [must-use](https://codex.wordpress.org/Must_Use_Plugins) plugins.

> _Must-use plugins (a.k.a. mu-plugins) are plugins installed in a special directory inside the content folder and which are automatically enabled on all sites in the installation - [WordPress](https://codex.wordpress.org/Must_Use_Plugins)_

{% include youtube.html %}

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

If you want to read more about plugins in WordPlate, please see the [plugins page](/docs/plugins).
