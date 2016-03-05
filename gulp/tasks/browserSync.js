import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config/browserSync';

gulp.task('browserSync', () => {
  return browserSync(config);
});
