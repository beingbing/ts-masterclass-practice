const person = {
    name: 'samar',
    age: 23
};

type Person = typeof person;

const anotherPerson: Person = {
    name: 'sana',
    age: 21
}