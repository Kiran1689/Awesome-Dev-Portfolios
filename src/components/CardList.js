import React from 'react';

const CardList = ({ cards, onCardClick  }) => (
  <div className="card-list">
    {cards.map((card) => (
      <div className="card-item" onClick={() => onCardClick(card)}>
        <img className="card-type-icon" src={card.image} alt='screenshot'/>
        <div className="card-name">{card.name}</div>
      </div>
    ))}
  </div>
);

export default CardList;
