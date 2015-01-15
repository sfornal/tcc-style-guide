//Written by Stephen Fornal on 2015/01/14
'use strict';

//Minify js files to the dist directory
module.exports = {
    options: {
        mangle: true,
        compress: {
            'sequences': true,
            'dead_code': true,
            'conditionals': true,
            'booleans': true,
            'unused': true,
            'if_return': true,
            'join_vars': true,
            'drop_console': true
        }
    },

    default: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.js', '!**/*.min.js', '!_resources/vendor/**'],
            dest: 'dist/'
        }]
    }
};
