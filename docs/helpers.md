---
layout: page
title: Helpers
---

WordPlate includes a variety of "helper" PHP functions. You are free to use them in your own applications if you find them convenient.

WordPlate support both Laravel's [collections](https://laravel.com/docs/5.6/collections) and [helper methods](https://laravel.com/docs/5.6/helpers#available-methods). This means you can use great debugging methods such as [`dd()`](https://laravel.com/docs/5.6/helpers#method-dd) and string helpers like [`str_contains()`](https://laravel.com/docs/5.6/helpers#method-str-contains).

#### Available Methods

Below is a list of all supported helper methods.

Arrays | Strings | Miscellaneous | Paths
------ | ------- | ------------- | -----
[array_add](https://laravel.com/docs/5.6/helpers#method-array-add) | [camel_case](https://laravel.com/docs/5.6/helpers#method-camel-case) | [asset](https://laravel.com/docs/5.6/helpers#method-asset)  | [base_path](#base_path)
[array_collapse](https://laravel.com/docs/5.6/helpers#method-array-collapse) | [class_basename](https://laravel.com/docs/5.6/helpers#method-class-basename) | [collect](https://laravel.com/docs/5.6/helpers#method-collect) | [mix](https://laravel.com/docs/5.6/helpers#method-mix)
[array_divide](https://laravel.com/docs/5.6/helpers#method-array-divide) | [e](https://laravel.com/docs/5.6/helpers#method-e) | [dd](https://laravel.com/docs/5.6/helpers#method-dd) | [stylesheet_path](#stylesheet_path)
[array_dot](https://laravel.com/docs/5.6/helpers#method-array-dot) | [ends_with](https://laravel.com/docs/5.6/helpers#method-ends-with) | [dump](https://laravel.com/docs/5.6/helpers#method-dd) | [template_path](#template_path)
[array_except](https://laravel.com/docs/5.6/helpers#method-array-except) | [snake_case](https://laravel.com/docs/5.6/helpers#method-snake-case) | [env](https://laravel.com/docs/5.6/helpers#method-env) |
[array_first](https://laravel.com/docs/5.6/helpers#method-array-first) | [starts_with](https://laravel.com/docs/5.6/helpers#method-starts-with) | [value](https://laravel.com/docs/5.6/helpers#method-value) |
[array_flatten](https://laravel.com/docs/5.6/helpers#method-array-flatten) | [str_after](https://laravel.com/docs/5.6/helpers#method-str-after) | |
[array_forget](https://laravel.com/docs/5.6/helpers#method-array-forget) | [str_contains](https://laravel.com/docs/5.6/helpers#method-str-contains) | |
[array_get](https://laravel.com/docs/5.6/helpers#method-array-get) | [str_finish](https://laravel.com/docs/5.6/helpers#method-str-finish) |  |
[array_has](https://laravel.com/docs/5.6/helpers#method-array-has) | [str_is](https://laravel.com/docs/5.6/helpers#method-str-is) |  |
[array_last](https://laravel.com/docs/5.6/helpers#method-array-last) | [str_limit](https://laravel.com/docs/5.6/helpers#method-str-limit) |  |
[array_only](https://laravel.com/docs/5.6/helpers#method-array-only) | [str_plural](https://laravel.com/docs/5.6/helpers#method-str-plural) |  |
[array_pluck](https://laravel.com/docs/5.6/helpers#method-array-pluck) | [str_random](https://laravel.com/docs/5.6/helpers#method-str-random) |  |
[array_prepend](https://laravel.com/docs/5.6/helpers#method-array-prepend) | [str_singular](https://laravel.com/docs/5.6/helpers#method-str-singular) |  |
[array_pull](https://laravel.com/docs/5.6/helpers#method-array-pull) | [str_slug](https://laravel.com/docs/5.6/helpers#method-str-slug) |  |
[array_set](https://laravel.com/docs/5.6/helpers#method-array-set) | [studly_case](https://laravel.com/docs/5.6/helpers#method-studly-case) |  |
[array_sort](https://laravel.com/docs/5.6/helpers#method-array-sort) | [title_case](https://laravel.com/docs/5.6/helpers#method-title-case)  |  |
[array_sort_recursive](https://laravel.com/docs/5.6/helpers#method-array-sort-recursive) |  |  |
[array_where](https://laravel.com/docs/5.6/helpers#method-array-where) |  |  |
[head](https://laravel.com/docs/5.6/helpers#method-head) |  |  |
[last](https://laravel.com/docs/5.6/helpers#method-last) |  |  |

#### `base_path()`

The `base_path()` function returns the fully qualified path to the project root. You may also use the `base_path()` function to generate a fully qualified path to a given file relative to the project root directory.

```php
$path = base_path();

$path = base_path('vendor/bin');
```

#### `stylesheet_path()`

The `stylesheet_path()` function returns the fully qualified path for the current/child theme directory.

```php
$path = stylesheet_path();

$path = stylesheet_path('components/article.php');
```

#### `template_path()`

The `template_path()` function returns the fully qualified path to the current theme directory or to the parent theme if a child theme is being used.

```php
$path = template_path();

$path = template_path('components/article.php');
```
