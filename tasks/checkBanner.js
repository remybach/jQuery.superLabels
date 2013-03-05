module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('checkBanner', 'Update the banner of the given file.', function() {
		var banner, filename;

		grunt.config.requires('minify.filename');

		banner = grunt.config('meta.banner');
		filename = grunt.config('minify.filename');

		var src;
		
		// Warn on and remove invalid source files (if nonull was set).
		if (!grunt.file.exists(filename)) {
			grunt.log.warn('Source file not found at "' + filename + '"');
			return false;
		}

		grunt.log.writeln('Updating Banner for: '+filename);

		src = grunt.file.read(filename);

		// Strip out the existing banner
		src = src.replace(/\/\*![\r\n] \*\sTitle(.|[\r\n])*?\*\/[\r\n];/gm, banner);

		grunt.file.write(filename, src);

		grunt.log.writeln('Done updating banner in: '+filename);
		
	});
};