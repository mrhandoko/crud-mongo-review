var Model = require('../models')
var faker = require('faker')

module.exports = {
  seedUser: (req, res, next) => {
    let arrUser = []
    for (var i=1; i<=10; i++) {
      arrUser.push({
        fullname: faker.name.findName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: 'satepadang',
        salt: ''
      })
    }
    Model.User.create(arrUser).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err);
    })
  }
}
