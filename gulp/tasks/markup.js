import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import critical from 'critical';
import config from '../config/markup';

gulp.task('markup', callback => {
  critical.generate(config.critical).then(function (output) {
    gulp.src(config.src)
      .pipe(htmlmin(config.htmlmin))
      .pipe(gulp.dest(config.dest));
    return callback();
  });
});
