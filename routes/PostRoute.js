const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create',authMiddleware, postController.createPost);
router.post('/:postId/like',authMiddleware, postController.likePost);
router.post('/:postId/comment', authMiddleware, postController.commentPost);
router.delete('/:postId', authMiddleware, postController.deletePost);
router.put('/:postId', authMiddleware, postController.updatePost);

router.get('/', authMiddleware ,postController.getAllPosts);
router.get('/user/:userId', authMiddleware,postController.getPostsByUser);
module.exports = router;