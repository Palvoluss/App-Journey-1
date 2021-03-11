import { Router } from 'express'
const router = Router()
const City = require('../database/city')

import path from 'path'
const fs = require('fs').promises

router.get('/', async function listCities (req, res) {
  const citiesFile = path.join(__dirname, '../../italian-cities.json')
  try {
    const data = await fs.readFile(citiesFile)
    res.json(JSON.parse(data))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// add city

router.post('/cities', function (req, res, next) {
  City.create(req.body).then(function(city){
    res.send(city)
  }).catch(next)
})

export default router
