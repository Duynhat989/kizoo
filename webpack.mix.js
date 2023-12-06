let mix = require('laravel-mix');

mix.setPublicPath('./')
    // .sass('src/assets/css/bootstrap.min.css', 'dist/css')
    .js('src/assets/js/background.js', 'dist/js')
    .js('src/assets/js/content.js', 'dist/js')
    // .js('src/assets/js/bootstrap.min.js', 'dist/js')
    .js('src/assets/js/popup.js', 'dist/js').vue()
    // .disableNotifications()
    .copy('src/assets/images/', 'dist/images')
    .options({
        processCssUrls: false
    });