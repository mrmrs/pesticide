// Load plugins

var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    watch         = require('gulp-watch'),
    prefix        = require('gulp-autoprefixer'),
    minifyCSS     = require('gulp-minify-css'),
    sass          = require('gulp-sass'),
    less          = require('gulp-less'),
    stylus        = require('gulp-stylus'),
    csslint       = require('gulp-csslint'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    shell         = require('gulp-shell'),
    rename        = require('gulp-rename'),
    size          = require('gulp-size'),
    browserSync   = require('browser-sync'),
    browserReload = browserSync.reload,
    preProcessor  = 'sass';

// Task to generate all source files with proper color table

gulp.task('generate', shell.task([
  'node ./generate_color_table.js'
]));

// Task to minify all css files in the css directory

gulp.task('minify-css', function(){
  gulp.src('./css/pesticide.css')
    .pipe(minifyCSS())
    .pipe(size({gzip: true, showFiles: true, title:'minified css'}))
    .pipe(rename('pesticide.min.css'))
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

// Initialize browser-sync which starts a static server also allows for
// browsers to reload on filesave
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
});

// Function to call for reloading browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});


// Task that compiles scss files down to good old css

gulp.task('sass', function(){
  gulp.src('./sass/pesticide.scss')
  .pipe(watch(function(files) {
    return files.pipe(sass())
    .pipe(prefix())
    .pipe(size({gzip: false, showFiles: true, title:'unminified css'}))
    .pipe(size({gzip: true, showFiles: true, title:'unminified css'}))
    .pipe(gulp.dest('./css/'))
  }));
});

// Task that compiles less files down to good old css

gulp.task('less', function () {
  gulp.src('./less/pesticide.less')
  .pipe(watch(function(files) {
    return files.pipe(less())
    .pipe(prefix())
    .pipe(size({gzip: false, showFiles: true, title:'unminified css'}))
    .pipe(size({gzip: true, showFiles: true, title:'unminified css'}))
    .pipe(gulp.dest('./css/'))
  }));
});

// Task that compiles stylus files down to good old css

gulp.task('stylus', function () {
  gulp.src('./stylus/*.styl')
  .pipe(watch(function(files) {
    return files.pipe(stylus())
    .pipe(prefix())
    .pipe(size({gzip: false, showFiles: true, title:'unminified css'}))
    .pipe(size({gzip: true, showFiles: true, title:'unminified css'}))
    .pipe(gulp.dest('./css/'))
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
    gulp.watch(['*.html', './' + preProcessor + '/*' + preProcessorExtensions[preProcessor]], function(event) {
      gulp.run(preProcessor, 'csslint', 'bs-reload');
    });
});
