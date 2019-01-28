import Monster from './Monster';

export default function getHitPoints( monster: Monster ) {
  return monster.toughness + ( monster.vitality * 2 );
}
