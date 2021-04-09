const jwt = require('jsonwebtoken')
const User = require('../database/user')

const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: maxAge
  })
}

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
      if (err) {
        console.log(err.message)
        res.redirect('/user/login')
      } else {
        console.log(decodedToken)
        next()
      }
    })
  } else {
    res.redirect('/user/login')
  }
}

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, async (err, decodedToken) => {
      if (err) {
        console.log(err.message)
        res.locals.user = null
        next()
      } else {
        console.log(decodedToken)
        const userLocals = await User.findById(decodedToken.id)
        res.locals.user = userLocals
        next()
      }
    })
  } else {
    res.locals.user = null
    next()
  }
}
module.exports = {
  createToken,
  maxAge,
  requireAuth,
  checkUser
}
