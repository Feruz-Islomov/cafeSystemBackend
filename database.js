"use strict";
require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  const dbURI = process.env.MONGODB_URL;
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log("connected to mongoDB");
    })
    .catch((err) => console.log(err));
};
