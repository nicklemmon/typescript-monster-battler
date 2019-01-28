import battle from './battle';
import Monster from './Monster';

const Cyclops: Monster = {
  name: 'Cyclops',
  strength: 10,
  dexterity: 2,
  toughness: 8,
  vitality: 10
}

const Orc: Monster = {
  name: 'Orc',
  strength: 5,
  dexterity: 1,
  toughness: 5,
  vitality: 7
}

battle( Cyclops, Orc );
