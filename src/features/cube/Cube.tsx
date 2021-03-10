import React from 'react';
import { useSelector } from 'react-redux';

import { ArchetypeList } from './components/archetype-list/ArchetypeList';
// import styles from './Cube.module.css';
import { selectArchetypes } from './cubeSlice'
import { Archetype } from './interfaces';

export function Cube() {
  const archetypes = useSelector(selectArchetypes);

  function handleSelect(selectedArchetype: Archetype) {
    console.log(`Cube => Selected Archetype: ${selectedArchetype.name}`);
  }

//https://reactjs.org/docs/lists-and-keys.html
  return (
    <div>
      <ArchetypeList archetypes={archetypes} onItemSelected={handleSelect}></ArchetypeList>
    </div>
  );
}
