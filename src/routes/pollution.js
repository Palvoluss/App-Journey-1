const express = require('express')
const router = express.Router()

const pollutionController = require('../controllers/pollutionControllers')
const upload = require('../utilis/multerConfig')
const authFunction = require('../utilis/checkAuth')

// Pollution list by GET
router.get('/', authFunction.checkToken, pollutionController.pollution_list)

// Pollution Upload by GET
router.get('/upload', pollutionController.pollution_upload_get)

// Pollution Upload by POST
router.post('/upload', authFunction.checkToken, upload.single('photoInput'), pollutionController.pollution_upload_post)

// update Pollution
router.put('/update/:id', pollutionController.pollution_update)
// doesn't work, put a request on a specific id and return the result on another id

// Show just one specific blog, from id, by GET
router.get('/:id', pollutionController.pollution_specific)

// Pollution Delete
router.delete('/delete/:id', pollutionController.pollution_delete)

module.exports = router
