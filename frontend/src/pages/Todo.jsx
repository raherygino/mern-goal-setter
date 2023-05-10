import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createTodo, getTodos } from "../features/todos/todoSlice"


const Todo = () => {

    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const {todos, isLoading, isError, message } = useSelector(
        (state) => state.todos
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
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
            { todos.map((todo) => (
                <p key={todo._id}>{todo.title}</p>
            )) }
        </>
    )
}

export default Todo