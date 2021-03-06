const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/userControllers')
const jwtUtilis = require('../utilis/jwtUtilis')

router.get('/singup', userControllers.singup_get)

router.post('/singup', userControllers.singup_post)

router.get('/logout', userControllers.logout_get)

router.get('/login', userControllers.login_get)

router.post('/login', userControllers.login_post)

router.delete('/:userId', jwtUtilis.requireAuth, userControllers.delete_user)

module.exports = router

