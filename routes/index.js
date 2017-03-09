var express = require('express');
var router = express.Router();
var Seeder = require('../seeders')
var Controller = require('../controllers')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
});

// Seed user
router.get('/userseed', Seeder.seedUser);

// Get User
router.get('/getusers', Controller.getUsers)
router.post('/newuser', Controller.newUser)
router.put('/updateuser/:id', Controller.updateUser)
router.delete('/removeuser/:id', Controller.removeUser)

module.exports = router;
