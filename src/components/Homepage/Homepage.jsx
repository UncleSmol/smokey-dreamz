import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../../assets/images/smokey-dreamz-hero-img.webP';
import { FaInstagram, FaTwitter, FaDiscord, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import './styles/Homepage.css';

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.set(['.featured', '.about', '.latest', '.community'], { 
      opacity: 0,
      y: 50
    });
    
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    heroTl.to(heroRef.current, {
      yPercent: 30,
      ease: 'none'
    });

    gsap.to('.featured', {
      scrollTrigger: {
        trigger: '.featured',
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none reverse'
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    });

    const cards = gsap.utils.toArray('.featured__card');
    gsap.to(cards, {
      scrollTrigger: {
        trigger: '.featured__grid',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    const sections = ['.about', '.latest', '.community'];
    sections.forEach(section => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="homepage">
      <section className="hero" ref={heroRef}>
        <div className="hero__image">
          <img src={heroImage} alt="Smokey Dreamz Premium Cannabis" />
        </div>
        <div className="hero__content">
          <h1>Premium Cannabis Culture</h1>
          <p>Witbank's Finest Cannabis Dispensary</p>
          <button className="cta-button">Explore Collection</button>
        </div>
      </section>

      <div className="content-wrapper" ref={contentRef}>
        <section className="featured">
          <h2>Featured Collections</h2>
          <div className="featured__grid">
            {['Premium Strains', 'Accessories', 'Merchandise'].map((category) => (
              <div key={category} className="featured__card">
                <div className="card__content">
                  <h3>{category}</h3>
                  <p>Discover our selection of premium {category.toLowerCase()}</p>
                  <button className="button-secondary">View Collection</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about">
          <h2>The Smokey Experience</h2>
          <div className="about__content">
            <p>Experience the finest cannabis products in Mpumalanga. We pride ourselves on quality, authenticity, and the true spirit of South African cannabis culture.</p>
            <button className="button-primary">Our Story</button>
          </div>
        </section>

        <section className="latest">
          <h2>Latest Drops</h2>
          <div className="latest__grid">
            {['New Arrivals', 'Limited Edition', 'Local Collabs'].map((item) => (
              <div key={item} className="latest__card">
                <h3>{item}</h3>
                <p>Explore our newest additions to the collection</p>
              </div>
            ))}
          </div>
        </section>

        <section className="community">
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
        </section>
      </div>
    </div>
  );
};

export default Homepage;