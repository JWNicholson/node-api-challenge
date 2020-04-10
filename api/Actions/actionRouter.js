const router = require("express").Router();
const {get,insert,update,remove,} = require("../../data/helpers/actionModel");



// GET
router.get("/", (req, res, next) => {
  get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) =>
      res.status(500).json({errorMessage: "Error trying to get data"})
    );
});

router.get("/:id", (req, res, next) => {
  get(req.action.id)
    .then((action) => res.status(200).json(action))
    .catch((err) =>
      res.status(500).json({errorMessage: "Error trying to get the data"})
    );
});

/////////////////////////////

// POST 
router.post("/", (req, res, next) => {
  insert(req.body)
    .then((action) => res.status(201).json(action))
    .catch((err) =>
      res.status(500).json({errorMessage: "Error trying to add data"})
    );
});

// PUT 
router.put("/:id", (req, res, next) => {
  const { description, notes, completed } = req.body;
  if (description || notes || completed) {
    update(req.params.id, { description, notes, completed })
      .then((action) => res.status(200).json(action))
      .catch((err) =>
        res.status(500).json({errorMessage:"Could not update the data"})
      );
  } else {
    res.status(400).json({message:"Missing data, fill it in"})
  }
});

// DELETE 
router.delete('/:id', (req, res, next) => {
    remove(req.action.id)
    .then(count => res.status(200).json({message: "Successfully deleted"}))
    .catch(err => res.status(500).json({errorMessage: "Could not delete the action"}))
});



module.exports = router;



