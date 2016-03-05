import config from './';

export default {
  url: 'https://wordplate.github.io/',
  src: config.public + '/**/*',
  publish: './.publish',
  ghPages: {
    branch: 'master'
  }
};
