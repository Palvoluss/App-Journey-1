const express = require('express')
const router = express.Router()

const Pollution = require('../database/pollution')

// get Pollution list
router.get('/', function (req, res, next) {
  Pollution.find({}).then(function (poll) {
    res.send(poll)
  })
})

// add Pollution
router.post('/', (req, res, next) => {
  console.log('body:', req.body)
  const newPollution = new Pollution(req.body)
  newPollution.save((err, doc) => {
    if (err) console.log(err)
    else {
      console.log(doc)
      return res.json({
        msg: 'data recivied and saved'
      })
    }
  })
})

router.get('/upload', (req, res) =>{
  res.render('upload', { title: 'Upload Pollution' })
})

// update Pollution
// TO DO
module.exports = router
