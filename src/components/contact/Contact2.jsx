import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const Contact2 = () => {
  return (
      <section className=' text-white bg-gradient-to-t  from-[#2f3195] to-[#1e2470] w-full   '>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
              <div className="flex justify-between px-4 ">
                  {/* contacts info */}
                  <div className="flex   gap-4 flex-col sm:flex-row justify-start">
                  <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-[#ec5b26]" />
          <span className="text-gray-300">+251 910591599</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-[#ec5b26]" />
          <span className="text-gray-300">info@sololoengineering.com</span>
        </div>
                  </div>
                  {/* social media links */}
                  <div className="items-center hidden md:flex gap-8">
     <Link to="#" className="text-gray-300 hover:text-[#ec5b26] transition-colors duration-300">
          <Facebook size={20} />
        </Link>
        <Link to="#" className="text-gray-300 hover:text-[#ec5b26] transition-colors duration-300">
          <Twitter size={20} />
        </Link>
        <Link to="#" className="text-gray-300 hover:text-[#ec5b26] transition-colors duration-300">
          <Linkedin size={20} />
        </Link>
        <Link to="#" className="text-gray-300 hover:text-[#ec5b26] transition-colors duration-300">
          <Instagram size={20} />
        </Link>
                      
                  </div>
                   
              </div> 
          </div>
          
    </section>
  )
}

export default Contact2