interface Person {
    name: string;
    age?: number;
}

// type MyRequired<T> = {
//     [P in keyof T]-?: T[P];
// }

function printAge(person: Required<Person>) {
    return `${person.name} is ${person.age} years old`;
}

const person: Required<Person> = {
    name: 'samar',
    age: 23
};

const age = printAge(person);