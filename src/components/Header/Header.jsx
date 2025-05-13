import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactComponent as DevDocLogo } from '../../sig/dev-doc-logo.svg';
import './Header.css';
import { popUpWithBounce, generalExit } from '../../utils/animations/motionVariants';

const MotionDevDocLogo = motion(DevDocLogo);
const MotionLink = motion(Link);

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstRender = useRef(true);

  const logoControls = useAnimation();
  const navControls = useAnimation();
  const menuButtonControls = useAnimation();

  const menuItems = [
    { path: '/', label: 'HOME' },
    { path: '/Dream', label: 'THE DREAM' },
    { path: '/know-us', label: 'KNOW US' },
    { path: '/connect', label: 'CONNECT' },
    { path: '/events', label: 'EVENTS' },
  ];

  // Scroll animation for header
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -50], { clamp: false });

  // Animation Variants
  // Logo uses popUpWithBounce directly for its initial appearance
  const logoVariants = {
    initial: popUpWithBounce.initial,
    animate: popUpWithBounce.animate,
  };

  const menuButtonVariants = {
    initial: popUpWithBounce.initial,
    animate: {
      ...popUpWithBounce.animate,
      transition: {
        ...popUpWithBounce.animate.transition,
        delay: 0.2, // Slight delay after the logo starts animating
      },
    },
  };

  const navContainerVariants = {
    initial: {}, // Base state for the container
    desktopVisible: {
      opacity: 1, // Explicitly set opacity for the container on desktop
      height: 'auto', // Ensure height is auto for desktop layout
      transition: {
        staggerChildren: 0.07, // Time between each desktop nav item starting its animation
        delayChildren: 0.3,   // Delay before the *first* desktop nav item starts, after navControls.start()
      }
    },
    mobileOpen: {
      opacity: 1,
      height: "calc(100dvh - 5rem)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren", // Ensure container animates before children
        staggerChildren: 0.05, // Time between each mobile nav item starting
        delayChildren: 0.1    // Delay before the *first* mobile nav item starts animating in
      }
    },
    mobileClosed: {
      opacity: 0,
      height: 0,
      transition: {
        // Delay the container's own opacity/height animation slightly
        // to give children a moment to start their exit.
        opacity: { duration: 0.2, ease: "easeIn", delay: 0.1 }, 
        height: { duration: 0.3, ease: "easeIn", delay: 0.1 },
        when: "afterChildren", // Ensure children animate out before container
        staggerChildren: 0.05, 
        staggerDirection: -1,
        // delayChildren: 0.05 // Optional: delay before the first child starts exiting
                               // This can sometimes help if stagger alone isn't enough.
      }
    }
  };

  // Nav items use popUpWithBounce for their appearance, with specific variants for context
  const navItemVariants = {
    initial: popUpWithBounce.initial, // Default hidden state before any animation
    desktopVisible: { // For desktop nav items, using the popUpWithBounce animation
      ...popUpWithBounce.animate, // Inherits spring transition from popUpWithBounce
    },
    mobileOpen: { // For mobile nav items when menu opens, using popUpWithBounce
      ...popUpWithBounce.animate, // Inherits spring transition
    },
    mobileClosed: { // For mobile nav items when menu closes
      ...generalExit // Use all properties from generalExit, including its transition object
    }
  };

  const devDocLogoLinkVariants = {
    initial: popUpWithBounce.initial,
    mobileOpen: { ...popUpWithBounce.animate },
    mobileClosed: { ...generalExit }, // Use all properties from generalExit
    // Ensure that if the parent nav is 'desktopVisible', this specific item remains hidden
    desktopVisible: { ...popUpWithBounce.initial, transition: { duration: 0 } } 
  };

  const devDocLogoBounceVariants = {
    bounce: {
      y: [0, -5, 0, -3, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 8.5
      }
    }
  };

  // Initial animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Start all animations, letting their defined delays/staggers control the timing
      logoControls.start("animate"); 
      menuButtonControls.start("animate"); // This variant has an internal delay: 0.2
      
      //innerWidth check is for initial load. CSS media queries handle responsive layout.
      if (window.innerWidth < 768) { // Assuming 768px is the breakpoint for mobile nav behavior
        // On mobile, ensure the nav starts in its "mobileClosed" state (container hidden, items hidden)
        navControls.start("mobileClosed", { duration: 0.01 }); // Apply immediately
      } else {
        // On desktop, start the "desktopVisible" animation for nav items.
        navControls.start("desktopVisible");
      }
    };
    sequence();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logoControls, navControls, menuButtonControls]);

  // Handle menu toggle after initial render
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Only apply mobile open/close logic if on a mobile-sized screen.
    // This prevents isMenuOpen changes from affecting desktop navigation visibility.
    if (window.innerWidth < 768) { 
      if (isMenuOpen) {
        navControls.start("mobileOpen");
      } else {
        navControls.start("mobileClosed");
      }
    }
  }, [isMenuOpen, navControls]);
  
  // Handle window resize to ensure correct nav state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        navControls.start("desktopVisible");
        // Optionally, ensure the mobile menu is considered closed on desktop
        // if the hamburger button itself should reset.
        // setIsMenuOpen(false); // This would also hide the 'X' on the hamburger
      } else {
        // Mobile view: rely on isMenuOpen to set the correct state
        if (isMenuOpen) {
          navControls.start("mobileOpen");
        } else {
          navControls.start("mobileClosed", { duration: 0.01 }); // Ensure it's quickly closed if not open
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navControls, isMenuOpen]); // isMenuOpen is a dependency to re-evaluate mobile state on resize

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header className="header" ref={headerRef} style={{ y: headerY }}>
      <div className="header__container">
        <motion.div
          className="header__logo"
          variants={logoVariants}
          initial="initial" // Use the "initial" key from logoVariants
          animate={logoControls}
        >
          <h1>SMOKEY DREAMZ</h1>
        </motion.div>

        <motion.button
          className={`header__menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          variants={menuButtonVariants}
          initial="initial"
          animate={menuButtonControls}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>

        <motion.nav
          className={`header__nav ${isMenuOpen ? 'active' : ''}`}
          variants={navContainerVariants}
          // The 'initial' variant for the container itself.
          // For desktop, CSS handles visibility. For mobile, 'mobileClosed' will set initial opacity/height.
          initial="initial" 
          animate={navControls}
        >
          {menuItems.map((item, index) => (
            <MotionLink // Use the new MotionLink component
              key={item.path} 
              to={item.path} 
              className="nav-item"
              onClick={handleNavItemClick}
              variants={navItemVariants}
              // By removing 'initial', these items will now more directly inherit their
              // animation state and timing (including stagger) from the parent motion.nav, similar to the bottom-nav-link.
            >
              {item.label}
            </MotionLink>
          ))}
          <motion.a 
            href="https://unclesmol.github.io/dev-doc/" 
            className="bottom-nav-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavItemClick}
            variants={devDocLogoLinkVariants} // Use specific variants for the DevDoc logo link
          >
              <MotionDevDocLogo className="w-24 h-auto" variants={devDocLogoBounceVariants} animate="bounce" />
          </motion.a>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;