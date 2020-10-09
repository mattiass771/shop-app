const mongoose = require("mongoose");
const router = require("express").Router();

const Schema = mongoose.Schema;

const testSchema = new Schema({
  shopName: { type: String, required: true, default: "New Shop" },
  owner: { type: String, required: true, default: "Who is the owner?" },
  description: {
    type: String,
    required: true,
    default: "Add a brief description to your shop..."
  }
});

const Test = mongoose.model("Test", testSchema);

router.route("/").get((req, res) => {
  Test.find()
    .then((test) => res.json(test))
    .catch((err) => res.status(400).json(`Error: ${err} !`));
});

router.route("/add").post((req, res) => {
  const shopName = req.body.shopName;
  const owner = req.body.owner;
  const description = req.body.description;

  const addTest = new Test({
    shopName,
    owner,
    description
  });

  addTest
    .save()
    .then(() => res.json("New test added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
  Test.findByIdAndDelete(req.params.id)
    .then(() => res.json("Calendar deleted."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
