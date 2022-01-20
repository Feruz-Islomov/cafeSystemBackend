"use strict";
const mongoose = require("mongoose");

module.exports = () => {
  const dbURI =
    process.env.MONGODB_URL ||
    "mongodb+srv://newUser:3397998f@crud.dot0x.mongodb.net/products?retryWrites=true&w=majority";
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
