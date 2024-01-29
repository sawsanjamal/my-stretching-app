const bcrypt = require("bcrypt");
const saltRounds = 10;
function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}
module.exports = { hashPassword };
