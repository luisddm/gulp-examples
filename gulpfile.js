const gulp      = require('gulp');
const concat    = require('gulp-concat');
const sass      = require('gulp-sass');
const uglify    = require('gulp-uglify');
const cleanCSS  = require('gulp-clean-css');
const babel     = require('gulp-babel');
const tar       = require('gulp-tar');
const gzip      = require('gulp-gzip');
const imagemin  = require('gulp-imagemin');

gulp.task('styles', () =>
  gulp.src('src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
  );

gulp.task('scripts', () =>
  gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
  );

gulp.task('images', () =>
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
  );

gulp.task('compress', () =>
  gulp.src('dist/*')
    .pipe(tar('package.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('.'))
  );

gulp.task('watch', () => {
  gulp.watch('src/scss/*.scss', 'styles');
  gulp.watch('src/js/*.js', 'scripts');
  gulp.watch('src/img/*', 'images');
});
