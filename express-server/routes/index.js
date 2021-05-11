var express = require('express');
var router = express.Router();

// user registration
router.post('/', function(req, res, next) {
  // calls function which takes user data and 
  // inputs into db
});

// user login
router.post('/', function(req, res, next) {
  // when user logs in call function that confirms if user exists in database 
});

// add api key
router.get('/', function(req, res, next) {
// calls function that takes api keys and inputs them in to db 
});

// user logout
router.post('/', function(req, res, next) {
// calls function that clears user cookies (logout)
});

// retreive user exchanges
router.get('/', function(req, res, next) {
  // take in userId/email and retreive array of exchanges 
});

// add user exchange
router.get('/', function(req, res, next) {
 // function takes in exchange name and add exchange to database 
});

module.exports = router;
