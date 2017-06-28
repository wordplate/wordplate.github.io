---
layout: page
title: Mail
---

To send email with WordPress you can use the [`wp_mail`](https://developer.wordpress.org/reference/functions/wp_mail) helper method. WordPlate provides a simple way to add custom SMTP credentials.

Require the [mail package](https://github.com/wordplate/mail#readme) in the root directory of your project.

```sh
$ composer require wordplate/mail
```

Then update the credentials in your `.env` environment file with your SMTP keys and you're good to go. Please visit the [WordPress documentation](https://developer.wordpress.org/reference/hooks/phpmailer_init) to read more about the `phpmailer_init` action hook.
