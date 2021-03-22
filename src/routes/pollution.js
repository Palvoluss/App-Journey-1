const express = require('express')
const router = express.Router()

const pollutionController = require('../controllers/pollutionControllers')

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
})

// Pollution list by GET
router.get('/', pollutionController.pollution_list)

// Pollution Upload by GET
router.get('/upload', pollutionController.pollution_upload_get)

// Pollution Upload by POST
router.post('/upload', upload.single('photoInput'), pollutionController.pollution_upload_post)

// update Pollution
// TO DO
module.exports = router
