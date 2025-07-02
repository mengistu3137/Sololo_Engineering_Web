import { useEffect, useState } from 'react'
import Image from '../Image'
import {Link, NavLink} from 'react-router-dom'
import { Menu, X } from "lucide-react"
import {NavLinks} from '../../data/data'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
   
  
 
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        {threshold:0.1}
      )
      const element = document.getElementById('nav-bar')
      if (element) observer.observe(element)
      return ()=>observer.disconnect()
  
    })
  return (
    <nav
      id='nav-bar'
      className={`  w-full z-50 transition-all duration-300 sm:text-base md:text-lg lg:text-xl font-medium ${
        isVisible ? "bg-white shadow-lg top-0 sticky" : "bg-white/95 backdrop-blur-sm "
      }`}
    >
      <div className='max-w-7xl mx-auto justify-between px-4  sm:px-6 lg:px-8 text-gray-600'>

        <div className='flex justify-between items-center h-16'>
          <Link to={`/`} className='flex items-center justify-between space-x-2'>
        <Image src='Sololo_Logo.jpg' alt={`Sololo Logo`} className={`w-24 h-12 object-cover rounded-lg justify-center`}/>
          </Link>
          {/* desktop navigation */}
          <div className='hidden md:flex space-x-8'>
            {
              NavLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={ ({isActive})=>` hover:text-sololo-blue transition-colors duration-300 relative group ${isActive?'text-sololo-orange':''} `}
                  

                >
                  {link.title}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-sololo-orange transition-all duration-300 group-hover:w-full `}></span>
                </NavLink>
              ))
            }


          </div>


          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={()=>setIsOpen(!isOpen)
                
              }
              className='text-black hover: transition-colors duration-300'
            >
              {isOpen ? <X size={24} />:<Menu size={24}/>}
            </button>

          </div>
        </div>
        {/*  Mobile navigation*/}
        {
          isOpen && (
            <div className='md:hidden '>
              <div className='px-2 pt-2 pb-3 space-y-1 bg-white  border-t font-medium text-xl '>
                {
                  NavLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({isActive})=>`block px-3 py-2 left-0 text-sololo-blue hover:text-sololo-blue  transition-colors duration-300 ${isActive?'text-sololo-orange':''} `}
                      onClick={()=>setIsOpen(false)}
                    >
                      <span className='relative inline-block group'>

                      {link.title}
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-sololo-orange transition-all duration-300 group-hover:w-full '></span>
                      </span>

                    </NavLink>
                 
                  ))}
              </div>
            </div>
          )}
  </div>
    </nav>
  )
}

export default Navbar