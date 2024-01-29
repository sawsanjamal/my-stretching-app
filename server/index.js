const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require("./model/schema.js");
const { hashPassword } = require("./password/index.js");

app.use(express.json());
app.use(cors());

// DB config

const db = require("./config/keys.js").MongoURI;
mongoose.set("strictQuery", true);

// connect to mongo
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

// bodyparser gets the req.body
app.use(express.urlencoded({ extended: false }));

app.post("/users/create", async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashPassword(req.body.password),
  });

  try {
    await newUser.save();
    res.send("Inserted test user");
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  console.log(`Server started on port ${port}`);
});
