const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('We are GETTING pollution page')
})

router.post('/', (req, res, next) => {
  res.send('We are POSTING pollution page')
})

router.get('/:objectId', (req, res, next) => {
	//extractiong data from db
})

module.exports = router
