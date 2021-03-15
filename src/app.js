import 'dotenv/config'
import cors from 'cors'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = express.Router()

const app = express()
const PORT = process.env.SECRET_PORT || 3010

// Connecting to db
import models, { connectDb } from './database'
connectDb()

// Application Level middleware
// Third part middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Built-in middleware
app.use(router)

// Importing modules

const citiesRouter = require('./routes/cities')
const pollutionRouter = require('./routes/pollution')
const usersRouter = require('./routes/users')

// Custom middleware
app.use('/cities', citiesRouter)
app.use('/pollution', pollutionRouter)
app.use('/users', usersRouter)

connectDb()

app.listen(PORT, () => {
  console.log(`New Server App.js is listening @localhost:${PORT}`)
})

