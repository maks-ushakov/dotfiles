'use strict'
/* Task Assets
 * copy files from source directory to destinstion directory
 *
 * Options:
 *	src: source directory
 *	dest: destination directory
 *	debug: (boolean) show file-name of use
 */

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

module.exports = function(options) {
	return function() {
		var isDebug = options.debug || false;
		return gulp.src(options.src + '/**/*.*', {since: gulp.lastRun(options.taskName)})
			.pipe($.newer(options.dest))
			.pipe($.if(isDebug, $.debug({title: options.taskName + ' ->'})))
			.pipe(gulp.dest(options.dest));
	};
};

