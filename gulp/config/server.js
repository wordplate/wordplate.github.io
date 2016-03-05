import config from './';

export default {
  root: process.cwd() + config.public.substr(1),
  port: process.env.PORT || 1337,
  logLevel: process.env.NODE_ENV ? 'combined' : 'dev',
  staticOptions: {
    extensions: ['html'],
    maxAge: '31556926'
  }
};
