const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose
  .connect('mongodb://localhost/vidjot-dev', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

require('./models/idea');

const idea = mongoose.model('ideas');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
});

app.post('/ideas', (req, res) => {
  res.send('ok');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
