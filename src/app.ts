const person = {
    name: 'samar',
    age: 23
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

const anotherPerson: Person = {
    name: 'sana',
    age: 21
}