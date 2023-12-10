import * as bunyan from 'bunyan';

// Create a Bunyan logger instance
const logger = bunyan.createLogger({
  name: process.env.APP_NAME,
  streams: [
    {
      level: 'info',
      stream: process.stdout // Log INFO and above to stdout
    },
    {
      level: 'error',
      type: 'file',
      path: process.env.LOG_FILE // Log ERROR and above to a file
    }
  ]
});

export default logger;
