import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createTodo, getTodos, deleteTodo } from "../features/todos/todoSlice"
import { toast } from 'react-toastify'


const Todo = () => {

    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const {todos, isLoading, isError, message } = useSelector(
        (state) => state.todos
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        dispatch(getTodos())




    }, [isError, message, dispatch])

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createTodo({title}))
        setTitle('')
    }

    if  (isLoading) {
        return <p>loading</p>
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChange} />

                <button type="submit">Send</button>
            </form>
            <ul>
            { todos.map((todo) => (
                <li key={todo._id}>{todo.title} <button onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button> </li>
            )) }
            </ul>
        </>
    )
}

export default Todo