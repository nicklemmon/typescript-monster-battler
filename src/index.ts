function rollDie( numberOfSides: number = 6 ) {
  return Math.floor( Math.random() * numberOfSides ) + 1;
}

console.log( rollDie() );
