const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });

        await user.save();
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(201).json({ token : token ,message: 'Success'});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token : token ,message: 'Success' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register, login };
