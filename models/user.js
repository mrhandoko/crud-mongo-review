var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  password: String,
  salt: String
})

var User = mongoose.model('User', userSchema)

module.exports = User
