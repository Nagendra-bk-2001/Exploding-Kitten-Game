import React from 'react';

const Card = ({ card, index }) => {
  return (
    <div className="card" style={{ zIndex: index, transform: `translateY(-${index * 15}px)` }}>
      <span role="img" aria-label={card.name}>{card.emoji}</span>
    </div>
  );
};

export default Card;
