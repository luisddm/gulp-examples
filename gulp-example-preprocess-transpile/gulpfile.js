const gulp        = require('gulp');

const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const cleanCss    = require('gulp-clean-css');
const htmlReplace = require('gulp-html-replace');
const sass        = require('gulp-sass');         // https://www.npmjs.com/package/gulp-sass
const babel       = require('gulp-babel');        // https://www.npmjs.com/package/gulp-babel

gulp.task('scss', () =>
  gulp.src('src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))  // Convert SCSS into CSS
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
);

gulp.task('es6', () =>
  gulp.src('src/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(babel({ presets: ['es2015'] }))     // Transpile ES6+ into ES5
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

gulp.task('default', ['html', 'scss', 'es6']);
