import express from 'express';
import http from 'http';

import router from './routers/router';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/', router());