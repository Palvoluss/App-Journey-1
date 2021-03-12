import 'dotenv/config'
import cors from 'cors'

const express = require('express')
const path = require('path')
const router = express.Router()
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.SECRET_PORT || 3010

// Connecting to db
import models, { connectDb } from './database'
connectDb()

const cities = require('./routes/cities')

// Application Level middleware
// Third part middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Built-in middleware
app.use(router)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Importing modules

const citiesRouter = require('./routes/cities')

// Custom middleware
app.use('/cities', citiesRouter)

connectDb()

app.listen(PORT, () => {
  console.log(`New Server App.js is listening @localhost:${PORT}`)
})
