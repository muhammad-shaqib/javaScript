// String In Js
// String is a sequence of characters enclosed in single quotes or double quotes.
// In JavaScript, strings are primitive data types.
// Strings can be created in two ways:
// 1. Using single quotes
// 2. Using double quotes

// 1. Creating String
// Example :
let str1 = 'Hello World';
let str2 = "Hello World";
console.log(str1);
console.log(str2);
// Both will output: Hello World

// 2. String Length
// The length property returns the number of characters in a string.
let str = "Hello World";
console.log(str.length); // Output: 11

//3. String Indices
// In JavaScript, strings are zero-indexed, meaning the first character is at index 0.
let str3 = "Hello World";
console.log(str3[0]); // Output: H
console.log(str3[1]); // Output: e
console.log(str3[10]); // Output: d
console.log(str3[str3.length - 1]); // Output: d
// From String Indices We Can Access the Position of string letter.
// We can also use negative indices to access characters from the end of the string.
// For example, str3[-1] would return the last character of the string, which is
// "d" in this case.
console.log(str3[-1]); // Output: undefined
// In JavaScript, negative indices are not supported for strings.
// If you try to access a character using a negative index, it will return undefined.

//4. Temple Literals
// Template literals are a new way of creating strings in JavaScript.
// They allow you to embed expressions inside string literals, using the ${expression} syntax.
let name = "Afnan Khan";
let age = 22;
let str4 = `My name is ${name} and I am ${age} years old.`
console.log(str4); // Output: My name is Afnan Khan and I am 22 years old.
// Another Example
let obj = {
    item : "pen",
    price : 10,
    };
    let output = `The price of ${obj.item} is ${obj.price} dollars.`
    console.log(output);

// Escape Character
// Example
console.log("Afnan\nKhan") //They will be print separate in two line Afnan in one line and Khan in next line.
console.log("Afnan\tKhan"); // it's mean Tab Space (Afna   Khan)