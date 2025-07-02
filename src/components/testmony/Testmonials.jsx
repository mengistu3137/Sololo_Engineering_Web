import { clientLogos, testimonials } from "@/data/data"
import { useEffect, useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Star } from "lucide-react"
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

const Testmonials = () => {
  const [isVisible, setIsVisible] = useState(false)
    
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )
    
    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])
  
  

  
  
  return (
    <section className='py-20 bg-gray-50' id="testimonials">
      {/* short desc */}
      <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="text-4xl font-bold text-[#2f3195] mb-4">What Our Clients Say</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&#39;t just take our word for it. Here&#39;s what our satisfied clients have to say about our services.
        </p>
      </div>
      {/*Testmony cards  */}
      <div className="   gap-8 mb-16 px-12 items-center">
        <Carousel className="w-full "
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
              
            })

          ]
            
          }
        
        >
      <CarouselContent className='w-full'>
        {testimonials.map((testmony, index) => (
          <CarouselItem key={index}
          className=" h-full basis-full md:basis-1/3">
            <div className="p-1  w-full">
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center">

                      <img src={testmony.image }  className="w-24 h-24 rounded-full object-cover" />
                    </div>

                    <h3 className="font-bold text-xl text-center">{testmony.name}</h3><span>{ testmony.position}</span>
                    <div className="text-sololo-blue text-justify border-t-2 border-sololo-blue  outline-2">
                      <p className=""> &quot;{testmony.feedback }&quot;</p>

                    </div>

                  </div>

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
       
      </div>
          
      {/* client logos */}
      <div className={`${isVisible ? "animate-fade-in " : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
        <h3 className="text-2xl font-semibold text-[#2f3195] text-center mb-8">Trusted by Leading Organizations</h3>
        <div className="flex items-center justify-center">

      <Carousel
  
  className="max-w-sm relative p-4 flex items-center sm:flex-col"

            plugins={
              [
                Autoplay({
                  stopOnInteraction: true,
                  stopOnFocusIn: true,
                  delay: 2000,
                  
                
              })
            ]
          }>
  {/* Previous Button */}
  <CarouselPrevious />

  {/* Carousel Items */}
  <CarouselContent>
    {clientLogos.map((logo, index) => (
      <CarouselItem key={index} className="basis-1/3 ">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <img src={logo } className="w-ful h-full object-cover"/>
            </CardContent>
          </Card>
      </CarouselItem>
    ))}
  </CarouselContent>

  {/* Next Button */}
  <CarouselNext />
</Carousel>
    </div>

        
          
      </div>
    </section>
  )
}

export default Testmonials