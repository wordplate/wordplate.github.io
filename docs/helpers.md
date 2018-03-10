---
layout: page
title: Helpers
---

WordPlate includes a variety of "helper" PHP functions. You are free to use them in your own applications if you find them convenient.

WordPlate support both Laravel's [collections](https://laravel.com/docs/5.6/collections) and [helper methods](https://laravel.com/docs/5.6/helpers#available-methods). This means you can use great debugging methods such as [`dd()`](https://laravel.com/docs/5.6/helpers#method-dd) and string helpers like [`str_contains()`](https://laravel.com/docs/5.6/helpers#method-str-contains).

#### Arrays & Objects
 
[array_add](https://laravel.com/docs/5.6/helpers#method-array-add)
[array_collapse](https://laravel.com/docs/5.6/helpers#method-array-collapse)
[array_divide](https://laravel.com/docs/5.6/helpers#method-array-divide)
[array_dot](https://laravel.com/docs/5.6/helpers#method-array-dot)
[array_except](https://laravel.com/docs/5.6/helpers#method-array-except)
[array_first](https://laravel.com/docs/5.6/helpers#method-array-first)
[array_flatten](https://laravel.com/docs/5.6/helpers#method-array-flatten)
[array_forget](https://laravel.com/docs/5.6/helpers#method-array-forget)
[array_get](https://laravel.com/docs/5.6/helpers#method-array-get)
[array_has](https://laravel.com/docs/5.6/helpers#method-array-has)
[array_last](https://laravel.com/docs/5.6/helpers#method-array-last)
[array_only](https://laravel.com/docs/5.6/helpers#method-array-only)
[array_pluck](https://laravel.com/docs/5.6/helpers#method-array-pluck)
[array_prepend](https://laravel.com/docs/5.6/helpers#method-array-prepend)
[array_pull](https://laravel.com/docs/5.6/helpers#method-array-pull)
[array_set](https://laravel.com/docs/5.6/helpers#method-array-set)
[array_sort_recursive](https://laravel.com/docs/5.6/helpers#method-array-sort-recursive)
[array_sort](https://laravel.com/docs/5.6/helpers#method-array-sort)
[array_where](https://laravel.com/docs/5.6/helpers#method-array-where)
[array_wrap](https://laravel.com/docs/5.6/helpers#array-wrap)
[data_fill](https://laravel.com/docs/5.6/helpers#data-fill)
[data_get](https://laravel.com/docs/5.6/helpers#data-get)
[data_set](https://laravel.com/docs/5.6/helpers#data-set)
[head](https://laravel.com/docs/5.6/helpers#method-head)
[last](https://laravel.com/docs/5.6/helpers#method-last)
[object_get](https://laravel.com/docs/5.6/helpers#object-get)

#### Strings

[camel_case](https://laravel.com/docs/5.6/helpers#method-camel-case)
[class_basename](https://laravel.com/docs/5.6/helpers#method-class-basename)
[e](https://laravel.com/docs/5.6/helpers#method-e)
[ends_with](https://laravel.com/docs/5.6/helpers#method-ends-with)
[kebab_case](https://laravel.com/docs/5.6/helpers#kebab-case)
[preg_replace_array](https://laravel.com/docs/5.6/helpers#preg-replace-array)
[snake_case](https://laravel.com/docs/5.6/helpers#method-snake-case)
[starts_with](https://laravel.com/docs/5.6/helpers#method-starts-with)
[str_after](https://laravel.com/docs/5.6/helpers#method-str-after)
[str_contains](https://laravel.com/docs/5.6/helpers#method-str-contains)
[str_finish](https://laravel.com/docs/5.6/helpers#method-str-finish)
[str_is](https://laravel.com/docs/5.6/helpers#method-str-is)
[str_limit](https://laravel.com/docs/5.6/helpers#method-str-limit)
[str_plural](https://laravel.com/docs/5.6/helpers#method-str-plural)
[str_random](https://laravel.com/docs/5.6/helpers#method-str-random)
[str_replace_array](https://laravel.com/docs/5.6/helpers#str-replace-array)
[str_replace_first](https://laravel.com/docs/5.6/helpers#str-replace-first)
[str_replace_last](https://laravel.com/docs/5.6/helpers#str-replace-last)
[str_singular](https://laravel.com/docs/5.6/helpers#method-str-singular)
[str_slug](https://laravel.com/docs/5.6/helpers#method-str-slug)
[studly_case](https://laravel.com/docs/5.6/helpers#method-studly-case)
[title_case](https://laravel.com/docs/5.6/helpers#method-title-case)

#### Miscellaneous

[blank](https://laravel.com/docs/5.6/helpers#blank)
[class_uses_recursive](https://laravel.com/docs/5.6/helpers#class-uses-recursive)
[collect](https://laravel.com/docs/5.6/helpers#method-collect)
[dd](https://laravel.com/docs/5.6/helpers#method-dd)
[dump](https://laravel.com/docs/5.6/helpers#method-dump)
[env](https://laravel.com/docs/5.6/helpers#method-env)
[filled](https://laravel.com/docs/5.6/helpers#filled)
[optional](https://laravel.com/docs/5.6/helpers#optional)
[retry](https://laravel.com/docs/5.6/helpers#retry)
[tap](https://laravel.com/docs/5.6/helpers#tap)
[throw_if](https://laravel.com/docs/5.6/helpers#throw-if)
[throw_unless](https://laravel.com/docs/5.6/helpers#throw-unless)
[trait_uses_recursive](https://laravel.com/docs/5.6/helpers#trait-uses-recursive)
[transform](https://laravel.com/docs/5.6/helpers#transform)
[value](https://laravel.com/docs/5.6/helpers#method-value)

#### Paths

[asset](https://laravel.com/docs/5.6/helpers#method-asset)
[base_path](#base_path)
[mix](https://laravel.com/docs/5.6/helpers#method-mix)
[stylesheet_path](#stylesheet_path)
[template_path](#template_path)

---

Below you'll find WordPlate specific helper functions.

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
