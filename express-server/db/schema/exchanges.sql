DROP TABLE IF EXISTS exchanges CASCADE;
CREATE TABLE exchanges(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  country_of_origin VARCHAR(100), 
  website VARCHAR(100),
)