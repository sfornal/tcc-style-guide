//Written by [name] on [date]
//For the [Project] Project
'use strict';

module.exports = function(grunt) {

	//Time the build tasks. Useful and fun info!
	require('time-grunt')(grunt);

    //Load all Grunt tasks automagically
    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });
};
