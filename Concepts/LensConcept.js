import { Person } from './person';
import { Name } from './name';
import { Born } from './born';
import { Address } from './address';
import { Lens } from './lens';
// Implement the nameLens with the getter and setter
export const nameLens = new Lens(
  (obj) => {
    return obj.name;
  },
  (obj, name) => {
    return {
      ...obj,
      name: { ...name }
    }
  },
);
// Implement the bornAtLens with the getter and setter
export const bornAtLens = new Lens(
  (person) => {
    return person.born.bornAt;
  },
  (person, bornAt) => {
    return {
      ...person,
      born: {
        ...person.born,
        bornAt
      }
    }
  },
);
// Implement the streetLens with the getter and setter
export const streetLens = new Lens(
  (person) => {
    return person.address.street;
  },
  (person, street) => {
    return {
      ...person,
      address: {
        ...person.address,
        street
      }
    }
  },
);