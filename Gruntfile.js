/*global module:false*/

module.exports = function(grunt) {
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			version: '<%= pkg.version %>',
			banner: '/*!\n' +
					' *	Title: jQuery Super Labels Plugin - Give your forms a helping of awesome!\n' +
					' *	Author: Rémy Bach\n' +
					' *	Version: <%= pkg.version %>\n' +
					' *	License: http://remybach.mit-license.org\n' +
					' *	Url: http://github.com/remybach/jQuery.superLabels\n' +
					' *	Description:\n' +
					' *	This plugin allows you to display your form labels on top of your form fields, saving you space on your page.\n' +
					' */\n'+
					';'
		},
		jshint: {
			files: ['jquery.superLabels.js'],
			options: {
				// Enforcing
				curly: true,
				immed: true,
				indent: 4,
				latedef: true,
				newcap: true,
				noarg: true,
				noempty: true,
				strict: true,
				sub: true,
				trailing: true,
				undef: true,
				unused: true,
				
				// Relaxing
				boss: true,
				eqnull: true,
				globalstrict: true,
				iterator: true,
				loopfunc: true,
				smarttabs: true,

				// Environments
				browser: true,
				jquery: true,
				nonstandard: true,
				white: false
			}
		},
		checkBanner: {
			filename: 'jquery.superLabels.js'
		},
		checkjQueryJSON: {
			filename: 'superLabels.jquery.json'
		},
		minify: {
			dest: 'jquery.superLabels.min.js',
			filename: 'jquery.superLabels.js'
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'jquery.superLabels.min.js': ['<banner:meta.banner>', 'jquery.superLabels.min.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadTasks('tasks');

	// Default task - Run JS Hint, check the version in the jquery.json file matches what's in packages.json, update the banner in the superlabels file, and minify.
	grunt.registerTask('default', ["jshint", "checkjQueryJSON", "checkBanner", "minify"]);
};