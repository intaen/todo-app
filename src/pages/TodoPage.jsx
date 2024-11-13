import React, { useEffect, useState} from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { addAnswerThunk, deleteAnswerThunk, fetchAnswersThunk, toggleAnswerThunk } from '../redux/slices/todoSlice'

export default function TodoPage() {
    const dispatch = useDispatch();
    const {items: todos} = useSelector(state => state.todos);

    useEffect (() => { // use effect dijalankan supaya jika ada perubahan lgsg jalan
        dispatch(fetchAnswersThunk());
      }, []); // dependency / trigger diisi jika ingin ter-render ulang ketika terjadi perubahan, lempar value ke sini

    const handleAnswerTodo = async (title) => {
        dispatch(addAnswerThunk(title));
    }

    const handleToggleTodo = async (id) => {
        const ansToUpdate = todos.find(todo => todo.id === id);
        dispatch(toggleAnswerThunk({id, completed: !ansToUpdate.completed}));
    }

    const handleDeleteTodo = async (id) => {
        dispatch(deleteAnswerThunk(id));
    }

    return(
        <div className='container'>
            <h2 className='header'>Google</h2>
            <TodoForm askTodo={handleAnswerTodo}/>
            <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo}/>
        </div>
    )
}