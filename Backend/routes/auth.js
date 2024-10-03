const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const UserData = require('../models/UserData'); // Import the UserData model
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const { name, email, password} = req.body; // Include additional data fields

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        // Create userData entry
        const userData = new UserData({
            userId: user._id,
            email:user.email,  
            password:user.password   
        });

        await userData.save();

        // Generate JWT token
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, 'randomSecretKey', { expiresIn: 3600 });

        res.status(200).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
