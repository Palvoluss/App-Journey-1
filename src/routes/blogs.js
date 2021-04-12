const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blogControllers')
const jwtUtilis = require('../utilis/jwtUtilis')

// Show all blogs by GET
router.get('/', blogController.blog_index)

// New blogpost form by GET
router.get('/new', jwtUtilis.requireAuth, blogController.blog_new_get)

// Add a new blogpost by POST
router.post('/new', jwtUtilis.requireAuth, blogController.blog_new_post)

// Show just one specific blog, from id, by GET
router.get('/:id', blogController.blog_specific)

// Delete blogpost by DELETE
router.delete('/:id', jwtUtilis.requireAuth, blogController.blog_delete)

module.exports = router
