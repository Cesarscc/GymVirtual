//libraries
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

//methods libs
const app = express();
require("dotenv").config();

//middlewares
app.use(morgan("dev"));

app.use(bodyparser.json());
app.use(cors());

//database setup
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Nueva Base de datos conectada");
  })
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
//routes setup
//app.use('/api/auth', require('./routes/auth'))
app.use('/api/exercise', require('./routes/exercise'))
app.use('/api/category', require('./routes/category'))

//listen port
const port = process.env.PORT;
 
app.listen(port, () => {
  console.log(`Servidor APPGYM corriendo en el puerto ${port}`);
});
 