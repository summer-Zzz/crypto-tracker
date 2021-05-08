DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(25e5) NOT NULL,
    password VARCHAR(255) NOT NULL,
    holdings INTEGER, 
    holdings_dated_update, DATE,
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT,
    UNIQUE (email)
);