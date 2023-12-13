const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/verse-of-the-day', async (req, res) => {
  try {
    const response = await axios.get('https://bible-api.com/?random=verse');
    const verse = response.data;

    const formattedVerse = {
      text: verse.text,
      reference: `${verse.book} ${verse.chapter}:${verse.verse}`,
    };

    res.json(formattedVerse);
  } catch (error) {
    console.error('Error fetching verse from Bible API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
