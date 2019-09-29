const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: String, unique: true, required: true },
  createdDate: { type: Date, default: Date.now },
  message: { type: String, unique: true, required: false }s
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Request", schema);
