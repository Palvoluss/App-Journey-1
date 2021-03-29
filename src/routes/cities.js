const express = require('express')
const router = express.Router()

const cityControllers = require('../controllers/cityControllers')

// get city list
router.get('/', cityControllers.cities_list)

// add city
router.post('/', cityControllers.add_city)

module.exports = router
