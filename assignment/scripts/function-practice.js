console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, Dev!';
}
// Remember to call the function to test
console.log(helloName());


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('23 + 12 = ', addNumbers(23, 12));


// 4. Function to multiply three numbers & return the result
function multiplyThree(multFirst, multSecond, multThird) {
  return multFirst * multSecond * multThird;
}

console.log('4 * 7 * 3 = ', multiplyThree(4, 7, 3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(arrayLast) {
  return arrayLast.pop();

}
let arrayLast = ['first item', 'middle item', 'last item'];
console.log(getLast(arrayLast));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
// let value = 4
// let array = [1, 2, 3, 4]
function find(value, array) {
  let found = false;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      let found = true;
      return true;
    }
    else if (found = false) {
      return false;
    }
  }
}
console.log('the value was found in the array: ', find(4, [1, 4, 3]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    return true;
  }
  else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
let sumArray = [3, 6, 23, 4, 65];
function sumAll() {
  let sum = 0;
  for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
  }
  // TODO: loop to add items
  return sum;
}
console.log('The sum of the array is: ', sumAll(sumArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let posNegArray = [0, -2, 6, -10, 28];
function positive() {
  let positiveOnly = [];
  let j = 0;
  for (let i = 0; i < posNegArray.length; i++) {
    if (posNegArray[i] > 0) {
      positiveOnly[j] = posNegArray[i];
      j++;
    }
  }
  return positiveOnly;
}
console.log('position numbers are: ', positive(posNegArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
//
//Create a function to return the amount of potatoes there are in a string.
//
let potatoSentence = 'potato mashed potatoes ``smallpotatoapplepotato '
function potatoCount() {
  return (potatoSentence.match(/potato/g));

}//end potatoes
console.log('the number of potoes in the string is', potatoCount(potatoSentence));