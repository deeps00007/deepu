import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './Layout.jsx'
import Footer from './components/Footer/Footer.jsx'
import Projects from './components/Projects/Projects.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import About from './components/About/About.jsx'
import GitHub from './components/Github/Github.jsx'
import Contact from './components/Contact/Contact.jsx'




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Portfolio />}/>  
    <Route path='projects' element={<Projects />}/>
    <Route path='about' element={<About />}/>
    <Route path='github' element={<GitHub />}/> 
    <Route path='contact' element={<Contact />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
