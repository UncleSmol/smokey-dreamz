import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    { path: '/the-dream', label: 'The Dream' },
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
  }, []);

  const toggleMenu = () => {
    const nav = navRef.current;
    const navItems = document.querySelectorAll('.nav-item');
    
    if (isMenuOpen) {
      const tl = gsap.timeline({
        onComplete: () => setIsMenuOpen(false)
      });

      tl.to(navItems, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        stagger: {
          each: 0.05,
          from: "end"
        }
      })
      .to(nav, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      }, ">");
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

  return (
    <header ref={headerRef} className="header">
      <div className="container header__container">
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

        <nav ref={navRef} className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.path}
              className="nav-item"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;