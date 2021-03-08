import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import routes from './routes'

import models, { connectDb } from './models'

const app = express()
const PORT = process.env.SECRET_PORT || 3010

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('palvolus')
  }
  next()
})

app.use('/session', routes.session)
app.use('/users', routes.user)
app.use('/messages', routes.message)

app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.toString() })
})

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
    username: 'palvolus'
  })

  const user2 = new models.User({
    username: 'ddavids',
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
