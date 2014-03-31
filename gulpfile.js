// Load plugins

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    watch        = require('gulp-watch'),
    lr           = require('tiny-lr'),
    server       = lr(),
    livereload   = require('gulp-livereload'),
    prefix       = require('gulp-autoprefixer'),
    minifyCSS    = require('gulp-minify-css'),
    sass         = require('gulp-ruby-sass'),
    less         = require('gulp-less'),
    stylus       = require('gulp-stylus'),
    csslint      = require('gulp-csslint'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    preProcessor = 'sass';


// Task to minify all css files in the css directory

gulp.task('minify-css', function(){
  gulp.src('./css/*.css')
    .pipe(minifyCSS({keepSpecialComments: 0}))
    .pipe(gulp.dest('./css/'));
});

// Task to compile the bookmarklet version of Pesticide

gulp.task('minify-js', function() {
  gulp.src('./js/pesticide.js')
    .pipe(uglify())
    .pipe(concat('pesticide.min.js'))
    .pipe(gulp.dest('./js/'));
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

gulp.task('sass', function(){
  gulp.src('./sass/*.scss')
  .pipe(watch(function(files) {
    return files.pipe(sass({loadPath: ['./sass/'], style: "compact"}))
    .pipe(prefix())
    .pipe(gulp.dest('./css/'))
    .pipe(livereload(server));
  }));
});

// Task that compiles less files down to good old css

gulp.task('less', function () {
  gulp.src('./less/*.less')
  .pipe(watch(function(files) {
    return files.pipe(less())
    .pipe(prefix())
    .pipe(gulp.dest('./css/'))
    .pipe(livereload(server));
  }));
});

// Task that compiles stylus files down to good old css

gulp.task('stylus', function () {
  gulp.src('./stylus/*.styl')
  .pipe(watch(function(files) {
    return files.pipe(stylus())
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
  var preProcessorExtensions = {
    'sass': '.scss',
    'less': '.less',
    'stylus': '.stylus'
  };
  gulp.run(preProcessor, 'csslint');
  server.listen(35729, function (err) {
    gulp.watch(['*.html', './' + preProcessor + '/*' + preProcessorExtensions[preProcessor]], function(event) {
      gulp.run(preProcessor, 'csslint');
    });
  });
});
