const express = require('express');
const router = express.Router();
const {getUserByEmail, addUser} = require('../db/helpers/dbHelpers');

  // USER LOGIN
router.post('/login', (req, res) => {
  const {email, password} = req.body;
  getUserByEmail(email)
  .then(user => {
    if (email && user.password === password) {
      return res.status(200).json(user);
    } else {
      return res.send("Error!! Invalid email/password");
    }
  })
});

  // USER REGISTER
router.post('/register', (req, res) => {
  const {email, password} = req.body;
  getUserByEmail(email)
  .then(user => {
    if (user) {
      return res.status(409).send("Sorry, there is already a user registered with this email")
    }
    addUser(email, password).then(user => {
      return res.status(200).send(user.id);
    })
  })
});

module.exports = router;
