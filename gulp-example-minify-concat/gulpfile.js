// Load gulp
const gulp = require('gulp');

// Load gulp plugins
const concat      = require('gulp-concat');       // https://www.npmjs.com/package/gulp-concat
const cleanCss    = require('gulp-clean-css');    // https://www.npmjs.com/package/gulp-clean-css
const uglify      = require('gulp-uglify');       // https://www.npmjs.com/package/gulp-uglify
const imagemin    = require('gulp-imagemin');     // https://www.npmjs.com/package/gulp-imagemin
const htmlReplace = require('gulp-html-replace'); // https://www.npmjs.com/package/gulp-html-replace

gulp.task('css', () =>
  gulp.src('src/css/*.css')       // Take all the stylesheets
    .pipe(concat('styles.css'))   // Concat all styleshets in one file
    .pipe(cleanCss())             // Minify
    .pipe(gulp.dest('dist/css'))  // Copy the result to dist
);

gulp.task('js', () =>
  gulp.src('src/js/*.js')         // Take all the scripts
    .pipe(concat('scripts.js'))   // Concat all scripts in one file
    .pipe(uglify())               // Minify
    .pipe(gulp.dest('dist/js'))   // Copy the result to dist
);

gulp.task('img', () =>
  gulp.src('src/img/*')           // Take all the images
    .pipe(imagemin())             // Optimize the images
    .pipe(gulp.dest('dist/img'))  // Copy the images to dist
);

gulp.task('html', () =>
  gulp.src('src/index.html')      // Take index.html
    .pipe(htmlReplace({
      css: 'css/styles.css',      // Replace the stylesheet links section with the link to the new styleshet
      js: 'js/scripts.js',        // Replace the script links section with the link to the new script
    }))
    .pipe(gulp.dest('dist'))      // Copy to dist
);

gulp.task('default', ['html', 'css', 'js', 'img']); // Do all thigs by default

// ------------------------------------------------

// ES5 code (FYI)

// var gulp      = require('gulp');
// var concat    = require('gulp-concat');
//
// gulp.task('css', function () {
//   gulp.src('css/*.css')
//     .pipe(concat('style.css'))
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('css'));
// });
