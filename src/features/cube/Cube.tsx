import React from 'react';
import { useSelector } from 'react-redux';

import { ArchetypeList } from './components/archetype-list/ArchetypeList';
// import styles from './Cube.module.css';
import { selectArchetypes } from './cubeSlice'

export function Cube() {
  const archetypes = useSelector(selectArchetypes);
//https://reactjs.org/docs/lists-and-keys.html
  return (
    <div>
      <ArchetypeList archetypes={archetypes}></ArchetypeList>
    </div>
  );
}
