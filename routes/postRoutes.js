const express = require('express');
const { createPost, getPosts, deletePost } = require('../controllers/postController');
const { protect } = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Posts management
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of posts per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term
 *     responses:
 *       200:
 *         description: A list of posts
 *       500:
 *         description: Server error
 */
router.get('/', getPosts);


router.delete('/id', protect, deletePost); // Protect the route with authentication middleware

/**
 * @swagger
 * /api/posts/:id
 * delete:
        summary: Delete a post
        tags: [Posts]
        requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
    * responses:
 *       201:
 *         description: Post deleted successfully
 *       400:
 *         description: Bad request
 *     security:
 *       - bearerAuth: []
 */




/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Bad request
 *     security:
 *       - bearerAuth: []
 */
router.post('/', protect, createPost);
 

module.exports = router;
