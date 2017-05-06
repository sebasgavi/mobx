var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    postcss = require("gulp-postcss"),
    livereload = require('gulp-livereload'),
    autoprefixer = require('autoprefixer'),
    flexbugs = require('postcss-flexbugs-fixes');

gulp.task('watch', function() {
  livereload.listen();
  watch('src/styles/**/*.scss', (event) => gulp.start('build'));
});

// Compiles SASS > CSS
gulp.task('build', function() {
  return gulp.src('src/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer, flexbugs ]))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});