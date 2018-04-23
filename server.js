
const path = require('path');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const playersRouter = require('./routes/ballersRouter');

const PORT =process.env.PORT || 3000;


const app = express();



app.use(logger('dev')); // Log request info to console
app.use(bodyParser.urlencoded({extended: false})); // parse urlencoded req bodies (for POST and PUT requests)
app.use(bodyParser.json()); // parse json req bodies (for POST and PUT requests)
app.use(methodOverride('_method'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.render('hello');
});

app.use('/players', playersRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
