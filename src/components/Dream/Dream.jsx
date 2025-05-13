import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation
import { FaChevronDown } from 'react-icons/fa';
import StrainCard from './StrainCard';
import { strainData } from './strainData';
import heroImage from '../../assets/images/smokey-dreamz-hero-img.webP';
import './Dream.css';
import { popUpWithBounce } from '../../utils/animations/motionVariants'; // Import your variant


const categories = [
  {
    id: 'strains',
    title: 'Premium Strains',
    description: 'Experience our handpicked selection of premium cannabis strains',
    data: strainData.filter(item => item.type === 'strain')
  },
  {
    id: 'concentrates',
    title: 'Concentrates',
    description: 'Pure and potent cannabis concentrates for the connoisseur',
    data: strainData.filter(item => item.type === 'concentrate')
  },
  {
    id: 'edibles',
    title: 'Edibles',
    description: 'Delicious treats infused with premium cannabis',
    data: strainData.filter(item => item.type === 'edible')
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Quality accessories to enhance your experience',
    data: strainData.filter(item => item.type === 'accessory')
  }
];

const Dream = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRef = useRef(null);
  const scrollContainersRef = useRef({});
  const heroContentControls = useAnimation(); // Animation controls for hero content
  // We will use whileInView for category sections, so individual controls might not be needed for them.

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const handleScroll = (direction, categoryId) => {
    const container = scrollContainersRef.current[categoryId];
    const cardWidth = 280 + 16; // card width + gap
    const currentScroll = container.scrollLeft;
    const targetScroll = direction === 'left' 
      ? currentScroll - cardWidth 
      : currentScroll + cardWidth;
      
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Animate hero content on load
    heroContentControls.start("animate");
  }, [heroContentControls]);

  return (
    <div className="dream" ref={sectionRef}>
      <section className="hero-section">
        <div className="hero__image">
          <img src={heroImage} alt="Smokey Dreamz Collection" />
        </div>
        <motion.div // Wrap hero content with motion.div
          className="hero-content"
          variants={popUpWithBounce}
          initial="initial"
          animate={heroContentControls}
        >
          <h1>The Dream Collection</h1>
          <p>Premium Cannabis Products</p>
        </motion.div>
      </section>

      <div className="content-wrapper">
        {categories.map((category) => (
          <motion.div // Wrap each category section with motion.div
            key={category.id}
            className="category-section"
            variants={popUpWithBounce}
            initial="initial"
            whileInView="animate" // Animate when it comes into view
            viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
          >
            <button
              className={`category-header ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="category-title">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <FaChevronDown className="chevron-icon" />
            </button>

            <div className={`category-content ${activeCategory === category.id ? 'expanded' : ''}`}>
              <div className="scroll-buttons">
                <button 
                  className="scroll-btn left"
                  onClick={() => handleScroll('left', category.id)}
                >
                  ←
                </button>
                <button 
                  className="scroll-btn right"
                  onClick={() => handleScroll('right', category.id)}
                >
                  →
                </button>
              </div>
              
              <div 
                className="products-scroll"
                ref={el => scrollContainersRef.current[category.id] = el}
              >
                <div className="products-row">
                  {category.data.map(item => (
                    <StrainCard key={item.id} strain={item} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dream;