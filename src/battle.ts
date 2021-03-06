import color from 'ansi-colors';
import attack from './attack';
import defend from './defend';
import getHP from './getHP';
import getDamage from './getDamage';
import Monster from './Monster';

export default function battle( instigator: Monster, victim: Monster ) {
  let instigatorHP = getHP( instigator );
  let victimHP = getHP( victim );

  console.log( '' );
  console.log( '⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️️️️️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️' );
  console.log( '' );
  console.log( color.bold( 'THE BATTLE BEGINS!' ) );
  console.log( color.dim( `It\'s the ${color.bold( instigator.name )} attacking the ${color.bold( victim.name )}.` ) );
  console.log( '' );
  console.log( '⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️️️️️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️ ⚔️' );
  console.log( '' );

  function instigatorAttacks() {
    const attackValue = attack( instigator );
    const defendValue = defend( victim );
    const damage = getDamage( attackValue, defendValue );

    victimHP -= damage;

    console.log( color.gray( `➖ ${victim.name} takes ${damage} damage.` ) );
  }

  function victimAttacks() {
    const attackValue = attack( victim );
    const defendValue = defend( instigator );
    const damage = getDamage( attackValue, defendValue );

    instigatorHP -= damage;

    console.log( color.gray( `➖ ${instigator.name} takes ${damage} damage.` ) );
  }

  while( victimHP > 0 ) {
    instigatorAttacks();
    victimAttacks();
  }

  if ( victimHP <= 0 ) console.log( color.red( `💀 ${color.bold( victim.name )} was defeated.` ) );

  if ( instigatorHP <= 0 ) console.log( color.red( `💀 ${color.bold( instigator.name )} was defeated.` ) );
}
