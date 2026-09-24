// Swap two strings.

let str1 = "Hello";
let str2 = "World";

str1 = str1+str2;

console.log("Value of str1 : " + str1.slice(-str2.length))
console.log("Value of str2 : " + str1.substring(0, str2.length))
