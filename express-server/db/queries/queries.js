const db = require('../index')

// User queries
// - GET /api/users/:id === get user information
module.exports = (db) => {
  const getUsers = () => {
      const query = {
          text: 'SELECT * FROM users',
      };

      return db
          .query(query)
          .then((result) => result.rows)
          .catch((err) => err);
  };

  const getUserByEmail = email => {

      const query = {
          text: `SELECT * FROM users WHERE email = $1` ,
          values: [email]
      }

      return db
          .query(query)
          .then(result => result.rows[0])
          .catch((err) => err);
  }

  const getUserById = id => {

      const query = {
          text: `SELECT * FROM users WHERE id = $1` ,
          values: [id]
      }

      return db
          .query(query)
          .then(result => result.rows[0])
          .catch((err) => err);
  }

  // - POST /api/users/new === register user 
  const addUser = (userName, email, password) => {
      const query = {
          text: `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *` ,
          values: [userName, email, password]
      }

      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
  }

  // - GET /api/users/exchanges/:id === get user exchanges 
  const getUsersExchanges = () => {
      const query = {
          text: `SELECT users.id as user_id, users.name as user_name, email, accounts.id as account_id, exchanges.id as exchange_id, exchanges.name as exchange_name
      FROM users
      INNER JOIN accounts
      ON users.id = accounts.user_id
      INNER JOIN exchanges
      ON accounts.exchange_id = exchanges.id`
      }

      return db.query(query)
          .then(result => result.rows)
          .catch(err => err);

  }

  // - POST /api/users/exchanges/new === add user exchanges
  // Add new exchange
  const addUserExchanges = (exchangeName, exchangeWebsite) => {
    const query = {
        text: `INSERT INTO exchanges (name, website) VALUES ($1, $2) RETURNING *` ,
        values: [exchangeName, exchangeWebsite]
    }

    return db.query(query)
        .then(result => result.rows[0])
        .catch(err => err);
}

// Add new user account
const addUserAccounts = (userId, exchangeId, apiKey, apiSecret) => {
  const query = {
      text: `INSERT INTO accounts (user_id, exchange_id, api_key, api_secret) VALUES ($1, $2, $3, $4) RETURNING *` ,
      values: [userId, exchangeId, apiKey, apiSecret]
  }

  return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
}

  return {
      getUsers,
      getUserById,
      getUserByEmail,
      addUser,
      getUsersExchanges,
      addUserExchanges, 
      addUserAccounts
  };
};

// - POST /api/login === log user in (set cookies)
// - POST /api/logout === log user out (delete cookies)

