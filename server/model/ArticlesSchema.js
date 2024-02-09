const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema();

const Article = mongoose.model("Article", articleSchema, "articles");

module.exports = Article;
