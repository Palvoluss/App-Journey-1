import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { v4 as uuidv4 } from 'uuid'
const models = require('./models')

const app = express()
const PORT = process.env.SECRET_PORT || 3010

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  }
  next()
})

app.get('/', (req, res) => {
  return res.send('Recived a GET HTTP method')
})

app.post('/', (req, res) => {
  return res.send('Recived a POST HTTP method')
})

app.put('/', (req, res) => {
  return res.send('Recived a  PUT HTTP method')
})

app.delete('/', (req, res) => {
  return res.send('Recived a  DELETE HTTP method')
})

app.get('/session', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id])
})

app.get('/users', (req, res) => {
  return res.send(Object.values(req.context.models.users))
})

app.get('/users/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId])
})

app.get('/messages', (req, res) => {
  return res.send(Object.values(req.context.models.messages))
})

app.get('/messages/:messageId', (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId])
})

app.post('/messages', (req, res) => {
  const id = uuidv4()
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id
  }

  req.context.models.messages[id] = message

  return res.send(message)
})

app.delete('/messages/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages

  req.context.models.messages = otherMessages

  return res.send(message)
})

app.listen(PORT, () =>
  console.log(`example app listening on port ${PORT}!`)
)

console.log('hello Node.js project')
console.log(process.env.MY_SECRET)
