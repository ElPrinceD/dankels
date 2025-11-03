import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)
  const imageRefs = [useRef(null), useRef(null), useRef(null)]

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

    imageRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      imageRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content fade-in">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            At Dankels Company Limited, we bring excellence and reliability to every space we clean. 
            From offices to homes, we ensure every surface shines. With years of experience serving 
            the Telford community, we've built a reputation for thoroughness, professionalism, and 
            exceptional customer service.
          </p>
        </div>
        
        <div className="about-images">
          <div className="about-image-wrapper fade-in" ref={imageRefs[0]}>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional cleaning team in action"
              className="about-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              }}
            />
            <div className="image-overlay">
              <span>Professional Team</span>
            </div>
          </div>
          <div className="about-image-wrapper fade-in" ref={imageRefs[1]}>
            <img 
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1000&h=750&fit=crop&q=80" 
              alt="Modern professional cleaning equipment"
              className="about-image"
              loading="lazy"
              onError={(e) => {
                if (!e.target.dataset.attempted) {
                  e.target.src = 'https://images.unsplash.com/photo-1600489000022-c208afd5d87b?w=1000&h=750&fit=crop&q=80'
                  e.target.dataset.attempted = '1'
                } else if (e.target.dataset.attempted === '1') {
                  e.target.src = 'https://images.unsplash.com/photo-1584622784357-9151a2ee2e3c?w=1000&h=750&fit=crop&q=80'
                  e.target.dataset.attempted = '2'
                } else {
                  e.target.style.display = 'none'
                }
              }}
            />
            <div className="image-overlay">
              <span>Modern Equipment</span>
            </div>
          </div>
          <div className="about-image-wrapper fade-in" ref={imageRefs[2]}>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Spotless clean office space"
              className="about-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              }}
            />
            <div className="image-overlay">
              <span>Perfect Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

