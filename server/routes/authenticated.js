const Router = require("express");
const authenticate = require("../middleware/authenticate.js");

const authRouter = Router();

authRouter.put("/profilepicture", authenticate, async (req, res) => {
  const { base64Image } = req.body;
  const { user } = req;
  await user.addProfilePicture(base64Image);

  res.send({ user });
});
authRouter.put("/users/subscription", authenticate, async (req, res) => {
  const { subscription } = req.body;
  const { user } = req;
  await user.changeSubscription(subscription);

  res.send({ user });
});
authRouter.get("/authenticate", authenticate, async (req, res) => {
  res.send({ user: req.user });
});
authRouter.put("/users/stretches", authenticate, async (req, res) => {
  const id = req.body.stretchId;
  const { user } = req;
  await user.toggleLikedStretch(id);

  res.send({ user });
});
authRouter.put("/users/articles", authenticate, async (req, res) => {
  const id = req.body.articleId;
  const { user } = req;
  await user.toggleLikeArticle(id);

  res.send({ user });
});

module.exports = authRouter;
