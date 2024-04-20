import React, { useState } from 'react';

const SkeletonLoader = () => (
  <div className='animate-pulse' style={{ backgroundColor: '#ccc', height: '210px', width: '500px' }}>
    
  </div>
);

const CardItem = ({ card, onCardClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="card-item" onClick={() => onCardClick(card)}>
      {!imageLoaded && <SkeletonLoader />}
      <img
        className="card-type-icon"
        src={card.image}
        alt="screenshot"
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <div className="card-name">{card.name}</div>
    </div>
  );
};

const CardList = ({ cards, onCardClick }) => (
  <div className="card-list">
    {cards.map((card) => (
      <CardItem key={card.id} card={card} onCardClick={onCardClick} />
    ))}
  </div>
);

export default CardList;
