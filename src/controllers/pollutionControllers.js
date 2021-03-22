const Pollution = require('../database/Pollution')
const mongoose = require('mongoose')

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
  const newPollution = new Pollution({
    _id: new mongoose.Types.ObjectId(),
    pollution_type: req.body.pollution_type,
    description: req.body.description,
    photo: req.file.path
  })

  newPollution.save()
  	.then((result) => {
  		res.redirect('/pollution')
  	})
  	.catch((err) => {
  		console.log(err)
  	})
}


module.exports = {
  pollution_list,
  pollution_upload_get,
  pollution_upload_post
}
