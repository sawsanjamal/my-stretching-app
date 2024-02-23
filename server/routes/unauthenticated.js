const Router = require("express");
const User = require("../model/schema.js");
const Stretch = require("../model/StretchesSchema.js");
const Article = require("../model/ArticlesSchema.js");
const { SECRET_KEY } = require("../config/keys.js");
const { getExpiration } = require("../utils/index.js");
const stripe = require("stripe")(SECRET_KEY);

const unauthRouter = Router();

unauthRouter.post("/users/create", async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: User.hashPassword(req.body.password),
    stretches: [],
    articles: [],
    subscription: {
      tier: req.body.subscription,
      expiration: getExpiration(req.body.subscription),
    },
  });

  try {
    await newUser.save();
    res.json({ newUser });
  } catch (err) {
    console.log(err);
  }
});
unauthRouter.post("/login", async (req, res) => {
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

unauthRouter.get("/logout", async (req, res) => {
  res.clearCookie("token").json({ message: "Cookies cleared" });
});
unauthRouter.get("/stretches", async (req, res) => {
  const stretches = await Stretch.find();
  res.send({ stretches });
});
unauthRouter.get("/articles", async (req, res) => {
  const articles = await Article.find();
  res.send({ articles });
});
unauthRouter.post("/payments/create", async (req, res) => {
  const { items } = req.body;
  const calculateOrderAmount = () => {
    return 2000;
  };
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    payment_method: "card",

    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = unauthRouter;
