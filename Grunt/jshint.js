//Written by Stephen Fornal on 2015/01/14
'use strict';

//Check your JS files for common problems
module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    default: [
        'src/**/*.js',
        '!src/**/*.min.js',
        '!src/_resources/vendor/**'
    ],
    grunt: [
        'Gruntfile.js',
        'grunt/**/*.js'
    ]
};
