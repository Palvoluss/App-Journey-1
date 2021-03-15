// Important side note: you use Schema to create Models. While model rapresent
// a collectuin of documents in the database that you can search,
// while the model's instances represent individual documents that you can save and retrieve.
import mongoose from 'mongoose'

const connectDb = () => {
  return mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
}

// Db Info handling
// Connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection is open!')
})
// Error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err)
})
// Disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected!')
})
// End connection when Node process stops
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected due app termination')
    process.exit(0)
  })
})

const models = { }

export { connectDb }
export default models
