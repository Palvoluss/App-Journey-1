const express = require('express')
const router = express.Router()

const Blog = require('../database/blog')

// Show all blogs by GET
router.get('/', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('blogs', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
      console.log(err)
    })
})

// New blogpost form by GET
router.get('/new', (req, res) => {
  res.render('newblog', { title: 'Start Writing!' })
})

// Add a new blogpost by POST
router.post('/new', (req, res) => {
  const blog = new Blog(req.body)

  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => {
      console.log(err)
    })
})

// Show just one specific blog, from id, by GET
router.get('/:id', (req, res) => {
  const id = req.params.id

  Blog.findById(id)
    .then((result) => {
      res.send(result) // need to do a new view page
    })
    .catch((err) => {
      console.log(err)
    })
})

// Delete blogpost by DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id

  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' })
    })
    .catch((err) => {
      console.log(err)
    })
})
// update Pollution
// TO DO
module.exports = router
