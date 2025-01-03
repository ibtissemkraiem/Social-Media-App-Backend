const { successResponse, errorResponse } = require('../utils/responseHandler');
const postService = require('../services/postService');


module.exports.createPost = async (req, res) => { 
    try{
        const userId = req.userId;
        const { content } = req.body;
        const newPost = await postService.createPost(userId, content);
        return successResponse(res, newPost, 'Post created successfully', 201);
    } catch(err) {
        return errorResponse(res, err.message);
    }
}

module.exports.likePost=async(req,res)=>{
    try{
        const userId = req.userId;
        const {postId}= req.params;
        const post = await postService.likePost(postId,userId);
        return successResponse(res,post, 'Post liked/unliked successfully', 201)

    }catch(err)
{
    return errorResponse(res,err.message);

}};

module.exports.commentPost = async (req, res) => {
    try {
      const userId = req.userId;
      const { postId } = req.params;
      const { content } = req.body;
      const post = await postService.commentPost(postId, userId, content);
      return successResponse(res, post, 'Comment added successfully', 201);
    } catch (error) {
      return errorResponse(res, error.message);
    }
  };
  module.exports.deletePost = async (req, res) => {
    try {
      const userId = req.userId;
      const { postId } = req.params;
      await postService.deletePost(postId, userId);
      return successResponse(res, postId,'Post deleted successfully',200);
    } catch (error) {
      return errorResponse(res, error.message);
    }
  };
  module.exports.updatePost = async (req, res) => {
    try {
      const userId = req.userId;
      const { postId } = req.params;
      const { content } = req.body;
      const post = await postService.updatePost(postId, userId, content);
      return successResponse(res, post,'Post updated successfully', 200);
    } catch (error) {
      return errorResponse(res, error.message);
    }
  };
  module.exports.getAllPosts = async (req, res) => {
    try {
      const posts = await postService.getAllPosts();
      return successResponse(res, posts,'Get all posts successfully',200);
    } catch (error) {
      return errorResponse(res, error.message);
    }
  };
  
  module.exports.getPostsByUser = async (req, res) => {
    try {
      const {userId} = req.params;
      const posts = await postService.getPostsByUser(userId);
      return successResponse(res, posts,'Get posts by user successfully',200);
    } catch (error) {
      return errorResponse(res, error.message);
    }
  };  