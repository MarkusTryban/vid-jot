const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect('mongodb://localhost/vidjot-dev', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Index route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title
  });
});

// About route
app.get('/about', (req, res) => {
  res.render('about');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
