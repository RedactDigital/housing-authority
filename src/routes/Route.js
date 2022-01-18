const passport = require('passport');

// const Security = require('../middleware/Security');

// const security = new Security(process.env.ENV !== 'production' ? true : false);
// const standardAuth = passport.authenticate('jwt', { session: false, msg: 'false' });

class Route {
  constructor() {
    // this.security = security;
    // this.standardAuth = standardAuth;
    this.passport = passport;
  }
}

module.exports = Route;
