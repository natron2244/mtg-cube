import React from 'react';
import { useSelector } from 'react-redux';

import { ArchetypeList } from './components/archetype-list/ArchetypeList';
import { CardList } from './components/card-list/CardList';
// import styles from './Cube.module.css';
import { selectArchetypes, selectCards } from './cubeSlice'
import { Archetype } from './interfaces';

export function Cube() {
  const archetypes = useSelector(selectArchetypes);
  const cards = useSelector(selectCards);
  function handleSelect(selectedArchetype: Archetype) {
    // TODO: Filter card list based on selected Archetype
    console.log(`Cube => Selected Archetype: ${selectedArchetype.name}`);
  }

  // TODO: Add the media query to show on wide vs skinny display (mobile vs desktop)
  return (
    <div>
      <ArchetypeList archetypes={archetypes} onItemSelected={handleSelect}></ArchetypeList>
      <CardList cards={cards}></CardList>
    </div>
  );
}
