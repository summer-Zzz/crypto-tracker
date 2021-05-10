//const db = require('db')
const pg = require('pg');
require('dotenv').config();

const connectionString = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}?sslmode=disable` ;

const client = new pg.Client({
  connectionString: connectionString || process.env.DATABASE_URL,
});

console.log( `Connected to ${process.env.PGDATABASE} on ${process.env.PGHOST}` );
client.connect();

// db.connect({
//   host: process.env.PGHOST,
//   username: process.env.PGUSER,
//   password: process.env.PGPASSWORD
// })
// PGHOST = localhost
// PGUSER = tracker
// PGPASSWORD = 123
// PGDATABASE = crypto_tracker
// PGPORT = 5432

module.exports = client;