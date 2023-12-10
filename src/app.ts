import express from 'express';

import * as dotenv from 'dotenv';
dotenv.config();

import logger from './helpers/logger';
import router from './routers/router';

const app = express();
const PORT = process.env.PORT || 3000; // fallback to 3000 if no port is specified

app.use((req, res, next) => {
  logger.info('Request received', { method: req.method, url: req.url });
  next();
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error('Error occurred', { error: err.message });
  res.status(500).send('Server error');
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

app.use('/', router());