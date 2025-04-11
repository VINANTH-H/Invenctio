const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});