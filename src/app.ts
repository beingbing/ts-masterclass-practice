function reverse(something: string): string;
function reverse<T>(something: T[]): T[];

function reverse<T>(something: string | T[]): string | T[] {
    if (typeof something === 'string') {
        return something.split('').reverse().join('');
    }
    return something.slice().reverse();
}

reverse('pepperoni');
reverse(['bacon', 'pepperoni', 'chilli', 'mushroom']);