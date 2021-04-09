import mongoose from 'mongoose'

const GeoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
})

const PollutionSchema = new mongoose.Schema(
  {
    pollution_type: {
      type: String,
      required: [true, 'can\'t be blank'],
      enum: {
        values: ['Land', 'Water', 'Noise', 'Light'],
        message: 'Land, Water, Noise or Light'
      }
    },
    photo: {
      type: String,
      required: true
    },
    description: {
      type: String,
      maxlenght: 500,
      required: true,
      lowercase: true
    },
    post_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    geometry: GeoSchema,
    status: {
      type: String,
      enum: ['Need cleaning!!', 'cleaned the area, GG!'],
      default: 'Need cleaning!!'
    }
  },
  {
    timestamps: true
  }
)

// Vitrtuals

// Export model
module.exports = mongoose.model('Pollution', PollutionSchema)
