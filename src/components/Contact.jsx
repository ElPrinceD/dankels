import { useState, useEffect, useRef } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Ensure contact section is always visible
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.style.opacity = '1'
      contactSection.style.visibility = 'visible'
      contactSection.style.display = 'block'
    }

    // Make all fade-in elements visible immediately
    const fadeElements = document.querySelectorAll('#contact .fade-in')
    fadeElements.forEach((el) => {
      el.style.opacity = '1'
      el.style.visibility = 'visible'
      el.style.transform = 'translateY(0)'
      el.classList.add('visible')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.style.opacity = '1'
            entry.target.style.visibility = 'visible'
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-header fade-in">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to experience the Dankels difference? Contact us today!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in">
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Telford, UK</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+44 (0) 123 456 7890</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p>info@dankels.co.uk</p>
              </div>
            </div>

            <div className="info-item contact-person">
              <div className="info-icon">
                <FaUser />
              </div>
              <div className="info-text">
                <h3>Contact Person</h3>
                <p style={{ marginBottom: '0.5rem' }}><strong>Grace Kwatermaa</strong></p>
                <p style={{ marginBottom: '0.25rem' }}>grace.kwatermaa@dankels.co.uk</p>
                <p>+44 (0) 123 456 7891</p>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9570.83428584974!2d-2.4974!3d52.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a0a7f8b6e77c1%3A0x6e5a3d5b9e0c5f3d!2sTelford!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Telford Location Map"
              ></iframe>
            </div>
          </div>

          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+44 (0) 123 456 7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your cleaning needs..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

