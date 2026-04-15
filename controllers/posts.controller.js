// In-memory data store (replace with DB in production)
let posts = [];
let nextId = 1;

// Get all posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: posts
  });
};

// Get post by ID
const getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === parseInt(id));
  
  if (!post) {
    return res.status(404).json({
      success: false,
      error: 'Post not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: post
  });
};

// Create post
const createPost = (req, res) => {
  const { title, content, author } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({
      success: false,
      error: 'Title and content are required'
    });
  }
  
  const newPost = {
    id: nextId++,
    title,
    content,
    author: author || 'Anonymous',
    createdAt: new Date().toISOString()
  };
  
  posts.push(newPost);
  
  res.status(201).json({
    success: true,
    data: newPost,
    message: 'Post created successfully'
  });
};

// Update post
const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  
  const postIndex = posts.findIndex(p => p.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Post not found'
    });
  }
  
  posts[postIndex] = {
    ...posts[postIndex],
    title: title || posts[postIndex].title,
    content: content || posts[postIndex].content,
    author: author || posts[postIndex].author,
    updatedAt: new Date().toISOString()
  };
  
  res.status(200).json({
    success: true,
    data: posts[postIndex],
    message: 'Post updated successfully'
  });
};

// Delete post
const deletePost = (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex(p => p.id === parseInt(id));
  
  if (postIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Post not found'
    });
  }
  
  posts.splice(postIndex, 1);
  
  res.status(200).json({
    success: true,
    message: 'Post deleted successfully'
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
