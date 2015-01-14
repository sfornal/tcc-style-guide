//Written by Stephen Fornal on 2015/01/14
'use strict';

//To inject the live reload script, you must include the following comment before
//the closing body tag in all source files you desire live reloading in:
// <!-- inject -->
module.exports = {

    watchdev: {
        scriptSrc: ['grunt/livereload.snippet.js'],
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.{html,htm,shtml,shtm,asp,aspx,php}'],
            dest: 'dist/'
        }]
    }
};
