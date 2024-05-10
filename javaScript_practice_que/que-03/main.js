// Example-01
/* OR Operator (||)
The || operator returns true if at least one condition is true.*/
let x = 5;
let y = 3;
if (x > 2 || y > 2) {
    console.log("True");
}

/*NOT Operator (!)
The ! operator returns true if the condition is false, and false if the condition is true.*/
// Example-02
let b = 5;
if (!(b > 10)) {
    console.log("b is not greater than 10");
}

/*Combining Logic Operators
You can combine multiple logic operators to create more complex conditions.*/
// Example-03
let e = 5;
let f = 3;
let z = 2;
if (e > 2 && (f > 2 || z > 2)) {
    console.log("The condition is true");
}