import React, { useEffect, useState } from "react"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { toast } from "sonner"
const Contact = () => {
    const[isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message:""
    })
    useEffect(() => {
        setIsVisible(true)
    },
        []
    )
    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Thank you for your message! We will get back to you soon")
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message:""
        })
       
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    
  return (
      <main className=''>
          {/* heros section */}
          <section className="py-20    bg-gradient-to-br from-[#2f3195] to-[#1e2470] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with our expert team for a free consultation and quote.
            </p>
                      
                       
                  </div>
                  
                  
              </div>
              
          </section>
          {/* contact form */}
          <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8 ">
                  <div className="grid md:grid-cols-2 gap-12">
                      {/* contact form  */}
                      <Card className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
                          <CardContent className="p-4">
                          <h2 className="text-3xl font-bold text-[#2f3195] mb-6">Send Us a Message</h2>

                              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="peer placeholder-transparent"
                        placeholder="Your Name"
                      />
                      <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#2f3195]">
                        Your Name
                      </label>
                    </div>
                    <div className="relative">
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="peer placeholder-transparent"
                        placeholder="Your Email"
                      />
                      <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#2f3195]">
                        Your Email
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="peer placeholder-transparent"
                        placeholder="Phone Number"
                      />
                      <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#2f3195]">
                        Phone Number
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f3195] focus:border-transparent"
                      >
                        <option value="">Select a Service</option>
                        <option value="electrical-plumbing">Electrical & Plumbing</option>
                        <option value="ac-installation">AC Installation</option>
                        <option value="generators">Generators</option>
                        <option value="solar-solutions">Solar Solutions</option>
                        <option value="biometric-solutions">Biometric Solutions</option>
                        <option value="access-control">Access Control</option>
                        <option value="data-center">Data Center Design</option>
                        <option value="bms-solutions">BMS Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="peer placeholder-transparent"
                      placeholder="Your Message"
                    />
                    <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#2f3195]">
                      Your Message
                    </label>
                  </div>
                                  <div>
                                      
                                  </div>
                                  <div className="flex items-center justify-center">
                                  <Button
                    type="submit"
                    className="w-fit  flex  bg-[#ec5b26] hover:bg-[#d54d1f] text-white py-3 text-lg animate-pulse-hover"
                  >
                    Send Message
                                  </Button> 
                                  </div>
                 
                                  

                </form>
                              
                          </CardContent>
                          
                      </Card>

                      {/* contact information  */}
                      <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
                          

                          <div className="space-y-2">
                          <Card className="animate-scale-up">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#2f3195] rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2f3195]">Phone</h3>
                        <p className="text-gray-600">+251 910591599</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-scale-up">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#2f3195] rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2f3195]">Email</h3>
                        <p className="text-gray-600">info@sololoengineering.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-scale-up">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#2f3195] rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2f3195]">Address</h3>
                        <p className="text-gray-600">Ethio-China ,Welo Sefar,Addis Ababa</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-scale-up">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#2f3195] rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sololo-blue">Business Hours</h3>
                        <h4 className="text-gray-600">24/7 Support</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                              
                          </div>
                          
                      </div>
                      
                  </div>
                  
              </div>
              
          </section>
    </main>
  )
}

export default Contact