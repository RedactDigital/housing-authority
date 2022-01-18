const { Router } = require('express')
const Route = require('./Route')
const Controller = require('../controllers/index')
const key = new Router()

class Key extends Route {
  constructor() {
    super()
  }

  return() {
    key.get('/keys', Controller.key.index)

    return key
  }
}

module.exports = Key
