const Pollution = require('../database/Pollution')

// All pollution list
exports.pollution_list = function (req, res) {
  res.send('To Write: pollution list page')
}

// Display pollution type
exports.pollution_type = function (req, res) {
  res.send('To Write: pollution type description page')
}

// Display only one type of pollution
exports.pollution_wich = function (req, res) {
  res.send('To Write: get only one type of pollution')
}

// Pollution Create from post
exports.pollution_create_post = function (req, res) {
  res.send('To Write: create pollution from post')
}

// Pollution update from post
exports.pollution_update = function (req, res) {
  res.send('To Write: update pollution from post')
}
