import gulp from 'gulp';
import staticDir from '../config/static';
import styles from '../config/styles';

gulp.task('watch', ['browserSync'], () => {
  gulp.watch(styles.src, ['styles:development']);
  gulp.watch(staticDir.src, ['static']);
});
