import { Router } from 'express'

const router = Router()
const path = require('path')
const fs = require('fs').promises

router.get('/', async function listCities (req, res) {
  const citiesFile = path.join(__dirname, '../../italian-cities.json')
  const { offset = 0, limit = 25 } = req.query
  try {
    const data = await fs.readFile(citiesFile) 
    res.json(JSON.parse(data))
  } catch (err) {
    res.status(500).json({err: err.message})
  }
})

export default router