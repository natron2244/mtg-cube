import React from 'react';

import { Card } from "../../interfaces";
import { CardView } from '../card-view/CardView';

interface CardListProps {
  cards: Card[],
  onCardSelected?: (card: Card) => void;
}

export function CardList(props: CardListProps) {
  function handleSelect(selectedCard: Card) {
    if(props.onCardSelected) {
      props.onCardSelected(selectedCard)
    }
  }

  const cards = props.cards;
  const listItems = cards.map((cards) =>
    <CardView key={cards.id} card={cards} onSelect={handleSelect}/>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}