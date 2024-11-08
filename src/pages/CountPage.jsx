import React, { useState} from 'react'
import Count from '../components/Count'

export default function CountPage() {
    const [countFromParent, setCount] = useState(0) // di sini untuk atur initial value // set count itu set state, count itu statenya
    // tujuan dibuat state untuk memudahkan proses render ulang dalam pengiriman data

   const addCountByOne = ()=> {
        setCount(countFromParent + 1)
    }

    return (
        <>
            <h2>CountPage</h2>
            <Count count={countFromParent}/>
            <button onClick={addCountByOne}>Tambah</button>
        </>
    )
}