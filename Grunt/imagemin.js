//Written by Stephen Fornal on 2015/01/14
'use strict';

//Copy images to dist folder, and additionally apply optimizations
//to jpeg, png, and svg files

module.exports = {
    options: {
        optimizationLevel: 7,
        progressive: true,
        interlaced: true
    },
    default: {
        files:[{
            expand: true,
            cwd: 'src/',
            src: ['**/*.jpg,jpeg,gif,png,svg,svgz', '!_resources/fonts/**.{svg,svgz}'],
            dest: 'dist/'
        }]
    }
};
