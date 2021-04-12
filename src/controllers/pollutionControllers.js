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
    geometry: { coordinates: req.body.loc.split(',').map(Number) },
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
      res.render('specificpollution', { pollution: result, title: result.geometry.coordinates })
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

  Pollution.findOneAndUpdate({ _id: id }, { $set: { status: 'cleaned the area, GG!' } }, { new: true })
    .then(result => {
      res.json({ result })
    })
    .catch((err) => {
      console.log(err)
    })
}

const pollution_list_near = (req, res, next) => {
  Pollution.aggregate().near({
    near: { type: 'point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
    maxDistance: 200000, // in 10k meters
    spherical: true,
    distanceField: 'dist.calculated'
  }).then((pollution) => {
    res.render('nearyou', { query: req.query, title: 'Pollution List Near you', pollutions: pollution })
  })
}

const pollution_where = (req, res) => {
  res.render('whereareyou', { title: 'Geolocalize yourself' })
}

module.exports = {
  pollution_list,
  pollution_where,
  pollution_list_near,
  pollution_upload_get,
  pollution_upload_post,
  pollution_specific,
  pollution_update,
  pollution_delete
}
