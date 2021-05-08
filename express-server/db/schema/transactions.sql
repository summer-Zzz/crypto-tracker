DROP TABLE IF EXISTS transactions CASCADE;
CREATE TABLE transactions(
    id SERIAL PRIMARY KEY NOT NULL,
    account_id INT REFERENCES accounts(id)
)