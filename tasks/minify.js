module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('minify', 'Strip out some of the guff and uglify.', function() {
		var dest,
			filename;

		// Fail task if we don't know which file/s to minify or where to put them
		grunt.config.requires('minify.dest');
		grunt.config.requires('minify.filename');

		dest = grunt.config('minify.dest');
		filename = grunt.config('minify.filename');

		var src;
		
		// Warn on and remove invalid source files (if nonull was set).
		if (!grunt.file.exists(filename)) {
			grunt.log.warn('Source file not found at "' + filename + '"');
			return false;
		}

		grunt.log.writeln('Minifying: '+filename);

		src = grunt.file.read(filename);

		// Strip out anything we don't want in the minified version.
		src = src.replace(/\/\* nominify \*\/(.|[\r\n])*?\/\* \/nominify \*\//gm, '');

		grunt.file.write(dest, src);

		grunt.task.run('uglify');

		grunt.log.writeln('Done minifying, stripped and uglified file is at: '+dest);
		
	});
};