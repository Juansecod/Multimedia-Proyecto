import React from 'react';
import './BarRight.css';

const BarRight = ({ title, drinks, factTitle, factText, cardImage }) => {
  return (
    <div className="bar-right">
      <h1 className="main-title">{title}</h1>

      {drinks.map((drink, index) => (
        <div
          key={index}
          className={`drink-section ${index % 2 === 1 ? 'reverse' : ''}`}
        >
          <img src={drink.image} alt={`drink-${index}`} className="drink-image" />
          <div className="drink-content">
            <h2>{drink.title}</h2>
            <p>{drink.text}</p>
          </div>
        </div>
      ))}

      <div className="fact-section">
        <div className="fact-text">
          <h2>{factTitle}</h2>
          <p>{factText}</p>
        </div>
        <div className="meme">
          <img src={cardImage} alt="card" className="meme-image" />
        </div>
      </div>
    </div>
  );
};

export default BarRight;
