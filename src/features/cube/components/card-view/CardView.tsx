import React from "react";

import { Card } from "../../interfaces";

interface CardViewProps {
  card: Card;
  onSelect?: (card: Card) => void;
}

export function CardView(props: CardViewProps) {
  function handleClick(event: any) {
    if(props.onSelect) {
      props.onSelect(props.card)
    }
  }
  return (
    <li>
      <button onClick={handleClick}>
        <img src={props.card.imageUrl} alt={props.card.name}></img>
      </button>
    </li>
  );
}
