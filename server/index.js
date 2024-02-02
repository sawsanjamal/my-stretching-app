const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const User = require("./model/schema.js");
const VerifyToken = require("./model/VerifyToken.js");

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());

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
    password: User.hashPassword(req.body.password),
  });

  try {
    await newUser.save();
    res.json({ message: "Inserted test user" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (user.comparePassword(req.body.password, user.password)) {
      const token = user.generateAuthToken();
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });

      res.json({ user });

      return;
    }
  }
  return res.status(401).json({ message: "Invalid email or password" });
});

app.get("/authenticate", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = await User.findByToken(token);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.send({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/logout", async (req, res) => {
  res.cookie("token", null);
});
const port = process.env.PORT || 4000;

app.listen(port, async () => {
  console.log(`Server started on port ${port}`);
});
