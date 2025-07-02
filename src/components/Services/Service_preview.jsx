import { services, Services } from "@/data/data"
import { Section } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../ui/card"


const Service_preview = () => {
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
    const element = document.getElementById('service-preview')
    if (element) observer.observe(element)
    return ()=>observer.disconnect()

  })
  return (
    <section className=''
      id="service-preview">
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1div */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-sololo-blue mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive engineering solutions tailored to meet the diverse needs of our industrial and
            domestic clients across Ethiopia.
          </p> 

          </div>
          {/* 2nd div */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
            <Link key={service.title} to={service.href}>
                          <Card
                            className={`h-full hover:shadow-xl transition-all duration-300 animate-scale-up ${
                              isVisible ? "animate-fade-in" : "opacity-0"
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <CardContent className="p-6 text-center">
                              <div className="w-16 h-16 bg-[#2f3195] rounded-full flex items-center justify-center mx-auto mb-4">
                                <service.icon className="w-8 h-8 text-white" />
                              </div>
                              <h3 className="text-xl font-semibold text-[#2f3195] mb-3">{service.title}</h3>
                              <p className="text-gray-600">{service.description}</p>
                            </CardContent>
                          </Card>
                        </Link>
            ))

            }

          </div>
          {/* 3rd div */}
          <div className="text-center mt-10">
            <Link
                        to="/services"
                        className="inline-flex items-center px-8 py-3 bg-sololo-orange text-white font-semibold rounded-lg hover:bg-[#d54d1f] transition-colors duration-300 animate-pulse-hover"
                      >
                        View All Services
                      </Link>

          </div>
           
        </div>

        

      </div>
    </section>
  )
}

export default Service_preview