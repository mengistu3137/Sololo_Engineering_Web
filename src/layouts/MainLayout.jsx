import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/footer/Footer"
import Contact2 from "@/components/contact/Contact2"
const MainLayout = () => {
  

  return (
    <div className='font-sans'>
     
    
       <Contact2/>
        <Navbar />
         <div className="p-4">
         <Outlet />
          </div> 
    <Footer/>
  
    </div>
  )
}

export default MainLayout