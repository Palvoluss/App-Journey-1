import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import path from 'path'
import routes from './routes'

const fs = require('fs').promises

import models, { connectDb } from './models'

const app = express()
const PORT = process.env.SECRET_PORT || 3010

// APPLICATION LEVEL MIDDLEWARE 

// Third part middleware

app.use(cors())

// Built-in middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Custom middleware
app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('palvolus')
  }
  next()
})

// ROUTING

app.use('/session', routes.session)
app.use('/users', routes.user)
app.use('/messages', routes.message)
app.use('/cities', routes.cities)

app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.toString() })
})

// FUNCTION

const eraseDataonSync = true

connectDb().then(async () => {
  if (eraseDataonSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({})
      ]);
  }

  createUsersWithMessages()

  app.listen(PORT, () =>
  console.log(`example app listening on port ${PORT}!`)
)
})

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'palvolus',
    email: 'ciao@prova.it'
  })

  const user2 = new models.User({
    username: 'ddavids',
    email: 'virglilo@prova.it'
  });

  const message1 = new models.Message({
    text: 'Sudying Nodeeee and DBssss',
    user: user1.id,
  });


  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });
 
  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });
 
  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save()
  await user2.save()
}

console.log('hello Node.js project')
console.log(process.env.MY_SECRET)
