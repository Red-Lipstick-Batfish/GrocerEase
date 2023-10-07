const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// serves index.html to frontend
app.get('/', (req, res) => {
  console.log('serving html file to frontend');
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;