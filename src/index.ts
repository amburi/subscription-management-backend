import express from 'express';
import http from 'http';

import router from './routers/router';


const app = express();

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});

app.use('/', router());