const { Router } = require('express')

const { Auth } = require('../controllers/index')
const Route = require('./Route')

const auth = new Router()

class AuthRoute extends Route {
  constructor() {
    super()
  }

  return() {
    auth.get('/', Auth.index)

    auth.post('/create', Auth.create)

    auth.post('/update/:id', Auth.update)

    auth.post('/delete/:id', Auth.delete)

    return auth
  }
}

module.exports = AuthRoute
