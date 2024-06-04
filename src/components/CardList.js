import React, { useState } from 'react';
import { IoMdShare } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const SkeletonLoader = () => (
  <div className='animate-pulse' style={{ backgroundColor: '#ccc', height: '210px', width: '500px' }}>

  </div>
);

const CardItem = ({ card, onCardClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="card-item">
      {!imageLoaded && <SkeletonLoader />}
      <img onClick={() => onCardClick(card)}
        className="card-type-icon"
        src={card.image}
        alt="screenshot"
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <div className="card-name" onClick={() => onCardClick(card)}>{card.name}</div>
      {/* adding tailwind CSS here, because it is the objectively better way to write CSS */}
      <div className="flex flex-row justify-around items-center md:flex-col lg:flex-col gap-1 p-2 cursor-default">
        <div>
          20 people liked this.
        </div>
        <div className='flex flex-row gap-1 text-xl'>
          {/* icons go here */}
          <button onClick={() => { alert("Clicked") }}><FaHeart className='text-red-500' /></button>
          <button onClick={() => { alert("Clicked") }}><FaRegBookmark className='text-yellow-500' /></button>
          <button onClick={() => { alert("Clicked") }}><IoMdShare className='text-blue-500' /></button>

        </div>
      </div>
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
