module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('checkjQueryJSON', 'Update the version number in the jquery.json file.', function() {
		var filename;

		grunt.config.requires('checkjQueryJSON.filename');

		filename = grunt.config('checkjQueryJSON.filename');

		var json;
		
		// Warn on and remove invalid source files (if nonull was set).
		if (!grunt.file.exists(filename)) {
			grunt.log.warn('Source file not found at "' + filename + '"');
			return false;
		}

		grunt.log.writeln('Updating Banner for: '+filename);

		json = grunt.file.readJSON(filename);

		json.version = grunt.config('meta.version');

		grunt.file.write(filename, JSON.stringify(json));

		grunt.log.writeln('Done updating version in: '+filename);
	});
};