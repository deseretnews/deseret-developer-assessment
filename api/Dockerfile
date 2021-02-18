FROM php:7.4-fpm
WORKDIR "/var/www/html"
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

RUN apt-get update && apt-get install -y libpq-dev

RUN docker-php-ext-install \
    pgsql \
    pdo \
    pdo_pgsql
RUN docker-php-ext-enable \
    pgsql \
    pdo \
    pdo_pgsql
RUN yes | pecl install xdebug \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/20-xdebug.ini

RUN pecl install apcu \
    && docker-php-ext-enable apcu \
    && pecl clear-cache
