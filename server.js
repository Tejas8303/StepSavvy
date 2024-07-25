const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const secretKey = 'xyz'; // Secret key for JWT

app.use(bodyParser.json());
app.use(cors());


const uri = process.env.MONGODB_URI;



mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    user_address: {
        type: String
    },
    mobile_number: {
        type: String
    }
});

const Users = mongoose.model('Users', userSchema);

app.post('/api/signup', async (req, res) => {
    const { username, password, user_address, mobile_number } = req.body;

    try {
        const existingUser = await Users.findOne({ user_name: username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const user_id = uuid.v4();
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({ user_id, user_name: username, password: hashedPassword, user_address, mobile_number });
        await newUser.save();

        console.log('User signed up:', newUser);
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Signup failed:', error);
        res.status(500).json({ message: 'Signup failed' });
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Users.findOne({ user_name: username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ user_id: user.user_id, username: user.user_name }, secretKey, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ message: 'Login failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
