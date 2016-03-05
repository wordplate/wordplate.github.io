import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import del from 'del';
import open from 'open';
import config from '../config/deploy';

gulp.task('deploy', ['build:production'], () => {
  return gulp.src(config.src)
    .pipe(ghPages(config.ghPages))
    .on('end', () => {
      del(config.publish);
      open(config.url);
    });
});
