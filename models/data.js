const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const dataSchema = new Schema({
  McProducts: [
    {
      name: { type: String, required: true },
      img: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
    },
  ],
  KfcProducts: [
    {
      name: { type: String, required: true },
      img: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
    },
  ],
  PizzaProducts: [
    {
      name: { type: String, required: true },
      img: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
    },
  ],
  DrinksProducts: [
    {
      name: { type: String, required: true },
      img: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
    },
  ],
  BuggetBurgersProducts: [
    {
      name: { type: String, required: true },
      img: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
    },
  ],
  Menu: [
    {
      name: { type: String, required: true },
      img: { type: String, required: true },
      category: { type: String, required: true },
    },
  ],
});

const data = mongoose.model("data", dataSchema);
module.exports = data;
