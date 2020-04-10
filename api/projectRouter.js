const express = require('express');

const Hubs = require('../data/helpers/projectModel');

const router = express.Router();

//GET///////
router.get('/', (req, res) => {
    Hubs.get()
      .then(hubs => {
        if (hubs) {
          res.status(200).json(hubs);
        } else {
          res.status(400).json({message: "Could not find that data"});
        }
      })
        .catch(error => {
            res.status(500).json({message: "Something does not match up"});

      });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('Get id - ', id);
  
    Hubs.get(id)
      .then(hub => {
        if (hub) {
          res.status(200).json(hub);
        } else {
          res.status(400).json({message: "Could not find that id"});
        }
      })
        .catch(error => {
            res.status(500).json({message: "Could not retrieve that data", error: error.message});

      });
  });

/////////////////

//POST

router.post('/post', (req, res) => {
    const project = req.body;
    console.log('POST project body - ', project);
  
    Hubs.insert(project)
      .then(hubs => {
         res.status(201).json(hubs);
      })
       .catch(error => {
         res.status(500).json({message: "Could not save the data"});

      });
  });

  //PUT

  router.put('/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    const changes = req.body;
    console.log(changes);
  
    Hubs.update(id, changes)
      .then(hub => {
        res.status(200).json(hub);
      })
        .catch(error => {
          res.status(500).json({message: "Could not update the data" });

      });
  });

  //DELETE

  router.delete('/:id', (req, res) => {
    const {id} = req.params;
    Hubs.remove(id)
      .then(hubs => {
        res.status(200).json(hubs);
      })
        .catch(error => {
            res.status(500).json({message: "Could not delete the data" });

      });
  });

module.exports = router;




