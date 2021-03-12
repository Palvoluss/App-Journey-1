// const GeoSchema = require('../database/geolocation').schema
import mongoose from 'mongoose'

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'We should call you in some way']
    },
    pollution: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pollution'
    },
    geometry: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        index: '2dshpere'
      }
    }
  }
)

// Vitrtuals

// CitySchema
//   .virtual('url')
//   .get(function () {
//     return '/cities/' + this._id
//   })

// Export model
module.exports = mongoose.model('city', CitySchema)
