const express = require('express');
const projectRouter = require('./Projects/projectRouter');

const actionRouter = require('./Actions/actionRouter');

const router = express.Router();

router.use('/projects', projectRouter);

router.use('/actions', actionRouter);

module.exports = router;