FROM php:8.3-fpm

WORKDIR /var/www

RUN apt-get update && apt-get install -y \
    git \
		curl \
		zip \
		unzip \
		libzip-dev \
		libpng-dev \
		libjpeg-dev \
		libfreetype6-dev \
		libonig-dev \
		vim \
		&& docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql zip \
		&& apt-get clean \
		&& rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY . /var/www

COPY docker/php/php.ini /usr/local/etc/php/

RUN chown -R www-data:www-data /var/www
