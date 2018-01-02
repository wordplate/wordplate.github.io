---
layout: page
title: Mail
---

To send email with WordPress you can use the [`wp_mail`](https://developer.wordpress.org/reference/functions/wp_mail) helper method. WordPlate provides a simple way to add custom SMTP credentials.

## Installation

Require the [mail package](https://github.com/wordplate/mail#readme), with [Composer](https://getcomposer.org), in the root directory of your project.

```sh
$ composer require wordplate/mail
```

Then update the credentials in your `.env` environment file with your SMTP keys.

```
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
```

Then login to the WordPress administrator dashboard and active the plugin.

Optionally you may also specify the global "from" address and name.

```
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME=null
```

Please visit the [WordPress documentation](https://developer.wordpress.org/reference/hooks/phpmailer_init) to read more about the `phpmailer_init` action hook.
