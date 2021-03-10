import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import styles from './Cube.module.css';
import { selectArchetypes } from './cubeSlice'
import { Archetype } from './interfaces';

interface ArchetypeItemProps {
  archetype: Archetype,
}

function ArchetypeItem(props: ArchetypeItemProps) {
  return <li>{props.archetype.name}</li>;
}

interface ArchetypeListProps {
  archetypes: Archetype[],
}

function ArchetypeList(props: ArchetypeListProps) {
  const archetypes = props.archetypes;
  const listItems = archetypes.map((archetype) =>
    // Nathan: Change to use uuid
    <ArchetypeItem key={archetype.name} archetype={archetype} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export function Cube() {
  const archetypes = useSelector(selectArchetypes);
//https://reactjs.org/docs/lists-and-keys.html
  return (
    <div>
      <ArchetypeList archetypes={archetypes}></ArchetypeList>
    </div>
  );
}
