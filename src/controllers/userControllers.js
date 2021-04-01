const User = require('../database/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Handle Validation Errors
const handleErrors = (err) => {
  console.log(err.message, err.code)
}

const singup = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'Mail Exists'
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            })
          } else {
            const newUser = new User({
              _id: new mongoose.Types.ObjectId(),
              username: req.body.username,
              email: req.body.email,
              password: hash
            })
            newUser
              .save()
              .then(result => {
                console.log(result)
                res.status(201).json({
                  message: 'User created'
                })
              })
              .catch(err => {
                handleErrors(err)
                console.log(err)
                res.status(500).json({
                  error: err
                })
              })
          }
        })
      }
    })
}

const login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth failed'
        })
      }
      bcrypt.compare(req.body.password, user[0].password, function (error, result) {
        if (error) {
          return res.status(401).json({
            message: 'Auth failed'
          })
        }
        if (result) {
          const token = jwt.sign({
            email: user[0].email,
            userId: user[0]._id
          }, process.env.JWT_KEY, {
            expiresIn: '1h'
          })
          return res
            .status(200).json({
              message: 'Welcome back!',
              token: token
            })
        }
        res.status(401).json({
          message: 'Auth failed'
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
}

const delete_user = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      console.log(result)
      res.status(201).json({
        message: 'User deleted'
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
}

const singup_get = (req, res) => {
  res.render('singup', { title: 'Singup!' })
}

const login_get = (req, res) => {
  res.render('login', { title: 'Login!' })
}

module.exports = {
  singup,
  singup_get,
  delete_user,
  login,
  login_get
}
