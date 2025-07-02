import { values, whyChooseUs } from "@/data/data"
import { useEffect, useState } from "react"
import { Card, CardContent } from "../ui/card"
import { CheckCircle } from "lucide-react"

const About = () => {
     const [isVisible, setIsVisible] = useState(false)
      useEffect(() => {
        setIsVisible(true)
      }, [])
  return (
      <main className=''>
          
          {/* hero section */}
           <section className="py-20 bg-gradient-to-br from-sololo-blue to-[#1e2470] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Sololo Engineering</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Building Ethiopia&#39;s future through innovative engineering solutions and unwavering commitment to
              excellence.
            </p>
          </div>
        </div>
          </section>
        {/* Company Story */}
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <h2 className="text-4xl font-bold text-[#2f3195] mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to transform Ethiopia&#39;s engineering landscape, Sololo Engineering has grown from a
                small team of passionate engineers to one of the country&#39;s most trusted engineering firms. Our journey
                began with a simple belief: that quality engineering solutions should be accessible to everyone, from
                small businesses to large industrial complexes.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we have successfully completed hundreds of projects across various sectors, earning the
                trust and respect of our clients through consistent delivery of high-quality work. Our team combines
                deep local knowledge with international best practices to provide solutions that are both innovative and
                practical.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to push the boundaries of what&#39;s possible in engineering, embracing new technologies
                and sustainable practices to build a better future for Ethiopia.
              </p>
            </div>

            <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative w-full h-96 lg:h-[500px]">
                <img
                  src="/Sololo_Logo_png.png?height=500&width=600"
                  alt="Sololo Engineering Team"
                
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
          </section>
          {/* Company values */}
           <section className="py-20 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                      <h2 className="text-4xl font-bold text-[#2f3195] mb-4">Our Values</h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        These core values guide everything we do and shape our approach to every project.
                      </p>
                    </div>
          
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {values.map((value, index) => (
                        <Card
                          key={value.title}
                          className={`text-center hover:shadow-xl transition-all duration-300 animate-scale-up ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <CardContent className="p-6">
                            <div className="w-16 h-16 bg-[#2f3195] rounded-full flex items-center justify-center mx-auto mb-4">
                              <value.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2f3195] mb-3">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
          </section>
          {/* why Choose us */}
           <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
                        <div className="relative w-full h-96 lg:h-[400px]">
                          <img
                            src="/Sololo_Eng_Team.jpg?height=400&width=500"
                            alt="Engineering Excellence"
                            className="object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
          
                      <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
                        <h2 className="text-4xl font-bold text-sololo-blue mb-6">Why Choose Sololo Engineering?</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          When you choose Sololo Engineering, you&#39;re choosing a partner committed to your success. Here&#39;s what
                          sets us apart from the competition:
                        </p>
          
                        <div className="space-y-4">
                          {whyChooseUs.map((reason, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-6 h-6 text-[#ec5b26] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{reason}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
          
          
    </main>
  )
}

export default About