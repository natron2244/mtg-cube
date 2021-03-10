import React from "react";
import { useSelector } from "react-redux";

import { ArchetypeList } from "./components/archetype-list/ArchetypeList";
import { CardList } from "./components/card-list/CardList";
import { allCardsId, uncategorizedCardsId } from "./constants";
// import styles from './Cube.module.css';
import { selectArchetypes, selectCards } from "./cubeSlice";
import { Archetype } from "./interfaces";

export function Cube() {
  const archetypes = useSelector(selectArchetypes);
  const cards = useSelector(selectCards);
  function handleSelect(selectedArchetype: Archetype) {
    console.log(`Cube => Selected Archetype: ${selectedArchetype.name}`);

    console.log(`Cube => Filter`);
    // TODO: How do I update the cards list? Is this store in state
    const filterCards = cardsInArchetypeId(selectedArchetype.id);
    filterCards.map(card => console.log(`Card: ${card.name}`));
  }

  function cardsInArchetypeId(id: string) {
    if(id === allCardsId) {
      return cards;
    }

    if(id === uncategorizedCardsId) {
      return uncategorizedCards();
    }

    const filterCards = cards.filter((card) =>
      card.archetypes.find(
        (archetypeEntry) => archetypeEntry.archetypeId === id
      )
    );
    return filterCards;
  }

  function uncategorizedCards() {
    const filterCards = cards.filter((card) =>
      card.archetypes.length === 0
    );
    return filterCards;
  }

  // TODO: Add the media query to show on wide vs skinny display (mobile vs desktop)
  return (
    <div>
      <ArchetypeList
        archetypes={archetypes}
        onItemSelected={handleSelect}
      ></ArchetypeList>
      <CardList cards={cards}></CardList>
    </div>
  );
}
