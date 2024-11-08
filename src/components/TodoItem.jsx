import React, { useState} from 'react'

export default function TodoItem({todo, toggleTodo, deleteTodo}) {
    return (
        <>
        <li className='todoItem'>
            <span
                className='todoList ${todo.completed ? completed ? "completed" : ""}'
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.answer} {/* munculin result dari handleQuestion */}
            </span>
            <button className='deleteButton' onClick={() => deleteTodo(todo.id)}>Not Relevant</button>
        </li>
            
        </>
    )
}