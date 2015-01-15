//Written by Stephen Fornal on 2015/01/14
'use strict';

//Serve the dist folder from this machine, and inject livereload script into html
//This blocks further tasks from running. Should be used concurrently with grunt-contrib-watch

module.exports = {
    devwatch: {
        options: {
            port: 8000,
            protocol: 'http',
            hostname: '*', //Accessible from anywhere. Change if undesired behavior
            base: 'dist/', //Folder to mount and serve
            keepalive: true, //Keeps the server alive, see notes above
            livereload: true, //Injects a livereload script, used in conjunction with grunt-contrib-watch
            open: true, //Open the browser automatically
        },
    }
};
