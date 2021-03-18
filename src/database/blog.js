import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    snippet: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }, { timestamps: true }
)

// Vitrtuals

// CitySchema
//   .virtual('url')
//   .get(function () {
//     return '/cities/' + this._id
//   })

// Export model
module.exports = mongoose.model('Blog', BlogSchema)
