const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWTSecret } = require("../config/keys");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  profilePicture: String,
  stretches: [{ type: Schema.Types.ObjectId, ref: "Stretch" }],
  articles: [{ type: Schema.Types.ObjectId, ref: "Article" }],
});

// Password methods
userSchema.statics.hashPassword = function (password) {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};
userSchema.methods.comparePassword = function (password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
};

// Authentication methods
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, JWTSecret, { expiresIn: "1d" });
  return token;
};
userSchema.statics.findByToken = function (token) {
  try {
    const decoded = jwt.verify(token, JWTSecret);
    return this.findOne({ _id: decoded._id });
  } catch (err) {
    throw new Error(`Error verifying token: ${err.message}`);
  }
};
userSchema.methods.toggleLikedStretch = function (stretchId) {
  if (this.stretches.includes(stretchId)) {
    this.stretches.pull(stretchId);
    this.save();
    return;
  }
  this.stretches.push(stretchId);
  this.save();
};
userSchema.methods.toggleLikeArticle = function (articleId) {
  if (this.articles.includes(articleId)) {
    this.articles.pull(articleId);
    this.save();
    return;
  }
  this.articles.push(articleId);
  this.save();
};
userSchema.methods.addProfilePicture = function (base64Image) {
  this.profilePicture = base64Image;
  this.save();
  return;
};
userSchema.methods.getLikedStretches = function () {
  const likedStretches = this.stretches;
  return likedStretches;
};
userSchema.methods.getLikedArticles = function () {
  const likedArticles = this.articles;
  return likedArticles;
};
// Create model
const User = mongoose.model("User", userSchema);

module.exports = User;
