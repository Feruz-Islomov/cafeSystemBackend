const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  menu: { type: String, required: true },
});
const DrinksProducts = mongoose.model("DrinksProducts", productSchema);
module.exports = DrinksProducts;
