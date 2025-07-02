import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

const AboutPreview = () => {
  const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 },
      )
  
      const element = document.getElementById("about-preview")
      if (element) observer.observe(element)
  
      return () => observer.disconnect()
    }, [])
  
  return (
     <section id="about-preview" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          

        <div className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
                <div className="relative w-full h-96 lg:h-[400px]">
                  <img
                    src="/Sololo_Logo_png.png?height=400&width=500"
                    alt="Sololo Engineering Projects"
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
          </div>
          
              <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
                <h2 className="text-4xl font-bold text-sololo-blue mb-6">Sololo Engineering at a Glance</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With years of experience and a commitment to innovation, Sololo Engineering has established itself as a
                  trusted partner for comprehensive engineering solutions across Ethiopia. We combine technical expertise
                  with local knowledge to deliver projects that exceed expectations.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of certified engineers and technicians work tirelessly to ensure every project meets the highest
                  standards of quality, safety, and efficiency. From small residential installations to large industrial
                  projects, we have the expertise to handle it all.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-[#2f3195] hover:bg-[#1e2470] text-white px-8 py-3">
                    <Link to="/about">More About Us</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#ec5b26] text-[#ec5b26] hover:bg-[#ec5b26] hover:text-white px-8 py-3 bg-transparent"
                  >
                    <Link to="/projects">View Our Projects</Link>
                  </Button>
                </div>
              </div>
    
           
            </div>
          </div>
        </section>

  )
}

export default AboutPreview