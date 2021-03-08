import { v4 as uuidv4 } from 'uuid'
import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const messages = await req.context.models.Message.find()
  return res.send(messages)
})

router.get('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId
  )
  return res.send(message)
})

router.post('/', async (req, res) => {
  let message
  try {
  message = await req.context.models.Message.create({
    text: req.body.text,
    user: req.context.me.id
  })
} catch (error) {
  return res.status(400).json({ error: error.toString()
  })
}

  return res.send(message)
})

router.delete('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId
  )

  if (message) {
    await message.remove()
  }

  return res.send(message)
})

export default router
