var gulp        = require('gulp');
var mocha       = require('gulp-mocha');
var util        = require('gulp-util');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var babel       = require('babel/register');
var reload      = browserSync.reload;

gulp.task('default', ['build']);

gulp.task('build', ['build-js', 'build-css']);

gulp.task('build-js', function () {
  browserify({
    entries: 'src/App.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('dist'))
  .on('error', util.log);
});

gulp.task('build-css', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', util.log))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('test', ['build'], function () {
  return gulp.src(['test/**/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      compilers: { js: babel }
    }))
    .on('error', util.log);
});

gulp.task('serve', function () {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});

gulp.task('watch', ['build','serve'], function () {
  gulp.watch("./src/**/*" , ['build','test']);
  gulp.watch("./test/**/*", ['build','test']);
  gulp.watch("./dist/**/*", ['reload']);
});

gulp.task('reload', function () {
  browserSync.reload()
});

