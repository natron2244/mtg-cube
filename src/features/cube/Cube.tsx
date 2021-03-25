import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';

import { ArchetypeList } from "./components/archetype-list/ArchetypeList";
import { CardList } from "./components/card-list/CardList";
import { allCardsId, uncategorizedCardsId } from "./constants";
// import styles from './Cube.module.css';
import { addArchetypes, selectArchetypes, selectCards } from "./cubeSlice";
import { Archetype } from "./interfaces";

export function Cube() {
  const archetypes = useSelector(selectArchetypes);
  const cards = useSelector(selectCards);
  const [selectedCards, setSelected] = useState(cardsInArchetypeId(allCardsId));
  const dispatch = useDispatch();
  
  function handleSelect(selectedArchetype: Archetype) {
    console.log(`Cube => Selected Archetype: ${selectedArchetype.name}`);
    setSelected(cardsInArchetypeId(selectedArchetype.id));
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

  function addArchetype(event: any) {
    const archetype: Archetype = {
      id: uuid(),
      name: `Archetype`
    }
    dispatch(addArchetypes(archetype));
  }

  function addCard(event: any) {
    
  }

  // TODO: Add the media query to show on wide vs skinny display (mobile vs desktop)
  return (
    <div>
      <button onClick={addArchetype}>Add Archetype</button>
      <button onClick={addCard}>Add Card</button>
      <br/>
      <ArchetypeList
        archetypes={archetypes}
        onItemSelected={handleSelect}
      ></ArchetypeList>
      <CardList cards={selectedCards}></CardList>
    </div>
  );
}
