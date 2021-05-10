DROP TABLE IF EXISTS transactions CASCADE;

CREATE TABLE transactions(
    id SERIAL PRIMARY KEY NOT NULL,
    account_id INTEGER REFERENCES accounts(id)
)

-- ALTER TABLE transactions 
-- DROP COLUMN account_id;

-- ALTER TABLE transactions 
-- ADD COLUMN account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE;

-- ALTER TABLE transactions 
-- ADD CONSTRAINT accounts_transaction_id_fkey FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE;

