import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../../assets/images/smokey-dreamz-hero-img.webP';
import './styles/Homepage.css';

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Initial setup
    gsap.set(['.featured__card', '.about', '.latest', '.community'], { 
      opacity: 1,
      visibility: 'visible' 
    });
    
    // Hero animation
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

    // Sections animations
    const sections = ['.featured', '.about', '.latest', '.community'];
    sections.forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Cards stagger animation
    const cards = gsap.utils.toArray('.featured__card');
    gsap.from(cards, {
      scrollTrigger: {
        trigger: '.featured__grid',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
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
          <h2>Join Our Community</h2>
          <div className="community__content">
            <div className="community__feed">
              <h3>Follow Us</h3>
              <div className="feed-grid">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="feed-item">
                    <div className="feed-placeholder"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="newsletter">
              <h3>Stay Updated</h3>
              <form className="newsletter__form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="button-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;