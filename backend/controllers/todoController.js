const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel')


const createTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.create({
        user: req.user.id,
        title: req.body.text
    })
    res.status(200).json(todo)
})


const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find({ user: req.user.id })
  
    res.status(200).json(todos)
  })



module.exports = {
    createTodo,
    getTodos,
}