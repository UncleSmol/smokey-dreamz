import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation
import { FaInstagram, FaTwitter, FaDiscord, FaTelegram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Connect.css';
import { popUpWithBounce } from '../../utils/animations/motionVariants'; // Import your variant

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const heroContentControls = useAnimation(); // Animation controls for hero content

  const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/smokeydreamz',
    twitter: 'https://twitter.com/smokeydreamz',
    whatsapp: 'https://wa.me/yourphonenumber',
    discord: 'https://discord.gg/yourinvitelink',
    telegram: 'https://t.me/smokeydreamz'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  useEffect(() => {
    // Animate hero content on load
    heroContentControls.start("animate");
  }, [heroContentControls]);

  return (
    <div className="connect" ref={sectionRef}>
      <section className="hero-section">
        <div className="hero__image">
        </div>
        <motion.div // Wrap hero content with motion.div
          className="hero-content"
          variants={popUpWithBounce}
          initial="initial"
          animate={heroContentControls}
        >
          <h1>Connect With Us</h1>
          <p>Join the Smokey Dreamz community</p>
        </motion.div>
      </section>

      <div className="content-wrapper">
        <div className="connect-grid">
          <motion.section // Wrap section with motion.section
            className="contact-info"
            variants={popUpWithBounce}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Get in Touch</h2>
            <div className="info-cards">
              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <h3>Visit Us</h3>
                <p>Witbank, Mpumalanga</p>
                <p>South Africa</p>
              </div>
              <div className="info-card">
                <FaPhone className="info-icon" />
                <h3>Call Us</h3>
                <p>+27 XX XXX XXXX</p>
                <p>Mon - Sat: 9am - 6pm</p>
              </div>
              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <h3>Email Us</h3>
                <p>info@smokeydreamz.co.za</p>
                <p>support@smokeydreamz.co.za</p>
              </div>
            </div>
          </motion.section>

          <motion.section // Wrap section with motion.section
            className="contact-form"
            variants={popUpWithBounce}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
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
          </motion.section>
        </div>

        <motion.section // Wrap section with motion.section
          className="social-connect"
          variants={popUpWithBounce}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Follow Our Journey</h2>
          <div className="social-grid">
            <a 
              href={SOCIAL_LINKS.instagram} 
              className="social-card instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
              <h3>Instagram</h3>
              <p>Follow our daily updates</p>
            </a>
            <a 
              href={SOCIAL_LINKS.twitter}
              className="social-card twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
              <h3>Twitter</h3>
              <p>Latest news and updates</p>
            </a>
            <a 
              href={SOCIAL_LINKS.whatsapp}
              className="social-card whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="social-icon" />
              <h3>WhatsApp</h3>
              <p>Direct support channel</p>
            </a>
            <a 
              href={SOCIAL_LINKS.discord}
              className="social-card discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="social-icon" />
              <h3>Discord</h3>
              <p>Join our community</p>
            </a>
            <a 
              href={SOCIAL_LINKS.telegram}
              className="social-card telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="social-icon" />
              <h3>Telegram</h3>
              <p>Exclusive announcements</p>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Connect;