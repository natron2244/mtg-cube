import React from "react";

import { Archetype } from "../../interfaces";

interface ArchetypeItemProps {
  archetype: Archetype;
  onSelect?: (archetype: Archetype) => void;
}

export function ArchetypeItem(props: ArchetypeItemProps) {
  function handleClick(event: any) {
    if(props.onSelect) {
      props.onSelect(props.archetype)
    }
  }
  return (
    <li>
      <button onClick={handleClick}>{props.archetype.name}</button>
    </li>
  );
}
