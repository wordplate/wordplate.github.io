import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csswring from 'csswring';
import handleErrors from '../lib/handleErrors';
import config from '../config/styles';

gulp.task('styles:development', () => {
  return gulp.src(config.src)
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(postcss([
      autoprefixer(config.autoprefixer)
    ]))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('styles:production', () => {
  return gulp.src(config.src)
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(postcss([
      autoprefixer(config.autoprefixer),
      csswring(config.csswring)
    ]))
    .pipe(gulp.dest(config.dest));
});
