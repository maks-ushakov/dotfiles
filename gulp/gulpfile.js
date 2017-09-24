"use strict";

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// PATHes
var PATH = {
	assets: 'assets',
	srcLess: 'src/less',
	srcLessMain: 'template.less',
	srcPug: 'src/pug',
	srcJs: 'src/js',
	destAll: 'dev-dist',
	destJs: 'dev-dist/js',
	destCss: 'dev-dist/css',
	destHtml: 'dev-dist',
	server: 'dev-dist',
	cmsDomain: '',
	cmsBase:  '',
	cmsTemplate: '',
	cmsDestCss: 'css',
	cmsDestJs: 'js'
};


var isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

function lazyRequireTask(taskName, path, options) {
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, function(callback) {
		let task = require(path).call(this, options);
		return task(callback);
	});
}

lazyRequireTask('clean', './tasks/clean', {
	src: PATH.destAll + '/*'
});

lazyRequireTask('styles', './tasks/styles', {
	src: PATH.srcLess,
	main: PATH.srcLessMain,
	dest: PATH.destCss,
	isDev: isDev,
	debug: true
});

lazyRequireTask('pug2html', './tasks/pug2html', {
	src: PATH.srcPug,
	dest: PATH.destHtml
});

lazyRequireTask('scripts', './tasks/scripts', {
	src: PATH.srcJs,
	dest: PATH.destJs
});

lazyRequireTask('assets', './tasks/assets', {
	src: PATH.assets,
	dest: PATH.destAll,
	debug: true
});

gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'pug2html', 'assets', 'scripts')));

gulp.task('watch', function() {
	//gulp.watch(PATH.srcLess + '/**/*.*', gulp.series('styles'));
	//$.watchLess2(PATH.srcLess + '/' + PATH.srcLessMain, {verbose: true}, gulp.series('styles'));
	$.watchLess2(PATH.srcLess + '/**/*.less', {verbose: true}, gulp.series('styles'));
	gulp.watch(PATH.srcJs + '/**/*.*', gulp.series('scripts'));
	gulp.watch(PATH.srcPug + '/**/*.*', gulp.series('pug2html'));
	gulp.watch(PATH.assets + '/**/*.*', gulp.series('assets'));
});


gulp.task('serve', function() {
	browserSync.init({
		server: PATH.server
	});
	browserSync.watch(PATH.server + '/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
		  gulp.series('build', gulp.parallel('watch', 'serve')));

