const person = {
    name: 'samar',
    age: 23
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const personName = getProperty(person, 'name');

const anotherPerson: Person = {
    name: 'sana',
    age: 21
}