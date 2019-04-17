var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function (done) {
 return gulp.src('./app/scss/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('./app/css'))
     done;
});

gulp.task('serve', function (done) {
 gulp.watch('./app/scss/**/*.scss', gulp.series('sass'));
 done;
});

gulp.task('default', gulp.series('serve'));