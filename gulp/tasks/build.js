import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build:development', callback => {
  gulpSequence(
    'clean',
    'styles:development',
    'static',
    ['watch', 'browserSync'],
    callback
  );
});

gulp.task('build:production', callback => {
  process.env.NODE_ENV = 'production';

  gulpSequence(
    'clean',
    'styles:production',
    'static',
    'markup',
    callback
  );
});
