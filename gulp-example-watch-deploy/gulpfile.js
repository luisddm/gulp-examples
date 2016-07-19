const gulp        = require('gulp');

const concat      = require('gulp-concat');
const sass        = require('gulp-sass');
const uglify      = require('gulp-uglify');
const cleanCss    = require('gulp-clean-css');
const htmlReplace = require('gulp-html-replace');
const babel       = require('gulp-babel');
const tar         = require('gulp-tar');       // https://www.npmjs.com/package/gulp-tar
const gzip        = require('gulp-gzip');      // https://www.npmjs.com/package/gulp-gzip

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

gulp.task('compress', () =>
  gulp.src('dist/*')
    .pipe(tar('code.tar'))   // Pack all the files together
    .pipe(gzip())            // Compress the package using gzip
    .pipe(gulp.dest('.'))
);

gulp.task('default', ['html', 'scss', 'es6']);

gulp.task('deploy', ['html', 'scss', 'es6', 'compress']);

gulp.task('watch', () => {
  gulp.watch('src/scss/*.scss', ['scss']);  // Keep watching for any changes in SCSS files and rerun the css task when so
  gulp.watch('src/js/*.js', ['es6']);       // Keep Watching for any changes in JS files and rerun the es6 task when so
});
