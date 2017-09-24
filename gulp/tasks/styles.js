'use strict'
/* task styles
* Find main .less files in source directory
* and convert to .css
* if less files have an error than notify for this.
*
* option:
*	src: main source file
*	main: main source file(s) (default all files in dir)
*	dest: destination directory
*	isDev: (boolean) development flag
*   debug: (boolean) show file-name of use
*/
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var combine = require('stream-combiner2').obj;
//var less = require('gulp-sources-less');

var multiPipe = require('multipipe');

module.exports = function(options) {
	var isDebug = options.debug || false;
	var mainLess = options.main || '/**/*.less';
	var isDev = options.isDev;
	return function() {
		return multiPipe(
			gulp.src(options.src + '/' + mainLess),
			$.if(isDev, $.sourcemaps.init()),
			$.if(isDebug, $.debug({title: options.taskName + ' Input ->'})),
			
			$.less(),
			$.if(isDev, $.sourcemaps.write('.')),
			$.if(isDebug, $.debug({title: options.taskName + ' Output ->'})),
			gulp.dest(options.dest)
		).on('error',  $.notify.onError(function(err){
				return {
					title: "LESS error",
					message: err.message
				};
			})
		);
	};
}
