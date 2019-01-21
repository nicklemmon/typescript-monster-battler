import rollDice from './rollDice';

test( 'rollDice(2) returns a number between 2 and 12', () => {
  const value = rollDice( 2 );

  expect( value ).toBeGreaterThanOrEqual( 2 );
  expect( value ).toBeLessThanOrEqual( 12 );
});

test( 'Rolling two dice with 1 side (1 side!?) returns 2', () => {
  expect( rollDice( 2, 1 ) ).toBe( 2 );
});


