import config from './';

export default {
  url: 'https://vinkla.com/',
  src: config.public + '/**/*',
  publish: './.publish',
  ghPages: {
    branch: 'master'
  }
};
