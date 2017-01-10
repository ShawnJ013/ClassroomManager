const gulp = require('gulp');
const inject = require('gulp-inject');
const wiredep = require('wiredep').stream;
const browserSync = require('browser-sync');

gulp.task('inject', function(){
	var target = gulp.src('./index.html');
	// It's not necessary to read the files (will speed up things), we're only after their paths:
	var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], { read: false });

	return target.pipe(inject(sources))
			.pipe(gulp.dest('./'));

});

gulp.task('inject:bower', function() {
	gulp.src('./index.html')
		.pipe(wiredep())
		.pipe(gulp.dest('./'));

});

gulp.task('inject:js', function() {
	gulp.src('./index.html')
		.pipe(wiredep())
		.pipe(gulp.dest('./'));

});

gulp.task('watch', function() {
	gulp.watch('./app/**/*', ['reload']);
});

gulp.task('reload', function(){
	browserSync.reload();
})

gulp.task('startServer', function() {
	browserSync.init({
		server: './'
	})

});

gulp.task('serve',['inject', 'inject:js', 'inject:bower', 'startServer', 'watch']);
