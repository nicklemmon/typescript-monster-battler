import defend from './defend';

const Villager = {
  name: 'Villager',
  strength: 1,
  dexterity: 2,
  toughness: 2,
  vitality: 2
}

test( 'Expect defend( Villager ) to return a value between 2 and 4', () => {
  const value = defend( Villager );

  expect( value ).toBeGreaterThanOrEqual( 2 );
  expect( value ).toBeLessThanOrEqual( 4 );
});
