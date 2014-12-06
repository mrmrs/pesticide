// Load plugins

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-ruby-sass'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    uncss = require('gulp-uncss'),
    csslint = require('gulp-csslint');


// Task to minify all css files in the css directory

gulp.task('minify-css', function(){
  gulp.src('./css/i.css')
    .pipe(uncss({
      html: ['index.html'],
      ignore: [':hover', ':focus', ':visited', ':link', ':active']
    }))
    .pipe(minifyCSS())
    .pipe(rename('i.min.css'))
    .pipe(gulp.dest('./css/'))
    .pipe(size({gzip: false, showFiles: true, title:'minified css'}))
    .pipe(size({gzip: true, showFiles: true, title:'minified css'}));
});


// Use csslint without box-sizing or compatible vendor prefixes (these
// don't seem to be kept up to date on what to yell about)

gulp.task('csslint', function(){
  gulp.src('./css/*.css')
    .pipe(csslint({
          'compatible-vendor-prefixes': false,
          'box-sizing': false,
          'important': false,
          'known-properties': false
        }))
    .pipe(csslint.reporter());

});


// Task that compiles scss files down to good old css

gulp.task('pre-process', function(){
  gulp.src('./sass/*.scss')
      .pipe(watch(function(files) {
        return files.pipe(sass({loadPath: ['./sass/'], style: "compact"}))
          .pipe(prefix())
          .pipe(gulp.dest('./css/'))
          .pipe(livereload(server));
      }));
});


/*
   DEFAULT TASK

 • Process sass and lints outputted css
 • Outputted css is run through autoprefixer
 • Runs jshint on all js files in ./js/
 • Sends updates to any files in directory to browser for
 automatic reloading

*/

gulp.task('default', function(){
  gulp.run('pre-process', 'csslint');
  server.listen(35729, function (err) {
    gulp.watch(['*.html', './sass/*.scss'], function(event) {
      gulp.run('pre-process', 'csslint');
    });
  });
});
