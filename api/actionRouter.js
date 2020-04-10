const express = require('express');

const Hubs = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req,res) => {
    const {id} = req.params;
    console.log(id);

    Hubs.get(id)
})