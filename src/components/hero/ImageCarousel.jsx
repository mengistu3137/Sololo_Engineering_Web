
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from  '../../components/ui/carousel'
import { slides } from "@/data/data"
import { useState } from "react"

export function ImageCarousel() {
   const [slideIndex, setSlideIndex] = useState(0)
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                                             src={slides[slideIndex].src}
                                             alt={slides[slideIndex].alt}
                                             width={1200}
                                             height={600}
                                             className="w-full h-full object-cover animate-slide-in-right "
                                         />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-blue-600" />
      <CarouselNext />
    </Carousel>
  )
}
