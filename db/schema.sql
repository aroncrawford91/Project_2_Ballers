 ballers_db

DROP TABLE IF EXISTS players;

CREATE TABLE players (
  athlete_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  brand VARCHAR(30),
  shoe VARCHAR(50),
  price VARCHAR(10),
  shoepic VARCHAR(255),
  playerpic VARCHAR(256)
  );

