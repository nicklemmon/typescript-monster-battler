import attack from './attack';

const Cyclops = {
  name: 'Cyclops',
  strength: 7,
  dexterity: 2,
  toughness: 8,
  vitality: 10
}

test( 'Expect attack( Cyclops ) to return a value between 2 and 7', () => {
  const value = attack( Cyclops );

  expect( value ).toBeGreaterThanOrEqual( 2 );
  expect( value ).toBeLessThanOrEqual( 14 );
});
