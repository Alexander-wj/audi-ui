const gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('watch', ['sass:watch']);