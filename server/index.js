const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const AuthRouter = require("./routes/authenticated.js");
const UnauthRouter = require("./routes/unauthenticated.js");

const app = express();

app.use(bodyParser.json({ limit: "1mb" }));
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

app.use(AuthRouter);
app.use(UnauthRouter);

const port = process.env.PORT || 4000;
app.listen(port, async () => {
  console.log(`Server started on port ${port}`);
});
