const express = require('express');
const router = express.Router();
const axios = require('axios');

// Handle user prompts
router.post('/ask', async (req, res) => {
    try {
        const { prompt } = req.body;

        // Send the prompt directly to the Gemini API
        const response = await axios.get(`https://api.gemini.com/v1/pubticker/${prompt.toLowerCase()}`);

        // Return the raw response from Gemini to the frontend
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process request. Ensure the symbol is valid." });
    }
});

module.exports = router;