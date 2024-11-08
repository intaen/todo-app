import './index.css'
import App from './App.jsx'
import TodoPage  from './pages/TodoPage.jsx'
import CountPage from './pages/CountPage.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement:<NotFound/>,
    children: [
      {
        path: "/",
        element: <TodoPage/>
      },
      {
        path: "/count",
        element: <CountPage/>
      }
    ]
  },
  {
    path: "/login",
    element: <AuthPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

// StrictMode
// menjaga terjadinya kemungkinan error // untuk membantu memberitahu di mana bagian yang masalah // tidak mempengaruhi UI