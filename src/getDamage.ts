export default function getDamage( attackValue: number, defendValue: number ) {
  const difference = attackValue  - defendValue;

  if ( difference > 0 ) {
    return difference;
  }
  
  return 1;
}
