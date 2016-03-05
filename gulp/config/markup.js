import config from './';

export default {
  src: config.public + '/*.html',
  dest: config.public,
  htmlmin: {
    collapseWhitespace: true,
    minifyJS: true
  },
  critical: {
    inline: true,
    base: config.public,
    src: 'index.html',
    dest: config.public + '/index.html',
    minify: true
  }
};
