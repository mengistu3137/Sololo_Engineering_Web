import { useEffect, useState } from "react"
import {Link} from  'react-router-dom'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Wrench, Wind, Fuel, Sun, Fingerprint, Shield, Server, ArrowRight } from "lucide-react"
import { All_Services } from "@/data/data"

const Service = () => {
  const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      setIsVisible(true)
    }, [])

  return (
    <main className=''>
      {/* Heros section */}
      <section className="py-20 bg-gradient-to-br from-[#2f3195] to-[#1e2470] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive engineering solutions tailored to meet the diverse needs of our industrial and domestic
              clients across Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Service Grid section*/}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-8">
                      {All_Services.map((service, index) => (
                        <Card
                          key={service.title}
                          className={`animate-scale-up ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <CardContent className="p-8">
                            <div className="flex items-start space-x-4">
                              <div className="w-16 h-16 bg-sololo-blue rounded-full flex items-center justify-center flex-shrink-0">
                                <service.icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-sololo-blue mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
          
                                <ul className="space-y-2 mb-6">
                                  {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-sololo-orange rounded-full"></div>
                                      <span className="text-gray-700">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
          
                                <Button asChild className="bg-sololo-orange hover:bg-[#d54d1f] text-white">
                                  <Link href={service.href} className="inline-flex items-center">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

        </div>
      </section>

      {/* Call to action section */}
   <section className="py-20 bg-[#2f3195] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Do not see exactly what you are looking for? We specialize in custom engineering solutions tailored to your
            specific requirements.
          </p>
          <Button asChild className="bg-sololo-orange hover:bg-sololo-orange/70 text-white px-8 py-3 text-lg animate-pulse-hover">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
      
    </main>
  )
}

export default Service