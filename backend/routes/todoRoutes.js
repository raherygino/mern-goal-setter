const express = require('express')
const router = express.Router()
const {
  createTodo, getTodos, deleteTodo,
} = require('../controllers/todoController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, createTodo).get(protect, getTodos)
router.route('/:id').delete(protect, deleteTodo)

module.exports = router
