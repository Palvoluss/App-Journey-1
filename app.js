const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express()

const port = 3000
// Import routes
const blogRoute = require('./routes/blog')
const pollutionRoute = require('./routes/pollution')

app.use('/blog', blogRoute)

app.use('/pollution', pollutionRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.Promise = global.Promise
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('connected to DB!')
)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
