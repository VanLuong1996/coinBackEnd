'use strict';

//basic configuration object used by gulp tasks
module.exports = {
    port: 3000,
    tmp: 'build/tmp',
    dist: 'build/dist',
    base: 'app',
    tpl: 'app/html/**/*.html',
    mainScss: 'app/app.scss',
    scss: 'app/**/*.scss',
    js: [
        'app/layout/**/*.js',
        'app/shared/**/*.js',
        '!app/vendor/**/*.js'
    ],
    index: 'app/index.html',
    assets: 'app/assets/**',
    images: 'app/assets/img/**/*',
    banner: ['/**',
        ' * generator-cg-gas - Yeoman Generator for Enterprise Angular projects, with Gulp Angular Sass',
        ' * @version v3.3.4',
        ' * @link https://github.com/Lunatic83/generator-cg-gas',
        ' * @license ',
        ' */',
        ''
    ].join('\n')
};
