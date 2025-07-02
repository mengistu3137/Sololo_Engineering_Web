import { Zap, Wrench, Wind, Fuel, Sun, Fingerprint, Shield, Server, Droplet, Globe, Award, Users, Clock, Target, Eye, Flag, Briefcase, Compass } from "lucide-react"

 export const NavLinks = [
    {
      path: '/',
      title:'Home'
    },
    {
      path: '/about',
      title:'About'
    },
    {
      path: '/services',
      title:'Services'
    },
    {
      path: '/project',
      title:'Projects'
    },
    {
      path: '/contact',
      title:'Contacts'
    },
]
export const Services = [
    {
        path: "/1",
        title:"Electrical & Plumbing"
  },
  {
    path: "5",
    title:"Generators and pumps "
},
   
    {
        path: "3",
        title:"Biometric Solutions"
    },
    {
        path: "4",
        title:"Solar Solutions"
    },
    {
      path: "2",
      title:"HVAC systems"
  },
    
]  

export const images = [
  "Screenshot 202...28 210644.png?height=500&width=600",
  "Screenshot 202...28 210620.png?height=500&width=600",
  "Screenshot 202...28 210548.png?height=500&width=600",
  "Biometerics.jpg?height=500&width=600",
  "Generator.jpg?height=500&width=600",
];
  export const slides = [
       
        {
            src: 'Biometrics.jpg',
            alt: 'Biometric Solutions',
            title: 'Secure Biometric Solutions',
            description: 'Enhance security and efficiency with advanced biometric and access control solutions.',
            cta: 'Learn More',
            // action: () => setShowBiometric(true),
        },
        {
            src: 'HVAC.jpg',
            alt: 'HVAC Services',
            title: 'HVAC Services ',
            description: 'Professional HVAC supply, installation, and maintenance for homes and businesses.',
            cta: 'Explore HVAC Services',
            // action: () => setShowHVAC(true),
        },
        {
            src: 'Generator.jpg',
            alt: 'Power Solutions',
            title: 'Reliable Power Generators',
            description: 'Import, supply, and maintain residential, commercial, and industrial generators.',
            cta: 'View Generators',
            // action: () => setShowGenerators(true),
        },
        {
            src: 'Solar_Solution.png',
            alt: 'Solar Solutions',
            title: 'Sustainable Solar Energy',
            description: 'Solar street lights and complete solar energy systems for homes and industries.',
            cta: 'See Solar Options',
            // action: () => setShowSolar(true),
        },
        {
            src: 'Data_Center.png',
            alt: 'Data Center Design',
            title: 'Data Center Design',
            description: 'Secure, scalable data center and BMS designs tailored to your needs.',
            cta: 'Explore Data Solutions',
            // action: () => setShowDataCenter(true),
        },
       

        {
            src: 'Equipment_maintenance.jpeg',
            alt: 'Equipment Maintenance',
            title: 'Reliable Maintenance',
            description: ' Preventive & Predictive Equipment Maintenance to prevent breakdowns and minimize costs.',
            cta: 'See Maintenance Plans',
            // action: () => setShowMaintenance(true),
        },
        {
            src: 'Networking_Solution.jpeg',
            alt: 'Networking Solutions',
            title: 'Robust Networking Solutions',
            description: 'Complete networking products and solutions for homes, businesses, and enterprises.',
            cta: 'See Networking Products',
            // action: () => setShowNetworking(true),
        },






]
    

export const services = [
  {
    icon: Zap,
    title: "Electrical & Plumbing",
    description: "Complete electrical installations and plumbing solutions for residential and commercial properties.",
    href: "/services/electrical-plumbing",
  },
  {
    icon: Wind,
    title: "AC Installation",
    description: "Professional air conditioning installation and maintenance services for optimal comfort.",
    href: "/services/ac-installation",
  },
  {
    icon: Fuel,
    title: "Generators",
    description: "Reliable generator installation and maintenance for uninterrupted power supply.",
    href: "/services/generators",
  },
  {
    icon: Sun,
    title: "Solar Solutions",
    description: "Sustainable solar light installation and renewable energy systems.",
    href: "/services/solar-solutions",
  },
  {
    icon: Fingerprint,
    title: "Biometric Solutions",
    description: "Advanced biometric systems for secure access and identity management.",
    href: "/services/biometric-solutions",
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Comprehensive access control systems for enhanced security and monitoring.",
    href: "/services/access-control",
  },
  {
    icon: Server,
    title: "Data Center Design",
    description: "Professional data center design and infrastructure solutions.",
    href: "/services/data-center",
  },
  {
    icon: Wrench,
    title: "BMS Solutions",
    description: "Building Management Systems for intelligent facility automation.",
    href: "/services/bms-solutions",
  },
]
export const All_Services = [
  {
    icon: Zap,
    title: "Electrical & Plumbing",
    description:
      "Complete electrical installations, wiring, lighting systems, and comprehensive plumbing solutions for residential and commercial properties.",
    features: ["Electrical installations", "Lighting systems", "Plumbing repairs", "Water systems"],
    href: "/services/electrical-plumbing",
  },
  {
    icon: Wind,
    title: "AC Installation",
    description:
      "Professional air conditioning installation, maintenance, and repair services for optimal comfort in any environment.",
    features: ["AC installation", "Maintenance services", "Repair & troubleshooting", "Energy efficiency"],
    href: "/services/ac-installation",
  },
  {
    icon: Fuel,
    title: "Generators",
    description:
      "Reliable generator installation, maintenance, and repair services for uninterrupted power supply in residential and commercial settings.",
    features: ["Generator installation", "Maintenance programs", "Emergency repairs", "Power backup solutions"],
    href: "/services/generators",
  },
  {
    icon: Sun,
    title: "Solar Solutions",
    description:
      "Sustainable solar light installation and comprehensive renewable energy systems for eco-friendly power solutions.",
    features: ["Solar panel installation", "Solar lighting", "Energy storage", "Grid-tie systems"],
    href: "/services/solar-solutions",
  },
  {
    icon: Fingerprint,
    title: "Biometric Solutions",
    description:
      "Advanced biometric systems for secure access control, time attendance, and identity management solutions.",
    features: ["Fingerprint systems", "Face recognition", "Time attendance", "Identity management"],
    href: "/services/biometric-solutions",
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Comprehensive access control systems for enhanced security, monitoring, and facility management.",
    features: ["Card access systems", "Security monitoring", "Visitor management", "Integration services"],
    href: "/services/access-control",
  },
  {
    icon: Server,
    title: "Data Center Design",
    description:
      "Professional data center design, implementation, and infrastructure solutions for modern business needs.",
    features: ["Infrastructure design", "Cooling systems", "Power management", "Network setup"],
    href: "/services/data-center",
  },
  {
    icon: Wrench,
    title: "BMS Solutions",
    description:
      "Building Management Systems for intelligent facility automation, energy management, and operational efficiency.",
    features: ["Automation systems", "Energy management", "HVAC control", "Monitoring solutions"],
    href: "/services/bms-solutions",
  },
  {
    icon: Globe, // You can pick a suitable icon
    title: "Networking Solutions",
    description:
      "Wide range of networking products and solutions for businesses, enterprises, and home networks.",
    features: [
      "Networking Hardware",
      "Cabling & Connectivity",
      "Network Security & Management",
      "Wireless & IoT Solutions",
      "Enterprise & Data Center Solutions"
    ],
    href: "/services/networking-solutions",
  },
  {
    icon: Droplet, // You can pick a suitable icon
    title: "Pumps Supply",
    description:
      "We provide high-quality pumps including submersible, centrifugal, booster, dewatering, and more to meet diverse needs.",
    features: [
      "Submersible Pumps",
      "Centrifugal Pumps",
      "Booster Pumps",
      "Dewatering Pumps",
      "Sewage & Drainage Pumps",
      "Industrial & Agricultural Pumps"
    ],
    href: "/services/pumps-supply",
  },
]

export const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring the highest quality standards.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our clients trust us to deliver consistent, dependable engineering solutions.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We believe in collaborative approaches that bring out the best in our team.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description: "We respect deadlines and deliver projects on time, every time.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    description:
      "To deliver reliable, timely, and customer-focused engineering service"
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To lead the engineering industry through quality, innovation, and trust.",
  },
  {
    icon: Target,
    title: "Our Goals",
    description:
      "To offer tailored services, ensure reliable systems, and promote sustainability",
  },
  {
    icon: Briefcase,
    title: "Our Services",
    description: " HVAC, Solar, Generators, Biometric, Data center Design, BMS, Networking, and Pump solutions ",
  }
]

export const whyChooseUs = [
  "Over 10 years of engineering experience in Ethiopia",
  "Certified and licensed professional engineers",
  "Comprehensive project management from start to finish",
  "24/7 customer support and maintenance services",
  "Competitive pricing with transparent quotations",
  "Latest technology and industry best practices",
  "Local expertise with international standards",
  "Proven track record with satisfied clients",
]
export const testimonials = [
 
  {
    name: "Mekdes Alemu",
    position: "Head of Customer Service, Ethiopian Airlines",
    image: "Ethio_AirlineLogo.png",
    feedback:
      "Working with Sololo Engineering has significantly improved our system reliability. Their team's responsiveness and technical know-how are unmatched.",
  },
  {
    name: "Samuel Tadesse",
    position: "Operations Manager, Debo Trading PLC",
    image: "Debologo.png",
    feedback:
      "Sololo Engineering provided us with innovative solutions that streamlined our processes. Their dedication to quality service is truly impressive.",
  },
  {
    name: "Selam Tesfaye",
    position: "Marketing Lead, Google Play Partners",
    image:
      "https://play-lh.googleusercontent.com/1JPl9dtbCzeg9RjMb4yv1vrXeFzvmI1WFkPi9mJvUu6s8TcM-PtZNyP5iQen9_0oSG0O=w600-h300-pc0xffffff-pd",
    feedback:
      "Sololo Engineering helped us set up seamless integration with our platforms. Their work ethic and attention to detail exceeded our expectations.",
  },
  {
    name: "Lensa Worku",
    position: "IT Director, Tech Solutions Ltd",
    image:
      "data:image/png;base64,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",
    feedback:
      "Sololo Engineering provided excellent system architecture and support for our infrastructure projects. Their hands-on collaboration made a significant impact on our timelines and efficiency.",
  },
  {
    name: "Biniyam Mengistu",
    position: "Lead Developer, Amasign Digital",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhQRExIVFRUXFhgXGBUYGBUWHhUdGRoWFxcaFRcaHiggGR0lGxodITIhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mHyY1LS0vNS0tLS0tMC0tLS0tLS0tLS0vMi0tLy0rLy8tLS0tLS0tLS0vLS0tLS0tLS0tLf/AABEIAMcA/QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgMEBQcIAgH/xABIEAACAQMCAwUEBgUKAwkAAAABAgMABBESIQUxQQYTIlFhB3GBkRQjMkJSoTRykrHBF1Nic3SCk7Kz0SRD4RUzNWPD0tPw8f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMFBAb/xAAsEQACAgEDAgQGAgMAAAAAAAAAAQIRAxIhMQRRBRNBYSIycYGRsdHwI2Lh/9oADAMBAAIRAxEAPwDeNKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgP//Z",
    feedback:
      "Sololo Engineering’s proactive approach to solving complex development challenges allowed our project to scale efficiently. Their professionalism is top-notch.",
  },
];



export const clientLogos = [
  "awash_bank_logo.png",
  "Ethio_AirlineLogo.png",
  "Debologo.png",
  "https://play-lh.googleusercontent.com/1JPl9dtbCzeg9RjMb4yv1vrXeFzvmI1WFkPi9mJvUu6s8TcM-PtZNyP5iQen9_0oSG0O=w600-h300-pc0xffffff-pd",
  "data:image/png;base64,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",
  "data:image/jpeg;base64,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"
  


  
]
export const serviceTitles = [
"Electrical & Plumbing / AC Installation",
  "Generators / Solar Solutions",
  "Biometric Solutions / Access Control",
  "Data Center Design / BMS Solutions",
  "Networking Solutions / Pumps Supply"]
