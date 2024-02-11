"use strict" //to adhere to the new standards

//illustrating the difference between int and bigint
// Using int (Number)
const maxIntSafeNumber = 9007199254740991;
console.log("max int value: ", maxIntSafeNumber);
console.log("max int + 1: ", maxIntSafeNumber + 1); // This will result in an incorrect value due to overflow

// Using bigint
const maxBigIntSafeNumber = BigInt(9007199254740991n);
console.log("max bigint value: ", maxBigIntSafeNumber);
console.log("max bigint + 1: ", maxBigIntSafeNumber + 1n); // This will correctly increment the value

// Demonstrating the difference in arithmetic operations
const intNum1 = 1234567890123456789;
const intNum2 = 9876543210987654321;
const bigIntNum1 = BigInt(intNum1);
const bigIntNum2 = BigInt(intNum2);

console.log("Int arithmetic:");
console.log("Sum: ", intNum1 + intNum2); // This will result in an incorrect value due to overflow
console.log("Difference: ", intNum1 - intNum2);
console.log("Product: ", intNum1 * intNum2);

console.log("BigInt arithmetic:");
console.log("Sum: ", bigIntNum1 + bigIntNum2);
console.log("Difference: ", bigIntNum1 - bigIntNum2);
console.log("Product: ", bigIntNum1 * bigIntNum2);

boolean // true or false

console.log(typeof(null))
console.log(typeof(undefined))

