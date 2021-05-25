const express = require('express');
const router = express.Router();
const {getUserByEmail, addUser} = require('../db/helpers/dbHelpers');

  // USER LOGIN
router.post('/login/:email/:password', (req, res) => {
  const {email, password} = req.params;
  getUserByEmail(email)
  .then(user => {
    if (email && user.password === password) {
      return res.status(200).json(user);
    } else {
      return res.send("Error!! Invalid email/password");
    }
  })
});

 // USER LOGOUT
router.post('/logout', (req,res) => {
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
