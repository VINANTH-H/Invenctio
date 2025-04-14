const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const path = require('path'); // 👈 add this

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend'))); // 👈 serve all html/css/js

// Serve index.html for the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
