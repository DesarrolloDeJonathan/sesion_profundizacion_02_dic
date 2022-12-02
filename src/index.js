/** require es mas liviano que un import
 * el require es requerido mientras que el import lo descargara asi no este siendo requerido en ese momento
 */
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/users");

const app = express();

/** Forma correcta de levantar un puerto
 * harcodear (poner un puerto a lo bruto) esto esta bien cuando estamos trabajando de forma local
 * En el procesos que se esta ejecutando en el ambiente y busca el puerto sino usa uno por defecto
 */
const PORT = process.env.PORT || 9000;

// Middlewares
app.use(express.json());
app.use("", userRoutes);

//Server runing
app.listen(PORT, () => console.log(`SERVER RUNING ON PORT ${PORT}`, PORT));
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DATABASE CONNECT"))
  .catch((e) => console.error(e));
