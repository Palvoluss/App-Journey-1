const express = require('express')
const router = express.Router()

const city = require('../database/city')

// get city list

router.get('/', function (req, res, next) {
  city.find({}).then(function(cities){
    res.send(cities)
  })
})

// add city

router.post('/', function (req, res, next) {
  city.save(req.body).then(function (e) {
    res.send(e)
  }).catch(next)
})

module.exports = router
