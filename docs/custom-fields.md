---
layout: page
title: Custom Fields
image: https://user-images.githubusercontent.com/499192/34915298-1782a500-f924-11e7-85a7-dc7de6aacc14.png
---

[![Advanced Custom Fields]({{page.image}})](https://github.com/wordplate/acf#readme)

We're big fans of the [Advanced Custom Fields](http://www.advancedcustomfields.com) plugin by [Elliot Condon](https://www.elliotcondon.com/). Advanced Custom Fields is the perfect solution for any WordPress website which needs more flexible data like other content management systems.

If you're like us and prefer to write your fields in PHP you should checkout out our [ACF package](https://github.com/wordplate/acf#readme). It provides a simple API to create your custom fields in PHP. Visit the [documentation](https://github.com/wordplate/acf#readme) to read more about the package.

Below is an example of adding custom fields with the [advanced custom fields package](https://github.com/wordplate/acf#readme).

```php
$fields = [
    acf_image(['name' => 'image', 'label' => 'Image']),
    acf_text(['name' => 'title', 'label' => 'Title']),
];

$location = [
    [
        acf_location('post_type', 'page')
    ],
];

acf_field_group([
    'title' => 'About',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
]);
```
  