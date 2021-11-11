import log4js from 'log4js';

log4js.configure({
    appenders: {
        console: { type: 'console' },
        file: {
            type: 'file',
            filename: 'logs/server',
            pattern: 'yyyy.MM.dd',
            alwaysIncludePattern: true,
        },
    },
    categories: {
        default: { appenders: ['console', 'file'], level: 'trace' },
        prod: { appenders: ['console', 'file'], level: 'warn' },
    },
});

// trace
// debug
// info
// warn
// error
// fatal

let logger;
if (process.env.NODE_ENV === 'production') {
    logger = log4js.getLogger('prod');
} else {
    logger = log4js.getLogger();
}

export default logger;
