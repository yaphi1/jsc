const gulp = require('gulp');
const mocha = require('gulp-mocha');
const babel = require('gulp-babel');

gulp.task('default', function(){
	gulp.src('./test/mocha_test.js', {read: false})
		.pipe( mocha() )
});