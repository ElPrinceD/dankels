import { useEffect, useRef } from 'react'
import { FaHome, FaBuilding, FaBroom, FaCouch, FaTruckMoving } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Cleaning',
      description: 'Regular and one-time cleaning services for your home. We keep your living spaces spotless and comfortable.'
    },
    {
      icon: <FaBuilding />,
      title: 'Office Cleaning',
      description: 'Professional commercial cleaning to maintain a clean and productive work environment for your business.'
    },
    {
      icon: <FaBroom />,
      title: 'Deep Cleaning',
      description: 'Thorough deep cleaning services that reach every corner, ensuring a comprehensive clean for your space.'
    },
    {
      icon: <FaCouch />,
      title: 'Carpet & Upholstery Cleaning',
      description: 'Specialized cleaning for carpets, rugs, and furniture to restore their freshness and extend their life.'
    },
    {
      icon: <FaTruckMoving />,
      title: 'Move-In/Move-Out Cleaning',
      description: 'Complete cleaning services to prepare your space for moving in or out, leaving it spotless.'
    }
  ]

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header fade-in">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card fade-in"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

