import Hero from "../components/hero/Hero"
import Service_preview from "@/components/Services/Service_preview"
import AboutPreview from "@/components/about/AboutPreview"
import Call_To_Action from "@/components/cta/Call_To_Action"
import Testmonials from "@/components/testmony/Testmonials"


const HomePage = () => {
  return (
    <main className=''>
      <Hero />
      <Service_preview />
      <AboutPreview />
      <Testmonials />
      <Call_To_Action/>
      
    </main>
  )
}

export default HomePage