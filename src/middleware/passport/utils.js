const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const geoip = require('geoip-lite');

const pathToKey = path.join('./', 'config/key', 'jwt_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

module.exports = function issueJWT(user, ipAddress) {
  const { id } = user;
  const geoLocation = geoip.lookup(ipAddress);

  const options = {
    expiresIn: process.env.JWT_EXPIRATION || '2w',
    algorithm: process.env.JWT_ALGORITHM,
  };

  const payload = {
    sub: id,
    iat: Date.now(),
    ip: ipAddress,
    geoLocation,
  };

  const signedToken = jwt.sign(payload, PRIV_KEY, options);

  return {
    token: signedToken,
  };
};
