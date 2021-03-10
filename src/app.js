import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import routes from './routes'
import path from 'path'

const app = express()
const PORT = process.env.SECRET_PORT || 3010

import models, { connectDb } from './database'

// Application Level middleware
// Third part middleware
app.use(cors())

// Built-in middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Custom middleware
app.use('/cities', routes.cities)

connectDb()

app.listen(PORT, () => {
  console.log(`New Server App.js is listening @localhost:${PORT}`)
})
