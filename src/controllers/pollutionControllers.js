const Pollution = require('../database/Pollution')
const upload = require('../utils/uploadConfig')

// Pollution list by GET
const pollution_list = (req, res) => {
  Pollution.find().sort({ createdAt: -1 })
    .then((poll) => {
      res.render('pollution', { title: 'Pollution List', pollutions: poll })
    })
    .catch((err) => {
      console.log(err)
    })
}

// Pollution Upload by GET
const pollution_upload_get = (req, res) => {
  res.render('newpollution', { title: 'Upload Pollution' })
}

// Pollution Upload by POST
const pollution_upload_post = (req, res) => {
  const newPollution = new Pollution(req.body)

  newPollution.save()
  	.then((result) => {
  		res.redirect('/pollution')
  	})
  	.catch((err) => {
  		console.log(err)
  	})
}

// Upload Controller
const uploadFile = async (req, res) => {
  try {
    await upload(req, res)

    console.log(req.file)
    if (req.file == undefined) {
      return res.send(`You must select a file.`)
    }

    return res.send(`File has been uploaded.`)
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying upload image: ${error}`)
  }
}

// Pollution Upload by POST
const pollution_upload_post = async (req, res) => {
  const newPollution = new Pollution(req.body)

  newPollution.save()
    .then(upload) => {

    }
    .then((result) => {
      res.redirect('/pollution')
    })
    .catch((err) => {
      console.log(err)
    })
}

// Upload Controller
const uploadFile = async (req, res) => {
  try {
    await upload(req, res)

    console.log(req.file)
    if (req.file == undefined) {
      return res.send(`You must select a file.`)
    }
    return res.send(`File has been uploaded.`)
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying upload image: ${error}`)
  }
}

module.exports = {
  pollution_list,
  pollution_upload_get,
  pollution_upload_post,
  uploadFile
}
