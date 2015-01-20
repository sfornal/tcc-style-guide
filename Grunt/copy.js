//Written by Stephen Fornal on 2015/01/14
'use strict';

//Copy contents from one place to another
module.exports = {
    //Copy everything not covered by a different build process:
    // - HTML
    // - Includes
    // - Fonts
    // - Vendor Libraries
    html: {
        files: [
            { //HTML
                expand: true,
                cwd: 'src/',
                src: ['**/*.{html,htm,shtml,shtm,asp,aspx,php}', '!_resources/vendor/**'],
                dest: 'dist/'
            }]
    },
    ssi: {
        files: [{
            //Server Side Includes
            expand: true,
            cwd: 'src/',
            src: ['**/*.{inc,ssi}'],
            dest: 'dist/'
        }]
    },
    fonts: {
        files: [{
            //Fonts
            expand: true,
            cwd: 'src/',
            src: ['**/*.{woff,otf,eot,ttf,svg,svgz}'],
            dest: 'dist/'
        }]
    },
    vendor: {
        files: [{
            //Vendor Libraries
            expand: true,
            cwd: 'src/_resources/vendor',
            src: ['*/dist/*.min.js'],
            dest: 'dist/_resources/vendor'
        }]
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
