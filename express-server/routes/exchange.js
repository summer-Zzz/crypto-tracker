var express = require('express');
var router = express.Router();

router.get('/api/exchange/:id', authRoute ,function (req, res) {
  // MIDDLEWARE
  // is user logged in? - req.session.userId
  // if no - return 401 status("user must be logged in")
  // if yes - fetch user data, next()
  // does the user have account for exchange already? - accounts table db query
  // if no - return 401 status("user must have an account")
  // if yes - fetch exchange data and coinList, next()
  // ROUTE
  // do we have coin param?
  // if yes, fetch coindata and render
  // // is coin param present in coinList?
  // // if yes, render coinList
  // // if no, next()
  // if no, fetch first available coin and render 
})


app.get('/api/exchange/:name', (req, res) => {
  db.query('select accountinfo from user where exchange is ...')
  .then(accountInfo => {
    new Exchange(accountinfo)
    const trades = exchange.fetchTrades()
    res.json(trades)
  })
})
