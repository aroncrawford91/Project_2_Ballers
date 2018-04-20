\c ballers_db

DROP TABLE IF EXISTS nike;
DROP TABLE IF EXISTS adidas;
DROP TABLE IF EXISTS underarmour;
DROP TABLE IF EXISTS jordanbrand;

CREATE TABLE nike (
  athlete_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  shoe VARCHAR(50),
  price int,
  shoepic VARCHAR(255),
  playerpic VARCHAR(256)
  );

CREATE TABLE adidas (
  athlete_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  shoe VARCHAR(50),
  price int,
  shoepic VARCHAR(255),
  playerpic VARCHAR(256)
  );

CREATE TABLE underarmour (
  athlete_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  shoe VARCHAR(50),
  price int,
  shoepic VARCHAR(255),
  playerpic VARCHAR(256)
  );

CREATE TABLE jordanbrand (
  athlete_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  shoe VARCHAR(50),
  price int,
  shoepic VARCHAR(255),
  playerpic VARCHAR(256)
  );
