
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
    coords: {
      latitudine: { type: Number },
      longitudine: { type: Number }
    }
  }
)

// Vitrtuals

CitySchema
  .virtual('coordinates')
  .get(function () {
    return this.latitudine + ';' + this.longitudine
  })

CitySchema
  .virtual('url')
  .get(function () {
    return '/cities/' + this._id
  })

// Export model
export default mongoose.model('City', CitySchema)
