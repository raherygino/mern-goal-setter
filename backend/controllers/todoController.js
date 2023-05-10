const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel')


const createTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.create({
        user: req.user.id,
        title: req.body.text
    })
    res.status(200).json(todo)
})



module.exports = {
    createTodo,
}