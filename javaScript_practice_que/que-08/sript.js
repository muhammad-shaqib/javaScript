// Array in js
// 1. Array is a collection of items
// 2. Array is a collection of items that are ordered and changeable
// 3. Array is a collection of items that can be of different data types

// Example 1: Declaring an array

let fruits = ['apple', 'banana', 'orange'];
// Accessing the first element of the array
console.log(fruits[0]); // Output: "apple"

// Example 2: Array with multiple data types

let mixedArray = [1, 'hello', true, null, undefined];
// Accessing the second element of the array
console.log(mixedArray[1]); // Output: "hello"

// Example 3: Array of objects

let students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Bob', age: 25 }
];
// Accessing the name of the second student
console.log(students[1].name); // Output: "Jane"

// Example 4: Multidimensional array

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Accessing the element at the second row and third column
console.log(matrix[1][2]); // Output: 6

// Example 5: Array methods

let numbers = [1, 2, 3, 4, 5];
// Using the push method to add an element to the end of the array
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// Using the filter method to create a new array with elements greater than 3
let filteredNumbers = numbers.filter(num => num > 3);
console.log(filteredNumbers); // Output: [4, 5, 6]