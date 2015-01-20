//Written by Stephen Fornal on 2015/01/14
'use strict';

//Minify css files in the dist directory
module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: 'dist/_resources/css',
            src: ['**/*.css'],
            dest: 'dist/_resources/css',
            //ext: 'min.css'
        }]
    }
};
