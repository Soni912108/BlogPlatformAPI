const Post = require('../models/Post');

const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = new Post({ title, content, author: req.user.id });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



const getPosts = async (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    const query = search ? { title: { $regex: search, $options: 'i' } } : {};
    try {
        const posts = await Post.find(query)
            .populate('author', 'username')
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Post.countDocuments(query);
        res.json({
            posts,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const deletePost = async (req, res) => {
    const { id } = req.params;
  
    try {
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      // Check if the user deleting the post is the author
      if (post.author.toString() !== req.user.id) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      // Use deleteOne to remove the post
      await Post.deleteOne({ _id: id });
  
      res.json({ message: 'Post deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


module.exports = { createPost, getPosts, deletePost };
