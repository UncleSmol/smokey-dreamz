import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './StrainCard.css';

const StrainCard = ({ strain }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageNav = (direction, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => {
      if (direction === 'next') {
        return prev === strain.images.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? strain.images.length - 1 : prev - 1;
    });
  };

  const renderCardContent = () => {
    switch (strain.type) {
      case 'strain':
        return (
          <>
            <div className="card-stats">
              <div className="stat">
                <span className="label">THC</span>
                <span className="value">{strain.thc}</span>
              </div>
              <div className="stat">
                <span className="label">CBD</span>
                <span className="value">{strain.cbd}</span>
              </div>
            </div>
            <div className="card-tags">
              {strain.effects.slice(0, 3).map((effect, i) => (
                <span key={i} className="tag">{effect}</span>
              ))}
            </div>
          </>
        );

      case 'concentrate':
        return (
          <>
            <div className="card-stats">
              <div className="stat">
                <span className="label">Potency</span>
                <span className="value">{strain.potency}</span>
              </div>
              <div className="stat">
                <span className="label">Type</span>
                <span className="value">{strain.consistency}</span>
              </div>
            </div>
          </>
        );

      case 'edible':
        return (
          <>
            <div className="card-stats">
              <div className="stat">
                <span className="label">Per Piece</span>
                <span className="value">{strain.thc}</span>
              </div>
              <div className="stat">
                <span className="label">Count</span>
                <span className="value">{strain.pieces}</span>
              </div>
            </div>
          </>
        );

      case 'accessory':
        return (
          <>
            <div className="card-features">
              {strain.features.map((feature, i) => (
                <span key={i} className="feature">{feature}</span>
              ))}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="product-card" onClick={() => setIsModalOpen(true)}>
      <div className="card-image">
        <img src={strain.images[currentImageIndex]} alt={strain.name} />
        {strain.images.length > 1 && (
          <div className="image-nav">
            <button onClick={(e) => handleImageNav('prev', e)}>
              <FaChevronLeft />
            </button>
            <button onClick={(e) => handleImageNav('next', e)}>
              <FaChevronRight />
            </button>
          </div>
        )}
        <div className="category-badge">{strain.category}</div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{strain.name}</h3>
        <div className="card-price">{strain.price}</div>
        {renderCardContent()}
        <div className="card-footer">
          <div className="rating">
            <FaStar />
            <span>{strain.rating}</span>
            <span className="reviews">({strain.reviews})</span>
          </div>
          {!strain.inStock && <span className="out-of-stock">Out of Stock</span>}
        </div>
      </div>
    </div>
  );
};

export default StrainCard;