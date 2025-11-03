import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Dankels</h3>
            <p className="footer-subtitle">Company Limited</p>
            <p className="footer-description">
              Professional cleaning services in Telford, UK. 
              Bringing excellence and reliability to every space we clean.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Residential Cleaning</a></li>
              <li><a href="#services">Office Cleaning</a></li>
              <li><a href="#services">Deep Cleaning</a></li>
              <li><a href="#services">Carpet Cleaning</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect With Us</h4>
            <div className="social-links">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="footer-contact">
              <p>📧 info@dankels.co.uk</p>
              <p>📞 +44 (0) 123 456 7890</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Dankels Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

