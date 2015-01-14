//Written by Stephen Fornal on 2015/01/14
'use strict';

//Compile SCSS to a CSS file
module.exports = {
    options: {
        trace: false
    },

    dev: {
        options: {
            debugInfo: true,
            style: 'expanded',
            lineNumbers: true
        },
        files:[{
            expand: true,
            cwd: 'src/',
            src: ['**/*.{scss,sass}'],
            dest: 'src/'
        }]
    },

    prod: {
        options: {
            debugInfo: false,
            style: 'compressed',
            lineNumbers: false,

        },
        files:[{
            expand: true,
            cwd: 'src/',
            src: ['**/*.{scss,sass}'],
            dest: 'src/'
        }]
    }
};
