const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const sumSchema = new Schema(
  {
    dailyRevenue: { type: Number, required: true },
  },
  { timestamps: true }
);

const Sum = mongoose.model("Sum", sumSchema);

module.exports = Sum;
