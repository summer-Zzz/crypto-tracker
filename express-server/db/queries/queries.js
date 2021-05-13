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


  // - POST /api/users/new === register user 
  const addUser = (userName, email, password) => {
      const query = {
          text: `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
          values: [userName, email, password]
      }

      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
  }

  // - GET /api/users/exchange/:id === get user exchange 
  const getUserExchanges = () => {
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

  // getUserTransactions
//   const getUserTransactions = () => {
//     const query = {
//       text: `SELECT users.id as user_id, users.name as user_name, email, accounts.id as account_id, exchanges.id as exchange_id, exchanges.name as exchange_name
//       FROM users
//       INNER JOIN accounts
//       ON users.id = accounts.user_id
//       INNER JOIN transactions
//       ON accounts.id = account_id`
//       }

//     return db.query(query)
//       .then(result => result.rows)
//       .catch(err => err);
//   }


  // getUserExchangeTransactions
//   const query = {
//     text: `SELECT * FROM users WHERE email = $1` ,
//     values: [email]
//   }

// return db
//     .query(query)
//     .then(result => result.rows[0])
//     .catch((err) => err);
// }
  
  // addUserTransaction
  const addUserTransactions = (txnData) = () => {
      const {accountId, baseCurrency, quoteCurrency, 
        txnType, orderType, unitPrice, amount, cost, txnTime, txnFee} = txnData; 
    const query = {
      text: `INSERT INTO transactions (account_id, base_currency, quote_currency, 
      transaction_type, order_type, unit_price, amount, cost, transaction_time, 
      transaction_fee) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      values: [accountId, baseCurrency, quoteCurrency, 
        txnType, orderType, unitPrice, amount, cost, txnTime, txnFee]
    }

    return db.query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  }

  // - GET /api/users/exchanges
  const getUserExchanges = (userId) => {
    const query = {
      text: `SELECT users.id, exchange.name FROM exchanges 
        INNER JOIN accounts
        ON exchanges.id = accounts.exchange_id
        INNER JOIN users
        ON users.id = accounts.user_id
        WHERE users.id = $1`,
        values: [userId]
    }
  
  return db
      .query(query)
      .then(result => result.rows[0])
      .catch((err) => err);

}
  
  // - POST /api/users/exchanges/new === add user exchange
  // Add new exchange
  const addUserExchange = (exchangeName, exchangeWebsite) => {
    const query = {
        text: `INSERT INTO exchanges (name, website) VALUES ($1, $2) RETURNING *` ,
        values: [exchangeName, exchangeWebsite]
    }

    return db.query(query)
        .then(result => result.rows[0])
        .catch(err => err);
    }

// Add new user account
const addUserAccount = (userId, exchangeId, apiKey, apiSecret) => {
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
      getUserTransactions,
      addUserExchange, 
      addUserAccount
  };
}

// - POST /api/login === log user in (set cookies)
// - POST /api/logout === log user out (delete cookies)

