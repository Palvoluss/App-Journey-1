const util = require('util')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')

const storage = new GridFsStorage({
  url: process.env.DB_CONNECTION,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg']

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-pollution-${file.originalname}`
      return filename
    }

    return {
      bucketName: 'photos',
      filename: `${Date.now()}-pollution-${file.originalname}`
    }
  }
})

const uploadFile = multer({ storage: storage }).single('photoInput')
const uploadFilesMiddleware = util.promisify(uploadFile)

module.exports = uploadFilesMiddleware
