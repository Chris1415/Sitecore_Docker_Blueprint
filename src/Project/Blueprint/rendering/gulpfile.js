const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('styles', () => {
    return gulp.src('wwwroot/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./wwwroot/style/'));
});

gulp.task('clean', () => {
    return del([
        'wwwroot/style/main.css',
    ]);
});

gulp.task('minify-css', function() {
    return gulp.src('wwwroot/style/main.css')
      .pipe(cleanCSS())
      .pipe(rename({
        suffix: '.min'
      }))
        .pipe(gulp.dest('wwwroot/style/'));
  });

gulp.task('watch', () => {
    gulp.watch('wwwroot/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles', 'minify-css']));