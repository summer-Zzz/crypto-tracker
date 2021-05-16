const express = require('express');
const router = express.Router();
const {getUserByEmail, addUser, addUserAccount, getExchanges} = require('../db/helpers/dbHelpers');

/* GET users listing. */
// module.exports = ({
//   getUsers,
//   getUserByEmail,
//   addUser
// }) => {
  /* GET users listing. */
  // router.get('/', (req, res) => {
  //   getUsers()
  //     .then((users) => res.json(users))
  //     .catch((err) => res.json({
  //       error: err.message
  //     }));
  // });

  // router.get('/select', (req, res) => {
  //   console.log(req.body)
  //   res.send("success, you are login")
  // })

  // Route User Account Exchange
  router.post('/exchanges/new', async (req, res) => {
    const { userId, exchangeId, apiKey, apiSecret } = req.body;
    const account = await addUserAccount({ userId, exchangeId, apiKey, apiSecret });
    console.log(account);
    res.sendStatus(200);
  })

// User Login
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

// User Register
router.post('/register/:email/:password', (req, res) => {
  const {email, password} = req.params;
  
  getUserByEmail(email)
  .then(user => {
    if (user) {
      req.session.user_id = userId;
      return res.send("Sorry, there is already a user registered with this email")
    }
    addUser(email, password).then(userAdded => {
      console.log('User added: ', userAdded);
      return res.send("success, you are registered");
    })
  })
});

module.exports = router;