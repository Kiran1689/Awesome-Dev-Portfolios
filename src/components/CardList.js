import React, { useState } from 'react';
import { MdOutlineShare } from "react-icons/md";

import { ShareModal } from "./ShareModal";


const SkeletonLoader = () => (
  <div className='animate-pulse' style={{ backgroundColor: '#ccc', height: '210px', width: '500px' }}>
    
  </div>
);

const CardItem = ({ card, onCardClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const toggleShare = () => {
    setShowShare(!showShare)
  };



  return (
    <>
    <div className="card-item" onClick={() => onCardClick(card)}>
      {!imageLoaded && <SkeletonLoader />}
      <img
        className="card-type-icon"
        src={card.image}
        alt="screenshot"
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <div className='flex'>
        <div className="card-name">{card.name}</div>
        <MdOutlineShare className=' mt-2 absolute right-0 mr-3 rounded-md hover:text-xl transition-all duration-300 sm:text-lg sm:mt-1.5' onClick={(e)=>{
          e.stopPropagation();
          toggleShare();
          }
          }
        />
      </div>
    </div>
    {showShare && <ShareModal link={card.livePortfolioLink} onClose={(e) => {
      setShowShare(false)}} />}
    </>
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
