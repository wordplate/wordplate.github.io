import config from './';

export default {
  base: config.source,
  src: [
    config.source + '/**/*',
    '!' + config.source + '/styles/*'
  ],
  dest: config.public
};
