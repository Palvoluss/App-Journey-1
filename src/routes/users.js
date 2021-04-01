const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/userControllers')

router.get('/singup', userControllers.singup_get)

router.post('/singup', userControllers.singup)

router.get('/login', userControllers.login_get)

router.post('/login', userControllers.login)

router.delete('/:userId', userControllers.delete_user)

module.exports = router

