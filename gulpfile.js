var gulp = require('gulp');
var es = require('event-stream');
var del = require('del');
var spawn = require('child_process').spawn;
// var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');

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

// gulp.task('delete', function(cb) {
//     del(['assets/css', 'assets/js', 'assets/img', 'js/vendor', 'scss/vendor'], cb)
// });

gulp.task('images', function() {
  return gulp.src('img/**/*')
    .pipe(plugins.changed('img/**/*'))
    .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/img'))
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
    .pipe(gulp.dest('css'))
});

gulp.task('script', function() {
  return gulp
    .src('js/**/*.js')
    .pipe(plugins.header(banner, { pkg : pkg } ))
    .pipe(plugins.plumber())
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.concat('main.js'))
      .pipe(gulp.dest('assets/js'))     
    .pipe(plugins.uglify())     
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(gulp.dest('assets/js'))
});

gulp.task('html' , function() {
  return gulp
    .src('*.html')
    .pipe(gulp.dest('assets/'))
    .pipe(plugins.minifyHtml())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/'))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function() {
  // gulp.watch('_sass/*.scss', ['style']);
  // gulp.watch('js/*.js', ['script']);
  // gulp.watch('img/*', ['images']);
  // gulp.watch('*.html', ['html']);
  gulp.watch('_sass/*.scss', ['jekyll']);
});

gulp.task('default', ['delete'], function () {
  gulp.start('style', 'script', 'html', 'images', 'watch', 'browser-sync');
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
