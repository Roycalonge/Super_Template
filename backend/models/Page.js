// models/Page.js
const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  elements: { type: Array, required: true },
  styles: { type: String },
});

module.exports = mongoose.model("Page", pageSchema);