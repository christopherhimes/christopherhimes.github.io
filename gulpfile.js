var gulp = require('gulp');
// var es = require('event-stream');
var del = require('del');
var spawn = require('child_process').spawn;
// var mainBowerFiles = require('main-bower-files');
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

gulp.task('delete', function(cb) {
    // del(['assets/css', 'assets/js', 'assets/img', 'js/vendor', 'scss/vendor'], cb)
    del(['_site'], cb)
});

gulp.task('images', function() {
  return gulp.src('images/**/*')
    // .pipe(plugins.changed('_site/images/**/*'))
    // .pipe(plugins.cache(plugins.imagemin({ 
    //   optimizationLevel: 3, 
    //   progressive: true, 
    //   interlaced: true
    //  })))
    .pipe(plugins.imagemin({ 
      optimizationLevel: 3, 
      progressive: true, 
      interlaced: true
     }))

    .pipe(gulp.dest('_site/images'))
});

gulp.task('sass', function() {
    return plugins.rubySass('_sass/main.scss', { style: 'expanded' }) 
     .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
     .pipe(plugins.header(banner, { pkg : pkg } ))    
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('css/'));
});

gulp.task('style', ['sass'], function() {
  return gulp
    // .src('_sass/**/*.css')
    // .pipe(plugins.concat('main.css'))
    //   .pipe(gulp.dest('css')) 
    .src('css/main.css')   
    .pipe(plugins.minifyCss())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.gzip())
    .pipe(gulp.dest('css'))
});

gulp.task('script', function() {
  return gulp
    .src('_js/**/*.js')
    .pipe(plugins.header(banner, { pkg : pkg } ))
    .pipe(plugins.plumber())
      // .pipe(plugins.jshint())
      // .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.concat('main.js'))
      // .pipe(gulp.dest('js'))     
    .pipe(plugins.uglify())     
    .pipe(plugins.gzip())
      // .pipe(plugins.rename({suffix: '.min'}))
      .pipe(gulp.dest('js'))
});
gulp.task('js', function () { //browserify
    return browserify('_js/**/app.js')
      // .bundle()
      .on('error', function(e) {
          plugins.util.log(e);
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('js'))
});

gulp.task('watcherify', function () {
  var watcher = watchify(browserify('_js/app.js', watchify.args));
  bundle(watcher);
  watcher.on('update', function () {
    bundle(watcher);
  })
  watcher.on('log', plugins.util.log)

  browserSync.init({
    server: "./app",
    logFileChanges: false
  })
});

gulp.task('html' , function() {
  return gulp
    .src('_site/*.html')
    // .pipe(gulp.dest('assets/'))
    .pipe(plugins.minifyHtml())
    // .pipe(plugins.rename({suffix: '.min'}))
    // .pipe(gulp.dest(''))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function() {
  gulp.watch('_sass/*.scss', ['style', 'jekyll']);
  gulp.watch('_js/*.js', ['script', 'jekyll']);
  gulp.watch('images/*', ['images', 'jekyll']);
  gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html'], ['jekyll', 'html']);
  gulp.watch('_posts/*.markdown', ['jekyll'])
  // gulp.watch('_sass/*.scss', ['jekyll']);
});

gulp.task('default', function () {
  gulp.start('delete', 'style', 'script', 'html', 'images', 'jekyll', 'jekyll-serve', 'jekyll-watch', 'watch');
}); 

gulp.task('jekyll', function (){
    spawn('jekyll', ['build'], {stdio: 'inherit'});
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
// gulp.task('jekyll-watch', function() {
//   gulp.watch(paths.sass + '/**/*.scss', ['sass']);
//   gulp.watch(paths.imagesSrc + '/**/*', function() {
//     runSequence(['images'], ['jekyll-rebuild'])
//   });
//   gulp.watch(paths.jekyll, ['jekyll-rebuild']);
// });

// gulp.task('jekyll', function () {
//     gulp.src(['./index.html', './_layouts/*.html', './_posts/*.{markdown,md}'])
//         .pipe(jekyll({
//             source: './',
//             destination: './deploy/',
//             bundleExec: true
//         }))
//         .pipe(gulp.dest('./deploy/'));
// });
function bundle (bundler) {
  return bundeler
    .bundle()
    .on('error', function (e) {
      plugins.util.log(e);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/js/dist'))
    .pipe(browserSync.stream())
}
