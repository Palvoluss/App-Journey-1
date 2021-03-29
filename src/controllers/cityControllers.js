const City = require('../database/city')

const cities_list = (req, res) => {
  City.find({})
    .then(function (cities) {
      res.send(cities)
    })
}

const add_city = (req, res, next) => {
  console.log('body:', req.body)
  const newCity = new City(req.body)
  newCity.save((err, doc) => {
    if (err) console.log(err)
    else {
      console.log(doc)
      return res.json({
        msg: 'data recivied and saved'
      })
    }
  })
}

module.exports = {
  cities_list,
  add_city
}
