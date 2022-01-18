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

    // .patch('/password/reset/send', AuthService.resetPasswordNotification)

    // .patch('/password/reset', AuthService.resetPassword);

    return auth
  }
}

module.exports = AuthRoute
