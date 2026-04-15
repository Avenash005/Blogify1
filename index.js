require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const apiRouter = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware (security, parsing)
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes - single mount point for /api/v1
app.use('/api/v1', apiRouter);

// Error handling middleware (last)
app.use(errorHandler);

// Health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Blogify API - Module 2 Architecture'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Blogify API running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}`);
  console.log(`API docs: http://localhost:${PORT}/api/v1/posts`);
});

module.exports = app;
