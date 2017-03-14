var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var fileinclude = require('gulp-file-include');
var bs = require('browser-sync').create();


var target = {
    sassSrc       : 'src/scss/styles.scss',
    sassWatchSrc  : 'src/scss/**/*.scss',
    sassWww       : 'app/css/',
    jsSrc         : 'src/js/*.js',
    jsWww         : 'app/js/',
    htmlSrc       : 'src/*.html',
    htmlWww       : 'app/',
    htmlWatchSrc  : 'src/**/*.html'
};

gulp.task('sass', function() {
	return gulp.src(target.sassSrc)
		.pipe(sass())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(target.sassWww))
		.pipe(bs.stream())
});

gulp.task('html', function() {
  gulp.src(target.htmlSrc)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(target.htmlWww))
	.pipe(bs.stream())
});

gulp.task('js', function () {
    gulp.src(target.jsSrc)
        .pipe(gulp.dest(target.jsWww))
        .pipe(bs.stream())
});



gulp.task('bs', function() {
	bs.init({
		server: {
			baseDir: "app/"
		}
	});
	gulp.watch(target.sassWatchSrc, ['sass']);
        gulp.watch(target.htmlSrc, ['html']);
	gulp.watch(target.htmlWatchSrc, ['html']);
        gulp.watch(target.jsSrc, ['js']);
});

gulp.task('default', function() {
    gulp.run('sass', 'html', 'js', 'bs');
});

