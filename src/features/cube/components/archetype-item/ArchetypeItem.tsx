import React from "react";

import { Archetype } from "../../interfaces";
import styles from "./ArchetypeItem.module.css";

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
    <li className={styles.listItem}>
      <button onClick={handleClick} className={styles.button}>{props.archetype.name}</button>
    </li>
  );
}
