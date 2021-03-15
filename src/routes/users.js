const express = require('express')
const router = express.Router()

const User = require('../database/user')

// get Users list
router.get('/', function (req, res, next) {
  User.find({}).then(function (us) {
    res.send(us)
  })
})

// add User
router.post('/', (req, res, next) => {
  console.log('body:', req.body)
  const newUser = new User(req.body)
  newUser.save((err, doc) => {
    if (err) console.log(err)
    else {
      console.log(doc)
      return res.json({
        msg: `Welcome ${req.body.username}!`
      })
    }
  })
})

// get selected user
router.get('/:Id')

module.exports = router
