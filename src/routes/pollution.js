const express = require('express')
const router = express.Router()

const pollutionController = require('../controllers/pollutionControllers')

// Pollution list by GET
router.get('/', pollutionController.pollution_list)

// Pollution Upload by GET
router.get('/upload', pollutionController.pollution_upload_get)

// Pollution Upload by POST
router.post('/upload', pollutionController.pollution_upload_post)


// update Pollution
// TO DO
module.exports = router
