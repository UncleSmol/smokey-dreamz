import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../../assets/images/smokey-dreamz-hero-img.webP';
import './Events.css';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.set(['.featured-events', '.upcoming-events', '.past-events'], {
      opacity: 0,
      y: 50
    });

    const sections = ['.featured-events', '.upcoming-events', '.past-events'];
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

  const upcomingEvents = [
    {
      date: '2025-05-15',
      title: 'Cannabis Culture Meet',
      time: '18:00',
      location: 'Witbank Central',
      description: 'Join us for an evening of networking and knowledge sharing with fellow cannabis enthusiasts.',
      category: 'Community'
    },
    {
      date: '2025-05-20',
      title: 'Product Launch Party',
      time: '19:00',
      location: 'Smokey Dreamz HQ',
      description: 'Be the first to experience our latest premium strains and merchandise.',
      category: 'Launch'
    }
  ];

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className="events" ref={sectionRef}>
      <section className="hero-section">
        <div className="hero__image">
          <img src={heroImage} alt="Smokey Dreamz Events" />
        </div>
        <div className="hero-content">
          <h1>Our Events</h1>
          <p>Join us in celebrating cannabis culture</p>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="featured-events">
          <h2>Featured Event</h2>
          <div className="featured-event-card">
            <div className="event-image">
              <div className="image-placeholder"></div>
              <div className="event-date-badge">
                <span className="date">15</span>
                <span className="month">May</span>
              </div>
            </div>
            <div className="event-details">
              <span className="event-category">Community</span>
              <h3>Cannabis Culture Meet</h3>
              <div className="event-meta">
                <span className="time">18:00</span>
                <span className="location">Witbank Central</span>
              </div>
              <p className="event-description">
                Join us for our flagship event where cannabis enthusiasts come together to share knowledge, experiences, and build lasting connections.
              </p>
              <button className="button-primary">RSVP Now</button>
            </div>
          </div>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-header">
                  <div className="date-badge">
                    <span className="day">{formatDate(event.date).split(' ')[0]}</span>
                    <span className="month">{formatDate(event.date).split(' ')[1]}</span>
                  </div>
                  <span className="event-category">{event.category}</span>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span className="time">{event.time}</span>
                    <span className="location">{event.location}</span>
                  </div>
                  <p>{event.description}</p>
                  <button className="button-secondary">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="past-events">
          <h2>Past Events Gallery</h2>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-item">
                <div className="image-placeholder"></div>
                <div className="gallery-overlay">
                  <h4>Event Title</h4>
                  <span>April 2025</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;