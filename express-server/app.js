const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
<<<<<<< HEAD
const db = require('./db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const exchangeRouter = require('/routes/exchange');
=======
const db = require('./db/index');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const exchangeRouter = require('./routes/exchange');

>>>>>>> 1de08a26b7762c1a1ffac08a0cdb825ba567398a
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/exchange', exchangeRouter);

module.exports = app;
