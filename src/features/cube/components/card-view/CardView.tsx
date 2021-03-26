import React from "react";

import { Card } from "../../interfaces";
import styles from "./CardView.module.css";

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
    <li className={styles.listItem}>
      <button onClick={handleClick}>
        <img src={props.card.imageUrl} alt={props.card.name}></img>
      </button>
    </li>
  );
}
