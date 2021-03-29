const Pollution = require('../database/pollution')
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
    loc: req.body.loc,
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

// Pollution Specific
const pollution_specific = (req, res) => {
  const id = req.params.id

  Pollution.findById(id)
    .then(result => {
      res.render('specificpollution', { pollution: result, title: result.loc })
    })
    .catch((err) => {
      console.log(err)
    })
}

// Pollution delete
const pollution_delete = (req, res) => {
  const id = req.params.id

  Pollution.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/pollution' })
    })
    .catch((err) => {
      console.log(err)
    })
}

// Pollution Update
const pollution_update = (req, res) => {
  const id = req.params.id
  const updateInfo = { status: 'cleaned the area, GG!' }

  Pollution.findOneAndUpdate(
    id,
    updateInfo,
    { new: true })
    .then(result => {
      res.json({ result })
    })
    .catch((err) => {
      console.log(err)
    })
}
module.exports = {
  pollution_list,
  pollution_upload_get,
  pollution_upload_post,
  pollution_specific,
  pollution_update,
  pollution_delete
}
