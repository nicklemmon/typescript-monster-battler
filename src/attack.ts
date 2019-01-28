import color from '../node_modules/ansi-colors/index.js';
import Monster from './Monster';
import rollDice from './rollDice';

/**
 * @param monster Accepts a Monster, i.e., a character. Determines attack value based on the entity's stats and simulated dice rolling.
 */
export default function attack( monster: Monster ) {
  const attackValue = rollDice( monster.dexterity, monster.strength );

  console.log( `🗡️ ${color.bold( monster.name )} attacks for ${color.red.bold.dim( attackValue + ' damage.' )}` );

  return attackValue;
}
