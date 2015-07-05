module.exports = function( grunt ) {
	/*
	 * Report on time taken for grunt tasks
	 */
	require( 'time-grunt' )( grunt );

	/*
	 * Load all Grunt tasks
	 */

	require( 'load-grunt-tasks' )( grunt );
	grunt.loadNpmTasks( 'assemble' );


	/*
	 * Define variables for tasks
	 */

	var vars = {
		pkg: grunt.file.readJSON( 'package.json' ),
		assetsFolder: 'assets',
		assetsBuildFolder: 'assets/build',
		patternsFolder: 'patterns',
		patternsBuildFolder: 'patterns/build'
	};


	/*
	 * Set location to load grunt tasks form
	 */

	vars.config = {
		src: 'tasks/*.js'
	};

	var configs = require( 'load-grunt-configs' )( grunt, vars );

	grunt.initConfig( configs );


	/*
	 * Define tasks
	 */

	grunt.registerTask( 'dev', [
		'concurrent:cssDev',
		'concurrent:jsDev',
		'concurrent:patterns',
		'watch'
	]);

	grunt.registerTask( 'build', [
		'concurrent:cssBuild',
		'concurrent:jsBuild',
		'concurrent:images',
		'concurrent:patterns',
		'humans_txt'
	]);
};
