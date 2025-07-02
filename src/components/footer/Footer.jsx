import { Link, NavLink } from "react-router-dom"
import { NavLinks, Services } from "../../data/data"
import Image from "../Image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#1a1d4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-24 h-12 rounded-lg flex items-center justify-center">
                <img src='Sololo_Logo_png.png ' className={`object-cover w-20 h-12`} />
              </div>
              <div>

<span className="text-5xl font-bold">Sololo </span><span className="text-sm flex-wrap  text-end block"><span className="text-xl">E</span>ngineering PLC</span>
              </div>
            </div>
            <h3 className="text-gray-300">
            Seamless Solutions, Superior Service
            </h3>
             <div className="flex space-x-6 pt-2">
                          <Link to="#" className="text-gray-300 hover:text-[#ec5b26] transition-colors duration-300">
                          <Facebook />
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
          {/* quick links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {
                NavLinks.map((link) => (
                <li key={link.path}>
                <NavLink

                  to={link.path}
                  className={ ({isActive})=>` hover:text-sololo-blue transition-colors duration-300 relative group ${isActive?'text-sololo-orange':''} `}
                  

                >
                  {link.title}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-sololo-orange transition-all duration-300 group-hover:w-full `}></span>
                </NavLink>
              </li>
              ))
            }

            </ul>
          </div>
          {/* Service */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {
                Services.map((service) => (
                <li key={service.path}>
                <NavLink

                  to={service.path}
                  className={ ({isActive})=>` hover:text-sololo-blue transition-colors duration-300 relative group ${isActive?'text-sololo-orange':''} `}
                  

                >
                  {service.title}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-sololo-orange transition-all duration-300 group-hover:w-full `}></span>
                </NavLink>
              </li>
              ))
            }

            </ul>
          </div>
          {/* contacts */}
        <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-[#ec5b26]" />
                        <span className="text-gray-300">+251 910591599</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-[#ec5b26]" />
                        <span className="text-gray-300">info@sololoengineering.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-[#ec5b26]" />
                        <span className="text-gray-300">Ethio-China ,Welo Sefar,Addis Ababa</span>
                      </div>
                    </div>
          </div>
          
        </div>
        <div className="border-t-2 border-gray-600 text-center mt-8 pt-8 ">
          <p className="text-gray-300">&copy; {new Date().getFullYear() } Sololo Engineering PLC. All rights reserved</p> 

        </div>
        





</div>

    </footer>
  )
}

export default Footer