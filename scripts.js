// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

// Sum Numbers
function sum(numbers) {
    "use strict";
    let sumNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
    return sumNumbers;
};