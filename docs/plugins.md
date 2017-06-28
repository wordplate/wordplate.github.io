---
layout: page
title: Plugins
---

[WordPress Packagist](https://wpackagist.org) comes straight out of the box with WordPlate. It mirrors the WordPress [plugin](https://plugins.svn.wordpress.org) and [theme](https://themes.svn.wordpress.org) directories as a Composer repository.

#### How do I use it?

Require the desired plugin or theme using `wpackagist-plugin` or `wpackagist-theme` as the vendor name.

```bash
$ composer require wpackagist-plugin/hide-updates
```

Packages are installed to `public/plugins` or `public/themes`.

#### Example

This is an example of how your [`composer.json`](composer.json) file might look like.

```json
"require": {
    "wordplate/framework": "^6.0",
    "wpackagist-plugin/hide-updates": "^1.0"
},
```

Please visit [WordPress Packagist](https://wpackagist.org) website for more information and examples.

#### Autoloader

If you want to enable standard plugins to be required just like [must-use](https://codex.wordpress.org/Must_Use_Plugins) plugins in WordPlate, [please see our autoloader package](https://github.com/wordplate/autoloader#readme).

#### Plate

[Plate](https://github.com/wordplate/plate#readme) is a plugin with a bunch of defaults to help you make the most out of WordPress. It comes with handy features such as customizing the administrator dashboard. It is required by default. Please see [the documentation](https://github.com/wordplate/plate#readme) for more information.
