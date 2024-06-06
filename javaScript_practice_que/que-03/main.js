/* Logical Operators
Three Types

1. OR Operator 
Symbol (||)
The || operator returns true if at least one condition is true.*/
// Example-01
{
let a = 6;
let b = 5;
let cond1 = (a > 2); //true
let cond2 = (b > 6); //false
console.log("cond1 || cond2 =", cond1 || cond2); //true
// another way to print.
console.log("cond1 || cond2 =", a > b || b > 6); //true
};

/*2. NOT Operator (!)
The ! operator returns true if the condition is false, and false if the condition is true.*/
// Example-02
{
    let a = 6;
    let b = 5;
    console.log("! 6 > 5 =", !(6 > 5)); //false
    // not operator need only one condition to print value.
};

//3. Logic && (And) Operators
// Both condition should be true, if one condition is false the ans will be false.
// Example-03
{
    let a = 6;
    let b = 5;
    let cond1 = (a > b); //true
    let cond2 = (a === 6); //true
    console.log("cond1 && cond2 =", cond1 && cond2); //true
    // another way to print
    console.log("cond1 && cond2 =", a > b && a === 6); //true
};