interface Person {
    name: string;
    age?: number;
    adderss: {};
}

// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P];
// }

const person: Pick<Person, 'name' | 'age'> = {
    name: 'samar',
    age: 23
};