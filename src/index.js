require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const { httpServer } = require('./servers');
const app = require('./app');

httpServer(app);
