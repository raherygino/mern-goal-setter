const express = require('express')
const router = express.Router()
const {
  createTodo,
} = require('../controllers/todoController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, createTodo)

module.exports = router
