class MyClass {
    myMethod() {
        // const foo = 123;
        console.log('1', this);
        // setTimeout(function() {
        //     console.log(this); // setTimeout is called global, hence the result.
        //     // console.log(foo); // it worked because foo is available in scope chain
        // }, 0);
        setTimeout(() => {
            console.log('2', this);
        }, 0); // arrow function doesn't creates a new scope, hence it uses its parents scope
    }
}
// although setTimeout creates a brand new scope, if something is not available in
// its scope then it goes to look it in its parent scope.
// what we are using is called lexical scope, so the variable 'foo' that we are
// using is available in the lexical scope.

const myInstance = new MyClass();
myInstance.myMethod();