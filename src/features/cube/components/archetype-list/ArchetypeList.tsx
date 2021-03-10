import React from 'react';

import { Archetype } from "../../interfaces";
import { ArchetypeItem } from "../archetype-item/ArchetypeItem";

interface ArchetypeListProps {
  archetypes: Archetype[],
}

export function ArchetypeList(props: ArchetypeListProps) {
  const archetypes = props.archetypes;
  const listItems = archetypes.map((archetype) =>
    <ArchetypeItem key={archetype.id} archetype={archetype} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}