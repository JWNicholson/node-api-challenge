const express = require('express');

const server = express();

const actionRouter = require('./Projects/projectRouter');

const projectRouter = require('./Actions/actionRouter');


server.use(express.json());

server.use('/api/actions', actionRouter);

server.use('/api/projects', projectRouter);

module.exports = server;