import { useState } from 'react';
import './Contact.css';
import {FaFacebook, FaInstagram, FaLinkedin, FaEnvelope} from "react-icons/fa";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-overlay"></div>
      
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have questions about our F1 coverage or want to collaborate? Reach out to us!</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Team Headquarters</h2>
            <div className="contact-item">
              <div className="contact-icon">🏎️</div>
              <div>
                <h3>F1Zone Racing</h3>
                <p>123 Grand Prix Avenue</p>
                <p>Lebanon</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope></FaEnvelope></div>
              <div>
                <h3>Email</h3>
                <p> F1Zone@gmail.com</p>
             
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+961 111111111</p>
                <p>+961 222222222</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Follow Our Team</h3>
              <div className="social-icons">
                <a href="#" className="social-icon"><FaFacebook /></a>
                <a href="#" className="social-icon"><FaInstagram/></a>
                <a href="#" className="social-icon"><FaLinkedin/></a>
               
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
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
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is your message about?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}


