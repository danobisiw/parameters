const getPosts = (request, response) => {
  response.status(200).send(`Get All Posts filtered by ${request.query.title} is requested`);
};
const getPost = (request, response) => {
  response
    .status(200)
    .send(`Single Post ${request.params.postID} is requested`);
};
const createPosts = (request, response) => {
  response.status(200).send(`Post ${request.params.postID} is created`);
};
const updatePosts = (request, response) => {
  response
    .status(200)
    .send(`Post with ID ${request.params.postId} has been updated`);
};
const deletePosts = (request, response) => {
  response.status(200).send(`Post with Id ${request.params.postId} is Deleted`);
};

module.exports = { createPosts, deletePosts, getPosts, getPost, updatePosts};
