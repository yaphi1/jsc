const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', ['test']);


gulp.task('test', function(){
	gulp.src('./test/gulp_mocha_test.js', {read: false})
		.pipe( mocha() )
});