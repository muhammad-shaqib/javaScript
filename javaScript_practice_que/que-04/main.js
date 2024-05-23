/*Conditional Statements in JavaScript
Conditional statements in JavaScript allow you to perform different actions based on different conditions.

If Statement
The if statement is used to specify a block of code to be executed if a specified condition is true.*/

// EXAMPLE O1
let x = 5;
if (x > 2) {
    console.log("x is greater than 2");
}
// Output: x is greater than 2

// EXAMPLE 02
let a = 1;
if (a > 2) {
    console.log("a is greater than 2");
}
// Output: (no output, because the condition is false)

/*If-Else Statement
The if-else statement is used to specify a block of code to be executed if a specified condition is true, and another block of code to be executed if the condition is false.*/

// EXAMPLE 01
let b = 5;
if (b > 2) {
    console.log("b is greater than 2");
} else {
    console.log("b is not greater than 2");
}
// Output: b is greater than 2

// EXAMPLE 02
let c = 1;
if (c > 2) {
    console.log("c is greater than 2");
} else {
    console.log("c is not greater than 2");
}
// Output: c is not greater than 2

/*If-Else If-Else Statement
The if-else if-else statement is used to specify a block of code to be executed if a specified condition is true, another block of code to be executed if the first condition is false and the second condition is true, and another block of code to be executed if both conditions are false.*/
// EXAMPLE O1
let d = 5;
if (d > 10) {
    console.log("d is greater than 10");
} else if (x > 2) {
    console.log("d is greater than 2 but less than or equal to 10");
} else {
    console.log("d is less than or equal to 2");
}
// Output: d is greater than 2 but less than or equal to 10

// EXAMPLE 02
let e = 1;
if (e > 10) {
    console.log("e is greater than 10");
} else if (e > 2) {
    console.log("e is greater than 2 but less than or equal to 10");
} else {
    console.log("e is less than or equal to 2");
}
// Output: e is less than or equal to 2