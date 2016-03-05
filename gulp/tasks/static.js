import gulp from 'gulp';
import browserSync from 'browser-sync';
import changed from 'gulp-changed';
import handleErrors from '../lib/handleErrors';
import config from '../config/static';

gulp.task('static', () => {
  return gulp.src(config.src, {dot: true, base: config.base})
    .pipe(changed(config.dest))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
