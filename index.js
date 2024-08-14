// Exercise 1: FizzBuzz

// Write a function that prints numbers from 1 to 100.
// But for multiples of 3, print "Fizz" instead of the number,
// and for multiples of 5, print "Buzz".
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

//  i need for loop to print out 1 to 100.
// for the above number if the number is multiple of 3 then print Fizz

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " FizzBuzz");
    } else if (i % 3 == 0) {
      console.log(i + " Fizz");
    } else if (i % 5 == 0) {
      console.log(i + " Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// Exercise 2: Palindrome Checker

// Objective: Write a function that checks if a given string is a palindrome
// (a word, phrase, or sequence that reads the same backward as forward, e.g., "madam" or "racecar").

// let original = "Madam";
// let reversed = "";
// for (let i = original.length - 1; i >= 0; i--) {
//     reversed += original[i];
// }
// console.log(reversed);

function palindromeChecker(word) {
  let splitWord = word.toLowerCase().split("");
  console.log(splitWord);
  let reversWord = splitWord.reverse();
  let joinLetters = reversWord.join("");

  if (word.toLowerCase() === joinLetters) {
    console.log("This word is palindrome word.");
  } else {
    console.log("This word is not palindrome word.");
  }
}

palindromeChecker("Madam");

// Exercise 3: Factorial Calculation
// Objective: Write a function that calculates the factorial of a given number. The factorial of a number
// 𝑛
// n is the product of all positive integers less than or equal to
// 𝑛
// n.

function factorialCalc(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  console.log(result);
  //   const integer = [];
  //   for (let i = 0; i <= n; i++) {
  //     integer.push(i);
  //   }
  //   console.log(integer);
}

factorialCalc(5);

// Exercise 4: Find the Largest Number in an Array
// Objective: Write a function that takes an array of numbers and returns the largest number in the array.

const numArray = [
  2, 5, 6, 3, 4, 1, 6, 9, 100, 200, 51, 0, 22, 55, 1, 5111, 2, 2,
];

function largestNum() {
  let biggestNum = 3;
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > biggestNum) {
      biggestNum = numArray[i];
    }
  }
  console.log(biggestNum);
}

largestNum();

// Exercise 5: Sum of All Odd Numbers
// Objective: Write a function that calculates the sum of all odd numbers in an array.

function sumOfOddNum() {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 !== 0) {
      sum += numArray[i];
    }
  }
  console.log(sum);
}

sumOfOddNum();

// Exercise 6: Count the Vowels
// Objective: Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

const str = "aeipu";

function countVowels() {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
      count++;
    }
  }
  console.log(count);
}

countVowels();

// Exercise 7: Sorting an Array
// Objective: Write a function that sorts an array of numbers in ascending order without using the built-in sort() function.


function bubbleSort(arr) {
  let n = arr.length;
  
  // Outer loop
  for (let i = 0; i < n - 1; i++) {
    // Inner loop
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare and swap if needed
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

// Example usage:
let numbers = [64, 25, 12, 22, 11];
console.log(bubbleSort(numbers));  // Output: [11, 12, 22, 25, 64]

// Exercise 9: Fibonacci Sequence Generator
// Objective: Write a function that generates the first n numbers in the Fibonacci sequence. 
// The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

function fibonacciSeq(n){
  let sequence = [0,1];
  
    for (let i = 2; i <= n-1; i++) {
      let addednum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(addednum)
  }
  
  return sequence;
}

console.log(fibonacciSeq(10));


// Exercise 10: Reverse a String
// Objective: Write a function that takes a string as input and returns the string reversed.

function reverseStr(string){
  const converToArray = string.toLowerCase().split("");
  const reverseArray = converToArray.reverse().join("");
  console.log(reverseArray)
}

reverseStr("Test")