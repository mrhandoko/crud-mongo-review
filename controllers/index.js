var Model =  require('../models')

module.exports = {
  getUsers: (req, res, next) => {
    Model.User.find({}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  newUser: (req, res, next) => {
    Model.User.create({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      salt: ''
    }).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  removeUser: (req, res, next) => {
    Model.User.remove({_id: req.params.id}).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err);
    })
  },
  updateUser: (req, res, next) => {
    Model.User.update({_id: req.params.id},
      {'$set':{
        email: req.body.email,
        password: req.body.password
      }
    }).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err)
    })
  }
}
