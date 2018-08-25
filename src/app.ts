const person = {
    name: 'samar',
    age: 23
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

function getProperty(obj: Person, key: string) {
    return obj[key];
}

const personName = getProperty(person, 'name');

const anotherPerson: Person = {
    name: 'sana',
    age: 21
}