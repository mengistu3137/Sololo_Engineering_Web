import { useState, useEffect } from 'react'
import {slides} from '../../data/data'



const Slide = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [showOpportunities, setShowOpportunities] = useState(false)
    const [transitioning, setTransitioning] = useState(false)

  
    

    const nextSlide = () => {
        setTransitioning(true)
        setTimeout(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % slides.length)
            setTransitioning(false)
        }, 300)
    }

    const prevSlide = () => {
        setTransitioning(true)
        setTimeout(() => {
            setSlideIndex(
                prevIndex => (prevIndex - 1 + slides.length) % slides.length,
            )
            setTransitioning(false)
        }, 300)
    }

    const goToSlide = index => {
        setTransitioning(true)
        setTimeout(() => {
            setSlideIndex(index)
            setTransitioning(false)
        }, 300)
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000)
        return () => clearInterval(intervalId)
    }, [])


    return (
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl mb-16 bg-debo-dark-blue">
            {!showOpportunities ? (
                <div className="relative h-[500px]">
                    <div
                        className={`transition-opacity duration-700 ${transitioning ? 'opacity-10' : 'opacity-100'}`}>
                        <img
                            src={slides[slideIndex].src}
                            alt={slides[slideIndex].alt}
                            width={1200}
                            height={600}
                            className="w-full h-full object-cover animate-slide-in-right "
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
                            <div className="text-white max-w-2xl">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-0">
                                    {slides[slideIndex].title}
                                </h2>
                                <p className="text-xl md:text-xl font-light mb-8 p-2 flex-wrap">
                                    {slides[slideIndex].description}
                                </p>
                                <button
                                    onClick={slides[slideIndex].action}
                                    className="bg-sololo-orange hover:bg-debo-yellow/90 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:border-sololo-blue hover:bg-sololo-orange/75">
                                    {slides[slideIndex].cta}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    slideIndex === index
                                        ? 'bg-debo-yellow w-6'
                                        : 'bg-white/50 hover:bg-white/80'
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            ) : (
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold text-debo-yellow">
                            Explore Our service
                        </h2>
                        <button
                            onClick={() => setShowOpportunities(false)}
                            className="text-white hover:text-debo-yellow transition-colors hover:border-debo-yellow">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    
                </div>
            )}
        </div>
    )
}

export default Slide
