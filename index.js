// require("./model/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
//DB Config
const db = require("./model/key").MongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Mongodb Connected`))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use(require("./controllers/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
