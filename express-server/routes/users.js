const express = require('express');
const router = express.Router();
const {getUserByEmail, addUser} = require('../db/helpers/dbHelpers');

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

  router.post('/register', (req, res) => {
    const {
      email,
      password
    } = req.body;

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
  
//};

module.exports = router;

router.post('/login/:email/:password', (req,res) => {
  const {email, password} = req.body;
  console.log(req.body);
  
  if (userDatabase[email] && userDatabase[email].password === password) {
    res.cookie('email', email);
    res.json(userDatabase[email]);
  } else {
    res.json(err, "Error!! Please login!!")
  }
});



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
