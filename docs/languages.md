---
layout: page
title: Languages
---

Languages could be installed the same way as [plugins](docs/plugins); requiring each language with Composer from [Koodimonni's repository](https://wp-languages.github.io/).

> _**Note:** This should work out of the box with a new WordPress installation. If you're [having issues](https://github.com/wordplate/wordplate/issues/194#issue-296169157) this page will help you to install custom languages._

Require the desired language using `koodimonni-language` or `koodimonni-plugin-language` as the vendor name. Packages are installed to `public/languages`.

```bash
$ composer require koodimonni-language/core-sv_se
```

This is an example of how your `composer.json` file might look like:

```json
{
    "require": {
        "koodimonni-language/core-sv_se": "^4.9"
    },
    "repositories": [
        {
            "type": "composer",
            "url": "https://wp-languages.github.io"
        }
    ],
    "extra": {
        "dropin-paths": {
            "public/languages/": [
                "vendor:koodimonni-language"
            ]
        }
    }
}
```

Please visit [Composer WordPress language packs](https://wp-languages.github.io/) website for more information and examples.
