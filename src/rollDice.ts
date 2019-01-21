import rollDie from './rollDie';

export default function rollDice( numberOfDice: number, numberOfSides: number = 6 ) {
  let sum = 0;

  for ( let i = 0; i < numberOfDice; i++ ) {
    sum += rollDie( numberOfSides );
  }

  return sum;
}
