import { useState, useEffect, useRef } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      text: 'Dankels Company Limited has been cleaning our home for over a year now. They are professional, thorough, and always leave our house sparkling. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      role: 'Office Manager',
      text: 'We trust Dankels with our office cleaning. They are reliable, use eco-friendly products, and our team appreciates the clean environment. Excellent service!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'Property Owner',
      text: 'The move-out cleaning service was exceptional. They cleaned every corner and left the property spotless. Made the transition so much easier. Thank you!',
      rating: 5
    },
    {
      name: 'David Brown',
      role: 'Business Owner',
      text: 'Professional, punctual, and affordable. Dankels has been cleaning our shop for months, and we couldn\'t be happier. Great value for money!',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="testimonials-container">
        <div className="testimonials-header fade-in">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by homeowners and businesses across Telford
          </p>
        </div>
        
        <div className="testimonial-slider">
          <button className="slider-btn prev" onClick={prevTestimonial} aria-label="Previous testimonial">
            <FaChevronLeft />
          </button>
          
          <div className="testimonial-content">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <div className="testimonial-author">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={nextTestimonial} aria-label="Next testimonial">
            <FaChevronRight />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

