interface Person {
  firstName: string,
  lastName: string
}

function greeter( person: Person ) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

console.log( greeter({
  firstName: 'Nick',
  lastName: 'Lemmon'
}) );
