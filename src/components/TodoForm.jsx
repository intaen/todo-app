import React, { useState} from 'react'

export default function TodoForm({askTodo}) {
    const [question, setQuestion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (question.trim()) {
            askTodo(question)
        }
        setQuestion("") // uncomment ini supaya gak ilang dari form yang dikirim
    }

    return(
        <>
            <form className='form' onSubmit={handleSubmit}>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}    
                placeholder='How are you feeling today?'
                className='input'
            />
            <button className='button' type="submit">Ask</button>
           </form>
        </>
    )
}