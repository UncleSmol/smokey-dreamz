import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../../assets/images/smokey-dreamz-hero-img.webP';
import { FaInstagram, FaTwitter, FaDiscord, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import './styles/Homepage.css';
import { popUpWithBounce } from '../../utils/animations/motionVariants'; // Import your variant

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const homepageRef = useRef(null); // Ref for the main component div
  const heroRef = useRef(null);
  const heroContentControls = useAnimation(); // Animation controls for hero content

  useEffect(() => {
    heroContentControls.start("animate"); // Animate hero content on load

    const ctx = gsap.context(() => {
      // Hero parallax animation
      const heroImageEl = heroRef.current ? heroRef.current.querySelector('.hero__image img') : null;
      if (heroImageEl) {
        gsap.to(heroImageEl, { // Target only the image for parallax
          yPercent: -25, // Move image upwards as user scrolls down
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current, // Trigger is the hero section
            start: 'top top',
            end: 'bottom top',
            scrub: true // Smooth scrubbing
          }
        });
      }
    }, homepageRef); // Scope the context to the main homepage div

    return () => {
      ctx.revert(); // Cleanup GSAP animations and ScrollTriggers
    };
  }, [heroContentControls]); // Added heroContentControls to dependency array

  return (
    <div className="homepage" ref={homepageRef}> {/* Add ref here */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero__image">
          <img src={heroImage} alt="Smokey Dreamz Premium Cannabis" />
        </div>
        <motion.div
          className="hero__content"
          variants={popUpWithBounce}
          initial="initial"
          animate={heroContentControls}
        >
          <h1>Premium Cannabis Culture</h1>
          <p>Witbank's Finest Cannabis Dispensary</p>
          <button className="cta-button">Explore Collection</button>
        </motion.div>
      </section>

      <div className="content-wrapper"> {/* Removed unused contentRef */}
        <motion.section
          className="featured"
          variants={popUpWithBounce}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Featured Collections</h2>
          <div className="featured__grid">
            {['Premium Strains', 'Accessories', 'Merchandise'].map((category) => (
              <motion.div
                key={category}
                className="featured__card"
                variants={popUpWithBounce}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }} // Trigger a bit earlier for cards
              >
                <div className="card__content">
                  <h3>{category}</h3>
                  <p>Discover our selection of premium {category.toLowerCase()}</p>
                  <button className="button-secondary">View Collection</button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="about"
          variants={popUpWithBounce}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>The Smokey Experience</h2>
          <div className="about__content">
            <p>Experience the finest cannabis products in Mpumalanga. We pride ourselves on quality, authenticity, and the true spirit of South African cannabis culture.</p>
            <button className="button-primary">Our Story</button>
          </div>
        </motion.section>

        <motion.section
          className="latest"
          variants={popUpWithBounce}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Latest Drops</h2>
          <div className="latest__grid">
            {['New Arrivals', 'Limited Edition', 'Local Collabs'].map((item) => (
              <motion.div
                key={item}
                className="latest__card"
                variants={popUpWithBounce}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }} // Trigger a bit earlier for cards
              >
                <h3>{item}</h3>
                <p>Explore our newest additions to the collection</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="community"
          variants={popUpWithBounce}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="community__content">
            <div className="community__social">
              <h2>Join Our Community</h2>
              <p className="community__description">
                Connect with fellow cannabis enthusiasts, stay updated on exclusive drops, and be part of South Africa's growing cannabis culture.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaInstagram size={24} />
                  <div className="social-link__content">
                    <span className="social-link__title">Instagram</span>
                    <span className="social-link__info">Daily Updates & Stories</span>
                  </div>
                </a>
                <a href="#" className="social-link">
                  <FaWhatsapp size={24} />
                  <div className="social-link__content">
                    <span className="social-link__title">WhatsApp</span>
                    <span className="social-link__info">Direct Support</span>
                  </div>
                </a>
                <a href="#" className="social-link">
                  <FaTwitter size={24} />
                  <div className="social-link__content">
                    <span className="social-link__title">Twitter</span>
                    <span className="social-link__info">News & Announcements</span>
                  </div>
                </a>
                <a href="#" className="social-link">
                  <FaDiscord size={24} />
                  <div className="social-link__content">
                    <span className="social-link__title">Discord</span>
                    <span className="social-link__info">Community Chat</span>
                  </div>
                </a>
                <a href="#" className="social-link">
                  <FaTelegram size={24} />
                  <div className="social-link__content">
                    <span className="social-link__title">Telegram</span>
                    <span className="social-link__info">Exclusive Drops</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="community__events">
              <h3>Upcoming Events</h3>
              <div className="event-card">
                <div className="event-date">May 15, 2025</div>
                <h4 className="event-title">Cannabis Culture Meet</h4>
                <p className="event-description">Join us for an evening of networking and knowledge sharing with fellow enthusiasts.</p>
                <button className="button-secondary">RSVP Now</button>
              </div>
              <div className="event-card">
                <div className="event-date">May 20, 2025</div>
                <h4 className="event-title">Product Launch Party</h4>
                <p className="event-description">Be the first to experience our latest premium strains and merchandise.</p>
                <button className="button-secondary">Learn More</button>
              </div>
            </div>

            <div className="newsletter">
              <h3>Stay Updated</h3>
              <p className="newsletter__description">
                Subscribe to our newsletter and get exclusive benefits:
              </p>
              <ul className="newsletter__benefits">
                <li>Early access to new product drops</li>
                <li>Member-only discounts and promotions</li>
                <li>Invitations to exclusive events</li>
                <li>Monthly strain education content</li>
              </ul>
              <form className="newsletter__form">
                <input type="email" placeholder="Enter your email for exclusive access" />
                <button type="submit" className="button-primary">Join the Circle</button>
              </form>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Homepage;