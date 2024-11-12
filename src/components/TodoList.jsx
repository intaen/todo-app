import React, { useState} from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodo, deleteTodo}) {
    if (!todos.length) return <p>Nothing</p>;

    return (
        <ul className='todoList'>
            {todos.map((todo) => (
                <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}/>
            ))}
        </ul>
    )
}