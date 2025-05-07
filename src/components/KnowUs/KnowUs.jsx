import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './KnowUs.css';

gsap.registerPlugin(ScrollTrigger);

const KnowUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.set(['.story-section', '.values-section', '.team-section'], {
      opacity: 0,
      y: 50
    });

    const sections = ['.story-section', '.values-section', '.team-section'];
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
    <div className="know-us" ref={sectionRef}>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Our Journey</h1>
          <p>Crafting Premium Cannabis Experiences Since 2020</p>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="story-section">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-card">
              <h3>The Beginning</h3>
              <p>Founded in the heart of Mpumalanga, Smokey Dreamz emerged from a passion for authentic cannabis culture and a vision to elevate the industry standards.</p>
            </div>
            <div className="story-card">
              <h3>The Evolution</h3>
              <p>From humble beginnings to becoming a cornerstone of South Africa's cannabis community, our journey has been driven by quality, innovation, and community.</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            {[
              { title: 'Quality', desc: 'Premium selection of carefully curated products' },
              { title: 'Community', desc: 'Building meaningful connections in the cannabis culture' },
              { title: 'Education', desc: 'Promoting responsible consumption and awareness' },
              { title: 'Innovation', desc: 'Constantly evolving to meet community needs' }
            ].map((value) => (
              <div key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2>Meet The Team</h2>
          <div className="team-grid">
            {[
              { role: 'Founder', desc: 'Visionary behind Smokey Dreamz' },
              { role: 'Community Lead', desc: 'Building bridges in cannabis culture' },
              { role: 'Quality Expert', desc: 'Ensuring premium standards' }
            ].map((member) => (
              <div key={member.role} className="team-card">
                <div className="member-image">
                  <div className="image-placeholder"></div>
                </div>
                <h3>{member.role}</h3>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default KnowUs;