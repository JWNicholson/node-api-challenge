const express = require('express');

const Hubs = require('../data/helpers/actionModel');

const router = express.Router();

 ///GET//////////////

router.get('/', (req,res) => {
    const {id} = req.params;
    console.log(id);

   
    Hubs.get(id)
        .then(hubs => {
            res.status(200).json(hubs);
        })
            .catch(error => {
                res.status(500).json({message: "Could not find that data", error:error.message});

            });
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    console.log(id);

    Hubs.get(id)
        .then(hubs => {
            res.status(200).json(hubs);
        })
            .catch(error => {
                res.status(500).json({message: "Could not find that id.", error:error.message});

            });
});

/////////////////////////////////

//POST

router.post("/", (req,res) => {
    const data = req.body;
    console.log(data);

    Hubs.insert(data)
        .then(hubs => {
            //201 - Created
            res.status(201).json(hubs);
        })
            .catch(error => {
                res.status(500).json({message: "Could not post the data.", error:error.message});
                
            });
});

//PUT

router.put('/:id', (req,res) => {
    const {id} = req.params;
    console.log(id);
    const data = req.body;

    Hubs.update(id, data)
        .then(hubs => {
            res.status(200).json(hubs);
        })
            .catch(error => {
                res.status(500).json({message: "Could not update the data.", error:error.message});

            });

   
});

//DELETE

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    console.log(id);

    Hubs.remove(id)
        .then( hubs => {
            res.status(200).json(hubs);
        })
            .catch(error => {
                res.status(500).json({message: "Could not delete the data.", error:error.message});

            });
});

module.exports = router;


