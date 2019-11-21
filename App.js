const express = require('express');

const App = express();

// Index route
App.get('/', (req, res) => {
  res.send('INDEX');
});

// About route
App.get('/about', (req, res) => {
  res.send('ABOUT');
});

const port = 5000;

App.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
