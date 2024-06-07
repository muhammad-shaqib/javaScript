/*Conditional statements
Conditional statements in JavaScript allow you to perform different actions based on different conditions.
 There are several types of conditional statements in JavaScript:
 1. if Statement
 The if statement is used to specify a block of code to be executed if a specified condition is true.*/

// Example 01
let age = 25;
if (age >= 18) {
    console.log("You are eligible to vote.");
    // Output: (You are eligible to vote)
}
if (age < 18) {
    console.log("You are not eligible to vote.");
     // Output: (You are not eligible to vote)
}
// Example 02
let day = "Monday";
if (day === "Monday") {
    console.log("Today is Monday.");
     // Output: (Today is Monday)
}
if (day === "Friday") {
    console.log("Today is Friday.");
    // Output: (nothing)
}

// 2. if-else Statement
// Example 01
let Age = 15;
if (Age >= 18) {
    console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
}
// Example 02
let Day = "Monday";
if (Day === "Sunday") {
    console.log("Today is Sunday.")
    } else {
        console.log("Today is not Sunday.")
}

// else-if Statement
// Example 01
let score = 90;
if (score >= 90) {
    console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
        } else if (score >= 70) {
            console.log("Grade: c")
            } else {
                console.log("Grade: F");
}

// Example 02
let time = 9;
if (time >= 6 && time < 12) {
    console.log("Good morning");
    } else if (time >= 12 && time < 17) {
        console.log("Good afternoon");
        } else if (time >= 17 && time < 21) {
            console.log("Good evening");
            } else {
                console.log("Good night");   
}

// Ternary Operator (Smart form of else-if statement)
// Example 01
let age1 = 25;
let result = (age1 >= 18) ?  "You are Adult" :  "You are not Adult";
console.log(result);

// I'm so Excited and happy today i'm learned about conditional statement in javaScript.