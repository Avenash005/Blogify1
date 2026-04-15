const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/posts.controller');

// GET /api/v1/posts
router.get('/', getAllPosts);

// GET /api/v1/posts/:id
router.get('/:id', getPostById);

// POST /api/v1/posts
router.post('/', createPost);

// PUT /api/v1/posts/:id
router.put('/:id', updatePost);

// DELETE /api/v1/posts/:id
router.delete('/:id', deletePost);

module.exports = router;
