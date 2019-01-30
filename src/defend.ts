import Monster from './Monster';
import rollDice from './rollDice';

export default function defend( monster: Monster ) {
  const defendValue = rollDice( monster.dexterity, monster.toughness );

  console.log( `🛡️ ${monster.name} defends against ${defendValue} damage.` );

  return defendValue;
}
