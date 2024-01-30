const mongoose = require("mongoose");
const { Schema } = mongoose;
const { jwt } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWTSecret } = require("../config/keys");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
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

// Create model
const User = mongoose.model("User", userSchema);

module.exports = User;
