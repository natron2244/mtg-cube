import React from 'react';

import { allCardsId, uncategorizedCardsId } from '../../constants';
import { Archetype } from "../../interfaces";
import { ArchetypeItem } from "../archetype-item/ArchetypeItem";
import styles from "./ArchetypeList.module.css";

interface ArchetypeListProps {
  archetypes: Archetype[],
  onItemSelected?: (archetype: Archetype) => void;
}

export function ArchetypeList(props: ArchetypeListProps) {
  function handleSelect(selectedArchetype: Archetype) {
    if(props.onItemSelected) {
      props.onItemSelected(selectedArchetype)
    }
  }

  const archetypes = props.archetypes;
  const allCards:Archetype = {
    id: allCardsId,
    name: 'All Cards'
  }
  const uncategorizedCards:Archetype = {
    id: uncategorizedCardsId,
    name: 'Uncategorized Cards'
  }
  const listItems = archetypes.map((archetype) =>
    <ArchetypeItem key={archetype.id} archetype={archetype} onSelect={handleSelect}/>
  );
  return (
    <ul className={styles.list}>
      <ArchetypeItem key={allCards.id} archetype={allCards} onSelect={handleSelect}/>
      {listItems}
      <ArchetypeItem key={uncategorizedCards.id} archetype={uncategorizedCards} onSelect={handleSelect}/>
    </ul>
  );
}