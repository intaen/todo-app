
import './App.css'
import { Outlet } from 'react-router-dom'
import HeaderLogout from './components/HeaderLogout.jsx'


function App() {
  return (
    <div>
      <HeaderLogout/>
      <Outlet/>
    </div>
  )
}

export default App
