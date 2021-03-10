// Important side note: you use Schema to create Models. While model rapresent
// a collectuin of documents in the database that you can search,
// while the model's instances represent individual documents that you can save and retrieve.
import mongoose from 'mongoose'

const connectDb = () => {
  return mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

mongoose.connection.on(
  'error',
  console.error.bind(
    console,
    'MongoDB connection Problem'
  )
)

const models = { }

export { connectDb }
export default models
