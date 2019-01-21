import Entity from './Entity';
import rollDice from './rollDice';

export default function defend( entity: Entity ) {
  const defendValue = rollDice( entity.dexterity, entity.toughness );

  console.log( `${entity.name} defends for ${defendValue} damage.` )

  return defendValue;
}
