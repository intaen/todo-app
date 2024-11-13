// import React, { useEffect, useState} from 'react'
// import TodoForm from '../components/TodoForm'
// import TodoList from '../components/TodoList'
// import { getAllAnswer, addAnswer, deleteAnswer } from '../services/todoService'

/* untuk fetch API tanpa redux, cara panggilnya gini */

// export default function TodoPage() {
//     const [todos, setTodos] = useState([])

//     useEffect (() => { // use effect dijalankan supaya jika ada perubahan lgsg jalan
//         const getAll = async () => {
//             const t = await getAllAnswer();
//             setTodos(t)
//         }

//         getAll()
//       }, []); // dependency / trigger diisi jika ingin ter-render ulang ketika terjadi perubahan, lempar value ke sini

//     const handleAnswer = async (title) => {
//         const ans = await addAnswer(title)
//         setTodos([...todos, ans]);
//     }

//     const handleToggleTodo = async (id) => {
//         const ansToUpdate = todos.find(todo => todo.id === id);
//         const updatedAns = await toggleTodo(id, !ansToUpdate.completed);
//         setTodos(todos.map(todo => (todo.id === id ? updatedAns : todo)));
//     }

//     const handleDeleteTodo = async (id) => {
//         await deleteAnswer(id)
//         setTodos(todos.filter(todo => todo.id !== id))
//     }

//     return(
//         <div className='container'>
//             <h2 className='header'>Google</h2>
//             <TodoForm askTodo={handleAnswer}/>
//             <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo}/>
//         </div>
//     )
// }