import config from './';

export default {
  src: config.source + '/styles/**/*.{sass,scss}',
  dest: config.public + '/styles',
  settings: {
    errLogToConsole: true
  },
  autoprefixer: {
    browsers: ['last 2 version']
  },
  csswring: {
    removeAllComments: true
  }
};
