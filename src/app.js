require('dotenv').config({ silent: true })
const express = require('express')
const app = express()
const helmet = require('helmet')
const path = require('path')
const passport = require('passport')

app
  .set('views', path.join(__dirname, 'views')) // set views directory
  .set('view engine', 'ejs') // set view engine to ejs (Used for emails)

  // Middleware before every route
  .use(
    helmet({ contentSecurityPolicy: process.env.ENV === 'production' ? undefined : false }), // Helmet helps you secure your Express apps by setting various HTTP headers
    passport.initialize(), // Passport is a Node.js middleware for authenticating users
    express.urlencoded({ extended: false }), // Express url encoded middleware parses the URL-encoded data and makes it available on req.body
    express.static(path.join(__dirname, './public')) // Express static middleware serves files from a given root directory
  )

// Passport authentication middleware
// require('./middleware/passport/authentication')(passport);
// const standardAuth = passport.authenticate('jwt', { session: false, msg: 'false' });

// routes
const { auth } = require('./routes/index')

app
  // Routes before middleware
  .use(auth)
// Define middleware before routes
//   .use(standardAuth)
// Routes after middleware

module.exports = app
