// Exercise 1: FizzBuzz

// Write a function that prints numbers from 1 to 100.
// But for multiples of 3, print "Fizz" instead of the number,
// and for multiples of 5, print "Buzz".
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

//  i need for loop to print out 1 to 100.
// for the above number if the number is multiple of 3 then print Fizz

function fizzBuzz() {

  for (let i = 1; i <= 100; i++) {
    if(((i % 3) == 0) && ((i % 5) == 0)){
        console.log(i + " FizzBuzz")
    }
    else if((i % 3) == 0){
        console.log( i + " Fizz");
    }
    else if((i % 5) == 0){
        console.log(i + " Buzz");
    }else {
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

function palindromeChecker (word){
    let splitWord = word.toLowerCase().split("");
    console.log(splitWord)
    let reversWord = splitWord.reverse();
    let joinLetters = reversWord.join("");

    if (word.toLowerCase() === joinLetters){
        console.log("This word is palindrome word.");
    }else{
        console.log("This word is not palindrome word.")
    }
}

palindromeChecker("Madam");