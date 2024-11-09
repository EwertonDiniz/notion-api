import morgan from 'morgan';

export default (config) => {
  return config.env === 'development' ? morgan('dev') : morgan('combined');
};
