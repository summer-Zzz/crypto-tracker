const express = require('express');
const router = express.Router();
const {getUserByEmail, addUser, addUserAccount} = require('../db/helpers/dbHelpers');
const cookieSession = require('cookie-session');

 // ADD NEW EXCHANGE
router.post('/exchanges/new', async (req, res) => {
  const { userId, exchangeId, apiKey, apiSecret } = req.body;
  const account = await addUserAccount({ userId, exchangeId, apiKey, apiSecret })
  console.log(account)
  res.sendStatus(200)
})

  // USER LOGIN
router.post('/login/:email/:password', (req, res) => {
  const {email, password} = req.params;
  getUserByEmail(email)
  .then(user => {
    if (email && user.password === password) {
      req.session['user_id'] = user.id;
      console.log('User_id: ', user.id);
      return res.status(200).json(user);
    } else {
      return res.send("Error!! Invalid email/password");
      res.statusCode = 403;
    }
  })
});

 // USER LOGOUT
router.post('/logout', (req,res) => {
  req.session.user_id = null;
  return res.json({msg: 'Cookie cleared!'});
});


  // USER REGISTER
router.post('/register/:email/:password', (req, res) => {
  const {email, password} = req.params;
  
  getUserByEmail(email)
  .then(user => {
    if (user) {
      req.session['user_id'] = user.id;
      return res.send("Sorry, there is already a user registered with this email")
    }
    addUser(email, password).then(userAdded => {
      console.log('User added: ', userAdded);
      return res.send("success, you are registered");
    })
  })
});

module.exports = router;
