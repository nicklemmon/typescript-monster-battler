import attack from './attack';
import defend from './defend';
import getHP from './getHP';
import Monster from './Monster';

export default function battle( instigator: Monster, victim: Monster ) {
  let instigatorHP = getHP( instigator );
  let victimHP = getHP( victim );

  while( victimHP > 0 ) {
    const attackValue = attack( instigator );
    const defendValue = defend( victim );
    const damage = ( ( attackValue - defendValue ) > 0 ) ? attackValue - defendValue : 0;

    victimHP -= attack( instigator );

    console.log( `➖ ${victim.name} takes ${damage} damage.` );
  }

  if ( victimHP <= 0 ) console.log( `💀 ${victim.name} was defeated.` );
}
