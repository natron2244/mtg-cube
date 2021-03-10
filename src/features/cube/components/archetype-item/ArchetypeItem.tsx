import React from 'react';

import { Archetype } from "../../interfaces";

interface ArchetypeItemProps {
  archetype: Archetype,
}

export function ArchetypeItem(props: ArchetypeItemProps) {
  return <li>{props.archetype.name}</li>;
}
