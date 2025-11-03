import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)

  // Hero content should always be visible, no need for intersection observer
  useEffect(() => {
    // Ensure hero content is visible immediately
    const heroContent = document.querySelector('.hero-content')
    if (heroContent) {
      heroContent.style.opacity = '1'
      heroContent.style.visibility = 'visible'
      heroContent.style.display = 'flex'
      heroContent.style.transform = 'translateY(0)'
    }

    // Ensure buttons are visible
    const buttons = document.querySelectorAll('.hero-buttons, .btn')
    buttons.forEach((btn) => {
      btn.style.opacity = '1'
      btn.style.visibility = 'visible'
      btn.style.display = btn.classList.contains('btn') ? 'inline-block' : 'flex'
    })
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Sparkling Clean Every Time – Trusted Cleaning Services in Telford
        </h1>
        <p className="hero-subtitle">
          Professional residential and commercial cleaning by Dankels Company Limited.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Book a Cleaning
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get a Free Quote
          </button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

