//Written by Stephen Fornal on 2015/01/14
'use strict';

//Watch for changes in filesystem and run tasks
//Trigger a live reload if sccs, html, or js changes
module.exports = {
    js: {
        files: ['src/**/*.js', '!src/_resources/vendor/**/*.js', '!src/**/*.min.js'],
        tasks: ['jshint:default', 'uglify']
    },
    scss: {
        files: ['src/**/*.{scss,sass}'],
        tasks: ['sass:dev', 'autoprefixer:dev']
    },
    html: {
        files: ['src/**/*.{html,htm,shtml,shtm,asp,aspx,php}'],
        tasks: ['copy:html']
    },
    ssi: {
        files: ['src/**/*.{inc,ssi}'],
        tasks: ['copy:ssi']
    },
    livereload: {
        files: ['dist/**/*'],
        options: {
            livereload: true
        }
    }
};
