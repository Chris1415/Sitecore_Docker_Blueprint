const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {
    return gulp.src(['wwwroot/js/components/*.js'])
        .pipe(concat('components.js'))
        .pipe(gulp.dest('.//wwwroot/script'));
});

gulp.task('minify-scripts', function () {
    return gulp.src('wwwroot/script/components.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('.//wwwroot/script'));
});

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
        'wwwroot/script/components.js'
    ]);
});

gulp.task('minify-css', function () {
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

gulp.task('default', gulp.series(['clean', 'styles', 'minify-css', 'scripts', 'minify-scripts']));