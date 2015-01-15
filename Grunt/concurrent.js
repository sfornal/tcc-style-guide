//Written by Stephen Fornal on 2015/01/14
'use strict';

//Run two or more build tasks concurrently
module.exports = {
    options: {
        limit: 12, //2 <= limit <= 2x cpu cores
        logConcurrentOutput: false
    },
    devFirst: {
        tasks: ['clean', 'jshint:default', 'sass:dev']
    },
    devSecond: {
        tasks: ['copy:html', 'copy:ssi', 'copy:fonts', 'copy:vendor', 'uglify', 'autoprefixer:dev']
    },
    imgFirst: {
        tasks: ['imagemin', 'copy:images']
    },
    prodFirst: {
        tasks: ['clean', 'jshint:default', 'sass:prod']
    },
    prodSecond: {
        tasks: ['copy:html', 'copy:ssi', 'copy:fonts', 'copy:vendor', 'uglify', 'autoprefixer:prod']
    },
    devwatch: {
        tasks: ['connect:devwatch', 'watch']
    }
};
