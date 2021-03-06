import http from 'http';
import express from 'express';
import 'express-async-errors';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import routes from './services';
import { initializeDbConnection } from './database';

process.on('uncaughtException', (e) => {
  console.log('uncaughtException!', e);
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  console.log('unhandledRejection!', e);
  process.exit(1);
});

initializeDbConnection();

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`),
);
