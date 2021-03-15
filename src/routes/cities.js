const express = require('express')
const router = express.Router()

const City = require('../database/city')

// get city list
router.get('/', function (req, res, next) {
  City.find({}).then(function (cities) {
    res.send(cities)
  })
})

// add city
router.post('/', (req, res, next) => {
  console.log('body:', req.body)
  const newCity = new City(req.body)
  newCity.save((err, doc) => {
    if (err) console.log(err)
    else {
      console.log(doc)
      return res.json({
        msg: 'data recivied and saved'
      })
    }
  })
})

// router.post('/', (req, res) => {
//   console.log('body:', req.body)
//   const newCity = new City(req.body)
//   newCity.save((err) => {
//     if (err) {
//       res.status(500).json({ msg: 'sorrryyyyyy' })
//       return
//     }
//     return res.json({
//         msg: 'data recivied and saved'
//       })
//   })
// })

module.exports = router
