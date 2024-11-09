import rateLimit from 'express-rate-limit';
import config from '../config/config.js';

const limiter = rateLimit(config.rateLimit);

export default limiter;
