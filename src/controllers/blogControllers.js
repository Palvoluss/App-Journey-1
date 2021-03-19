const Blog = require('../database/blog')

const blog_index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('blogs', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
      console.log(err)
    })
}

const blog_new_get = (req, res) => {
  res.render('newblog', { title: 'Start Writing!' })
}

const blog_new_post = (req, res) => {
  const blog = new Blog(req.body)

  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => {
      console.log(err)
    })
}

const blog_specific = (req, res) => {
  const id = req.params.id

  Blog.findById(id)
    .then(result => {
      res.render('specificblog', { blog: result, title: result.title })
    })
    .catch((err) => {
      console.log(err)
    })
}

const blog_delete = (req, res) => {
  const id = req.params.id

  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' })
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  blog_index,
  blog_specific,
  blog_new_get,
  blog_new_post,
  blog_delete
}
