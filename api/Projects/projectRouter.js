const router = require("express").Router();
// const router = express.Router();
const {get,insert,update,remove,} = require("../../data/helpers/actionModel");


// GET 
router.get("/", (req, res, next) => {
  get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) =>
      res.status(500).json({errorMessage: "Could not get the request"})
    );
});

router.get("/:id", (req, res, next) => {
  get(req.action.id)
    .then((action) => res.status(200).json(action))
    .catch((err) =>
      res.status(500).json({errorMessage: "Could not get the request"})
    );
});

/////////////////////////////////////////

// POST 
router.post("/", (req, res, next) => {
  insert(req.body)
    .then((action) => res.status(201).json(action))
    .catch((err) =>
      res.status(500).json({errorMessage: "Could not post the data"})
    );
});

// PUT 
router.put("/:id", (req, res, next) => {
  const { description, notes, completed } = req.body;
  if (description || notes || completed) {
    update(req.params.id, { description, notes, completed })
      .then((action) => res.status(200).json(action))
      .catch((err) =>
        res.status(500).json({errorMessage: "Could not update the data"})
      );
  } else {
    res.status(400).json({message:"Missing data, please fill in the blanks"})
  }
});

// DELETE 
router.delete('/:id', (req, res, next) => {
    remove(req.action.id)
    .then(count => res.status(200).json({message: "Successfully deleted"}))
    .catch(err => res.status(500).json({errorMessage: "Could not delete"}))
});

module.exports = router;
   







