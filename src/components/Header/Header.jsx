import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ReactComponent as DevDocLogo } from '../../sig/dev-doc-logo.svg';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/Dream', label: 'The Dream' },
    { path: '/know-us', label: 'Know Us' },
    { path: '/connect', label: 'Connect' },
    { path: '/events', label: 'Events' },
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(logoRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    const navItems = document.querySelectorAll('.nav-item');
    tl.fromTo(navItems,
      { y: -20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1,
      },
      '-=0.5'
    );

    ScrollTrigger.create({
      trigger: headerRef.current,
      start: 'top top',
      end: '100px',
      scrub: true,
      onUpdate: (self) => {
        gsap.to(headerRef.current, {
          y: self.progress * -50,
          duration: 0.1
        });
      }
    });

    // Add logo bounce animation
    const logo = document.querySelector('.bottom-nav-link svg');
    
    const animateLogo = () => {
      logo.style.animationPlayState = 'running';
      setTimeout(() => {
        logo.style.animationPlayState = 'paused';
      }, 2000);
    };

    // Initial animation
    animateLogo();
    
    // Set interval for repeated animation
    const intervalId = setInterval(animateLogo, 10000);

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

  const toggleMenu = () => {
    const nav = navRef.current;
    const navItems = nav.querySelectorAll('.nav-item, .bottom-nav-link'); // Added logo selector
    
    if (isMenuOpen) {
      const tl = gsap.timeline({
        onComplete: () => setIsMenuOpen(false)
      });

      tl.to(navItems, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05
      })
      .to(nav, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
    } else {
      const tl = gsap.timeline({
        onStart: () => setIsMenuOpen(true)
      });

      tl.to(nav, {
        height: "100vh",
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut"
      })
      .fromTo(navItems,
        { y: -20, opacity: 0 },
        { 
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05
        },
        "-=0.1"
      );
    }
  };

  const resetNavigation = () => {
    if (isMenuOpen) {
      const nav = navRef.current;
      const navItems = nav.querySelectorAll('.nav-item, .bottom-nav-link');
      
      const tl = gsap.timeline({
        onComplete: () => setIsMenuOpen(false)
      });

      tl.to(navItems, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05
      })
      .to(nav, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header__container">
        <div ref={logoRef} className="header__logo">
          <h1>SMOKEY DREAMZ</h1>
        </div>

        <button 
          ref={menuRef} 
          className={`header__menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`} ref={navRef}>
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="nav-item"
              onClick={resetNavigation}
            >
              {item.label}
            </Link>
          ))}
          <a 
            href="https://unclesmol.github.io/dev-doc/" 
            className="bottom-nav-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={resetNavigation}
          >
            <DevDocLogo className="w-24 h-auto" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;