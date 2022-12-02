const express = require("express");
const userSchema = require("../models/userModel");

const router = express.Router();

// Aqui tendremos las urls de nuestro proyecto
// un GET trae datos y un POTS mete datos nuevos en la BBDD PUT modifica los datos que ya existen

// Create user
router.post("/user", (req, res) => {
  // res.send("Crate user");
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((e) => console.error({ message: e }));
});

// Get all users
router.get("/user", (req, res) => {
  // res.send("Crate user");
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

// Get all users by Id
router.get("/user/:id", (req, res) => {
  // res.send("Crate user");
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

// Edit users
router.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => console.error({ message: error }));
});

module.exports = router;
