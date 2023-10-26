import React from "react";
import "./card.css";

function Card({ suggestion }) {
  return (
    <div className="custom_card">
      <a href={suggestion.url} className="custom_card_link">
        <img
          src="/education.jpeg"
          className="custom_card_img"
          alt={suggestion.name}
        />
      </a>
      <div className="custom_card_body">
        <h5 className="custom_card_title">{suggestion.name}</h5>
      </div>
    </div>
  );
}

export default Card;
