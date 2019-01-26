import Entity from './Entity';
import rollDice from './rollDice';

/**
 * @param entity Accepts an Entity, i.e., a character. Determines attack value based on the entity's stats and simulated dice rolling.
 */
export default function attack( entity: Entity ) {
  const attackValue = rollDice( entity.dexterity, entity.strength );

  console.log( `${entity.name} attacks for ${attackValue} damage!`)

  return attackValue;
}
