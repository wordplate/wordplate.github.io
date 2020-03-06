# Installation

To use WordPlate, you need to have PHP 7.2+ installed on your machine. You'll also optionally need [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com) installed if you want to use [Laravel Mix](https://laravel.com/docs/7.x/mix) to compile your CSS and JavaScript.

Install WordPlate by issuing the Composer `create-project` command in your terminal:

```bash
$ composer create-project wordplate/wordplate
```

<Note type="tip" label>

Are you a visual learner? WordPlate provides a [free, thorough introduction to WordPlate](https://www.youtube.com/playlist?list=PLigSAMFNpkZiVpi0rSzoWhS4qa4JPq09O) for newcomers to the framework. It's a great place to start your journey.

</Note>

#### Laravel Valet

If you're using [Laravel Valet](https://laravel.com/docs/7.x/valet) together with WordPlate, you may use our local valet driver. Create a file named `LocalValetDriver.php` in the root of your WordPlate project and copy and paste the class below:

```php
<?php

declare(strict_types=1);

final class LocalValetDriver extends BasicValetDriver
{
    public function serves(string $sitePath): bool
    {
        return is_dir($sitePath . '/vendor/wordplate/framework');
    }

    /**
     * @return false|string
     */
    public function isStaticFile(string $sitePath, string $siteName, string $uri)
    {
        $staticFilePath = $sitePath . '/public' . $uri;

        if ($this->isActualFile($staticFilePath)) {
            return $staticFilePath;
        }

        return false;
    }

    public function frontControllerPath(string $sitePath, string $siteName, string $uri): string
    {
        $_SERVER['PHP_SELF'] = $uri;
        $_SERVER['SERVER_NAME'] = $_SERVER['HTTP_HOST'];

        if (strpos($uri, '/wordpress/') === 0) {
            if (is_dir($sitePath . '/public' . $uri)) {
                $uri = $this->forceTrailingSlash($uri);

                return $sitePath . '/public' . $uri . '/index.php';
            }

            return $sitePath . '/public' . $uri;
        }

        return $sitePath . '/public/index.php';
    }

    private function forceTrailingSlash(string $uri): string
    {
        if (substr($uri, -1 * strlen('/wordpress/wp-admin')) == '/wordpress/wp-admin') {
            header('Location: ' . $uri . '/');
            die;
        }

        return $uri;
    }
}
```
