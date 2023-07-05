// define default config, but allow overrides from ENV vars
require('dotenv').config();

let config = {
  APP_DB_HOST: process.env.APP_DB_HOST || "localhost",
  APP_DB_USER: process.env.APP_DB_USER || "root",
  APP_DB_PASSWORD: process.env.APP_DB_PASSWORD ||"",
  APP_DB_NAME: process.env.APP_DB_NAME || "partner",
}

module.exports = config;
