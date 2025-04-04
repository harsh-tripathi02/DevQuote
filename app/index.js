const express = require('express');
const quotes = require('./quotes.json');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
