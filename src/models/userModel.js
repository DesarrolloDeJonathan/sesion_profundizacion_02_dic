// Modelo que tendran los datos del usuario para enviarlos a la BBDD
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // _id: {

  // }
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Nombre que le doy a ese modelo y de donde lo saco
module.exports = mongoose.model("User", userSchema);
