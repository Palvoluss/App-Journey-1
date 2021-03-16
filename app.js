import 'dotenv/config'
import cors from 'cors'

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const bodyParser = require('body-parser')
const router = express.Router()


const app = express()
const PORT = process.env.SECRET_PORT || 3010

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

// Template Engine
app.set('view engine', 'ejs')

// Connecting to db
import models, { connectDb } from './src/database'
connectDb()

// Application Level middleware
// Third part middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Built-in middleware
app.use(router)

// Importing modules

const citiesRouter = require('./src/routes/cities')
const pollutionRouter = require('./src/routes/pollution')
const usersRouter = require('./src/routes/users')

// Custom middleware
app.use('/cities', citiesRouter)
app.use('/pollution', pollutionRouter)
app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.render('index')
})

connectDb()

app.listen(PORT, () => {
  console.log(`New Server App.js is listening @localhost:${PORT}`)
})

