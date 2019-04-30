var winston = require('winston');

winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

logger.info('Winston logging library initialized.');

if (process.env.MODE != 'dev') {
    logger.info('Only error logging enabled.')

    // Sobrescrevendo logs.
    logger.info = function() {}
    logger.debug = function() {}
    logger.warn = function() {}
}
module.exports = logger;
