const pgp = require('pg-promise')();
const config = require('./dbConfig');
const db =(config);

module.exports = db;
