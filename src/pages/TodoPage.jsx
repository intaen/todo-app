import React, { useEffect, useState} from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import fetchTodos from '../services/TodoService'

export default function TodoPage() {
    const [todos, setTodos] = useState([])

    useEffect (() => { // use effect dijalankan supaya jika ada perubahan lgsg jalan
        const fetch = async () => {
            const t = await fetchTodos();
            setTodos(t)
        }
        
        fetch()
      }, []); // dependency / trigger diisi jika ingin ter-render ulang ketika terjadi perubahan, lempar value ke sini

    const handleAnswer = (title) => {
        const newTodo = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            title, // hardcode title: {data hardcode} buat munculin result
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