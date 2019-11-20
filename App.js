const express = require('express');

const App = express();

const port = 5000;

App.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
