let mix = require('laravel-mix');
var LiveReloadPlugin = require('webpack-livereload-plugin');

mix.sass('src/scss/app.scss', 'public/css');

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
});

mix.disableSuccessNotifications();
