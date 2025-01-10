import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import Home from './components/Home/Home.jsx'
import Github,{githubloader} from './components/github/Github.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'

const router=createBrowserRouter( 
  [
    {
      path: '/',
      element:<Layout/>,
      children:[
        {path:"",element:<Home/>},
        { path:"about", element:<About/>},
        {path:"github", element:<Github/> , loader:githubloader
        },
        {path:"contact",element:<Contact/>},
        {path:"user/:userid",element:<User/>}
      ]
    }
  ]
)
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
