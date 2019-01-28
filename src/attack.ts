import Monster from './Monster';
import rollDice from './rollDice';

/**
 * @param monster Accepts a Monster, i.e., a character. Determines attack value based on the entity's stats and simulated dice rolling.
 */
export default function attack( monster: Monster ) {
  const attackValue = rollDice( monster.dexterity, monster.strength );

  console.log( `🗡️ ${monster.name} attacks for ${attackValue} damage!`)

  return attackValue;
}
