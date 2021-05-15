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

  router.post('/exchanges/new', async (req, res) => {
    const { userId, exchangeId, apiKey, apiSecret } = req.body;
    const account = await addUserAccount({ userId, exchangeId, apiKey, apiSecret })
    console.log(account)
    res.sendStatus(200)
  })

  //router.post('/exchanges/new', async (req, res) => {
    router.post('/register', (req, res) => {
    const { email, password } = req.body;

    getUserByEmail(email)
      .then(user => {
        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists'
          });
        } else {
          return addUser(email, password)
        }
      })
        .then(newUser => res.json(newUser))
        .catch(err => res.json({
          error: err.message
      }));
  })

router.post('/login/:email/:password', (req, res) => {
  const {email, password} = req.params;
  getUserByEmail(email)
  .then(user => {
    if (email && user.password === password) {

      req.session['user_id'] = user.id;
      return res.status(200).json(user)
    }
    return res.send("Error!! Invalid email/password");
    res.statusCode = 403;
  })
});

router.post('/register/:email/:password', (req, res) => {
  const {email, password} = req.params;
  
  getUserByEmail(email)
  .then(user => {
    if (user) {
      req.session.user_id = userId;
      return res.send("Sorry, there is already a user registered with this email")
    }
    addUser(email, password).then(userAdded => {
      console.log(userAdded)
      return res.send("success, you are registered")
    })
  })
});

module.exports = router;

// app.post('/register', (req,res) => {
//   const {email, password} = req.body;
//   userDatabase[email] = {email, password};

//   res.cookie('email', email);
//   res.json(userDatabase[email]);
// });

// app.post('/logout', (req,res) => {
//   res.clearCookie('email');
//   res.json({msg: 'Cookie cleared!'});
// });
