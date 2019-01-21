import rollDie from './rollDie';

test( 'rollDie() returns a number between 1 and 6', () => {
  const value = rollDie();

  expect( value ).toBeGreaterThanOrEqual( 1 );
  expect( value ).toBeLessThanOrEqual( 6 );
});

test( 'rollDie(10) returns a number between 1 and 10', () => {
  const value = rollDie();

  expect( value ).toBeGreaterThanOrEqual( 1 );
  expect( value ).toBeLessThanOrEqual( 10 );
});
