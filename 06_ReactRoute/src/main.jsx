import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/home.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '',
        element: <Home/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
