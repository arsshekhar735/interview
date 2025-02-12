// Question 1: What will be the value of 'resultVar' and why?
function func1() {
    return 1;
}

function func2() {
    return 2;
}

// The comma operator evaluates both expressions but returns only the last one.
let resultVar = (func1(), func2()); 

console.log(resultVar); // Output: 2

// Explanation: The comma operator (,) executes `func1()` first, then `func2()`, 
// but only returns the result of `func2()`.

// ----------------------------------------------

// Question 2: What will be the output of these 'includes()' operations?
const arrValues = ['one', 'two', 'three'];
const stringValue = 'Radhe Radhe';

// Checking if 'on' exists as a complete element in the array
let check1 = arrValues.includes('on'); 

// Checking if 'onetwo' exists as a complete element in the array
let check2 = arrValues.includes('onetwo'); 

// Checking if 'ad' is part of the string 'Radhe Radhe'
let check3 = stringValue.includes('ad');

console.log(check1); // Output: false (because 'on' is part of 'one' but not a separate element)
console.log(check2); // Output: false (because 'onetwo' is not an element in the array)
console.log(check3); // Output: true (because 'ad' is in 'Radhe')

// ----------------------------------------------

// Question 3: What will be the output of the following comparisons and why?

console.log(true == '');  // Output: false 
console.log('1' == 1);    // Output: true (because '1' is converted to a number)
console.log('1' === 1);   // Output: false (strict comparison, different types)

// Explanation:
// - `==` allows type conversion, so '1' becomes a number.
// - `===` checks both value and type, so string '1' !== number 1.

// ----------------------------------------------

// Question 4: What happens if we use `.includes()` with a number in a string?
let textSample = "Hello world, welcome to the universe.";
let checkNumber = textSample.includes(12); 

console.log(checkNumber); // Output: false (because '12' is not in the string)

// ----------------------------------------------

// Question 5: What will be the output of these strict equality comparisons?

let num1 = 10;
let num2 = new Number(10); // 'num2' is an object
let num3 = 10;

console.log(num1 === num2); // Output: false (because num2 is an object)
console.log(num1 === num3); // Output: true (both are primitive numbers)

// ----------------------------------------------

// Question 6: What is the output of this curried multiplication function?

function multiply(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        };
    };
}

console.log(multiply(1)(2)(3)); // Output: 6

// Explanation: 
// - This is an example of **currying**, where each function returns another function until all arguments are provided.
// - `multiply(1)(2)(3)` resolves step-by-step: (1*2) → 2, then (2*3) → 6.

// ----------------------------------------------

// Question 7: Implement a function to merge two strings alternatively.
function alternateMerge(str1, str2) {
    let mergedResult = "";
    let maxLength = Math.max(str1.length, str2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < str1.length) mergedResult += str1[i];
        if (i < str2.length) mergedResult += str2[i];
    }

    return mergedResult;
}

// Example usage
let stringA = "hello";
let stringB = "worlde 12314";
console.log(alternateMerge(stringA, stringB)); 
// Output: hweolrllod e12314

// Explanation:
// - This function merges characters alternately from `stringA` and `stringB`.
// - If one string is longer, the remaining characters are added at the end.
