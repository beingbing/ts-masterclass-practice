// Function
function myFunction() {
    console.log('Function:::',this);
}
myFunction();
// myFunction is in global scope, so its this keyword will belong to the global scope

// Object literal
const myObj = {
    myMethod() {
        console.log('Object:::',this);
    },
};
myObj.myMethod();
// myMethod belong to myObj scope, so this keyword belongs to myObj(local) scope

// Classes
class MyClass {
    myMethod() {
        console.log('class:::', this);
    }
}

const myInstance = new MyClass();
myInstance.myMethod();

// this keyword changes based on how we invoked the function, 