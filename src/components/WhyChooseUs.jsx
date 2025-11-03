import { useEffect, useRef } from 'react'
import { FaUserShield, FaLeaf, FaCalendarAlt, FaPoundSign } from 'react-icons/fa'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  const reasons = [
    {
      icon: <FaUserShield />,
      title: 'Trusted Local Professionals',
      description: 'Experienced and reliable cleaning professionals serving Telford with dedication and care.'
    },
    {
      icon: <FaLeaf />,
      title: 'Eco-Friendly Products',
      description: 'We use environmentally safe cleaning products that are effective yet gentle on your family and pets.'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Flexible Scheduling',
      description: 'We work around your schedule to provide cleaning services at times that are convenient for you.'
    },
    {
      icon: <FaPoundSign />,
      title: 'Affordable Rates',
      description: 'Competitive pricing with transparent quotes - no hidden fees, just honest and fair rates.'
    }
  ]

  return (
    <section id="why-choose-us" className="why-choose-us" ref={sectionRef}>
      <div className="why-choose-us-container">
        <div className="why-choose-us-header fade-in">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            What sets Dankels Company Limited apart
          </p>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="reason-card fade-in"
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="reason-icon">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

