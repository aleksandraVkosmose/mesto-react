import React from 'react';

function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }

  return (
    <article className="element">
      <img className="element__img" alt={card.name} src={card.link} onClick={handleCardClick} />
      <button className="element__button-delete" type="button" />
      <div className="element__info">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-container">
          <button className="element__button-like" type="button" />
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;