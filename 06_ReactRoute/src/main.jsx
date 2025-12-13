import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './contents/layout.jsx'
import Home from './contents/home.jsx'
import About from './contents/about.jsx'
import Contact from './contents/contactus.jsx'
import User from './contents/user.jsx'
import Github, { githubInfiloader } from './contents/github.jsx'


// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path:'/contact_us',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const  router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact_us' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfiloader}
      path='/github' 
      element={<Github/>}
      />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
