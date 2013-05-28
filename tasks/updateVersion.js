module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('updateVersion', 'Update the version number in all relevant *.json files.', function() {
		var filename,
			files,
			json;

		grunt.config.requires('updateVersion.files');

		files = grunt.config('updateVersion.files');

		for (var i = files.length - 1; i >= 0; i--) {
			filename = files[i];

			// Warn on and remove invalid source files (if nonull was set).
			if (!grunt.file.exists(filename)) {
				grunt.log.warn('Source file not found at "' + filename + '"');
				return false;
			}

			grunt.log.writeln('Updating Banner for: '+filename);

			json = grunt.file.readJSON(filename);

			json.version = grunt.config('meta.version');

			grunt.file.write(filename, JSON.stringify(json, null, 4));

			grunt.log.writeln('Done updating version in: '+filename);
		}
	});
};