import './index.css'
import App from './App.jsx'
import CountPage from './pages/CountPage.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import LandingPage from './pages/LandingPage.jsx';
import TodoPage from './pages/TodoPage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    // errorElement:<NotFound/>,
    children: [
      {
        path: "/count",
        element: <CountPage/>
      }
    ]
  },
  {
    path: "/login",
    element: <AuthPage/>
  },
  {
    path: "/home",
    element: <App/>,
    children: [
      {
        path: "/home",
        element:
        <ProtectedRoute>
          <TodoPage/>
        </ProtectedRoute> 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)

// StrictMode
// menjaga terjadinya kemungkinan error // untuk membantu memberitahu di mana bagian yang masalah // tidak mempengaruhi UI