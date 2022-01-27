require('dotenv').config()
const path = require('path')

module.exports = {
  development: {
    storage: path.join(__dirname, '../storage/development'),
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
  },
  production: {
    storage: path.join(__dirname, '../storage/production'),
    dialect: process.env.DB_DIALECT,
  },
}
