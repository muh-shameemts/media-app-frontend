// import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';

// function Footer() {
//   return (
//     <div>
//       <Container>
//         <Row>
//           <p className='text-center m-3'>All Rights Under Media App @mediaapp.com 2024</p>
//         </Row>
//         <Row className='ftr justify-content-center'>
//           <Col className='text-center'>Media Player</Col>
//           <Col className='text-center'>About Us</Col>
//           <Col className='text-center'>Address</Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }


// export default Footer;




import React from 'react';
import './Footer.css'; // Make sure to update your CSS file
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>

        <div className="location">
          <h5>Our Location</h5>
          <p>123 Media Lane, Music City, CA 90210</p>
        </div>

        <div className="reviews">
          <h5>User Reviews</h5>
          <p>"This app has changed the way I listen to music!" - Jane Doe</p>
          <p>"Amazing interface and great sound quality!" - John Smith</p>
        </div>

        <div className="newsletter">
          <h5>Subscribe to Our Newsletter</h5>
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="btn subscribe-btn">Subscribe</button>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
