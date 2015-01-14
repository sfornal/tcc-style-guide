//Written by Stephen Fornal on 2015/01/14
'use strict';

//Copy contents from one place to another
module.exports = {
    //Copy everything not covered by a different build process:
    // - HTML
    // - Includes
    // - Fonts
    dev: {
        files: [
            { //HTML
                expand: true,
                cwd: 'src/',
                src: ['**/*.{html,htm,shtml,shtm,asp,aspx,php}'],
                dest: 'dist/'
            },
            { //Server Side Includes
                expand: true,
                cwd: 'src/',
                src: ['**/*.inc'],
                dest: 'dist/'
            },
            { //Fonts
                expand: true,
                cwd: 'src/',
                src: ['**/*.{woff,otf,eot,ttf,svg,svgz}'],
                dest: 'dist/'
            },
        ]
    },

    //Copy everything not covered by a different build process:
    // - HTML
    // - Includes
    // - Fonts
    devwatch: {
        files: [
            { //Server Side Includes
                expand: true,
                cwd: 'src/',
                src: ['**/*.inc'],
                dest: 'dist/'
            },
            { //Fonts
                expand: true,
                cwd: 'src/',
                src: ['**/*.{woff,otf,eot,ttf,svg,svgz}'],
                dest: 'dist/'
            },
        ]
    },

    //Copy everything not covered by a different build process:
    // - HTML
    // - Includes
    // - Fonts
    prod: {
        files: [
            { //HTML
                expand: true,
                cwd: 'src/',
                src: ['**/*.{html,htm,shtml,shtm,asp,aspx,php}'],
                dest: 'dist/'
            },
            { //Server Side Includes
                expand: true,
                cwd: 'src/',
                src: ['**/*.{inc,ssi}'],
                dest: 'dist/'
            },
            { //Fonts
                expand: true,
                cwd: 'src/',
                src: ['**/*.{woff,otf,eot,ttf,svg,svgz}'],
                dest: 'dist/'
            },
        ]
    },

    //Copy images not copied by imagemin
    images: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.{ico,bmp,tif,webp}'],
            dest: 'dist/'
        }]
    },

    //Copy everything in dist to the designated publish path.
    //I use this to copy to the network share that is mapped to my dev
    //server root
    publish: {
        files: [{
            expand: true,
            cwd: 'dist/',
            src: ['**/*'],
            dest: '<%= publishPath =>'
        }]
    }
};
