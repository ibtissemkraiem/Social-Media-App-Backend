const Post = require('../models/Post');



const createPost = async (userId,content)=>{
    const newPost = new Post({
        user:userId,
        content
    });
    await newPost.save();
    return newPost;
}
const commentPost = async(postId,userId,content)=>{
    const post = await Post.findById(postId);
    if(!post)
    {throw new Error ('Post nOt Found')}
    const newComment={
        user: userId,
        content:content
    }
    post.comments.push(newComment);
    await post.save();
    return post;
}


const likePost = async(postId,userId)=>{
    const post = await Post.findById(postId);
    if(!post){
        throw new Error('Post not found');
    }
    const isLiked= post.likes.includes(userId);
    if(isLiked){
        post.likes = post.likes.filter(id=>id.toString() !== userId.toString());
    }else{
        post.likes.push(userId);
    }
    await post.save();
    return post;
}

const deletePost = async(postId,userId)=>{
    const post = await Post.findById(postId);
    if(!post){
        throw new Error('Post not Found')

    }
    if(post.user.toString() !== userId.toString()){
        throw new Error('Not Authorized to delete this Post')
    }
    await Post.findByIdAndDelete(postId);
    return post;
}
const updatePost = async (postId, userId, content) => {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    if (post.user.toString() !== userId.toString()) {
      throw new Error('Not authorized to update this post');
    }
    post.content = content;
    await post.save();
    return post;
  };

  const getAllPosts = async () => {
    const posts = await Post.find()
      .populate('user', '-password')
      .populate('comments.user', '-password');
    return posts;
  };

  const getPostsByUser = async (userId) => {
    const posts = await Post.find({ user: userId })
      .populate('user', '-password')
      .populate('comments.user', '-password');
    return posts;
  };  

  module.exports = { 
    createPost,
    likePost, 
    commentPost, 
    deletePost, 
    updatePost,
  
    getAllPosts,
    getPostsByUser
};