---
layout: page
title: Post Types
---

For [custom post types](https://developer.wordpress.org/plugins/post-types/registering-custom-post-types) we recommend looking at [Extended CPTs](https://github.com/johnbillion/extended-cpts#readme) by [John Blackbourn](https://github.com/johnbillion). The package provides extended functionality to WordPress custom post types, allowing developers to quickly build post types without having to write the same code again and again.

## Installation

Require the [mail package](https://github.com/wordplate/mail#readme), with [Composer](https://getcomposer.org), in the root directory of your project.

```sh
$ composer require johnbillion/extended-cpts
```

Then require the plugin in your `functions.php` file. You may use WordPlate's [`base_path`](/docs/helpers#base_path) helper function.

```php
require base_path('vendor/johnbillion/extended-cpts/extended-cpts.php');
```

Now you can register new custom post types with the `register_extended_post_type` helper function.

```php
register_extended_post_type('event');
```

Visit the [documentation](https://github.com/johnbillion/extended-cpts#readme) to read more about the plugin.
