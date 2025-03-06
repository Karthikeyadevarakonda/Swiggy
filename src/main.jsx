import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'

import { BrowserRouter, Outlet, Route, Routes, useRoutes } from 'react-router'


const MainLayout = () =>{
   return(
     <>
     <Navbar/>
     <Outlet/>
     </>
   )
}


const MyRounter = ()=>{

 return( useRoutes([
      {
       path:'/',
       element:<Navbar/>,
       children:[
         {
            path:'home',
            element:<Home/>,
         },
         {
            path:'about',
            element:<About/>,
         },
         {
            path:'contact',
            element:<Contact/>,
         }
       ],
      },
   ])
  )
}
  
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<MainLayout />}>
       <Route index element={<Home />} />
       <Route path="home" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
     </Route>
   </Routes>
 </BrowserRouter>
 </StrictMode>
)
