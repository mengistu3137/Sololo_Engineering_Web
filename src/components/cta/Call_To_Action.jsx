import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"

const Call_To_Action = () => {
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
        const element = document.getElementById("cta")
        if (element) observer.observe(element)
        return ()=>observer.disconnect()
    })
  return (
      <section className='py-20 bg-gradient-to-r from-sololo-blue to-[#1e2470] text-white' id="cta">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
              <div className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                  <h2 className="text-5xl font-bold mb-6">Are you interested in this reliable solution? </h2>
                  <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Get in touch with our expert team today for a free consultation and quote. We&#39;re here to bring your
            engineering vision to life.
                  </p>
                  
                  {/* czll to zction button */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                      <Button
                          asChild
                          className="bg-sololo-orange hover:bg-sololo-orange/70 text-white px-8 py-3 text-lg animate-pulse"
                      >
                          <Link to={`/contact`}>Get free Quote </Link>
                          
                      </Button>
                       <Button
                                    asChild
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-[#2f3195] px-8 py-3 text-lg bg-transparent"
                                  >
                                    <Link to="tel:+251 910591599">Call Now</Link>
                                  </Button>
                      
                  </div>

                  {/* contact infos */}
                  <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                      
                     <div className="flex items-center justify-center space-x-3">
                                  <Phone className="w-6 h-6 text-[#ec5b26]" />
                                  <span className="text-lg">+251 910591599</span>
                                </div>
                                <div className="flex items-center justify-center space-x-3">
                                  <Mail className="w-6 h-6 text-[#ec5b26]" />
                                  <span className="text-lg">info@sololoengineering.com</span>
                                </div>
                                <div className="flex items-center justify-center space-x-3">
                                  <MapPin className="w-6 h-6 text-[#ec5b26]" />
                                  <span className="text-lg">Addis Ababa, Ethiopia</span>
                                </div>  
                      
                  </div>



                  
              </div>
              
              
          </div>
          
    </section>
  )
}

export default Call_To_Action