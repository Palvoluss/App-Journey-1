import 'dotenv/config'
import cors from 'cors'

// Connecting to db
import models, { connectDb } from './src/database'

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const bodyParser = require('body-parser')
const router = express.Router()
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = process.env.SECRET_PORT || 3010

// Static Files
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))

// Template Engine
app.set('view engine', 'ejs')
connectDb()

// Application Level middleware
// Third part middleware
app.use(morgan('dev'))
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Built-in middleware
app.use(router)

// Importing modules

const ApiV = 'api/v1'
const citiesRouter = require('./src/routes/cities')
const pollutionRouter = require('./src/routes/pollution')
const usersRouter = require('./src/routes/users')
const blogsRouter = require('./src/routes/blogs')
const jwtUtilis = require('./src/utilis/jwtUtilis')

app.all('*', jwtUtilis.checkUser)

// Custom middleware
app.use('/cities', citiesRouter)
app.use('/pollution', pollutionRouter)
app.use('/blogs', blogsRouter)
app.use('/user', usersRouter)


app.get('/', (req, res) => {
  res.render('index', { title: 'Home'})
})

// No routing

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found!' })
})

app.listen(PORT, () => {
  console.log(`New Server App.js is listening @localhost:${PORT}`)
})
