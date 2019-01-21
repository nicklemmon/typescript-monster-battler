import Entity from './Entity';
import rollDice from './rollDice';

export default function attack( entity: Entity ) {
  const attackValue = rollDice( entity.dexterity, entity.strength );

  console.log( `${entity.name} attacks for ${attackValue} damage!`)

  return attackValue;
}
