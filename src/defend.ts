import color from '../node_modules/ansi-colors/index.js';
import Monster from './Monster';
import rollDice from './rollDice';

export default function defend( monster: Monster ) {
  const defendValue = rollDice( monster.dexterity, monster.toughness );

  console.log( `🛡️ ${color.bold( monster.name )} defends against ${color.green.bold.dim( defendValue + 
    ' damage' ) }.` );

  return defendValue;
}
