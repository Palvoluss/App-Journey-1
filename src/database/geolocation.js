// Creating Geolocation schema to use GeoJSON

import mongoose from 'mongoose'

const GeoSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      index: '2dshpere'
    }
  })

export default mongoose.model('GeoSchema', GeoSchema)
