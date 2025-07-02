import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "@fontsource/inter"

import './index.scss'
import './index.css'    

import ContactPage from './routes/ContactPage.jsx'
import HomePage from './routes/HomePage.jsx'
import ServicePage from './routes/ServicePage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import ProjectPage from './routes/ProjectPage.jsx'
import AboutPage from './routes/AboutPage.jsx'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'sonner'

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            // Static routes
            { path: '/', element: <HomePage /> },
            { path: '/about', element: <AboutPage/> },
            { path: '/services', element: <ServicePage/> },
            { path: '/project', element: <ProjectPage/> },
            { path: '/contact', element: <ContactPage /> },
          
        ],
    },

   

    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
                
        <RouterProvider router={router} />
        <Toaster position='top-center' />
                
  </StrictMode>,
)
