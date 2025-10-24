const express = require('express');
const { createPost, getPosts, deletePost } = require('../controllers/postController');
const { protect } = require('../middleware/auth');
const router = express.Router();



router.get('/', getPosts);
router.delete('/id', protect, deletePost); //authentication middleware
router.post('/', protect, createPost); //authentication middleware
 

module.exports = router;

