---
layout: page
title: Taxonomies
---

## Taxonomies

For [taxonomies](https://developer.wordpress.org/plugins/taxonomies) we recommend looking at [Extended Taxonomies
](https://github.com/johnbillion/extended-taxos#readme) by [John Blackbourn](https://github.com/johnbillion). The package provides extended functionality to WordPress custom taxonomies, allowing developers to quickly build custom taxonomies without having to write the same code again and again.

## Installation

Require the [mail package](https://github.com/wordplate/mail#readme), with [Composer](https://getcomposer.org), in the root directory of your project.

```sh
$ composer require johnbillion/extended-taxos
```

Then require the plugin in your `functions.php` file. You may use WordPlate's [`base_path`](/docs/helpers#base_path) helper function.

```php
require base_path('vendor/johnbillion/extended-taxos/extended-taxos.php');
```

Now you can register new custom post types with the `register_extended_taxonomy` helper function. 

```php
register_extended_taxonomy('location', 'event');
```

Visit the [documentation](https://github.com/johnbillion/extended-taxos#readme) to read more about the plugin.
