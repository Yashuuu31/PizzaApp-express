const { setPublicPath } = require('laravel-mix');
const mix = require('laravel-mix')

mix.js('resources/js/app.js', 'js/app.js').sass('resources/scss/app.scss', 'css/app.css').setPublicPath('public');