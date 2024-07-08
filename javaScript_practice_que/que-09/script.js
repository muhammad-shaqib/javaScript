// Today i want to practice on Function in JavaScript.
// Function In JavaScript.
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Function Constructor
// 5. Function Prototype

// 1. Function Declaration
// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
// }
// Example
function add(a, b) {
    return a + b;
    }
    // 2. Function Expression
    // const name = function (parameter1, parameter2, parameter3) {
    //     // code to be executed
    // };
    // Example
    const mul = function (a, b) {
        return a * b;
        };
        // 3. Arrow Function
        // const name = (parameter1, parameter2, parameter3) => {
            //     // code to be executed
            // };
            // Example
            const sum = (a, b) => a + b;
            // 4. Function Constructor
            // const name = new Function('parameter1', 'parameter2', 'parameter3', '
            // code to be executed
            // ');
            // Example
            const newSum = new Function('a', 'b', 'return a + b;');
            // 5. Function Prototype
            // Example
            // const name = function () {
            //     // code to be executed
            // };
            // Example
            const num = function () {
                return arguments[0] + arguments[1];
                };