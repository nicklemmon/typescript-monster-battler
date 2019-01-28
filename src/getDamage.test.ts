import getDamage from './getDamage';

test( 'Expect getDamage( 4, 2 ) to be 2', () => {
  expect( getDamage( 4, 2 ) ).toBe( 2 );
});

test( 'Expect getDamage( 4, 10 ) to be 1', () => {
  expect( getDamage( 4, 10 ) ).toBe( 1 );
});
