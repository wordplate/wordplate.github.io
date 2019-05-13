# Helpers

WordPlate includes a variety of "helper" PHP functions. You are free to use them in your own applications if you find them convenient.

WordPlate support both Laravel's [collections](https://laravel.com/docs/5.8/collections) and [helper methods](https://laravel.com/docs/5.8/helpers#available-methods). This means you can use great debugging methods such as [`dd()`](https://laravel.com/docs/5.8/helpers#method-dd) and string helpers like [`str_contains()`](https://laravel.com/docs/5.8/helpers#method-str-contains).

WordPlate also provides a set of custom helper functions which you may use in your application:

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

// /var/www/public/themes/wordplate/components/article.php
```

#### `stylesheet_url()`

The `stylesheet_url()` function returns the stylesheet directory URI for the current theme/child theme.

```php
$path = stylesheet_url();

$path = stylesheet_url('img/photo.jpg');

// http://example.com/themes/wordplate/images/photo.jpg
```

#### `template_path()`

The `template_path()` function returns the fully qualified path to the current theme directory or to the parent theme if a child theme is being used.

```php
$path = template_path();

$path = template_path('components/article.php');

// /var/www/public/themes/wordplate/components/article.php
```

#### `template_slug()`

The `template_slug()` function returns a page template slug without directory and file extension.

```php
echo template_slug($post); // about

echo get_page_template_slug($post); // page-templates/about.php
```

#### `template_url()`

The `template_url()` function returns the the current theme directory URI or to the parent theme if a child theme is being used.

```php
$path = template_url();

$path = template_url('img/photo.jpg');

// http://example.com/themes/wordplate/images/photo.jpg
```
