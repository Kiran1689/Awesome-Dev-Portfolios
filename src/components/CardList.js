import React, { useState } from 'react';
import { IoMdShare } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ShareModal from './ShareModal';

const SkeletonLoader = () => (
  <div className='animate-pulse' style={{ backgroundColor: '#ccc', height: '210px', width: '500px' }}>

  </div>
);

const CardItem = ({ card, onCardClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shareClicked, setShareClicked] = useState(false);

  const toggleShareModel = () => {
    setShareClicked(setShareClicked(false));
  }


  return (
    <>

      <div className="card-item rounded-t-xl">

        {!imageLoaded && <SkeletonLoader />}
        <img onClick={() => onCardClick(card)}
          className="card-type-icon rounded-3xl p-3 pb-1"
          src={card.image}
          alt="screenshot"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <div className="card-name border-b-[1px] border-[#ffffff70] pb-2" onClick={() => onCardClick(card)}>{card.name}</div>
        {/* adding tailwind CSS here, because it is the objectively better way to write CSS */}
        {/* xhange to justify-around when building other features */}
        <div className="flex flex-row justify-center items-center md:flex-col lg:flex-row gap-1 p-2 cursor-default">
          {/* <div>
            {Math.floor(Math.random() * 100)} people liked this.
          </div> */}
          <div className='flex flex-row gap-1 text-xl'>
            {/* icons go here */}
            {/* <button onClick={() => { alert("Clicked") }}><FaHeart className='text-red-500' /></button>
            <button onClick={() => { alert("Clicked") }}><FaRegBookmark className='text-yellow-500' /></button> */}
            <button onClick={() => { setShareClicked(true) }}><IoMdShare className='text-blue-500' /></button>
            {shareClicked && <ShareModal toggleShareModel={toggleShareModel} cardUrl={card.livePortfolioLink} />}
          </div>
        </div>
      </div>
    </>

  );
};

const CardList = ({ cards, onCardClick }) => {

  return (
    <>

      <div className="card-list">
        {cards.map((card) => (
          <div key={card.id} className='p-1 md:p-0' >
            <CardItem card={card} onCardClick={onCardClick} />
          </div>

        ))}
      </div>
    </>
  )


};

export default CardList;
