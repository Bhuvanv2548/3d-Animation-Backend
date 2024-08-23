const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Backend is running!');
});


app.post('/api/signin', (req, res) => {
  const { username, password } = req.body;
  
  res.json({ message: 'Sign in successful', username });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
