DROP TABLE IF EXISTS accoints CASCADE;
CREATE TABLE accounts(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id OMT REFERENCES users(id) NOT NULL,
  exchange_id REFERENCES exchanges(id) NOT NULL,
  api_key VARCHAR(100),
  api_Secret VARCHAR(100) 
)