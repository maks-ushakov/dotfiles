"use strict";
// clean directory

var gulp = require('gulp');
var del = require('del');

module.exports = function(options) {
	return function() {
		return	del(options.src);
	};
};
