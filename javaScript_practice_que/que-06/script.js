// Today i'm try to learned about loops in js.
// Loops are used to execute a block of code repeatedly for a specified number of times.
// There are several types of loops in js, (for, while, do-while, for-of, for-in)
// Let's start with the for loop
// The for loop is used to execute a block of code for a specified number of times.
// 1. for loop
// The syntax of the for loop is as follows:
// for (initialization; condition; increment/decrement){
//     code to be executed
// }
// Let's take an example to understand this better
for (let i = 0; i <= 5; i++) {
    console.log("AFNAN KHAN");
}
console.log("The Loops Is Ended");

// In this example, the loop will run 6 times and print "afnan khan"
// The initialization part is executed once at the beginning of the loop.
// The condition part is executed at the beginning of each iteration.
// If the condition is true, the code inside the loop will be executed.
// The increment/decrement part is executed at the end of each iteration.
for (let count = 1; count <= 100; count++) {
        console.log("I lOVE JavaScript ");
    }
    console.log("The Loops Is Ended");

//2. While Loop
/* The while loop is used to execute a block of code as long as a specified condition is true
 The syntax of the while loop is as follows:
 while (condition){
     code to be executed
 } */
let i = 1;
while (i <= 5) {
    console.log("afnan khan =", i);
    i++;
    }
    console.log("The Loops Is Ended");
    // In this example, the loop will run 5 times and print "afnan khan"
    // The condition part is executed at the beginning of each iteration.
    // If the condition is true, the code inside the loop will be executed.
    let num = 0;
    while (num <= 50) {
        if (num % 2 === 0) {
            console.log(num , "Even Number ");
            }
            num++;
            }
            console.log("The Loops Is Ended");
// In this example, the loop will run 51 times and print all the even numbers from 0 to 50.

//3. Do-While Loop
/* The do-while loop is used to execute a block of code at least once and then continue
to execute it as long as a specified condition is true
The syntax of the do-while loop is as follows:
do{
code to be executed
}while (condition);
*/
let name = 1;
do {
    console.log("ARYAN KHAN=", name);
    name++;
}
while (name <= 5);
console.log("The Loops Is Ended");
// In this example, the loop will run 5 times and print "ARYAN KHAN"
// The code inside the loop will be executed at least once before the condition is checked.

//4. for-of loops
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
    }
    console.log("The Loops Is Ended");
    // In this example, the loop will run 3 times and print each fruit in the array
    // The for-of loop is used to iterate over arrays, strings, or objects

let str = "JavaScript";
let size = 0;
for (let val of str) {
    console.log("val =", val);
    size++;
}
console.log("The String Size =", size);
console.log("The Loops Is Ended");

//5. for-in loop
let student = {
    name: "Aryan Khan",
    age: 25,
    country: "Pakistan"
    };
    for (let key in student) {
        console.log("key =", key, "value =", student[key]);
        }
        console.log("The Loops Is Ended");