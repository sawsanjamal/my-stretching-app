const mongoose = require("mongoose");
const { Schema } = mongoose;

const stretchSchema = new Schema();

const Stretch = mongoose.model("Stretch", stretchSchema, "stretches");

module.exports = Stretch;
