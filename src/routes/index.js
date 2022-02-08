const Auth = require('./Auth')
// const Key = require('./Key')
// const UserRoute = require('./userRoutes');

const auth = new Auth().return()
// const key = new Key().return()
// const user = new UserRoute().returns();
module.exports = {
  auth,
  // key,
  //   user,
}
