const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel')


const createTodo = asyncHandler(async (req, res) => {

    if (!req.body.title) {
        res.status(400)
        throw new Error('Field title required')
    }

    const todo = await Todo.create({
        user: req.user.id,
        title: req.body.title
    })
    res.status(200).json(todo)
})


const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find({ user: req.user.id })
  
    res.status(200).json(todos)
})

const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    await todo.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    createTodo,
    getTodos,
    deleteTodo,
}