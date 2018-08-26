interface Person {
    name: string;
    age: number;
}

// interface PartialPerson {
//     name?: string;
//     age?: number;
// }

// type MyPartial<T> = {
//     [P in keyof T]?: T[P];
// }

function updatePerson(person: Person, prop: Partial<Person>) {
    return {...person, ...prop};
}

const person: Person = {
    name: 'samar',
    age: 23
};

updatePerson(person, {name: 'abc'});