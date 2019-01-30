import Monster from './Monster';
import rollDice from './rollDice';

export default function attack( monster: Monster ) {
  const attackValue = rollDice( monster.dexterity, monster.strength );

  console.log( `🗡️ ${monster.name} attacks for ${attackValue} damage.` );

  return attackValue;
}
