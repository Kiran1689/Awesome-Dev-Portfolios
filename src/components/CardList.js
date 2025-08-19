import React, { useState, useMemo } from 'react';
import { FaTrophy, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'; // Added thumbs up icons

const SkeletonLoader = () => (
  <div className='w-full h-52 bg-gray-300 animate-pulse rounded-lg'></div>
);

const CardItem = ({ card, onCardClick, onVote, session, isMostVoted, userVote }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const hasVotedForThis = userVote === card.id;

  return (
    <div className={`card-item relative ${isMostVoted ? 'border-4 border-yellow-400 shadow-lg' : 'border'}`} >
      {isMostVoted && (
        <div className="absolute top-2 right-2 p-2 bg-yellow-400 rounded-full text-white z-10" title="Most Voted!">
          <FaTrophy size={20} />
        </div>
      )}
      <div onClick={() => onCardClick(card)} className="cursor-pointer">
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
      <div className="flex items-center justify-between p-2">
        <span className="text-lg font-bold">{card.vote_count} Votes</span>
        <button
          onClick={() => onVote(card.id)}
          disabled={!session}
          className={`px-4 py-2 flex items-center gap-2 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors ${hasVotedForThis ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {hasVotedForThis ? <FaThumbsUp/> : <FaRegThumbsUp/>}
          {hasVotedForThis ? 'Voted' : 'Vote'}
        </button>
      </div>
    </div>
  );
};

const CardList = ({ cards, onCardClick, onVote, session, userVote }) => {
  const maxVotes = useMemo(() => {
    if (cards.length === 0) return 0;
    return Math.max(...cards.map(card => card.vote_count));
  }, [cards]);

  return (
    <div className="card-list">
      {cards.length > 0 ? (
        cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            onCardClick={onCardClick}
            onVote={onVote}
            session={session}
            isMostVoted={maxVotes > 0 && card.vote_count === maxVotes}
            userVote={userVote}
          />
        ))
      ) : (
        <p className="text-center text-white">No portfolios found.</p>
      )}
    </div>
  );
};

export default CardList;