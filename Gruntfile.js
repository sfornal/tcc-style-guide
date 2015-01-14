//Written by [name] on [date]
//For the [Project] Project
'use strict';

module.exports = function(grunt) {

	//Time the build tasks. Useful and fun info!
	require('time-grunt')(grunt);

    /* global path */
    //Load all Grunt tasks automagically
    require('load-grunt-config')(grunt, {
        //Use Just-In-Time task loading for a significant savings
        jitGrunt: true,

        //Path to find task configurations
        configPath: path.join(process.cwd(), 'grunt'),

        init: true,

        data: {
            publishPath: 'path/to/publish/using/copy'
        }
    });
};
