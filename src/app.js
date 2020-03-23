const express = require('express');
const bodyParser = require('body-parser');

const api = express();
api.set('json spaces', 4);
api.use(bodyParser.json({}));
api.use(bodyParser.urlencoded({ extended: true }));

module.exports = api;
