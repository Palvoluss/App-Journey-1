// const GeoSchema = require('../database/geolocation').schema
import mongoose from 'mongoose'

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlenght: 100,
      lowercase: true
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
export default mongoose.model('City', CitySchema)
