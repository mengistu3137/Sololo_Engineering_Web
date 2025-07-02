import { useEffect, useState } from "react";
import Slide from "./Slide";
import AutoTyping from "@/data/AutoTyping";
import { serviceTitles } from "@/data/data";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('hero');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
     
        const sololoText=['ololo']
         const sololoTyping = new AutoTyping('#sololo', sololoText, {
          typeSpeed: 50,
          deleteSpeed: 50,
          waitBeforeDelete: 4000,
          waitBetweenWords: 500,
        });
        sololoTyping.start();
    }
  }, [isVisible]);

  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-br rounded-md from-[#2f3195] to-[#1e2470] text-white pt-16 pb-8"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in animate-slide-in-bottom" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight" >
              <span className="text-8xl font-bold">S</span><span id="sololo"></span>
              <span className="text-end block" id="ngineering">
                <span className="text-8xl" id="E">E</span>ngineering
              </span>
              <span className="text-[#ec5b26]" >
                <span className="text-6xl" id="">S</span><span id="solution" className="text-5xl">olution</span>
              </span>
              <br />
              
            </h1>
            <div className="space-y-1 text-white pl-8 b">
                          {serviceTitles.map((reason, index) => (
                            <div key={index} className="flex items-end space-x-2 text-sm">
                              <CheckCircle className="w-6 h-6 text-[#ec5b26] mt-0.5 flex-shrink-0" />
                              <span className="text-white">{reason}</span>
                            </div>
                          ))}
                        </div>
            <div className="flex flex-col sm:flex-row gap-4 pb-4ae">
              <a
                href="/contact"
                className="bg-[#ec5b26] hover:bg-[#d54d1f] text-white px-8 py-3 text-lg rounded-lg transition duration-300 hover:animate-pulse"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="border border-white text-white hover:bg-white hover:text-[#2f3195] px-8 py-3 text-lg rounded-lg transition duration-300"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative w-full h-full lg:h-[500px]">
              <Slide />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
