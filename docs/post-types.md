---
layout: page
title: Post Types
redirect_from:
  - /docs/taxonomies
---

For [custom post types](https://developer.wordpress.org/plugins/post-types/registering-custom-post-types) and [taxonomies](https://developer.wordpress.org/plugins/taxonomies) we recommend looking at [Extended CPTs](https://github.com/johnbillion/extended-cpts#readme) by [John Blackbourn](https://github.com/johnbillion). Extended CPTs is a library which provides extended functionality to WordPress custom post types and taxonomies. This allows developers to quickly build post types and taxonomies without having to write the same code again and again.

## Installation

Require the [extended-cpts package](https://github.com/johnbillion/extended-cpts#readme), with [Composer](https://getcomposer.org), in the root directory of your project.

```sh
$ composer require johnbillion/extended-cpts
```

Now you can register new custom post types and taxonomies with the `register_extended_post_type` and `register_extended_taxonomy` helper functions. 

```php
add_action('init', function() {
  register_extended_post_type('event');

  register_extended_taxonomy('location', 'event');
});
```

Visit the [documentation](https://github.com/johnbillion/extended-cpts#readme) to read more about the plugin.
