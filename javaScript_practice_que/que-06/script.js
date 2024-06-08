// Today i'm try to learned about loops in js.
// Loops are used to execute a block of code repeatedly for a specified number of times.
// There are several types of loops in js, (for, while, do-while, for-of, for-in)
// Let's start with the for loop
// The for loop is used to execute a block of code for a specified number of times.
// The syntax of the for loop is as follows:
// for (initialization; condition; increment/decrement){
//     code to be executed
// }
// Let's take an example to understand this better
for (let i = 0; i <= 5; i++) {
    console.log("afnan khan");
}
// In this example, the loop will run 6 times and print "afnan khan"
// The initialization part is executed once at the beginning of the loop.
// The condition part is executed at the beginning of each iteration.
// If the condition is true, the code inside the loop will be executed.
// The increment/decrement part is executed at the end of each iteration.
for (let num = 0; num <= 50; num++) {
    if (num % 2 === 0) {
        console.log(num , "Even Number ");
    }
}
// In this example, the loop will run 51 times and print all the even numbers from 0 to 50.