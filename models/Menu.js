const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
});
const Menu = mongoose.model("Menu", productSchema);
module.exports = Menu;
