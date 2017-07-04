import express from 'express';
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path')

const app = express();


//CONFIG
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: true}));

//ROUTES
app.use('/index', require('./routes/index.js'));

const port = 3000;

app.listen(port, () => {
  console.log("I am listening!!!");
})


