const gulp      = require('gulp');
const concat    = require('gulp-concat');
const sass      = require('gulp-sass');
const uglify    = require('gulp-uglify');
const cleanCss  = require('gulp-clean-css');
const babel     = require('gulp-babel');
const tar       = require('gulp-tar');
const gzip      = require('gulp-gzip');

gulp.task('css', () =>
  gulp.src('src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
);

gulp.task('js', () =>
  gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
);

gulp.task('compress', () =>
  gulp.src('dist/*')
    .pipe(tar('package.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('.'))
);

gulp.task('watch', () => {
  gulp.watch('src/scss/*.scss', 'css');
  gulp.watch('src/js/*.js', 'js');
});
