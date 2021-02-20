var gulp = require('gulp');
// var es = require('event-stream');
var del = require('del');
var spawn = require('child_process').spawn;
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');

var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

var paths = {
    sass: ['scss/*.scss']
};

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('delete', async function(cb) {
    // del(['assets/css', 'assets/js', 'assets/img', 'js/vendor', 'scss/vendor'], cb)
    del(['_site'], cb)
});

gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(plugins.changed('_site/images/**/*'))
    .pipe(plugins.cache(plugins.imagemin({ 
      optimizationLevel: 3, 
      progressive: true, 
      interlaced: true
     })))
    .pipe(plugins.imagemin({ 
      optimizationLevel: 3, 
      progressive: true, 
      interlaced: true
     }))

    .pipe(gulp.dest('_site/images'))
});

gulp.task('sass', async function() {
    return plugins.sass('_sass/main.scss', { style: 'expanded' }) 
     .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
     .pipe(plugins.header(banner, { pkg : pkg } ))    
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    // .pipe(gulp.dest('css/'));
    .pipe(plugins.minifyCss())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))    
    .pipe(gulp.dest('_site/css'))
});

// gulp.task('style', ['sass'], function() {
//   return gulp
//     .src('_sass/**/*.css')
//     // .pipe(plugins.concat('main.css'))
//     //   .pipe(gulp.dest('css')) 
//     // .src('css/main.css')   
//     .pipe(plugins.minifyCss())
//     .pipe(plugins.rename({suffix: '.min'}))
//     // .pipe(plugins.gzip())
//     .pipe(gulp.dest('_site/css'))
// });

gulp.task('script', function() {
  return gulp
    .src('_js/**/*.js')
    .pipe(plugins.header(banner, { pkg : pkg } ))
    .pipe(plugins.plumber())
    .pipe(plugins.concat('main.js'))  
    .pipe(plugins.uglify())     
});

gulp.task('html' , function() {
  return gulp
    .src('_site/*.html')
    .pipe(plugins.minifyHtml())
});

gulp.task('watch', function() {
  gulp.watch('_sass/*.scss', gulp.series('sass', 'jekyll'));
  gulp.watch('_js/*.js', gulp.series('script', 'jekyll'));
  gulp.watch('images/*', gulp.series('images', 'jekyll'));
  gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html'], gulp.series('jekyll', 'html'));
  gulp.watch('_posts/*.markdown', gulp.series('jekyll'))
  // gulp.watch('_sass/*.scss', ['jekyll']);
});

gulp.task('default', gulp.series('delete', gulp.series('sass', 'script', 'html', 'images', 'watch')), function (done) { done();
}); 
// , 'jekyll', 'jekyll-serve', 'jekyll-watch', 'watch'
gulp.task('build', function () {
  gulp.done();('delete', 'sass', 'script', 'html', 'images', 'jekyll');
}); 

gulp.task('jekyll', function (){
    spawn('jekyll', gulp.series('build', {stdio: 'inherit'}));
});

gulp.task('jekyll-watch', function (){
    j  = spawn('jekyll', ['-w', 'build']);

    j.stdout.on('data', function (data) {
        console.log('stdout: ' + data); // works fine
    });
});

gulp.task('jekyll-serve', function (){
    spawn('jekyll', ['serve'], {stdio: 'inherit'});
});