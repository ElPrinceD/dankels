import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = scrollY > 50

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
      setIsOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Dankels</span>
          <span className="logo-subtitle">Company Limited</span>
        </div>
        
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a></li>
          <li><a href="#why-choose-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose-us') }}>Why Us</a></li>
          <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

