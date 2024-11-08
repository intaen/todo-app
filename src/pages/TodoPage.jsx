import React, { useState} from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export default function TodoPage() {

    const [todos, setTodos] = useState([])

    const handleAnswer = (answer) => {
        const newTodo = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            answer, // hardcode answer: {data hardcode} buat munculin result
            completed: false
        }

        setTodos([...todos, newTodo])
    }

    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo => (
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        )))
    }

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return(
        <div className='container'>
            <h2 className='header'>Google</h2>
            <TodoForm askTodo={handleAnswer}/>
            <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo}/>
        </div>
    )
}