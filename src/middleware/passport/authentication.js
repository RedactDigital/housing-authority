const { Strategy, ExtractJwt } = require('passport-jwt');
const fs = require('fs');
const path = require('path');
const Logger = require('../Logger');

const { getUserById } = require('../../lib/UserLibrary');

const pathToKey = path.join('./', 'config/key', 'jwt_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const log = new Logger();

// At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};

// app.js will pass the global passport object here, and this function will configure it
module.exports = passport => {
  // The JWT payload is passed into the verify callback
  passport.use(
    new Strategy(jwtOptions, async (tokenPayload, done) => {
      try {
        const user = await getUserById(tokenPayload.sub);
        user.ip = tokenPayload.ip;
        user.geoLocation = tokenPayload.geoLocation;
        if (user) return done(null, user);
        return done(null, false);
      } catch (err) {
        log.error('Passport Error: ', err);
        return done(err, false);
      }
    })
  );
};
