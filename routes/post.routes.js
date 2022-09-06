const router = require("express").Router;
const {
  getPost,
  getPosts,
  createPosts,
  updatePosts,
  deletePosts
 
} = require("../controllers/post.controller");

const postRouter = router();

postRouter.route("/").post(createPosts).get(getPosts)
postRouter.route("/:postId").get(getPost).patch(updatePosts).delete(deletePosts);

module.exports = postRouter;
