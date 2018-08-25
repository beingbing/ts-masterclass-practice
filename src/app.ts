interface Person {
    name: string;
    age: number;
}

// interface ReadonlyPerson {
//     readonly name: string;
//     readonly age: number;
// }

const person: Person = {
    name: 'samar',
    age: 23
};

// function freezePerson(person: Person): ReadonlyPerson {
//     return Object.freeze(person);
// }

function freeze<T>(obj: T): Readonly<T> {
    return Object.freeze(obj);
}

const newPerson = freeze(person);

// exercise
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
};