const winston = require('winston');

const { WINSTON_LOG_LEVEL } = process.env;

const logger = winston.createLogger({
  level: WINSTON_LOG_LEVEL || 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
});

module.exports = {
  logger,
};
