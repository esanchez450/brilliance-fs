import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                Brilliance<span className="footer-accent">FS</span>
              </Link>
              <p className="footer-tagline">
                Professional facility services delivering cleaner, safer, and more
                productive environments for commercial clients across New York.
              </p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/solutions">Floor Services</Link></li>
                <li><Link to="/solutions">Disinfecting</Link></li>
                <li><Link to="/solutions">Fogging</Link></li>
                <li><Link to="/solutions">Strip &amp; Wax</Link></li>
                <li><Link to="/solutions">Carpet Cleaning</Link></li>
                <li><Link to="/solutions">Upholstery</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li>
                  <PhoneIcon className="footer-contact-icon" />
                  <a href="tel:+13474490795">(347) 449-0795</a>
                </li>
                <li>
                  <EmailIcon className="footer-contact-icon" />
                  <a href="mailto:BCapote@brilliance-fs.com">BCapote@brilliance-fs.com</a>
                </li>
                <li>
                  <LocationOnIcon className="footer-contact-icon" />
                  <span>New York, NY</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; {year} Brilliance FS. All rights reserved.</p>
            <p>Professional Facility Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
