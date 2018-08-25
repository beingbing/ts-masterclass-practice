// Object literal
const myObj = {
    myMethod() {
        console.log('Object:::',this);
    },
};
// myObj.myMethod();

// Function
function myFunction(...text: string[]) {
    console.log('Function:::',this, text);
}
myFunction('abc', 'def');
myFunction.call(myObj, 'abc', 'def');
myFunction.apply(myObj, ['abc', 'def']);

const bindFunction = myFunction.bind(myObj);
bindFunction('abc', 'def');
bindFunction('123', '456');

// myFunction.call([]);
// call method is used to invoke a method belonging to another object on a different object

// The Difference Between call() and apply()
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// The bind() method creates a new function that when called has its 'this' keyword set to
// the provided value, with a given sequence of arguments.

// in js all functions are object methods