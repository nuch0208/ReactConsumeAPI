import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Edit from './components/Edit.jsx'
import Add from './components/Add.jsx'
import Delete from './components/Delete.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "edit/:id",  // เพิ่ม :id เพื่อรับค่า ID
    element: <Edit />,
  },
  {
    path: "add",
    element: <Add />,
  },
  {
    path: "delete/:id",  // เพิ่ม :id สำหรับ delete
    element: <Delete />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
