import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  const { cards } = props;

  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {cards.map(card => {
        return <Card key={card.headline} card={card} />;
      })}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;
