'use strict';

/* Task Jade2Html
 *
 * find .jade page files in source directory ONLY and compile to .html
 * Sub-directory do not use.
 *
 * Option:
 *	src: source directory
 *	dest: destination directory
 *	debug: (boolean)
 */
var gulp = require('gulp');
var pug = require('pug');
var $ = require('gulp-load-plugins')();
var combine = require('stream-combiner2').obj;


module.exports = function (options) {
	return function() {
		var isDebug = options.debug || false;
		return combine(
			gulp.src(options.src + '/*.*'),
			$.if(isDebug, $.debug({title: options.taskName + ' ->'})),
			$.pug({
				pug: pug,
				pretty: true
			}),
			gulp.dest(options.dest)
		).on('error', $.notify.onError(function(err){
				return {
					title: "Pug error",
					message: err.message
				};
			})
		);
	};
};
