import rollDie from './rollDie';

test( 'rollDie() returns a number between 1 and 6', () => {
  const value = rollDie();

  expect( value ).toBeGreaterThanOrEqual( 1 );
  expect( value ).toBeLessThanOrEqual( 6 );
});
