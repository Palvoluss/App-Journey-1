const User = require('../database/user')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const handleErrors = require('../utilis/userErrorHandling')
const jwtUtilis = require('../utilis/jwtUtilis')

const singup_get = (req, res) => {
  res.render('singup', { title: 'Singup!' })
}

const login_get = (req, res) => {
  res.render('login', { title: 'Login!' })
}

const singup_post = async (req, res) => {
  const { username, email, password } = req.body

  try {
    const user = await User.create({ username, email, password })
    const token = jwtUtilis.createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: jwtUtilis.maxAge * 1000 })
    res.status(201).json({ user: user._id }).send('User created')
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}

// const login_post = async (req, res) => {
//   const { username, email, password } = req.body

//   try {
//     const user = await User.login(req.body)
//     const token = jwtUtilis.createToken(user._id)
//     res.cookie('jwt', token, { httpOnly: true, maxAge: jwtUtilis.maxAge * 1000 })
//     res.status(200).json({ user: user._id })
//   } catch (err) {
//     const errors = handleErrors(err)
//     res.status(400).json({ errors })
//   }
// }

const login_post = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    const token = jwtUtilis.createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: jwtUtilis.maxAge * 1000 })
    res.status(200).json({ user: user._id })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).json({ errors })
  }
}

const logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect('/')
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

module.exports = {
  singup_post,
  singup_get,
  delete_user,
  login_post,
  login_get,
  logout_get
}
