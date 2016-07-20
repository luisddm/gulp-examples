const gulp        = require('gulp');

const concat      = require('gulp-concat');
const sass        = require('gulp-sass');
const uglify      = require('gulp-uglify');
const cleanCss    = require('gulp-clean-css');
const htmlReplace = require('gulp-html-replace');
const babel       = require('gulp-babel');
const browserSync = require('browser-sync');   // https://www.npmjs.com/package/browser-sync

gulp.task('scss', () =>
  gulp.src('src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
);

gulp.task('es6', () =>
  gulp.src('src/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
);

gulp.task('html', () =>
  gulp.src('src/index.html')
    .pipe(htmlReplace({
      css: 'css/styles.css',
      js: 'js/scripts.js',
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('browser-sync', () => {
  browserSync.init(['dist/css/**.css', 'dist/js/**.js', 'dist/**.html'], {  // Look for changes in dist directories
    server: 'dist',  // Reload browser when any JS is modified or inject CSS when any stylesheet is modified
  });
});

gulp.task('watch', ['html', 'scss', 'es6', 'browser-sync'], () => {
  gulp.watch('src/scss/*.scss', ['scss']);
  gulp.watch('src/js/*.js', ['es6']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['html', 'scss', 'es6']);
