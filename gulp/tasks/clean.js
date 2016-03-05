import gulp from 'gulp';
import del from 'del';
import config from '../config/clean';

gulp.task('clean', callback => del(config.src, callback));
