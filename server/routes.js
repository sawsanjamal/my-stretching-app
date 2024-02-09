const Router = require("express");
const User = require("./model/schema.js");
const Stretch = require("./model/StretchesSchema.js");
const authenticate = require("./middleware/authenticate.js");
const Article = require("./model/ArticlesSchema.js");

const router = Router();

// Unauthenticated endpoints
router.post("/users/create", async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: User.hashPassword(req.body.password),
    stretches: [],
  });

  try {
    await newUser.save();
    res.json({ message: "Inserted test user" });
  } catch (err) {
    console.log(err);
  }
});
router.post("/login", async (req, res) => {
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
router.get("/logout", async (req, res) => {
  res.clearCookie("token").json({ message: "Cookies cleared" });
});
router.get("/stretches", async (req, res) => {
  const stretches = await Stretch.find();
  res.send({ stretches });
});
router.get("/articles", async (req, res) => {
  const articles = await Article.find();
  res.send({ articles });
});
router.get("/authenticate", authenticate, async (req, res) => {
  res.send({ user: req.user });
});

// authenticated endpoints
router.put("/users/stretches", authenticate, async (req, res) => {
  const id = req.body.stretchId;
  const { user } = req;
  await user.toggleLikedStretch(id);

  res.send({ user });
});
router.put("/users/articles", authenticate, async (req, res) => {
  const id = req.body.articleId;
  const { user } = req;
  await user.toggleLikeArticle(id);

  res.send({ user });
});

module.exports = router;
